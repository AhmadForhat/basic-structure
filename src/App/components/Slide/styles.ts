import themes from '../themes'

export const container : React.CSSProperties = {
    width: '100%',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    boxShadow: themes.shadow,
    backgroundColor: 'white',
}

export const containerList : React.CSSProperties = {
    margin: 0,
    height: '100%',
    listStyle: 'none',
    cursor: 'pointer',
}

export const list : React.CSSProperties = {
    display: 'inline-block',
    margin: '10px 10px 10px 0',
}

export const firstItem : React.CSSProperties = {
    display: 'inline-block',
    margin: '10px',
}

export const card : React.CSSProperties = {
    width: '200px',
}