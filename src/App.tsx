import { useState } from "react";
import "./App.css";
import useSheetData from "./hooks/useSheetData";
import FilterBar from "./components/FilterBar";
import RoutineTable from "./components/RoutineTable";
import FloatingRefresh from "./components/FloatingRefresh";
import Header from "./components/Header";

const App = () => {
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [settings, setSettings] = useState(true);

  const { data, loading, error, sections = [], refresh } = useSheetData(semester, section);

  if (error) {
    return <p>Error Loading....{error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <Header settings={settings} loading={loading} onSettingsSelect={setSettings} />
      <FilterBar
        semester={semester}
        section={section}
        sections={sections}
        settings={settings}
        onSettingsSelect={setSettings}
        onSemesterChange={setSemester}
        onSectionChange={setSection}
      />
      {!settings && (
        <>
          <RoutineTable data={data} section={section} semester={semester} />
          <FloatingRefresh loading={loading} onRefresh={refresh} />
        </>
      )}
    </div>
  );
};

export default App;
