import "./App.css";
import useSheetData from "./hooks/useSheetData";

const App = () => {
  const { data, loading, error } = useSheetData("5th");

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error Loading....</p>;
  }

  return (
    <>
      <p>{data}</p>
      <h1 className="text-3xl font-bold underline">check console log</h1>;
    </>
  );
};

export default App;
