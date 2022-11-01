import React from 'react'

export default function ToggleButton(props) {
    const [checked, setChecked] = React.useState(true);
    
    return (
        <>
            <div className="h3 card-title with-switch">
                {props.cardTitle}
                <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id={props.id} defaultChecked={props.checked} onChange={() => setChecked(!checked)} />
                    <label className="onoffswitch-label" htmlFor={props.for}>
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
                
            </div>
        </>
    ) 
}
