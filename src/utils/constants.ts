export const SEMESTERS_GIDS: Record<string, string> = {
  "1st": "0",
  "2nd": "1739684797",
  "3rd": "1812971555",
  "4th": "1642366900",
  "5th": "1698922910",
  "6th": "1687685897",
  "7th": "2130237812",
  "8th": "1780568258",
  "9th": "614628609",
  // "info" : "",
};

export const SHEET_ID = "1Sdmr60rcZeBCa2ofswUr9mxIreIj71W9HYM1RRhvfMM";

export const getCSVUrl = (gid: string) => `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;

export const SEMESTERS = Object.keys(SEMESTERS_GIDS);

