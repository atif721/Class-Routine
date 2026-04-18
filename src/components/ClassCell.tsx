import type { ClassInfo } from "@/utils/types";

interface ClassCellProps {
  time: string;
  classes: ClassInfo[];
}

const ClassCell = ({ time, classes }: ClassCellProps) => {
  return (
    <div className="flex gap-3 items-start mb-3">
      <p className="text-md font-semibold w-20 shrink-0">{time}</p>
      <div className="flex-1 bg-blue-100 rounded-lg p-3 dark:bg-gray-900">
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
