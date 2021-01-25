import React from "react";
import ContentLoader from "react-content-loader";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    height?: string | number;
    width?: string | number;
    borderRadius?: string | number
}

const Skeleton = ({ 
    height,
    width,
    borderRadius 
} : SkeletonProps) => (
  <ContentLoader
    animate
    width={width}
    height={height}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect
      x="0"
      y="0"
      rx={borderRadius}
      ry={borderRadius}
      width={width}
      height={height}
    />
  </ContentLoader>
);

export default Skeleton
