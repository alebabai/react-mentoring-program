import React from 'react'

export const ErrorBox = ({ message, description }) => (
    <div className="error-box">
        <h1 className="error-box-message">{message}</h1>
        <p className="error-box-description">{description}</p>
    </div>
)

export default ErrorBox
