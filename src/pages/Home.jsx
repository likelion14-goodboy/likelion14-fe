import styled from "styled-components";
import TopSection from "../components/common/TopSection";
import IntroduceSection from "../components/common/IntroduceSection";
import HomeSwitchImg from "../assets/images/button_image.svg";
import HomeWheelImg from "../assets/images/wheel_image.svg";

const HomeContainer = styled.div`
`;

const HomeImageContainer = styled.div`
margin-top: 32px;
position: relative;
`;

const Switch = styled.img`
width: 591px;
height: 624px;
`;

const Wheel = styled.img`
position: absolute;
top: 50px;
right: -98px;
width: 230px;
height: 240px;
`;

export default function Home() {
    return (
        <HomeContainer>
            <TopSection
            imageContent={
                <HomeImageContainer>
                    <Switch src={HomeSwitchImg} />
                    <Wheel src={HomeWheelImg} />
                </HomeImageContainer>
             }
            >
             <span className="sub-title">월요일에 만나는</span>
             <span className="main-title">프론트엔드 </span>
             <span className="point-text">한 스푼.</span>
            </TopSection>
            <IntroduceSection />
        </HomeContainer>
    );
}