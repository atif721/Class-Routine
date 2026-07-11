import type { ClassInfo } from "@/utils/types";
import { getCourseTitle } from "@/utils/courseMap";

interface CoursePopupProps {
  selectedCourse: ClassInfo | null;
  onClose: () => void;
  section: string;
  semester: string;
}

const CoursePopup = ({ selectedCourse, onClose, section, semester }: CoursePopupProps) => {
  if (!selectedCourse) return null;

  const title = getCourseTitle(selectedCourse.course);

  const handleCoverPage = () => {
    const params = new URLSearchParams({
      courseCode: selectedCourse.course,
      courseTitle: title,
      teacher: selectedCourse.teacher_name,
      section: section,
      semester: semester,
    });
    window.open(`https://atif721.github.io/cover-page-designer/?${params.toString()}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-80" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{selectedCourse.teacher_name}</p>
        <p>{selectedCourse.course}</p>
        <p>Room: {selectedCourse.room}</p>

        <pre className="mt-2">
          Semester:{semester} | Section: {section}
        </pre>
        <button
          onClick={handleCoverPage}
          className="mt-4 text-blue-500 dark:hover:bg-blue-950 dark:hover:text-white p-3 rounded-2xl cursor-pointer">
          Cover Page
        </button>
      </div>
    </div>
  );
};
export default CoursePopup;
