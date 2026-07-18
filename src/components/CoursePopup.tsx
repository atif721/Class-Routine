import type { ClassInfo } from "@/utils/types";
import { getCourseTitle } from "@/utils/courseMap";

interface CoursePopupProps {
  selectedCourse: ClassInfo | null;
  onClose: () => void;
  section: string;
  semester: string;
}

const CoursePopup = ({
  selectedCourse,
  onClose,
  section,
  semester,
}: CoursePopupProps) => {
  if (!selectedCourse) return null;

  const title = getCourseTitle(selectedCourse.course);

  const handleCoverPage = () => {
    const params = new URLSearchParams({
      courseCode: selectedCourse.course,
      courseTitle: title,
      teacher: selectedCourse.teacher_name,
      designation: selectedCourse.designation,
      section: section,
      semester: semester,
    });
    window.open(
      `https://atif721.github.io/cover-page-designer/?${params.toString()}`,
      "_blank",
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-80 rounded-2xl bg-white p-6 dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <p>{selectedCourse.course}</p>
        <h2 className="mb-2">{title}</h2>
        <p>{selectedCourse.teacher_name}</p>
        <p>{selectedCourse.designation}</p>
        <pre className="mt-2">
          Semester:{semester} | Section:{section}
        </pre>
        <button
          onClick={handleCoverPage}
          className="mt-4 cursor-pointer rounded-2xl bg-blue-300 p-3 transition-all duration-300 hover:bg-black hover:text-white dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Cover Page
        </button>
      </div>
    </div>
  );
};
export default CoursePopup;
