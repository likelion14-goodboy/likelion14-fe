import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 349px;
  height: 111px;
  background: white;
  border: 2px solid #4a25ed;
  border-radius: 100px;
  color: #4a25ed;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 35px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #4a25ed;
    color: white;
  }
`;

export default function Button({ children, onClick, to, href }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    } else if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}
