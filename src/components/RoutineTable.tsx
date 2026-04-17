import type { WeekklySchedule } from "@/utils/types";
import ClassCell from "./ClassCell";

interface RoutineTableProps {
  data: WeekklySchedule | null;
  section: string;
  semester: string;
}

const RoutineTable = ({ data, section, semester }: RoutineTableProps) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  if (!semester || !section) return null;
  return (
    <div className="p-4">
      {days.map((day) => (
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
