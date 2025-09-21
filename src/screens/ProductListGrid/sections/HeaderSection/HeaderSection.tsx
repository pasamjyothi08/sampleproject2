import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full relative bg-transparent">
      <Separator className="absolute bottom-0 left-0 w-full" />

      <div className="flex justify-end items-center h-16 pr-4">
        <div className="flex items-center gap-4">
          <span className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-neutral-800 text-xl tracking-[0] leading-[normal]">
            Items
          </span>
          <span className="opacity-50 [font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-neutral-800 text-xl tracking-[0] leading-[normal]">
            $0.00
          </span>
        </div>
      </div>
    </header>
  );
};
