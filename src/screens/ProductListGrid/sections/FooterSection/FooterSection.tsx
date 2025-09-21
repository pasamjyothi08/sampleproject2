import React from "react";
import { Separator } from "../../../../components/ui/separator";

const footerLinks = {
  information: [
    "About Us",
    "Information",
    "Privacy Policy",
    "Terms & Conditions",
  ],
  service: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"],
  myAccount: [
    "About Us",
    "Information",
    "Privacy Policy",
    "Terms & Conditions",
  ],
  ourOffers: [
    "About Us",
    "Information",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};

const paymentMethods = [
  {
    src: "/western-union.png",
    alt: "Western union",
    className: "h-6",
  },
  {
    src: "/shape-327-1.svg",
    alt: "MasterCard",
    className: "h-6",
  },
  {
    src: "/paypal.png",
    alt: "Paypal",
    className: "h-6",
  },
  {
    src: "/shape-327.svg",
    alt: "Visa",
    className: "h-6",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#bcddfd] relative">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img className="w-6 h-6" alt="Icon" src="/icon.svg" />
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#22262a] text-lg">
                E-Comm
              </h3>
            </div>
            <p className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#22262a] text-xs mb-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>

            {/* Social Media */}
            <div className="mb-6">
              <h4 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-lg mb-2">
                Follow Us
              </h4>
              <p className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#22262a] text-xs mb-4">
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className="flex gap-3">
                <img className="w-5 h-5" alt="Facebook" src="/facebook.svg" />
                <img className="w-5 h-5" alt="Twitter" src="/twitter.svg" />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-1">
            <h4 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-lg mb-4">
              Information
            </h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'Poppins',Helvetica] font-normal text-neutral-800 text-sm hover:text-[#22262a] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-lg mb-4">
              Service
            </h4>
            <ul className="space-y-2">
              {footerLinks.service.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'Poppins',Helvetica] font-normal text-neutral-800 text-sm hover:text-[#22262a] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-lg mb-4">
              My Account
            </h4>
            <ul className="space-y-2">
              {footerLinks.myAccount.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'Poppins',Helvetica] font-normal text-neutral-800 text-sm hover:text-[#22262a] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-lg mb-4">
              Our Offers
            </h4>
            <ul className="space-y-2">
              {footerLinks.ourOffers.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'Poppins',Helvetica] font-normal text-neutral-800 text-sm hover:text-[#22262a] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h4 className="[font-family:'Poppins',Helvetica] font-medium text-[#22262a] text-lg mb-2">
            Contact Us
          </h4>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#22262a] text-sm">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </p>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <img
              className="w-full h-1"
              alt="Rectangle copy"
              src="/rectangle-1-copy-35.svg"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="[font-family:'Proxima_Nova-Regular',Helvetica] font-normal text-[#c1c8ce] text-sm">
              © 2018 Ecommerce theme by www.bisenbaev.com
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            {paymentMethods.map((method, index) => (
              <img
                key={index}
                className={method.className}
                alt={method.alt}
                src={method.src}
              />
            ))}
            <div className="relative">
              <img
                className="h-6"
                alt="MasterCard background"
                src="/shape-327-1.svg"
              />
              <img
                className="absolute top-1 left-1 w-3 h-4"
                alt="MasterCard left circle"
                src="/shape-329.svg"
              />
              <img
                className="absolute top-1 right-1 w-3 h-4"
                alt="MasterCard right circle"
                src="/shape-329-1.svg"
              />
              <div className="absolute top-3 left-1 text-white text-[6px] [font-family:'Arial-Regular',Helvetica] font-normal rotate-[6.75deg]">
                MasterCard
              </div>
            </div>
            <div className="relative">
              <img className="h-6" alt="Visa background" src="/shape-327.svg" />
              <img
                className="absolute top-2 right-1 w-2 h-2"
                alt="Visa logo"
                src="/shape-328-1.svg"
              />
              <img
                className="absolute top-2 right-1 w-1 h-1"
                alt="Visa accent"
                src="/shape-328.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
