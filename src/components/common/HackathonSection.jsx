import styled from "styled-components";
import Button from "../common/Button.jsx";
import HumanImg from "../../assets/images/human.png";

const SectionContainer = styled.div`
width: 1440px;
margin: 0 auto;
padding: 110px 0 130px;
display: flex;
flex-direction: column;
align-items: center;
background: #fdf9ff;
box-sizing: border-box;
`;

const HeaderTitle = styled.div`
margin-top: 138px;
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

const IlustBox = styled.div`
margin-top: 100px;
width: 1000px;
height: 347px;
background: white;
border-radius: 20px;
position: relative;
overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  left: 322px;
  top: 27px;
  width: 306px;
  height: 320px;
  object-fit: cover;
`;


const ListContainer = styled.div`
margin-top: 72px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 45px;
`;

const ListItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 1099px;
height: 128px;
background: white;
color: black;
font-size: 30px;
font-weight: 400;
align-items: flex-start;
padding-left: 65px;

&:hover {
    background: #CDC1FF;
    color: white;
  }
`;

const ButtonWrapper = styled.div`
margin-top: 181px;
`;

export default function HackathonSection() {
    return (
        <SectionContainer>
            <HeaderTitle>
                <div className="dots-wrapper">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                </div>
                <div>해커톤을 대비하며,</div>
            </HeaderTitle>

            <IlustBox>
                <Img src={HumanImg} />
            </IlustBox>
            <ListContainer>
             <ListItem>
                1. 팀원과 인사를 나누어 보아요, 백엔드와 PO 트랙과도 꼭 친해지기!
             </ListItem>
             <ListItem>
                2. 기획에 대한 아이디어를 마음껏 공유해 보아요, 건전한 논쟁은 언제나 환영!
             </ListItem>
             <ListItem>
                3. 개발 분담을 본격적으로 시작해 보아요, 개발 세팅도 꼼꼼하게!
             </ListItem>
             <ListItem>
                4. 퍼블리싱 이후에는 API 연동을 해 보아요, 애매하면 무조건 팀원에게 물어보기!
             </ListItem>
            </ListContainer>

            <ButtonWrapper>
             <Button to="/subscribe">구독하기</Button>
            </ButtonWrapper>
         </SectionContainer>
    )
}