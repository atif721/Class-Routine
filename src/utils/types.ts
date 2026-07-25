export interface ClassInfo {
  teacher_name: string;
  designation: string;
  course: string;
  course_name: string;
  section: string;
  room: string;
  end_time: string;
}

export type DaySchedule = Record<string, ClassInfo | null>;
export type WeekklySchedule = Record<string, DaySchedule>;