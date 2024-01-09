import Header from '../header/Header';
import './hero.css';
import '../../App.css';

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"

const Hero = () => {
    return (

        <div className="hero">
        <div className=" blur hero-blur"></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club inthe town
                    </span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text' >SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>

                    <div><span>
                        In herewe will help you shape and build your ideal body and
                        live up your life to fullest
                    </span>
                    </div>
                </div>

                <div className="figures">

                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>

                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>

                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>

                </div>


                <div className="hero-buttons">
                    <buttons className="btn btn1">Get Started</buttons>
                    <buttons className="btn btn2">Learn More</buttons>
                </div>


            </div>


            <div className="right-h">

                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt='' />
                    <span className='heart-rate-span1' >Heart Rate</span><span className='heart-rate-span2' >116 bpm</span>
                </div>
                <img src={hero_image} alt='' className='hero-image' />
                <img src={hero_image_back} alt='' className='hero-image_back' />

                <div className="calories">
                    <img src={calories} />
                    <div>
                     <span className='calories-span1' > Calories Burnt </span>
                     <span className='calories-span2'  >220 Kcal </span>
                     </div>
                   
                </div>

            </div>
        </div>
    )
}
export default Hero;