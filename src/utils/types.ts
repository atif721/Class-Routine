export interface ClassInfo {
  teacher_name: string,
  course: string,
  section: string,
  room: string,
}

export type DaySchedule = Record<string, ClassInfo[] | null>;
export type WeekklySchedule = Record<string, DaySchedule>;