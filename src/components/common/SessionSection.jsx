import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import humanImg from "../../assets/images/human.png";
import leftArrow from "../../assets/icons/left_arrow.svg";
import rightArrow from "../../assets/icons/right_arrow.svg";

const SESSION_GROUPS = [
  ["1주차 세션", "2주차 세션", "3주차 세션"],
  ["4주차 세션", "5주차 세션", "6주차 세션"],
  ["7주차 세션", "8주차 세션", "9주차 세션"],
];

const Section = styled.section`
  width: 1440px;
  margin: 0 auto;
  padding: 110px 0 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fdf9ff;
  box-sizing: border-box;
`;

const DotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dot = styled.span`
  color: #4a25ed;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 75px;
  font-weight: 600;
  line-height: 35px;
  display: block;
`;

const Heading = styled.h2`
  color: #4a25ed;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 75px;
  font-weight: 600;
  margin: 89px 0 0;
  text-align: center;
`;

const ImageCard = styled.div`
  width: 1000px;
  height: 347px;
  background: white;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  margin-top: 71px;
`;

const HumanImg = styled.img`
  position: absolute;
  left: 322px;
  top: 27px;
  width: 306px;
  height: 320px;
  object-fit: cover;
`;

const CardsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
  margin-top: 118px;
`;

const CardsRow = styled.div`
  display: flex;
  gap: 62px;
`;

const Card = styled.div`
  width: 347px;
  height: 221px;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardText = styled.span`
  color: #4a25ed;
  font-family: "Pretendard", sans-serif;
  font-size: 35px;
  font-weight: 500;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

const ArrowIcon = styled.img`
  width: 23px;
  height: 47px;
`;

const ButtonWrapper = styled.div`
  margin-top: 585px;
`;

export default function SessionSection({ onJoin }) {
  const [groupIndex, setGroupIndex] = useState(0);
  const currentGroup = SESSION_GROUPS[groupIndex];

  const handlePrev = () => setGroupIndex((prev) => prev - 1);
  const handleNext = () => setGroupIndex((prev) => prev + 1);

  return (
    <Section>
      <DotsWrapper>
        <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot>
      </DotsWrapper>
      <Heading>이전 세션 자료들을 복습해요!</Heading>
      <ImageCard>
        <HumanImg src={humanImg} alt="human" />
      </ImageCard>
      <CardsArea>
        <ArrowButton
          $visible={groupIndex > 0}
          onClick={handlePrev}
          aria-label="이전 세션 보기"
        >
          <ArrowIcon src={leftArrow} alt="이전" />
        </ArrowButton>
        <CardsRow>
          {currentGroup.map((label) => (
            <Card key={label}>
              <CardText>{label}</CardText>
            </Card>
          ))}
        </CardsRow>
        <ArrowButton
          $visible={groupIndex < SESSION_GROUPS.length - 1}
          onClick={handleNext}
          aria-label="다음 세션 보기"
        >
          <ArrowIcon src={rightArrow} alt="다음" />
        </ArrowButton>
      </CardsArea>
      <ButtonWrapper>
        <Button onClick={onJoin}>가입하기</Button>
      </ButtonWrapper>
    </Section>
  );
}
