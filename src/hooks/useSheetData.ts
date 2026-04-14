import { useEffect, useState } from "react";
import { parseCSV } from "../utils/csvParser";
import { getCSVUrl, SEMESTERS_GIDS } from "../utils/constants";

const useSheetData = (semester: string) => {
  const [data, setData] = useState(null);
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const url = getCSVUrl(SEMESTERS_GIDS[semester]);
        const response = await fetch(url);
        const text = await response.text();
        parseCSV(text);
        // console.log(text);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [semester]);

  return { data, loading, error, sections };
};

export default useSheetData;