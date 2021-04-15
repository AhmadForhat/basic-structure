import React from 'react'

export const cardContainer: React.CSSProperties = {
  height: "200px",
  display: "grid",
  gridTemplateRows: "1fr 10% 10%",
}

export const containerSkeleton: React.CSSProperties = {
  ...cardContainer,
  gridRowGap: "4px",
}

export const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "150px",
  objectFit: "contain",
}
