import { useState } from "react";
import "./App.css";
import useSheetData from "./hooks/useSheetData";

const App = () => {
  const [semester, setSemester] = useState("5");
  const [section, setSection] = useState("B");

  const { data, loading, error } = useSheetData(semester, section);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error Loading....{error}</p>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">check console log</h1>;
    </>
  );
};

export default App;
