import { Feature } from "@/components/sections//about

const DemoOne = () => {
  return (
    <Feature 
      title="Blocks built with Shadcn & Tailwind"
      description="Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project."
      imageSrc="https://shadcnblocks.com/images/block/placeholder-1.svg"
      imageAlt="placeholder hero"
      buttonPrimary={{
        label: "Get Started",
        href: "https://shadcnblocks.com"
      }}
    />
  );
};

export { DemoOne };
