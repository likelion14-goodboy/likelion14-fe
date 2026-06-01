import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const HeaderTitle = styled.div`
  color: #4a25ed;
  font-size: 25px;
  font-family: Pretendard Variable;
  font-weight: 300;
  margin: 29px 269px 37px 584px;
  word-wrap: break-word;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 91px;
  display: inline-flex;
`;
const NavBtn = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 62px;
  display: flex;
`;
const Btn = styled.span`
  color: #4a25ed;
  font-size: 30px;
  font-family: Pretendard Variable;
  font-weight: 300;
  word-wrap: break-word;
`;

export default function Header() {
  const Title = "skunivlikelion";

  return (
    <HeaderContainer>
      <HeaderTitle>{Title}</HeaderTitle>
      <BtnContainer>
        <div></div>
        <NavBtn>
            <Btn>홈</Btn>
            <Btn>구독하기</Btn>
        </NavBtn>
      </BtnContainer>
    </HeaderContainer>
  );
}
