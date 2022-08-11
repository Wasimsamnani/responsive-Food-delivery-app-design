import backgroundimage from '../resources/Images/Rectangle 48.png';
import rightimage from '../resources/Images/Rectangle (5).png';
import leftimage from '../resources/Images/Rectangle (1).svg'
import './ContentMiddle.css'
function ContentMiddle() {
    return (
        <>
            <div class="image">
                <img src={backgroundimage} alt="background" style={{ width: "100%" }} />
            </div>
            <div class="over_image">
                <h3>Food app</h3>
                <h1>
                    Why stay hungry when
                </h1>
                <h1>
                    you can order form Bella Onojie
                </h1>
                <h4>Download the bella onoje’s food app now on</h4>
                <div class="Buttons">
                        <button class="background">Playstore</button>
                        <button class="t-color">App Store</button>
                </div>

            </div>
            <div class="phonesimages">

                <img class="playstoreimage" src={rightimage} alt="Playstore" />
                    <img class="appstoreimage" src={leftimage} alt="Appstore" />
            </div>
            <hr class="hr_abs" />
        </>

    )
}

export default ContentMiddle;