import { Typography } from "@mui/material";
import logo from "assets/logo/logo.png";
import { FC } from "react";
import { APP_NAME } from "theme/varialble";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";

interface LogoProps {
  size?: string;
  className?: string;
  target?: string;
  href?: string;
  variant?: string;
  textColor?: string;
}

const Logo: FC<LogoProps> = ({
  target = "_self",
  href = "/",
  className = "",
  size = "medium",
  variant = "image",
  textColor = "white",
}) => {
  const width =
    size === "tiny"
      ? 48
      : size === "small"
      ? 96
      : size === "medium"
      ? 144
      : 192;
  return (
    <div className="flex items-center justify-between">
      <CustomLink href={href} target={target}>
        <div className={className}>
          {variant === "image" ? (
            <CustomImage
              src={logo}
              alt="timata logo"
              width={width}
              height={width}
            />
          ) : (
            <Typography
              className={`text-${textColor} font-bold`}
              variant="h4"
              component="div"
            >
              {APP_NAME}
            </Typography>
          )}
        </div>
      </CustomLink>
    </div>
  );
};

export default Logo;
