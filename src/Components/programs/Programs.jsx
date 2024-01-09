

import './programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
    return (
        <div id="programs" className="Programs">
            {/* {programs header} */}



            <div className="programs-header">
                <span className='stroke-text' >explore our</span>
                <span>programs</span>
                <span className='stroke-text' >to shape</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>

                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt='' />
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}
export default Programs

// 1
// 5
// 16
