import SettingsnRefresh from "./SettingsnRefresh";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi";
import { useState } from "react";

import {
  formatNiceDate,
  formatTime,
  getRelativeTime,
} from "@/utils/formattingDateTime";

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SettingsProps {
  settings: boolean;
  loading: boolean;
  onSettingsSelect: (val: boolean) => void;
  darkMode: boolean;
  onDarkModeToggle: (val: boolean) => void;
  lastSync: Date | null;
  isStale: boolean;
}

const Header = ({
  settings,
  loading,
  onSettingsSelect,
  darkMode,
  onDarkModeToggle,
  lastSync,
  isStale,
}: SettingsProps) => {
  const nowDate = formatNiceDate(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <h1 className="mt-2 text-center text-3xl font-bold dark:text-white">
        VUCSE Routine
      </h1>
      <div className="flex flex-row items-center justify-between">
        <div className="mt-2 font-bold">
          <p className="text-md">Summer 2026</p>
          <div className="text-md flex flex-row items-center">
            <CiCalendarDate />
            <p>{nowDate}</p>
          </div>
          <div>
            {isStale ? (
              <p className="mb-2 text-center text-xs text-yellow-600 dark:text-yellow-400">
                Couldn't refresh — showing last synced data (
                {lastSync?.toLocaleTimeString()})
              </p>
            ) : (
              lastSync && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="cursor-default text-xs text-gray-500 dark:text-white">
                        Synced at {formatTime(lastSync)}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{getRelativeTime(lastSync)}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 pt-5">
          <button
            onClick={() => onDarkModeToggle(!darkMode)}
            className="hover:bg-muted cursor-pointer rounded-md p-1 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <IoSunny className="text-2xl text-yellow-500" />
            ) : (
              <IoMoonOutline className="text-2xl" />
            )}
          </button>
          {!settings && (
            <SettingsnRefresh
              settings={settings}
              loading={loading}
              onSettingsSelect={onSettingsSelect}
            />
          )}

          <div className="relative">
            <button
              onClick={toggleMenu}
              className="hover:bg-muted rounded-md p-1 transition-colors"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <IoMdMenu className="cursor-pointer text-3xl" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-full right-0 z-50 mt-1 w-40 rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <div
                  className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={closeMenu}
                >
                  <MdOutlineLocationOn />
                  <p>Room Finder</p>
                </div>
                <div
                  className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={closeMenu}
                >
                  <HiOutlineNewspaper />
                  <p>Cover Page</p>
                </div>
                <div
                  className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={closeMenu}
                >
                  <RiContactsLine />
                  <p>Teacher Info</p>
                </div>
                <div
                  className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={closeMenu}
                >
                  <IoMdInformationCircleOutline />
                  <p>Dev Info</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 h-px w-full bg-gray-200 dark:bg-gray-700"></div>
    </>
  );
};

export default Header;
