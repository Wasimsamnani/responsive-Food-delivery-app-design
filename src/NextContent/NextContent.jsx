import './NextContent.css'
import phoneimage from '../resources/Images/login.png';
import Explore from '../resources/Images/Explore(1).png';
import Payment from '../resources/Images/Payment(1).png';
import background from '../resources/Images/background.png'
import tweeter from '../resources/Images/tweter.png';
import facebook from '../resources/Images/facebook.png';
import instagram from '../resources/Images/instagram.png'
import instagram1 from '../resources/Images/instagram(1).png'
import logo from '../resources/Images/Bella Olonje logo 111 1.svg'

function NextContent({ img, info1, info2, info3 }) {
    return (
        <>
            <div class="main_content">
                <p align="center" class="w-100">How the app works</p>
                <div class="content">
                    <div class="imageofphone">
                        <img src={phoneimage} alt="login_image_help" />
                    </div>
                    <div class="info">
                        <p class="color_red">Create an account</p>
                        <p class="weight-700">Create / login to an existing
                            account to get started</p>
                        <p class="vw">An account is created with your email
                            and a desired password</p>
                    </div>
                </div>
                {/* second section */}
                <div class="content special-flex" Style="flex-direction:row-reverse">
                    <div class="imageofphone">
                        <img src={Explore} alt="Explore_app" />
                    </div>
                    <div class="info">
                        <p class="color_red">Explore varieties</p>
                        <p class="weight-700">Shop for your favorites
                            meal as e dey hot.</p>
                        <p class="vw">Shop for your favorite meals or drinks
                            and enjoy while doing it.</p>
                    </div>
                </div>
                {/* Section three */}
                <div class="content" >
                    <div class="imageofphone width" >
                        <img src={Payment} alt="login_image_help" />
                    </div>
                    <div class="info">
                        <p class="color_red">Checkout</p>
                        <p class="weight-700">When you done check out
                            and get it delivered.</p>
                        <p class="vw">When you done check out and get it
                            delivered with ease.</p>
                    </div>
                </div>
                {/* background image */}
                <div class="background_img">
                    <img src={background} alt="background_img" />
                    <div class="content_overimage">
                    <h1 >Download the app now.</h1>
                    <h4>Available on your favorite store. Start your premium experience now</h4>
                    <button class="background">Playstore</button>
                    <button class="special-btn">Appstore</button>
                </div>
                </div>
               
                {/* footer */}
                <div class="footer_main">
                    <div class="logo">
                    <img src={logo} alt="logo" />
                    </div>
                    <div class="icons">
                        <img src={tweeter} alt="tweeter_image_logo_link" />
                        <img src={facebook} alt="facebook_image_logo_link" />
                        <img src={instagram1} alt="instagram_image_logo_link" />
                    </div>
                    <p>Copywright 2020 Bella Onojie.com</p>
                </div>
            </div>
        </>
    )
}

export default NextContent;