
import { MoreVertical, Pencil } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface LeadCardProps {
  lead: {
    id: string;
    name: string;
    createdOn: string;
    allocatedOn: string;
    mobileNo: string;
    allocatedBy: string;
    allocatedTo: string;
    isSelfSourced: boolean;
  };
}

const LeadCard = ({ lead }: LeadCardProps) => {
  return (
    <Card className="w-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
      <CardContent className="p-6">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            {/* Profile Circle */}
            <div className="bg-blue-100 text-blue-600 h-12 w-12 rounded-full flex items-center justify-center font-semibold text-lg">
              {lead.name.split(' ').map(n => n[0]).join('')}
            </div>
            
            {/* Name and ID */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{lead.name}</h3>
              <span className="text-sm text-gray-500">#{lead.id}</span>
            </div>
          </div>

          {/* Right Side - Badge and Actions */}
          <div className="flex items-center gap-3">
            {lead.isSelfSourced && (
              <Badge 
                variant="secondary" 
                className="bg-[#F2FCE2] text-emerald-700 font-medium px-3 py-1"
              >
                Self Sourced
              </Badge>
            )}
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <Pencil className="h-4 w-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <MoreVertical className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-4" />

        {/* Bottom Section - Details Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <div>
            <span className="text-gray-500">Created on</span>
            <p className="text-gray-900 mt-0.5">{lead.createdOn}</p>
          </div>
          <div>
            <span className="text-gray-500">Allocated on</span>
            <p className="text-gray-900 mt-0.5">{lead.allocatedOn}</p>
          </div>
          <div>
            <span className="text-gray-500">Mobile No</span>
            <p className="text-gray-900 mt-0.5">{lead.mobileNo}</p>
          </div>
          <div>
            <span className="text-gray-500">Appointment on</span>
            <p className="text-gray-900 mt-0.5">-</p>
          </div>
          <div>
            <span className="text-gray-500">Allocated By</span>
            <p className="text-gray-900 mt-0.5">{lead.allocatedBy}</p>
          </div>
          <div>
            <span className="text-gray-500">Allocated To</span>
            <p className="text-gray-900 mt-0.5">{lead.allocatedTo}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadCard;
