import { FC } from "react";

type CustomImageProps = {
  className?: string;
  alt: string;
  src: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
};

const CustomImage: FC<CustomImageProps> = ({
  className = "",
  src = "",
  alt = "timata",
  width = "100%",
  height = "100%",
  onClick = () => {},
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export default CustomImage;
