const themes = {
  colors: {
    primary: "#222222",
    primaryAlt: "#303E4F",
    primaryAltLight1: "#4F637B",
    primaryAltLight2: "#73869E",
    gray1: "#828282",
    gray2: "#BDBDBD",
    gray3: "#E0E0E0",
    gray4: "#F2F2F2",
    secondary: "#FFE401",
    success: "#4BCA81",
    alert: "#EB5757",
    warning: "#F7BA00",
    accent: "#2D9CDB",
  },
  fontFamily: {
    title: "Rubik",
    body: "Work Sans",
  },
  fontSize: {
    // the minimum sizes are for small mobile and maximum sizes are for desktop
    xxlarge: `clamp(1.9rem, 3vw, 2.1rem)`,
    xlarge: `clamp(1.8rem, 3vw, 2.0rem)`,
    large: `clamp(1.7rem, 3vw, 1.9rem)`, // standard for title
    smallLarge: `clamp(1.6rem, 3vw, 1.8rem)`,
    largeMedium: `clamp(1.5rem, 3vw, 1.7rem)`,
    medium: `clamp(1.4rem, 3vw, 1.6rem)`, // standard for body
    smallMedium: `clamp(1.3rem, 3vw, 1.5rem)`,
    small: `clamp(1.2rem, 3vw, 1.4rem)`,
    xsmall: `clamp(1.1rem, 3vw, 1.3rem)`,
    xxsmall: `clamp(1rem, 3vw, 1.2rem)`,
  },
  fontWeight: {
    title: 500,
    body: 400,
    muted: 300,
  },
  gradient: {
    primary: `linear-gradient(#3A3A3A 10%, #333 30%, #222 60%, #000)`,
    secondary:
      "linear-gradient(rgb(240, 240, 240) 10%, rgb(245, 245, 245) 30%, rgb(250, 250, 250) 60%, rgb(255, 255, 255))",
    warning: "linear-gradient(#BA3A3A 10%, #B33 30%, #B22 60%, #800)",
  },
  shadow: {
    primary: `0px 5px 15px -4px rgba(34,34,34,0.45), 0px 5px 15px -4px rgba(34,34,34,0.40), 
    0px 5px 15px -4px rgba(34,34,34,0.35), 0px 5px 15px -4px rgba(34,34,34,0.30)`,
    secondary: `rgba(34, 34, 34, 0.4) 0px 2px 11px -3px`,
  },
}

export default themes
