import SettingsnRefresh from "./SettingsnRefresh";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

interface SettingsProps {
  settings: boolean;
  loading: boolean;
  onSettingsSelect: (val: boolean) => void;
  darkMode: boolean;
  onDarkModeToggle: (val: boolean) => void;
}

function formatNiceDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  });
}

const Header = ({
  settings,
  loading,
  onSettingsSelect,
  darkMode,
  onDarkModeToggle,
}: SettingsProps) => {
  const nowDate = formatNiceDate(new Date());
  return (
    <>
      <h1 className="mt-2 text-center text-3xl font-bold dark:text-white">
        VUCSE Routine
      </h1>
      <div className="flex flex-row items-center justify-between">
        <div className="mt-2">
          <p className="text-sm">Summer 2026</p>
          <div className="text-md flex flex-row items-center font-bold">
            <CiCalendarDate />
            <p>{nowDate}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 pt-5">
          <button
            onClick={() => onDarkModeToggle(!darkMode)}
            className="hover:bg-muted cursor-pointer rounded-md p-1 text-2xl transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <IoSunny className="text-yellow-500" />
            ) : (
              <IoMoonOutline />
            )}
          </button>
          {!settings && (
            <SettingsnRefresh
              settings={settings}
              loading={loading}
              onSettingsSelect={onSettingsSelect}
            />
          )}
        </div>
      </div>
      <div className="mt-3 h-px w-full bg-gray-200 dark:bg-gray-700"></div>
    </>
  );
};

export default Header;
