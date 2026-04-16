import type { WeekklySchedule } from "@/utils/types";

interface RoutineTableProps {
  data: WeekklySchedule | null;
  section: string;
}

const RoutineTable = ({ data, section }: RoutineTableProps) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  return (
    <div className="">
      {days.map((day) => (
        <div key={day}>
          <h2>{day}</h2>
          {data &&
            data[day] &&
            Object.entries(data[day]).map(([time, classes]) => (
              <div key={time}>
                <p>{time}</p>
                {classes &&
                  classes
                    .filter((cls) => cls.section === section)
                    .map((cls, i) => (
                      <div key={i}>
                        <p> {cls.course} </p>
                        <p> {cls.teacher_name} </p>
                        <p> {cls.section} </p>
                        <p> {cls.room} </p>
                      </div>
                    ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default RoutineTable;
