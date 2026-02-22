import { useLocation } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const location = useLocation();

  const getHeaderTitle = () => {
    if (location.pathname === "/duplicatesearch") {
      return "Leads Insights and Duplicate Search";
    }
    return "Lead Management";
  };

  return (
    <header className="w-full bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <img
          style={{ height: '200%' }}
          // src="https://tse1.mm.bing.net/th/id/OIP.3UvXxgvgwIjQvoTX5JGLAQAAAA?pid=Api&P=0&h=220" 
          src="https://tse1.mm.bing.net/th/id/OIP.3UvXxgvgwIjQvoTX5JGLAQAAAA?pid=Api&P=0&h=220"
          alt="Logo"


          className="h-12 w-auto object-contain"

        />
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-500 absolute left-1/2 transform -translate-x-1/2">
          {getHeaderTitle()}
        </h2>
        <div
          style={{ 
            position: 'absolute',
            right: '10%'
          }}
        >
          <Button className="!bg-[#10B981] !text-white hover:!bg-[#059669]" asChild>
            <a href="https://ap-south-1.quicksight.aws.amazon.com/sn/account/Casagranddatalake/dashboards/8b16efa0-478d-4e1a-a5d9-e910c0d09b59/views/b1ac1555-82b7-4555-a61a-d1eeb073ad08">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </a>
          </Button>
        </div>

      </div>
    </header>
  );
}
