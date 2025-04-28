
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, UserPlus, User, Users } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const FilterControls = () => {
  const [view, setView] = useState<"self" | "team">("self");

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <ToggleGroup 
          type="single" 
          value={view} 
          onValueChange={(value) => value && setView(value as "self" | "team")}
          className="bg-white rounded-full p-1 border border-[#033089]"
        >
          <ToggleGroupItem 
            value="self" 
            aria-label="Self view"
            className="data-[state=on]:bg-[#003366] data-[state=on]:text-white rounded-full px-4 py-2 transition-all duration-300"
          >
            <User className="mr-2 h-4 w-4" />
            Self
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="team" 
            aria-label="Team view"
            className="data-[state=on]:bg-[#003366] data-[state=on]:text-white rounded-full px-4 py-2 transition-all duration-300"
          >
            <Users className="mr-2 h-4 w-4" />
            Team
          </ToggleGroupItem>
        </ToggleGroup>

        {view === "team" && (
          <div className="flex flex-col md:flex-row gap-4">
            <Select>
              <SelectTrigger className="w-[200px] bg-white">
                <SelectValue placeholder="Select Hierarchy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="h1">Hierarchy 1</SelectItem>
                <SelectItem value="h2">Hierarchy 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[200px] bg-white">
                <SelectValue placeholder="Circle Manager" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="m1">Manager 1</SelectItem>
                <SelectItem value="m2">Manager 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="flex gap-2 w-full md:w-auto">
        <Button 
          className="flex-1 md:flex-none bg-[#033089] hover:bg-[#033089]/90 text-white rounded-full"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Allocate
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 md:flex-none border-[#033089] text-[#033089] hover:bg-[#033089]/10 rounded-full"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>
    </div>
  );
};

export default FilterControls;
