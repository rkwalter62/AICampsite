import { Typography } from "@mui/material";
import { ElementType, FC, PropsWithChildren } from "react";

type variantType =
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "subtitle1"
  | "subtitle2"
  | "body2"
  | "overline"
  | "inherit"
  | undefined;

interface TextProps {
  className?: string;
  span?: boolean;
  color?: string;
  variant?: variantType;
  component?: ElementType;
  onClick?: () => void;
}

const CustomText: FC<PropsWithChildren<TextProps>> = ({
  span = false,
  component = "div",
  className = "",
  color = "",
  variant = "body1",
  children,
  onClick = () => {},
}) => {
  return (
    <Typography
      className={`${color ? `text-${color} ` : "text-white"} ${className}`}
      component={span ? "span" : component}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};

export default CustomText;
