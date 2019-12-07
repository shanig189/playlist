export const addTrackCtn = {
    display: 'flex',
    flexFlow: 'column',
    margin: '1% auto',
    width: '100%',
    textAlign: 'center',
}

export const trackNotFoundCtn = {
    color: 'white',
    marginTop: '2%',
    fontSize: '20px'
}

const button = {
    height: '53px',
    borderRadius: '22px',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    color: '#ffffff',
    marginRight: '1%'
}

export const addTrackInput = {
    ...button,
    padding: '0 2%',
    position: 'relative',
    border: 'solid 2px #ffffff',
    background: 'rgba(255,255,255,0.14)',
    cursor: 'pointer',
    width: '18%',
    height: '48px',
}

export const addTrackBtn = {
    ...button,
    width: '15%',
    textTransform: 'uppercase',
    background: 'linear-gradient(to right, #2ac275, #cbdc0b, #2ac275)'
}
