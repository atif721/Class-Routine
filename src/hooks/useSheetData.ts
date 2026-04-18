import { useEffect, useState, useCallback } from "react";
import { BASE_URL } from "../utils/constants";
import type { WeekklySchedule } from "@/utils/types";

const useSheetData = (semester: string) => {
  const [data, setData] = useState<WeekklySchedule | null>(null);
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const url = BASE_URL;

      const routineRes = await fetch(`${url}/cse/?semester=${semester}`);
      const routineJSON = await routineRes.json();
      setData(routineJSON);

      const sectionRes = await fetch(`${url}/cse/sections/?semester=${semester}`);
      const sectionJSON = await sectionRes.json();
      setSections(sectionJSON[semester] ?? []);
      setLoading(false);
    } catch {
      setError("Something error");
      setLoading(false);
    }
  }, [semester]);

  const refresh = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, [fetchData, refreshTrigger]);

  return { data, loading, error, sections, refresh };
};

export default useSheetData;