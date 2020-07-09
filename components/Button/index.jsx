import React from 'react'
import styles from './button.module.css'
import PropTypes from 'prop-types'

export const Button = ({onClick, text = 'Button'}) => {
    return (
        <button onClick={onClick} className={styles.button}>{text}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
}