import { getCourseTitle } from "@/utils/courseMap";
import type { ClassInfo } from "@/utils/types";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ClassCellProps {
  time: string;
  classes: ClassInfo[];
  onCourseClick: (cls: ClassInfo) => void;
}

const ClassCell = ({ time, classes, onCourseClick }: ClassCellProps) => {
  return (
    <div className="mb-3 flex items-start gap-3">
      <p className="text-md flex w-20 shrink-0 flex-col font-semibold">
        <span>{time}</span>
        <div className="mx-auto h-30 w-px bg-gray-500 sm:h-25 dark:bg-white"></div>
        <span>{classes[0]?.end_time}</span>
      </p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="w-full flex-1 cursor-pointer rounded-2xl rounded-lg bg-blue-100 p-3 transition-all duration-300 hover:bg-blue-200 hover:px-3 dark:bg-gray-900 dark:hover:bg-gray-950 dark:hover:text-white"
              onClick={() => onCourseClick(classes[0])}
            >
              {classes.map((cls, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <p className="text-foreground text-lg font-bold">
                    {cls.course}
                  </p>
                  <p className="text-lg font-bold">
                    {getCourseTitle(cls.course)}
                  </p>
                  <p className="text-md">{cls.teacher_name}</p>
                  <p className="text-md w-fit rounded-md bg-blue-300 px-1 font-semibold text-blue-900 dark:bg-gray-700 dark:text-white">
                    Room: {cls.room}
                  </p>
                </div>
              ))}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tap on box for cover page</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export default ClassCell;
