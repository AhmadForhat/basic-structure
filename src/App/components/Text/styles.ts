import themes from '../themes'

const {
    fontFamily,
    fontWeight,
    fontSize,
} = themes

const normal = {
    fontFamily: fontFamily.fontBody,
    fontWeight: fontWeight.fontWeightBody,
    fontSize: fontSize.fontSizeNormal,
}

const small = {
    fontFamily: fontFamily.fontBody,
    fontWeight: fontWeight.fontWeightBody,
    fontSize: fontSize.fontSizeSmall,
}

const muted = {
    fontFamily: fontFamily.fontBody,
    fontWeight: fontWeight.fontWeightMuted,
    fontSize: fontSize.fontSizeNormal,
}

const fontStyle = (textType: string) => {
    switch (textType) {
        case 'normal':
            return normal
        case 'small':
            return small
        case 'muted':
            return muted
        default:
            return normal;
    }
}

export default fontStyle