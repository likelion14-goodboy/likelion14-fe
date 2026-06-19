import styled from "styled-components";

const Section = styled.section`
  width: 1440px;
  margin: 0 auto;
  padding: 130px 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-sizing: border-box;
`;

const SectionLabel = styled.p`
  color: #4a25ed;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 75px;
  font-weight: 600;
  margin: 0;
  line-height: 1;
  text-align: center;
`;

const DotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
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
  margin: 0;
  margin-top: 130px;
  text-align: center;
`;

const CardsRow = styled.div`
  display: flex;
  gap: 62px;
  margin-top: 88px;
`;

const Card = styled.div`
  width: 347px;
  height: 221px;
  background: #fdf9ff;
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

const DescContainer = styled.div`
  width: 894px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 146px;
`;

const DescText = styled.p`
  color: #000;
  font-family: "Pretendard", sans-serif;
  font-size: 30px;
  font-weight: 500;
  text-align: ${({ $align }) => $align || "center"};
  margin: 0;
  width: 100%;
`;

const Bold = styled.strong`
  font-weight: 700;
`;

export default function CollabSection() {
  return (
    <Section>
      <SectionLabel>Q2</SectionLabel>
      <DotsWrapper>
        <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot>
      </DotsWrapper>
      <Heading>협업, 어떻게 하나요?</Heading>
      <CardsRow>
        <Card>
          <CardText>Component</CardText>
        </Card>
        <Card>
          <CardText>Teamwork</CardText>
        </Card>
        <Card>
          <CardText>Milestone</CardText>
        </Card>
      </CardsRow>
      <DescContainer>
        <DescText>
          우선, 비슷한 디자인과 기능을 하는 최소 단위를 찾는 것이 중요해요!
        </DescText>
        <DescText>
          팀원끼리 <Bold>컴포넌트</Bold>를 분담하고 작업하는 걸 추천합니다.
        </DescText>
        <DescText>
          당연히, <Bold>팀워크</Bold> 요소도 빠질 수 없겠죠?
        </DescText>
        <DescText>
          브랜치나 함수 명명 규칙, 협업 전략에 대해 고민하는 시간을 가져야 합니다!
        </DescText>
        <DescText>
          <Bold>마일스톤을</Bold> 철저히 지키고 의견 공유를 하는 것도 중요한데요,
        </DescText>
        <DescText $align="left">
          특히, 퍼블리싱과 API 연동을 하는 텀이 촉박할 수 있어서 부지런해야 합니다.
        </DescText>
      </DescContainer>
    </Section>
  );
}
