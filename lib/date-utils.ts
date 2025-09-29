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

/**
 * 将日期格式化为详细格式，如 "August 2nd 2022, 6:39:57 am"
 * @param date - Date 对象或日期字符串
 * @returns 格式化的详细日期字符串
 */
export const formatDateToDetailed = (date: Date | string = new Date()): string => {
  const dateObj = date instanceof Date ? date : new Date(date);

  // 获取序数后缀 (1st, 2nd, 3rd, 4th, etc.)
  const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const month = dateObj.toLocaleDateString('en-US', { month: 'long' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const time = dateObj.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).toLowerCase();

  return `${month} ${day}${getOrdinalSuffix(day)} ${year}, ${time}`;
};