import SemesterSection from "./SemesterSection";

interface FilterBarProps {
  semester: string;
  section: string;
  sections: string[];
  onSemesterChange: (val: string) => void;
  onSectionChange: (val: string) => void;
}

const FilterBar = ({ semester, section, sections, onSemesterChange, onSectionChange }: FilterBarProps) => {
  return (
    <>
      <SemesterSection
        semester={semester}
        section={section}
        sections={sections}
        onSemesterChange={onSemesterChange}
        onSectionChange={onSectionChange}></SemesterSection>
    </>
  );
};

export default FilterBar;
