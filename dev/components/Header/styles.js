import styled from "styled-components";

export const PageTitleText = styled.h2`
    font-family: OpenSansItalic;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    color: #FFFFFF;
    text-align: center;
    letter-spacing: 0.05em;
    @media (max-width: 831px) {
        font-size: 35px;
    }
`;

export const Navigation = styled.div`
    padding-top: 30px;
    height: 165px;
`;

export const NavLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    height: 101px;
    @media (max-width: 390px) {
        padding-top: 0;
    }
`;

export const NavLink = styled.div`
    font-family: OpenSansItalic;
    min-width: 30px;
    min-height: 30px;
    background: ${({ background }) => background ? '#DA3F5B' : '#1E34A5'};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavLinkValue = styled.div`
    font-family: OpenSansItalic;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
`;

export const DecorationLine = styled.div`
    width: 22%;
    height: 2px;
    background: #E8E8E8;
    opacity: 0.2;
    border-radius: 8px;
    margin-left: 8px;
    margin-right: 8px;
`;
