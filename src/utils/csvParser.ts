const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

export const parseCSV = (raw: string) => {
  const rows = raw.split("\n");

  rows.forEach(row => {
    const isDay = days.some(day => row.startsWith(day));
    if (isDay) {
      console.log("Found day : ", raw);
    }
  });
};
