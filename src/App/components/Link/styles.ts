import themes from '../themes'

const {
    fontFamily,
    fontWeight,
    fontSize,
    colors,
} = themes

export const normal = {
    fontFamily: fontFamily.fontTitle,
    fontWeight: fontWeight.fontWeightTitle,
    fontSize: fontSize.fontSizeLink,
    textDecoration: 'none',
    color: colors.primaryColor,
    display: 'flex',
    alignItens: 'center',
}

export const disable = {
    fontFamily: fontFamily.fontTitle,
    fontWeight: fontWeight.fontWeightTitle,
    fontSize: fontSize.fontSizeLink,
    textDecoration: 'none',
    color: colors.grayColor1,
    display: 'flex',
    alignItens: 'center',
    cursor: 'default'
}