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
}

const SemesterSection = ({ semester, section, sections, onSemesterChange, onSectionChange }: Props) => {
  return (
    <div className="flex flex-row gap-5 pt-5 items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Semester : {semester}
            <IoIosArrowDropdown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Semester</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={semester} onValueChange={onSemesterChange}>
              {SEMESTERS.map((sem) => (
                <DropdownMenuRadioItem key={sem} value={sem}>
                  {sem}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>{" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Section : {section}
            <IoIosArrowDropdown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Section</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={section} onValueChange={onSectionChange}>
              {sections.map((sec) => (
                <DropdownMenuRadioItem key={sec} value={sec}>
                  {sec}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SemesterSection;
