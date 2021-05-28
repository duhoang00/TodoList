export function ValidateInput(s: string): boolean {
  if (s.trim() === "") {
    return false;
  }
  return true;
}
