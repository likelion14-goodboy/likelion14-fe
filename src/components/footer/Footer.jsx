import styled from "styled-components";
import SkonIcon from "../../assets/skon_icon.svg";
import SkuIcon from "../../assets/sku_icon.svg";

const FooterContainer = styled.footer`
`;

const LeftSection = styled.div`
`;

const RightSection = styled.div`
`;

export default function Footer() {
    return (
        <FooterContainer>
            <LeftSection>
                <SkuIcon src={SkuIcon}/>
            </LeftSection>

            <RightSection>
                <SkonIcon src={SkonIcon}/>
            </RightSection>
        </FooterContainer>
    );
}