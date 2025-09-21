import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const NavigationBarSection = (): JSX.Element => {
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "price", label: "Price" },
    { value: "date", label: "Date" },
  ];

  const showOptions = [
    { value: "12", label: "12" },
    { value: "24", label: "24" },
    { value: "48", label: "48" },
  ];

  return (
    <div className="w-full relative bg-white border border-gray-200 rounded-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#22262a] text-base">
          13 Items
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#22262a] text-base">
              Sort By
            </span>
            <Select defaultValue="name">
              <SelectTrigger className="w-[120px] h-[38px] border border-gray-200 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#22262a] text-base">
              Show
            </span>
            <Select defaultValue="12">
              <SelectTrigger className="w-[80px] h-[38px] border border-gray-200 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {showOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-1">
            <img
              className="w-[29px] h-[29px]"
              alt="Switch"
              src="/switch-1.png"
            />
            <img className="w-[29px] h-[29px]" alt="Switch" src="/switch.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
