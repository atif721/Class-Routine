import type { ClassInfo } from "@/utils/types";

interface ClassCellProps {
  time: string;
  classes: ClassInfo[];
}

const ClassCell = ({ time, classes }: ClassCellProps) => {
  return (
    <div className="flex gap-3 items-start">
      <p className="text-sm text-gray-500 w-20 shrink-0">{time}</p>
      <div className="flex-1 bg-blue-50 rounded-lg p-3">
        {classes.map((cls, i) => (
          <div key={i} className="flex flex-col gap-2">
            <p className="font-bold text-sm">{cls.course}</p>
            <p className="text-xs text-gray-600">{cls.teacher_name}</p>
            <p className="text-xs text-blue-500">Room: {cls.room}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassCell;
