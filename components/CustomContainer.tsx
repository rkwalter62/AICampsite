import React, { FC, PropsWithChildren } from "react";

export const CustomContainer: FC<PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => {
  return (
    <section className={`${className} container mx-auto px-4`}>
      {children}
    </section>
  );
};
