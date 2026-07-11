import courses from "@/data/courses.json";

interface CourseInfo {
  title: string;
}

type CourseMap = Record<string, CourseInfo>;

const courseMap: CourseMap = courses;

export function getCourseTitle(code: string): string {
  const entry = courseMap[code];

  if (!entry) {
    return code;
  }

  return entry.title;
}