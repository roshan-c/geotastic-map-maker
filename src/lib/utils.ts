/**
 * Split array into chunks of specific size
 * @param chunkSize Maximum size of chunks
 * @param array Array to split
 * @returns Array of chunk arrays
 */
export function arrayChunks<T>(chunkSize: number, array: T[]): T[][] {
    const chunks: T[][] = [];
    let i: number;
    let j: number;
    for (i = 0, j = array.length; i < j; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

/**
 * Convert a date into a string defined by input format
 *
 * #### Format string parts
 * - `Y` -> Year
 * - `M` -> Month
 * - `D` -> Day
 * - `h` -> Hours
 * - `m` -> Minutes
 * - `s` -> Seconds
 *
 * @param date Date to convert
 * @param format Date string format
 * @returns Formatted date string
 *
 * @example
 * // returns "12/10/2021, 22:09:51"
 * getFormattedDate(new Date(), 'Y/M/D, h:m:s')
 */
export function getFormattedDate(date: Date, format: string): string {
    return format
        .replace(/Y/g, date.getFullYear().toString().padStart(4, '0'))
        .replace(/M/g, (date.getMonth() + 1).toString().padStart(2, '0'))
        .replace(/D/g, date.getDate().toString().padStart(2, '0'))
        .replace(/h/g, date.getHours().toString().padStart(2, '0'))
        .replace(/m/g, date.getMinutes().toString().padStart(2, '0'))
        .replace(/s/g, date.getSeconds().toString().padStart(2, '0'));
}
