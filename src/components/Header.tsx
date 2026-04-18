import SettingsnRefresh from "./SettingsnRefresh";
import { IoMoonOutline, IoSunny } from "react-icons/io5";

interface SettingsProps {
  settings: boolean;
  loading: boolean;
  onSettingsSelect: (val: boolean) => void;
  darkMode: boolean;
  onDarkModeToggle: (val: boolean) => void;
}

const Header = ({ settings, loading, onSettingsSelect, darkMode, onDarkModeToggle }: SettingsProps) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="mt-2">
          <h1 className="text-3xl font-bold dark:text-white">VUCSE Routine</h1>
          <p className="text-sm text-muted-foreground">Spring 2026</p>
        </div>
        <div className="flex pt-5 flex-row justify-center items-center gap-2">
          <button
            onClick={() => onDarkModeToggle(!darkMode)}
            className="text-2xl p-1 hover:bg-muted rounded-md transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <IoSunny className="text-yellow-500" /> : <IoMoonOutline />}
          </button>
          {!settings && <SettingsnRefresh settings={settings} loading={loading} onSettingsSelect={onSettingsSelect} />}
        </div>
      </div>
      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mt-3"></div>
    </>
  );
};

export default Header;
