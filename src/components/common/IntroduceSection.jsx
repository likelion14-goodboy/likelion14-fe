import styled from "styled-components";
import MemberPhoto from "../../assets/images/MemberPhoto.jpg";

const SectionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const QuestionTitle = styled.div`
margin-top: 122px;
color: #4A25ED;
font-size: 75px;
font-weight: 600;
display: flex;
flex-direction: column;
align-items: center;

.dots-wrapper {
display: flex;
flex-direction: column;
margin-top: 42px;
margin-bottom: 51px;
gap: 37px;
}

.dot{
font-size: 75px;
width: 14px;       
height: 14px;      
background-color: #4A25ED;
border-radius: 50%;
}
`;

const IntroBox = styled.div`
width: 1051px;
height: 349px;
color: #B6B6B6;
font-size: 30px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: #F5F5F5;
padding-left: 318px;
padding-right: 318px;
padding-top: 138px;
padding-bottom: 138px;
margin-top: 88px;
`;

const CardContainer = styled.div`
display: flex;
flex-direction: row;
gap: 88px;
margin-top: 88px;
margin-bottom: 305px;
`;

const MemberCard = styled.div`
width: 300px;
height: 293px;
background: #4A25ED;
border-radius: 20px;
background-image: ${props => props.img ? `url(${props.img})` : "none"};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
&:active {
background: #391DC5;
transform: scale(1.0);
background-image: ${props => props.img 
      ? `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${props.img})` 
      : "none"
  };
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

export default function IntroduceSection() {
    return (
        <SectionContainer>
            <QuestionTitle>
                Q1
                <div className="dots-wrapper">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                </div>
                <div>프론트엔드에 대하여</div>
            </QuestionTitle>

            <IntroBox>
                (본인 팀원 자기소개 자유롭게 적기)
            </IntroBox>

            <CardContainer>
             <MemberCard img={MemberPhoto} />
             <MemberCard />
             <MemberCard />
            </CardContainer>
        </SectionContainer>
    )
}