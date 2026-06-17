import styled from "styled-components";

const TopSectionContainer = styled.div`
display: flex;
background: #4A25ED;
height: 1315px;
flex-direction: column;

`;

const GraphicImage = styled.img`
`;

const Title = styled.div`
`;


export default function TopSection({title, imgSrc}) {
    return (
        <TopSectionContainer>
            <title>{title}</title>
            <GraphicImage src={imgSrc} />
        </TopSectionContainer>
    )
}