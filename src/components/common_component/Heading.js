import React from 'react'

export default function Heading(props) {
    return (
        <>
            <h3 className="account-title">{props.title}</h3>
            <p className="account-subtitle">{props.subtitle}</p>
        </>
    )
}
