import { useState } from "react";
import "./App.css";
import useSheetData from "./hooks/useSheetData";
import FilterBar from "./components/FilterBar";
import RoutineTable from "./components/RoutineTable";

const App = () => {
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");

  const { data, loading, error, sections = [] } = useSheetData(semester, section);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error Loading....{error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <FilterBar
        semester={semester}
        section={section}
        sections={sections}
        onSemesterChange={setSemester}
        onSectionChange={setSection}
      />
      <RoutineTable data={data} section={section} />
    </div>
  );
};

export default App;
