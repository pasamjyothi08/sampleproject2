import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const MainNavigationSection = (): JSX.Element => {
  const navigationItems = [
    { label: "HOME", isActive: true },
    { label: "BAG", isActive: false },
    { label: "SNEAKERS", isActive: false },
    { label: "BELT", isActive: false },
    { label: "CONTACT", isActive: false },
  ];

  return (
    <div className="w-full flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-16">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={`[font-family:'Poppins',Helvetica] font-medium text-xl tracking-[0] leading-[normal] cursor-pointer hover:text-[#33a0ff] transition-colors ${
                  item.isActive ? "text-[#33a0ff]" : "text-[#22262a]"
                }`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
