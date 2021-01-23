import React, { FC, lazy } from "react";
import type * as Images from "./Images";

interface ImageProps extends Images.ImageProps {
  name: keyof typeof Images;
}

const ImageLoader = (name: keyof typeof Images) =>
  lazy(() => import(`./Images/${name}`));

const Image: FC<ImageProps> = ({ name, ...rest }) => {
  return (
    <React.Suspense fallback={<div />}>
      {React.createElement(ImageLoader(name), rest)}
    </React.Suspense>
  );
};

export default Image