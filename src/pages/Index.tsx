
import { useState } from 'react';
import { Bell, Filter, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import LeadCard from '@/components/LeadCard';
import FilterTabs from '@/components/FilterTabs';
import FilterControls from '@/components/FilterControls';
import Pagination from '@/components/Pagination';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');

  const mockLeads = [
    {
      id: '290484',
      name: 'Akash Patil',
      createdOn: '23/04/2024',
      allocatedOn: '31/07/2024',
      mobileNo: '9874867846',
      allocatedBy: 'Sunil Arjun Natekar',
      allocatedTo: 'Sunil Arjun Natekar',
      isSelfSourced: true,
    },
    // ... similar mock data entries
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#003087] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-white/90">
            <span className="mr-2">←</span> Leads
          </Button>
          <h1 className="text-xl font-semibold">Lead Listing</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-white/90">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div>Rajat Mishra</div>
              <div className="text-xs text-gray-300">USERID: 123456789</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-4">
        <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <FilterControls />
        
        {/* Lead Cards */}
        <div className="mt-6 space-y-4">
          {mockLeads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={4}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default Index;
