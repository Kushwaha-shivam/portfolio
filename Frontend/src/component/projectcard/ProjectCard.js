import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    return (
        <>
            <Link id='project-link' to={props.app_url} target='_blank'>
                <div className="project-card">
                    <div className="card-image">
                        <img height={100} width={100} src={props.img} alt="" />
                    </div>
                    <div className="card-content">
                        <h3>{props.projectName}</h3>
                        <p>{props.projectDetail}</p>
                        <Link to={props.code_url} target='_blank'>
                            <button className='source_code_btn'>Source Code</button>
                        </Link>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProjectCard
