const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

export const parseCSV = (raw: string) => {
  const rows = raw.split("\n");
  const grouped: Record<string, string[]> = {};
  let currentDay = "";

  rows.forEach(row => {
    const isDay = days.some(day => row.startsWith(day));
    if (isDay) {
      currentDay = row.split(",")[0].trim();
      grouped[currentDay] = [];
    } else {
      if (currentDay) {
        grouped[currentDay].push(row);
      }
    }
  });
  console.log(grouped);
};
