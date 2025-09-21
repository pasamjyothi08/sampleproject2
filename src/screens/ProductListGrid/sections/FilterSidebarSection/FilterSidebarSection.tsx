import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FilterSidebarSection = (): JSX.Element => {
  const hotDealsData = [
    { name: "Nike", count: "2", isActive: false },
    { name: "Airmax", count: "48", isActive: true },
    { name: "Nike", count: "14", isActive: false },
    { name: "Adidas", count: "15", isActive: false },
    { name: "Vans", count: "23", isActive: false },
    { name: "All Stars", count: "1", isActive: false },
    { name: "Adidas", count: "95", isActive: false },
  ];

  const brandData = [
    { name: "Nike", count: "99", isActive: false },
    { name: "Nike", count: "99", isActive: true },
    { name: "Adidas", count: "99", isActive: false },
    { name: "Siemens", count: "99", isActive: false },
  ];

  const colors = [
    { color: "bg-blue-500" },
    { color: "bg-red-500" },
    { color: "bg-yellow-500" },
    { color: "bg-green-500" },
    { color: "bg-purple-500" },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="w-full">
        <CardContent className="p-6">
          <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-xl mb-4">
            Hot Deals
          </h3>
          <div className="space-y-3">
            {hotDealsData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span
                  className={`[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-lg ${
                    item.isActive ? "text-[#33a0ff]" : "text-neutral-800"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-lg ${
                    item.isActive
                      ? "text-[#33a0ff]"
                      : "text-[#22262a] opacity-35"
                  }`}
                >
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="p-6">
          <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-xl mb-4">
            PRICES
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-neutral-800 text-lg">
                Ranger:
              </span>
              <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#22262a] text-lg">
                $13.99 - $25.99
              </span>
            </div>
            <img className="w-full h-auto" alt="Slider" src="/slider.png" />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="p-6">
          <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-xl mb-4">
            COLOR
          </h3>
          <img className="w-full h-auto" alt="Colors" src="/colors.png" />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="p-6">
          <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-xl mb-4">
            BRAND
          </h3>
          <div className="space-y-3">
            {brandData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span
                  className={`[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-lg ${
                    item.isActive ? "text-[#33a0ff]" : "text-neutral-800"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-lg ${
                    item.isActive
                      ? "text-[#33a0ff]"
                      : "text-[#22262a] opacity-35"
                  }`}
                >
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="p-6 flex justify-center">
          <Button
            variant="ghost"
            className="[font-family:'Poppins',Helvetica] font-medium text-neutral-800 text-xl h-auto p-0"
          >
            MORE
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
