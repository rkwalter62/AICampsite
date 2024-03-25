import React, { FC, PropsWithChildren } from "react";

const HtmlContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col items-stretch min-h-mobile transition-all duration-300 scroll-thumb w-full h-full overflow-x-hidden bg-bgColor">
      {children}
    </main>
  );
};

export default HtmlContainer;
