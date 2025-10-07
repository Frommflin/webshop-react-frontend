import React from 'react'
import  styles  from './Input.module.css'

const Input = ({ type, value, onChange, placeholder, disabled = false, className }) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`${styles.inputField} ${className || ''}`}
            />

        </div>
    )
}

export default Input
