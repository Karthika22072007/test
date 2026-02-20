import React, { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search...", 
  onSearch,
  className = "" 
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-4 pr-10 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-transparent"
        />
        <div 
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={handleSubmit}
        >
          <svg className="h-5 w-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
