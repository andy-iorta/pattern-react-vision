
import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
    {
      id: '290485',
      name: 'Rahul Kumar',
      createdOn: '24/04/2024',
      allocatedOn: '01/08/2024',
      mobileNo: '9876543210',
      allocatedBy: 'Amit Shah',
      allocatedTo: 'Priya Sharma',
      isSelfSourced: false,
    },
    {
      id: '290486',
      name: 'Priya Desai',
      createdOn: '25/04/2024',
      allocatedOn: '02/08/2024',
      mobileNo: '9870123456',
      allocatedBy: 'Rajesh Kumar',
      allocatedTo: 'Neha Patel',
      isSelfSourced: true,
    },
    {
      id: '290487',
      name: 'Sanjay Mehta',
      createdOn: '26/04/2024',
      allocatedOn: '03/08/2024',
      mobileNo: '9876123450',
      allocatedBy: 'Anita Singh',
      allocatedTo: 'Vikram Rathod',
      isSelfSourced: false,
    },
    {
      id: '290488',
      name: 'Meera Shah',
      createdOn: '27/04/2024',
      allocatedOn: '04/08/2024',
      mobileNo: '9879876543',
      allocatedBy: 'Ravi Verma',
      allocatedTo: 'Sneha Kapoor',
      isSelfSourced: true,
    },
    {
      id: '290489',
      name: 'Arjun Reddy',
      createdOn: '28/04/2024',
      allocatedOn: '05/08/2024',
      mobileNo: '9876789012',
      allocatedBy: 'Kiran Rao',
      allocatedTo: 'Aditya Sharma',
      isSelfSourced: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#003087] text-white px-6 py-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-white hover:text-white/90 hover:bg-[#002670] -ml-4"
            >
              <span className="mr-2">←</span> Leads
            </Button>
            <div className="h-6 w-px bg-white/20" />
            <h1 className="text-xl font-medium">Lead Listing</h1>
          </div>
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-white hover:text-white/90 hover:bg-[#002670]"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border-2 border-white/20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">Rajat Mishra</div>
                <div className="text-xs text-gray-300">USERID: 123456789</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <FilterControls />
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {mockLeads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>

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
