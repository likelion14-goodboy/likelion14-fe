import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 96px;
  background: white;
`;

const HeaderInner = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled(Link)`
  position: absolute;
  left: 583px;
  top: 29px;
  color: #4a25ed;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 25px;
  font-weight: 300;
  text-decoration: none;
  white-space: nowrap;
`;

const NavContainer = styled.div`
  position: absolute;
  left: 1100px;
  top: 22px;
  height: 51px;
  display: flex;
  align-items: center;
  gap: 91px;
`;

const Separator = styled.div`
  width: 1px;
  height: 51px;
  background-color: #4a25ed;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 62px;
`;

const NavLink = styled(Link)`
  color: #4a25ed;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 30px;
  font-weight: 300;
  text-decoration: none;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo to="/">skunivlikelion</Logo>
        <NavContainer>
          <Separator />
          <NavLinks>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/subscribe">구독하기</NavLink>
          </NavLinks>
        </NavContainer>
      </HeaderInner>
    </HeaderContainer>
  );
}
