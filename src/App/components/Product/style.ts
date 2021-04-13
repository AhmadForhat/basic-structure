import React from 'react'

export const containerSkeleton: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}

export const skeleton: React.CSSProperties = {
  marginTop: '10px'
}

export const cardContainer: React.CSSProperties = {
  height: "100%",
  display: "grid",
  gridTemplateRows: "1fr 10% 10%",
}

export const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
}
