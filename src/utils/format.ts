// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export function objectToQueryParams(obj: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  }
  return searchParams.toString();
}
