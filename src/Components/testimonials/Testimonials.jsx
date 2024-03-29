import './testimonials.css';
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
const Testimonials = () => {

    const [selected, setselected] = useState(0);
    const tlength = testimonialsData.length;


    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text" >What They</span>
                <span>say about us</span>

                <span>
                    {testimonialsData[selected].review}
                </span>

                <span>
                    <span style={{ color: 'var(--orange)' }} >
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>


            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0 ? setselected(tlength - 1) : setselected((prev) => prev - 1);
                        }}
                        src={leftArrow} alt="" />


                    <img
                        onClick={() => {
                            selected === tlength - 1 ? setselected(0) : setselected((prev) => prev + 1);
                        }}
                        src={rightArrow} alt="" />

                </div>

            </div>
        </div>
    )
}
export default Testimonials 