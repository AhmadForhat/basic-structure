import themes from '../themes'

export const container = (height?: string | number) : React.CSSProperties => ({
    display:'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection:'column',
    height: height || '320px',
    padding: '12px',
    boxShadow: themes.shadow,
})

export const containerImage = (height?: string | number) : React.CSSProperties => ({
    height: height || '450px',
    objectFit: 'cover',
    width: '100%',
    position: 'absolute',
    boxShadow: themes.shadow,
})

export const circle = (
    active?: boolean,
    size?: string | number,
    activeColor?: string,
    disableColor?: string,
) => ({
    height: size || '24px',
    width: size || '24px',
    border: 'none',
    borderRadius: '100px',
    outline:'none',
    backgroundColor:
        active
        ? activeColor || 'yellow'
        : disableColor || 'black'
})

export const containerControl = {
    display:'flex',
    justifyContent:'center',
    width: '100%'
}

export const containerNextImage = (height?: string | number) : React.CSSProperties => ({
    height: height || '300px',
    objectFit: 'cover',
    width: '10%',
})

export const containerImages = (height?: string | number) : React.CSSProperties => ({
    display: 'flex',
    justifyContent: 'space-between',
    height: height || '300px',
})