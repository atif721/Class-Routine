import type { ClassInfo } from "@/utils/types";

interface ClassCellProps {
  time: string;
  classes: ClassInfo[];
  onCourseClick: (cls: ClassInfo) => void; // new prop
}
const ClassCell = ({ time, classes, onCourseClick }: ClassCellProps) => {
  return (
    <div className="mb-3 flex items-start gap-3">
      <p className="text-md w-20 shrink-0 font-semibold">{time}</p>
      <div
        className="flex-1 cursor-pointer rounded-2xl rounded-lg bg-blue-100 p-3 transition-all duration-300 hover:bg-blue-200 hover:px-3 dark:bg-gray-900 dark:hover:bg-gray-950 dark:hover:text-white"
        onClick={() => onCourseClick(classes[0])}
      >
        {classes.map((cls, i) => (
          <div key={i} className="flex flex-col gap-2">
            <p className="text-foreground text-lg font-bold">{cls.course}</p>
            <p className="text-md">{cls.teacher_name}</p>
            <p className="text-md font-semibold text-blue-900">
              Room: {cls.room}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ClassCell;
