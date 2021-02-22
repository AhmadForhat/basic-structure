import React, { Suspense, FC, lazy } from "react";
import Skeleton from 'react-loading-skeleton';

import type * as Images from "./Images";

interface ImageProps extends Images.ImageProps {
  name: keyof typeof Images;
}

const ImageLoader = (name: keyof typeof Images) =>
  lazy(() => import(`./Images/${name}`));

const Image: FC<ImageProps> = ({ name, ...rest }) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height="250px" />}>
      {
        React.createElement(ImageLoader(name), rest)
      }
    </Suspense>
  );
};

export default Image