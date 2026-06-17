import styled from "styled-components";
import SkonIcon from "../../assets/icons/skon_icon.svg";
import SkuIcon from "../../assets/icons/sku_icon.svg";

const FooterContainer = styled.footer`
position: fixed;
left: 0;           
right: 0;
bottom: 0;
display: flex;
justify-content: space-between;
align-items: center;
background: #4A25ED;
height: 270px;
padding: 0 100px;
`;

const SkuIconTag = styled.img`
width: 636px;
height: 84px;
`;

const SkonIconTag = styled.img`
width: 105px;
height: 179px;
`;

export default function Footer() {
    return (
        <FooterContainer>
                <SkuIconTag src={SkuIcon} />
            
                <SkonIconTag src={SkonIcon} />
        </FooterContainer>
    );
}