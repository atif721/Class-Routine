import { useState, useEffect } from "react";
import "./App.css";
import useSheetData from "./hooks/useSheetData";
import FilterBar from "./components/FilterBar";
import RoutineTable from "./components/RoutineTable";
import FloatingRefresh from "./components/FloatingRefresh";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";

const getStored = (key: string, fallback: string) =>
  localStorage.getItem(key) ?? fallback;

const App = () => {
  const [semester, setSemester] = useState(() => getStored("semester", ""));
  const [section, setSection] = useState(() => getStored("section", ""));
  const [settings, setSettings] = useState(true);
  const [darkMode, setDarkMode] = useState(
    () => getStored("darkMode", "light") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleSemesterChange = (val: string) => {
    setSemester(val);
    localStorage.setItem("semester", val);
  };

  const handleSectionChange = (val: string) => {
    setSection(val);
    localStorage.setItem("section", val);
  };

  const {
    data,
    loading,
    error,
    sections = [],
    refresh,
  } = useSheetData(semester);

  if (error) {
    return <p>Error Loading....{error}</p>;
  }

  if (loading) {
    return (
      <div className="my-auto flex min-h-svh items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4">
      <Header
        settings={settings}
        loading={loading}
        onSettingsSelect={setSettings}
        darkMode={darkMode}
        onDarkModeToggle={setDarkMode}
      />
      <FilterBar
        semester={semester}
        section={section}
        sections={sections}
        settings={settings}
        onSettingsSelect={setSettings}
        onSemesterChange={handleSemesterChange}
        onSectionChange={handleSectionChange}
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
