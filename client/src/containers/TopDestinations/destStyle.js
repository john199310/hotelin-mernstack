import styled from "styled-components";


export const SectionWrapper = styled.section`
    padding: 52px 0;

`;

export const CityWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;

    @media(max-width:480px){
        flex-direction:column;
    }
`;