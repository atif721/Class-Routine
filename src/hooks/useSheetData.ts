import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const useSheetData = (semester: string, section: string) => {
  const [data, setData] = useState(null);
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const url = BASE_URL;

        const routineRes = await fetch(`${url}/cse/?semester=${semester}`);
        const routineJSON = await routineRes.json();
        setData(routineJSON);

        const sectionRes = await fetch(`${url}/cse/sections/?semester=${semester}`);
        const sectionJSON = await sectionRes.json();
        // setSections(sectionJSON[semester]);
        console.log(sectionJSON);
        setLoading(false);
      } catch {
        setError("Something error");
        setLoading(false);
      }
    };
    fetchData();
  }, [semester, section]);

  console.log(data);
  console.log(section);

  return { data, loading, error, sections };
};

export default useSheetData;