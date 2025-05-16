export function getOffsetPaginationValue(limit: number, page: number) {
  return limit * (page - 1);
}
