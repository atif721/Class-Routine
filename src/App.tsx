import { useState } from "react";
import "./App.css";
import useSheetData from "./hooks/useSheetData";
import FilterBar from "./components/FilterBar";

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
      <FilterBar></FilterBar>
    </>
  );
};

export default App;
