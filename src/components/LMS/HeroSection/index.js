import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerImage, HeroSection } from "./HSStyledComponents";

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
            },
        },
    ],
};

const Hero = () => (
    <HeroSection>
        <Slider {...settings}>
            <div>
                <BannerImage
                    src="https://www.internetcreation.net/wp-content/uploads/2015/04/banner-web-development.png"
                    alt="Image 1"
                />
            </div>
            <div>
                <BannerImage
                    src="https://securebitin.com/wp-content/uploads/2016/07/web-designing-banner-768x258.jpg"
                    alt="Image 2"
                />
            </div>
            <div>
                <BannerImage
                    src="https://www.digitalberge.com/wp-content/uploads/2018/09/Digital_Marketing_banner.png"
                    alt="Image 3"
                />
            </div>
        </Slider>
    </HeroSection>
);

export default Hero;
