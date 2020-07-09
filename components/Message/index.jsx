import React from 'react'
import styles from './message.module.css'
import PropTypes from 'prop-types';

export const Message = ({
    status = ''
}) => {
    const setStyle = (style) => {
        if (style === 'error') {
            return styles.error
        } else if (style === 'success') {
            return styles.success
        } else {
            return null
        }
    }
    return (
        <p className={
            `${
                styles.message
            } ${
                setStyle(status)
            }`
        }>Hello World</p>
    )
}

Message.propTypes = {
    status: PropTypes.oneOf(
        ['error', 'success', '']
    )
}
