import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../../../components/ui/pagination";

export const PaginationSection = (): JSX.Element => {
  const paginationData = [
    { page: 1, isActive: false },
    { page: 2, isActive: false },
    { page: 3, isActive: true },
    { page: 4, isActive: false },
    { page: 5, isActive: false },
  ];

  return (
    <div className="w-full flex justify-center">
      <Pagination>
        <PaginationContent className="flex items-center gap-0">
          {paginationData.map((item) => (
            <PaginationItem key={item.page}>
              <PaginationLink
                href="#"
                isActive={item.isActive}
                className={`
                  w-12 h-12 flex items-center justify-center text-lg
                  [font-family:'Proxima_Nova-Regular',Helvetica] font-normal
                  ${
                    item.isActive
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-100 text-[#22262a] hover:bg-gray-200"
                  }
                  border-0 rounded-none
                `}
              >
                {item.page}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
};
