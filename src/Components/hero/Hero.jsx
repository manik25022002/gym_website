import Header from '../header/Header';
import './hero.css';
const Hero = () => {
    return (

        <div className="hero">
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club inthe town
                    </span>
                </div>

                <div className="hero-text">
                    <div>
                        <span>SHAPE</span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div><span>
                        In herewe will help you shape and build
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
    <buttons className="btn">Get Started</buttons>
    <buttons className="btn">Learn More</buttons>
</div>

            </div>

            <div className="right-h">right side</div>
        </div>
    )
}
export default Hero;