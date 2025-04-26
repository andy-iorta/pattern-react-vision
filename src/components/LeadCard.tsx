
import { MoreVertical, Edit } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 h-10 w-10 rounded-full flex items-center justify-center font-semibold">
              {lead.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{lead.name}</h3>
                <span className="text-gray-500">#{lead.id}</span>
                {lead.isSelfSourced && (
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    Self Sourced
                  </Badge>
                )}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                <div>Created on: {lead.createdOn}</div>
                <div>Allocated on: {lead.allocatedOn}</div>
                <div>Mobile No: {lead.mobileNo}</div>
                <div>Appointment on: -</div>
                <div>Allocated By: {lead.allocatedBy}</div>
                <div>Allocated To: {lead.allocatedTo}</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadCard;
