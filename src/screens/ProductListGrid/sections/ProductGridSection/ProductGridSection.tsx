import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProductGridSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <Card className="bg-gradient-to-r from-cyan-400 to-blue-500 border-0 rounded-lg overflow-hidden">
        <CardContent className="p-0 relative min-h-[200px] md:min-h-[300px]">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 lg:p-12">
            <div className="flex-1 space-y-4 md:space-y-6 text-white mb-6 md:mb-0">
              <h2 className="[font-family:'Poppins',Helvetica] font-medium text-2xl md:text-3xl lg:text-4xl leading-tight">
                Adidas Men Running
                <br />
                Sneakers
              </h2>

              <p className="[font-family:'Poppins',Helvetica] font-normal text-sm md:text-base opacity-90 max-w-md">
                Performance and design. Taken right to the edge.
              </p>

              <div className="pt-2">
                <Button
                  variant="ghost"
                  className="[font-family:'Poppins',Helvetica] font-semibold text-xs text-white hover:text-white hover:bg-white/10 p-0 h-auto bg-transparent border-0"
                >
                  <div className="flex flex-col items-start">
                    <span className="whitespace-nowrap">SHOP NOW</span>
                    <div className="w-full h-0.5 bg-white mt-1"></div>
                  </div>
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <img
                className="w-[200px] md:w-[250px] lg:w-[300px] h-auto object-contain"
                alt="Shoes shoe png"
                src="/shoes-shoe-png-transparent-shoe-images-pluspng-17-1.png"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
