import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface IFabImageProps extends ImageProps {}

const FabImage: FC<IFabImageProps> = ({ ...rest }) => {
  return (
    <div className={"fab-image"}>
      <Image {...rest} />;
    </div>
  );
};

export default FabImage;
