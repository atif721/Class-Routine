import SemesterSection from "./SemesterSection";
interface FilterBarProps {
  semester: string;
  section: string;
  sections: string[];
  settings: boolean;
  onSemesterChange: (val: string) => void;
  onSectionChange: (val: string) => void;
  onSettingsSelect: (val: boolean) => void;
}

const FilterBar = ({
  semester,
  section,
  sections,
  settings,
  onSemesterChange,
  onSectionChange,
  onSettingsSelect,
}: FilterBarProps) => {
  return (
    <>
      {settings && (
        <div className="flex flex-col items-center gap-4 pt-4 min-h-125">
          <SemesterSection
            semester={semester}
            section={section}
            sections={sections}
            onSemesterChange={onSemesterChange}
            onSectionChange={onSectionChange}
            onSettingsSelect={onSettingsSelect}
          />
        </div>
      )}
    </>
  );
};

export default FilterBar;
