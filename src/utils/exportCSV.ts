/**
 * Downloads data as a CSV file
 * @param {Array<Record<string, unknown>>} data - Array of objects to be converted to CSV
 * @param {string} filename - Name of the downloaded CSV file (without extension)
 */
export const downloadCSV = (data: Array<Record<string, unknown>>, filename: string = 'export'): void => {
  if (!data || data.length === 0) {
    console.warn('No data provided for CSV export');
    return;
  }

  try {
    // Get headers from first object's keys
    const headers = Object.keys(data[0]);

    // Convert data to CSV format
    const csvContent = [
      headers.join(','), // Header row
      ...data.map(row =>
        headers.map(header => {
          const value = row[header];
          // Handle values that contain commas or quotes
          if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        }).join(',')
      )
    ].join('\n');

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a temporary link element
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL
    URL.revokeObjectURL(url);

    console.log(`CSV file "${filename}.csv" downloaded successfully`);
  } catch (error) {
    console.error('Error downloading CSV:', error);
  }
};

/**
 * Example usage:
 *
 * const sampleData = [
 *   { name: 'John Doe', age: 30, city: 'New York' },
 *   { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
 *   { name: 'Bob Johnson', age: 35, city: 'Chicago' }
 * ];
 *
 * downloadCSV(sampleData, 'users');
 */

export default downloadCSV;
