
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import LeadCard from '@/components/LeadCard';
import Pagination from '@/components/Pagination';
import Header from '@/components/Header';

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
      <Header 
        pageTitle="Lead Listing"
        notificationCount={2}
        userName="Rajat Mishra"
        userId="123456789"
        filters={[
          { id: 'all', label: 'All' },
          { id: 'open', label: 'Open' },
          { id: 'untouched', label: 'Untouched' },
          { id: 'failed', label: 'Failed' },
          { id: 'wip', label: 'WIP' },
          { id: 'pending', label: 'Pending for Processing' },
          { id: 'rts', label: 'RTS' },
          { id: 'issued', label: 'Issued' },
        ]}
        activeFilter={activeTab}
        onFilterChange={setActiveTab}
      />

      <main className="container mx-auto py-6 px-4">
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
