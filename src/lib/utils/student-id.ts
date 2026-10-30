/** Student ID format: YY-CODE-NNNN (e.g. 23-CCS1-0156), at most 13 chars. */
export const STUDENT_ID_MAX_LENGTH = 13;
export const STUDENT_ID_PATTERN = /^[0-9]{2}-[A-Z0-9]{1,5}-[0-9]{4}$/;
export const LEGACY_STUDENT_ID_PATTERN = /^[0-9]{4}-[0-9]{5}$/;

export function formatStudentIdInput(value: string): string {
  return value.toUpperCase().replace(/[^A-Z0-9-]/g, "").slice(0, STUDENT_ID_MAX_LENGTH);
}

export function normalizeStudentId(value: string): string {
  return formatStudentIdInput(value.trim());
}

export function isCompleteStudentId(value: string): boolean {
  const normalized = normalizeStudentId(value);
  return STUDENT_ID_PATTERN.test(normalized) || LEGACY_STUDENT_ID_PATTERN.test(normalized);
}
