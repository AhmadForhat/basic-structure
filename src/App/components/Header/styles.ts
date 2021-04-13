import React from "react"

export const container: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridColumnGap: "5px",
}

export const iconStyle: React.CSSProperties = {
  cursor: "pointer",
}

export const titleStyle: React.CSSProperties = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}
