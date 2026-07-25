import type { ClassInfo, WeekklySchedule } from "@/utils/types";
import ClassCell from "./ClassCell";
import DailyWeekly from "./DailyWeekly";
import { useState, useMemo } from "react";
import CoursePopup from "./CoursePopup";
import { renderWithSuffix } from "@/utils/AddSuffix";

interface RoutineTableProps {
  data: WeekklySchedule | null;
  section: string;
  semester: string;
}

const RoutineTable = ({ data, section, semester }: RoutineTableProps) => {
  const [dayDecider, setDayDecider] = useState<"today" | "tomorrow" | "weekly">(
    "today",
  );
  const [selectedCourse, setSelectedCourse] = useState<ClassInfo | null>(null);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  const { today, tomorrow } = useMemo(() => {
    const now = new Date();
    const tmrw = new Date(now);
    tmrw.setDate(now.getDate() + 1);

    return {
      today: now.toLocaleDateString("en-US", { weekday: "long" }),
      tomorrow: tmrw.toLocaleDateString("en-US", { weekday: "long" }),
    };
  }, []);

  const filteredDays =
    dayDecider === "today"
      ? [today]
      : dayDecider === "tomorrow"
        ? [tomorrow]
        : days;

  const isHoliday = today === "Friday" || today === "Saturday";
  const isTomorrowHoliday = tomorrow === "Friday" || tomorrow === "Saturday";

  const showHolidayMessage =
    (dayDecider === "today" && isHoliday) ||
    (dayDecider === "tomorrow" && isTomorrowHoliday);

  if (showHolidayMessage) {
    return (
      <div className="p-4">
        <DailyWeekly
          dayDecider={dayDecider}
          onChangeDayDecider={setDayDecider}
        />
        <div className="bg-card dark:bg-card border-border dark:border-border mb-4 rounded-xl border p-4 shadow-md">
          <h2 className="text-foreground text-center text-lg font-bold">
            No classes {dayDecider === "today" ? "today" : "tomorrow"}! Enjoy
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-4">
      <p className="mx-auto w-fit text-xl font-bold">
        {renderWithSuffix(Number(semester))} Semester || Section:{section}
      </p>
      <div className="flex flex-row items-center justify-around">
        <DailyWeekly
          dayDecider={dayDecider}
          onChangeDayDecider={setDayDecider}
        />
      </div>
      {filteredDays.map((day) => (
        <div
          key={day}
          className="bg-card border-border dark:border-border mb-4 rounded-xl border p-4 shadow-md dark:bg-[rgb(7,35,57)]"
        >
          <h2 className="text-foreground text-2xl font-bold">{day}</h2>
          {data &&
            data[day] &&
            (() => {
              const displayedCourses = new Set<string>();
              return Object.entries(data[day]).map(([time, cls]) => {
                if (!cls) return null;
                const courseKey = `${cls.course}-${cls.section}`;
                if (displayedCourses.has(courseKey)) return null;
                displayedCourses.add(courseKey);
                return (
                  <div key={time}>
                    <ClassCell
                      time={time}
                      classes={[cls]}
                      onCourseClick={setSelectedCourse}
                    />
                  </div>
                );
              });
            })()}
        </div>
      ))}
      <CoursePopup
        selectedCourse={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        section={section}
        semester={semester}
      ></CoursePopup>
    </div>
  );
};

export default RoutineTable;
