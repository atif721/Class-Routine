import { useEffect, useState, useCallback } from "react";
import { BASE_URL } from "../utils/constants";
import type { WeekklySchedule } from "@/utils/types";

const useSheetData = (semester: string, section: string) => {
  const [data, setData] = useState<WeekklySchedule | null>(null);
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [lastSync, setLastSync] = useState<Date | null>(null);

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
    setLoading(true);
    setError(null);

    try {
      const url = BASE_URL;
      const routineRes = await fetch(
        `${url}/cse/?semester=${semester}&section=${section}`,
      );
      if (!routineRes.ok) throw new Error(`HTTP ${routineRes.status}`);
      const routineJSON = await routineRes.json();
      setData(routineJSON);
      setLastSync(new Date());
    } catch {
      setError("Something error");
      setLoading(false);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [semester, section]);

  useEffect(() => {
    fetchSections();
  }, [fetchSections]);

  useEffect(() => {
    fetchData();
  }, [fetchData, refreshTrigger]);

  const refresh = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  return { data, loading, error, sections, refresh, lastSync };
};

export default useSheetData;
