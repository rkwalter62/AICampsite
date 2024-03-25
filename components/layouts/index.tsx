import { Breakpoint } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import HtmlContainer from "./HtmlContainer";

interface LayoutProps {
  noHeader?: boolean;
  maxWidth?: Breakpoint;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  noHeader = false,
  maxWidth = "lg",
  children,
}) => {
  return (
    <HtmlContainer>
      {!noHeader && <Header maxWidth={maxWidth} />}
      <div>{children}</div>
      <Footer />
    </HtmlContainer>
  );
};

export default Layout;
