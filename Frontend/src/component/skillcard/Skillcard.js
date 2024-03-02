import React from 'react'
import './Skillcard.css'

const Skillcard = (props) => {
    return (
        <div className="skill-card">
            <div className="skill-image">
                <img src={props.skillImage} height={50} width={50} alt="skill1" />
            </div>
            <div className="skill-name">
                <h4>{props.skillName}</h4>
            </div>
        </div>
    )
}

export default Skillcard
