
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

const FilterControls = () => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <div className="flex gap-4 items-center">
        <Button variant="outline" className="border-gray-300">
          Self
        </Button>
        <Button variant="outline" className="border-gray-300">
          Team
        </Button>
      </div>

      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Hierarchy" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="h1">Hierarchy 1</SelectItem>
          <SelectItem value="h2">Hierarchy 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Circle Manager" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="m1">Manager 1</SelectItem>
          <SelectItem value="m2">Manager 2</SelectItem>
        </SelectContent>
      </Select>

      <div className="ml-auto flex gap-2">
        <Button className="bg-blue-500 hover:bg-blue-600">
          Allocate
        </Button>
        <Button variant="outline" className="border-gray-300">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>
    </div>
  );
};

export default FilterControls;
