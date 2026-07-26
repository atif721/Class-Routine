import { useEffect, useState, useCallback, useRef } from "react";
import { BASE_URL } from "../utils/constants";
import type { WeekklySchedule } from "@/utils/types";

const CACHE_KEY_PREFIX = "routine-cache";

const fetchWithRetry = async (
  url: string,
  retries = 2,
  timeoutMs = 8000,
): Promise<Response> => {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) return res;
      if (attempt === retries) return res;
    } catch (err) {
      clearTimeout(timeoutId);
      if (attempt === retries) throw err;
    }
    await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
  }
  throw new Error("Failed after retries");
};

const useSheetData = (semester: string, section: string) => {
  const [data, setData] = useState<WeekklySchedule | null>(null);
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isStale, setIsStale] = useState<boolean>(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [lastSync, setLastSync] = useState<Date | null>(null);

  const cacheKey = `${CACHE_KEY_PREFIX}-${semester}-${section}`;
  const hasDataRef = useRef(false);

  const fetchSections = useCallback(async () => {
    try {
      const sectionRes = await fetch(
        `${BASE_URL}/cse/sections/?semester=${semester}`,
      );
      const sectionJSON = await sectionRes.json();
      setSections(sectionJSON[semester] ?? []);
    } catch {
      //
    }
  }, [semester]);

  const fetchData = useCallback(async () => {
    if (!semester || !section) {
      setData(null);
      setLoading(false);
      return;
    }
    if (!hasDataRef.current) {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const { data: cachedData, syncedAt } = JSON.parse(cached);
          setData(cachedData);
          setLastSync(new Date(syncedAt));
          hasDataRef.current = true;
        }
      } catch {
        //
      }
    }

    setLoading(true);
    setError(null);

    try {
      const url = BASE_URL;
      const routineRes = await fetchWithRetry(
        `${url}/cse/?semester=${semester}&section=${section}`,
      );
      if (!routineRes.ok) throw new Error(`HTTP ${routineRes.status}`);
      const routineJSON = await routineRes.json();

      setData(routineJSON);
      setIsStale(false);
      hasDataRef.current = true;
      const now = new Date();
      setLastSync(now);

      try {
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data: routineJSON, syncedAt: now.toISOString() }),
        );
      } catch {
        //
      }
    } catch {
      if (hasDataRef.current) {
        setIsStale(true);
      } else {
        setError("Something error");
      }
    } finally {
      setLoading(false);
    }
  }, [semester, section, cacheKey]);

  useEffect(() => {
    fetchSections();
  }, [fetchSections]);

  useEffect(() => {
    hasDataRef.current = false;
    fetchData();
  }, [fetchData, refreshTrigger]);

  const refresh = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  return { data, loading, error, sections, refresh, lastSync, isStale };
};

export default useSheetData;
