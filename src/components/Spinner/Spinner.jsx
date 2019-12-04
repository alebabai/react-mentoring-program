import React from 'react'

import style from './style.css'

export const Spinner = ({ text }) => (
    <div to="/" className={style.root}>{text}</div>
)

Spinner.defaultProps = {
    text: 'Loading...'
}

export default Spinner
