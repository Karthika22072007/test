import React, { useState, useEffect } from 'react';

interface TableProps {
  searchQuery?: string;
}

const TableComponent: React.FC<TableProps> = ({ searchQuery = "" }) => {
  const [filteredData, setFilteredData] = useState([
    { time: '00:00', columnName: 'Name', duplicate: 9876543234, count: 15 },
    { time: '01:00', columnName: 'Email', duplicate: 1234560987, count: 12 },
    { time: '02:00', columnName: 'Phone', duplicate: 2345678902, count: 18 },
    { time: '03:00', columnName: 'Address', duplicate: 7894561232, count: 15 },
    { time: '04:00', columnName: 'Name', duplicate: 2987653345, count: 10 },
    { time: '05:00', columnName: 'Email', duplicate: 7876543234, count: 10 },
    { time: '06:00', columnName: 'Phone', duplicate: 8765143234, count: 29 },
    { time: '07:00', columnName: 'Address', duplicate: 2345673234, count: 14 },
    { time: '08:00', columnName: 'Name', duplicate: 9876543456, count: 16 },
  ]);

  const allData = [
    { time: '00:00', columnName: 'Name', duplicate: 9876543234, count: 15 },
    { time: '01:00', columnName: 'Email', duplicate: 1234560987, count: 12 },
    { time: '02:00', columnName: 'Phone', duplicate: 2345678902, count: 18 },
    { time: '03:00', columnName: 'Address', duplicate: 7894561232, count: 15 },
    { time: '04:00', columnName: 'Name', duplicate: 2987653345, count: 10 },
    { time: '05:00', columnName: 'Email', duplicate: 7876543234, count: 10 },
    { time: '06:00', columnName: 'Phone', duplicate: 8765143234, count: 29 },
    { time: '07:00', columnName: 'Address', duplicate: 2345673234, count: 14 },
    { time: '08:00', columnName: 'Name', duplicate: 9876543456, count: 16 },
  ];

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(allData);
    } else {
      const filtered = allData.filter(row => 
        row.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.columnName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.duplicate.toString().includes(searchQuery.toLowerCase()) ||
        row.count.toString().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-slate-300 dark:border-slate-600">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-700">
            <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Time</th>
            <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Column Name</th>
            <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Duplicate</th>
            <th className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-left">Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="even:bg-slate-50 dark:even:bg-slate-800">
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{row.time}</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{row.columnName}</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{row.duplicate}</td>
              <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
