import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import TopSection from "../components/common/TopSection";
import CollabSection from "../components/common/CollabSection";
import SessionSection from "../components/common/SessionSection";
import letterImg from "../assets/images/letter.png";

const LetterImg = styled.img`
  width: 451px;
  height: 474px;
  transform: rotate(-0.19deg);
`;

export default function Subscribe() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleJoin = () => {
    window.open("https://skulikelion.com", "_blank");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <TopSection imageContent={<LetterImg src={letterImg} alt="letter" />}>
        <span className="sub-title">매주 만나는</span>
        <span className="main-title">멋쟁이사자</span>
        <span className="point-text"> 뉴스레터.</span>
      </TopSection>
      <CollabSection />
      <SessionSection onJoin={handleJoin} />
    </>
  );
}
