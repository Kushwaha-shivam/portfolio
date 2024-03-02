import React from 'react'
 import './Skills.css'
import Skillcard from '../../component/skillcard/Skillcard'
import skillImage1 from '../../images/html.png';
import skillImage2 from '../../images/css.png';
import skillImage3 from '../../images/bootstrap.png';
import skillImage4 from '../../images/tailwind.png';
import skillImage5 from '../../images/js.png';
import skillImage6 from '../../images/reactjs.png';
import skillImage7 from '../../images/nextjs.png';
import skillImage8 from '../../images/nodejs.png';
import skillImage9 from '../../images/expressjs.png';
import skillImage11 from '../../images/mongodb.png';

const Skills = () => {
  return (
    <>
      <div className="skill-section">
        <div className="skill-header">
          <h1>My Skills</h1>
          <p>Continue working on my skills</p>
        </div>
        <div className="skill-container">
          <Skillcard skillName={'HTML'} skillImage={skillImage1} />
          <Skillcard skillName={'CSS'} skillImage={skillImage2} />
          <Skillcard skillName={'BootStrap'} skillImage={skillImage3} />
          <Skillcard skillName={'Tailwind'} skillImage={skillImage4} />
          <Skillcard skillName={'JavaScript'} skillImage={skillImage5} />
          <Skillcard skillName={'ReactJs'} skillImage={skillImage6} />
          <Skillcard skillName={'NextJs'} skillImage={skillImage7} />
          <Skillcard skillName={'NodeJs'} skillImage={skillImage8} />
          <Skillcard skillName={'ExpressJs'} skillImage={skillImage9} />
          <Skillcard skillName={'MongoDB'} skillImage={skillImage11} />
        </div>
      </div >
    </>
  )
}

export default Skills