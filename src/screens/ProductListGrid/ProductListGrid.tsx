import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { FilterSidebarSection } from "./sections/FilterSidebarSection/FilterSidebarSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainNavigationSection } from "./sections/MainNavigationSection/MainNavigationSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { ProductGridSection } from "./sections/ProductGridSection/ProductGridSection";

const productData = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
    rating: "/rate.png",
    image: "/image-product.png",
    backgroundImage: "/rectangle-1-copy-5.png",
    badge: "HOT",
  },
  {
    id: 2,
    name: "Nike Air Max 270 React",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
    rating: "/rate-1.png",
    image: "/image-product-1.png",
    backgroundImage: "/item.png",
    badge: "HOT",
  },
  {
    id: 3,
    name: "Nike Air Max 270 React",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
    rating: "/rate-2.png",
    image: "/image-product-2.png",
    backgroundImage: "/vector.svg",
    badge: "HOT",
  },
  {
    id: 4,
    name: "Nike Air Max 270 React",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
    rating: "/rate-4.png",
    image: "/product-picture02.png",
    backgroundImage: "/item-2.png",
    badge: "HOT",
  },
  {
    id: 5,
    name: "Nike Air Max 270 React",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
    rating: "/rate-5.png",
    image: "/product-picture03.png",
    backgroundImage: "/item-3.png",
    badge: "HOT",
  },
  {
    id: 6,
    name: "Nike Air Max 270 React",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
    rating: "/rate-3.png",
    image: "/product-picture01.png",
    backgroundImage: "/item-1.png",
    badge: "HOT",
  },
];

export const ProductListGrid = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1499px] relative">
      <HeaderSection />

      <div className="w-full h-[44px] relative">
        <img
          className="absolute w-[50px] h-full top-0 left-0"
          alt="Icon"
          src="/icon.svg"
        />
        <div className="absolute w-[124px] h-[33px] top-[4px] left-[58px] [font-family:'Poppins',Helvetica] font-bold text-[#22262a] text-2xl tracking-[0] leading-[normal]">
          E-Comm
        </div>
        <img
          className="absolute w-[31px] h-0 top-0 left-[1301px]"
          alt="Cart"
          src="/cart.png"
        />
      </div>

      <MainNavigationSection />

      <div className="flex w-full">
        <FilterSidebarSection />

        <main className="flex-1">
          <div className="grid grid-cols-3 gap-6 p-6">
            {productData.map((product) => (
              <Card
                key={product.id}
                className="relative w-full h-[407px] overflow-hidden"
              >
                <CardContent className="p-0 relative h-full">
                  {product.backgroundImage && (
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover"
                      alt="Background"
                      src={product.backgroundImage}
                    />
                  )}

                  <img
                    className="w-full h-[287px] absolute top-0 left-0 object-cover"
                    alt="Product"
                    src={product.image}
                  />

                  <div className="absolute top-0 left-0">
                    <div className="relative w-[72px] h-[34px]">
                      <img
                        className="w-[70px] h-full absolute top-0 left-0"
                        alt="Badge background"
                        src="/base.svg"
                      />
                      <Badge className="absolute top-[5px] left-[14px] bg-transparent text-white text-lg [font-family:'Proxima_Nova-Regular',Helvetica] font-normal border-0 p-0 h-auto">
                        {product.badge}
                      </Badge>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-neutraldark text-lg tracking-[0.50px] leading-[27px] mb-2">
                      {product.name}
                    </h3>

                    <img
                      className="w-[134px] h-[16px] mb-2"
                      alt="Rating"
                      src={product.rating}
                    />

                    <div className="flex items-center justify-between">
                      <div className="[font-family:'Poppins',Helvetica] font-bold text-primaryblue text-lg tracking-[0.50px] leading-[32.4px]">
                        {product.price}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-neutralgrey text-sm tracking-[0.50px] leading-[21px] line-through">
                          {product.originalPrice}
                        </span>
                        <span className="[font-family:'Poppins',Helvetica] font-bold text-primaryred text-sm tracking-[0.50px] leading-[21px]">
                          {product.discount}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <ProductGridSection />
          <NavigationBarSection />
          <PaginationSection />
        </main>
      </div>

      <FooterSection />
    </div>
  );
};
