
import { Button } from "@/components/ui/button";

interface FilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const FilterTabs = ({ activeTab, onTabChange }: FilterTabsProps) => {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'open', label: 'Open' },
    { id: 'untouched', label: 'Untouched' },
    { id: 'failed', label: 'Failed' },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={activeTab === tab.id ? "default" : "ghost"}
          onClick={() => onTabChange(tab.id)}
          className={activeTab === tab.id ? "bg-blue-500 hover:bg-blue-600" : ""}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default FilterTabs;
