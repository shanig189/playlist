export const searchAndFilterCtn = {
    textAlign: 'center',
    margin: '1% auto'
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

const searchAndFilterBtns = {
    ...button,
    padding: '0 2%',
    position: 'relative',
    border: 'solid 2px #ffffff',
    background: 'rgba(255,255,255,0.14)',
    cursor: 'pointer',
}

export const searchBtn = {
    ...searchAndFilterBtns,
    width: '18%',
    height: '48px'
}

export const filterBtn = {
    ...searchAndFilterBtns,
    width: '20%',
}

export const playlistBtn = {
    ...button,
    width: '14%',
    textTransform: 'uppercase',
    background: 'linear-gradient(to right, #2ac275, #cbdc0b, #2ac275)'
}
