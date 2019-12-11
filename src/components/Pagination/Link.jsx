import React from 'react'
import classNames from 'classnames/bind'

import style from './style.css'

export const Link = ({ value, text = value, active, onClick }) => (
    <button className={classNames(style.link, { [style.linkActive]: active })} onClick={() => !active && onClick(value)}>{text}</button>
)

export default Link
