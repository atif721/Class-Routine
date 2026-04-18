import type { WeekklySchedule } from "@/utils/types";
import ClassCell from "./ClassCell";
import DailyWeekly from "./DailyWeekly";
import { useState } from "react";

interface RoutineTableProps {
  data: WeekklySchedule | null;
  section: string;
  semester: string;
}

const RoutineTable = ({ data, section, semester }: RoutineTableProps) => {
  const [dayDecider, setDayDecider] = useState<"today" | "weekly">("today");

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  // const today = "Sunday";

  const filteredDays = dayDecider === "today" ? [today] : days;
  const isHoliday = today === "Friday" || today === "Saturday";
  const showHolidayMessage = isHoliday && dayDecider === "today";

  if (showHolidayMessage) {
    return (
      <div className="p-4">
        <DailyWeekly dayDecider={dayDecider} onChangeDayDecider={setDayDecider} />
        <div className="rounded-xl shadow-taupe-300 shadow-md p-4 mb-4">
          <h2 className="text-center font-bold text-lg">No class today! Enjoy</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="p-4">
      <div className="flex flex-row justify-around items-center">
        <DailyWeekly dayDecider={dayDecider} onChangeDayDecider={setDayDecider} />
        <p>
          Semester:{semester} | Section:{section}
        </p>
      </div>
      {filteredDays.map((day) => (
        <div key={day} className="rounded-xl shadow-taupe-300 shadow-md p-4 mb-4">
          <h2 className="font-bold text-lg">{day}</h2>
          {data &&
            data[day] &&
            Object.entries(data[day]).map(([time, classes]) => {
              const filtered = classes?.filter((cls) => cls.section === section) ?? [];
              if (filtered.length === 0) return null;
              return (
                <div key={time}>
                  <ClassCell time={time} classes={filtered} />
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default RoutineTable;
