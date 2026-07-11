import type { ClassInfo } from "@/utils/types";

interface ClassCellProps {
  time: string;
  classes: ClassInfo[];
  onCourseClick: (cls: ClassInfo) => void; // new prop
}
const ClassCell = ({ time, classes, onCourseClick }: ClassCellProps) => {
  return (
    <div className="flex gap-3 items-start mb-3">
      <p className="text-md font-semibold w-20 shrink-0">{time}</p>
      <div
        className="flex-1 bg-blue-100 rounded-lg p-3 dark:bg-gray-900 cursor-pointer dark:hover:bg-gray-950 dark:hover:text-white rounded-2xl hover:px-3 transition-all duration-300"
        onClick={() => onCourseClick(classes[0])}>
        {classes.map((cls, i) => (
          <div key={i} className="flex flex-col gap-2">
            <p className="font-bold text-lg text-foreground">{cls.course}</p>
            <p className="text-sm">{cls.teacher_name}</p>
            <p className="text-md font-semibold text-blue-500">Room: {cls.room}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ClassCell;
