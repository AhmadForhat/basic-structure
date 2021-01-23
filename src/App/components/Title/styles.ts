import themes from '../themes'

const {
    fontFamily,
    fontWeight,
    fontSize,
} = themes

export const normal = {
    fontFamily: fontFamily.fontTitle,
    fontWeight: fontWeight.fontWeightTitle,
    fontSize: fontSize.fontSizeTitle,
}

export const small = {
    fontFamily: fontFamily.fontTitle,
    fontWeight: fontWeight.fontWeightBody,
    fontSize: fontSize.fontSizeSmall,
    textTransform: 'uppercase',
}