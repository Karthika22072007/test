import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  const getHeaderTitle = () => {
    if (location.pathname === "/duplicate-search") {
      return "Leads Insights and Duplicate Search";
    }
    return "Lead Management";
  };

  return (
    <header className="w-full bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <img 
          // src="https://tse1.mm.bing.net/th/id/OIP.3UvXxgvgwIjQvoTX5JGLAQAAAA?pid=Api&P=0&h=220" 
          src="https://tse1.mm.bing.net/th/id/OIP.3UvXxgvgwIjQvoTX5JGLAQAAAA?pid=Api&P=0&h=220"
          alt="Logo"


    className="h-12 w-auto object-contain"

        />
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-500 absolute left-1/2 transform -translate-x-1/2">
          {getHeaderTitle()}
        </h2>
        <div className="w-12"></div>
      </div>
    </header>
  );
}
