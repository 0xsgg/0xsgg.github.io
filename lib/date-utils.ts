/**
 * 将日期字符串转换为简短格式 (Sep 2015)
 * @param dateString - ISO 日期字符串，如 "2015-09-01"
 * @returns 格式化的日期字符串，如 "Sep 2015"
 */
export const formatDateToShort = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
};

/**
 * 格式化日期范围
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 格式化的日期范围，如 "Sep 2015 - Jun 2019"
 */
export const formatDateRange = (startDate: string, endDate: string): string => {
  return `${formatDateToShort(startDate)} - ${formatDateToShort(endDate)}`;
};