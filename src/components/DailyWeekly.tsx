import { Button } from "./ui/button";

interface DailyWeeklyProps {
  dayDecider: "today" | "weekly";
  onChangeDayDecider: (val: "today" | "weekly") => void;
}

const DailyWeekly = ({ dayDecider, onChangeDayDecider }: DailyWeeklyProps) => {
  return (
    <div className="my-3 flex justify-around gap-2">
      <Button
        variant={dayDecider === "today" ? "default" : "outline"}
        onClick={() => onChangeDayDecider("today")}
      >
        Today
      </Button>
      <Button
        variant={dayDecider === "weekly" ? "default" : "outline"}
        onClick={() => onChangeDayDecider("weekly")}
      >
        Weekly
      </Button>
    </div>
  );
};

export default DailyWeekly;
