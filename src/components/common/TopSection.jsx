import styled from "styled-components";

const TopSectionContainer = styled.div`
display: flex;
flex-direction: column;
background: #4A25ED;
height: 1315px;
align-items: center;
justify-content: center;
`;

const Title = styled.div`
text-align: center;
.sub-title {
color: white;
font-size: 90px;
font-weight: 600;
display: block;
}

.main-title {
color: #FF8BD4;
font-size: 120px;
font-weight: 600;
}

.point-text {
color: white;
font-size: 120px;
font-weight: 600;
}
`;

export default function TopSection({children, imageContent}) {
    return (
        <TopSectionContainer>
            <Title>{children}</Title>
            <div>{imageContent}</div>
        </TopSectionContainer>
    )
}