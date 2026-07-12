"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDropdown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { SEMESTERS } from "@/utils/constants";
interface Props {
  semester: string;
  section: string;
  sections: string[];
  onSemesterChange: (val: string) => void;
  onSectionChange: (val: string) => void;
  onSettingsSelect: (val: boolean) => void;
}

const SemesterSection = ({
  semester,
  section,
  sections,
  onSemesterChange,
  onSectionChange,
  onSettingsSelect,
}: Props) => {
  return (
    <div className="mx-auto my-auto flex w-full max-w-md flex-col gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="mx-auto w-70 justify-between"
            size="lg"
          >
            Semester : {semester}
            <IoIosArrowDropdown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full max-w-[calc(100vw-32px)]">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Semester</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={semester}
              onValueChange={onSemesterChange}
            >
              {SEMESTERS.map((sem) => (
                <DropdownMenuRadioItem key={sem} value={sem}>
                  {sem}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="mx-auto w-70 justify-between"
            size="lg"
          >
            Section : {section}
            <IoIosArrowDropdown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full max-w-[calc(100vw-32px)]">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Section</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={section}
              onValueChange={onSectionChange}
            >
              {sections.map((sec) => (
                <DropdownMenuRadioItem key={sec} value={sec}>
                  {sec}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        className="mx-auto w-70"
        onClick={() => {
          onSettingsSelect(false);
        }}
      >
        Set
      </Button>
    </div>
  );
};

export default SemesterSection;
