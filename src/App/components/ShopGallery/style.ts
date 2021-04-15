import React from 'react'

export const container: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
  gridGap: "10px",
}

export const containerCard: React.CSSProperties = {
  height: "200px",
  display: "grid",
  gridTemplateRows: "1fr 10% 10%",
}
