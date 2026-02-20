import React, { useState } from 'react';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import SearchBar from '../components/SearchBar';
import { downloadCSV } from '../utils/exportCSV.ts';
import TableComponent from '../components/Table';

const Duplicate_search = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchDuplicate = () => {
    setIsSearching(true);
    // Simulate search process
    setTimeout(() => {
      setIsSearching(false);
      console.log("Duplicate search completed");
    }, 2000);
  };

  const handleDownloadCSV = () => {
    const sampleData = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Duplicate', date: '2024-01-15' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', status: 'Unique', date: '2024-01-16' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-123-4567', status: 'Duplicate', date: '2024-01-17' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '111-222-3333', status: 'Unique', date: '2024-01-18' },
      { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', phone: '999-888-7777', status: 'Duplicate', date: '2024-01-19' }
    ];
    
    downloadCSV(sampleData, 'duplicate-search-results');
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="flex-1 w-full p-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex justify-end mb-4">
            <button 
              onClick={handleSearchDuplicate}
              disabled={isSearching}
              className="px-4 py-2 rounded-lg transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
              style={{ backgroundColor: isSearching ? '#9CA3AF' : '#10B981', color: '#FFFFFF' }}
              onMouseEnter={(e) => !isSearching && (e.currentTarget.style.backgroundColor = '#036d23ff')}
              onMouseLeave={(e) => !isSearching && (e.currentTarget.style.backgroundColor = '##059646ff')}
            >
              {isSearching ? 'Searching...' : 'Search for Duplicate'}
            </button>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
            {/* <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Duplicate Search Analytics
            </h1> */}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 1st Row, 1st Column - Line Chart */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Leads Data & Hourly Breakup
                </h2>
                <LineChart />
              </div>
              
              {/* 1st Row, 2nd Column - Bar Chart */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  City wise Leads
                </h2>
                <BarChart xData={["New York", "London", "Tokyo", "Paris", "Sydney"]} yData={[10, 15, 8, 12, 9]} yAxisName="Total Duplicate" interval={0} />
              </div>
              
              {/* 2nd Row, 1st Column - Bar Chart */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Row Duplicates (Hourly)
                </h2>
                <BarChart xData={["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]} yData={[5, 8, 12, 15, 10, 7, 9, 14, 18, 22, 20, 16, 13, 11, 8, 6, 4, 3, 2, 1, 0, 1, 3, 5]} yAxisName="Row Count" />
              </div>
              
              {/* 2nd Row, 2nd Column - Additional Content */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  Column Duplicates (Hourly)
                </h2>
                <TableComponent />
              </div>
            </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Duplicate_search;
