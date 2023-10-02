function objectKeysToString(obj: Record<string, any>): string {
  const keys = Object.keys(obj);
  const str = keys.join(" ");
  return str;
}

export default objectKeysToString;
