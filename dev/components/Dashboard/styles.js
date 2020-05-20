import styled from "styled-components";

export const Wrapper = styled.div`
    height: 727px;
    background: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
    padding-left: 56px;
    padding-right: 56px;
`;

export const Top = styled.div`
    height: 22%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    @media (max-width: 831px) {
        flex-direction: column;
        margin-top: 30px;
    }
`;

export const Center = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Bottom = styled.div`
    height: 10%;
`;

export const InputElement = styled.div`
    margin-top: ${({ marginTop }) => marginTop || '8px'};
    width: ${({ width }) => width || ''}; 
    @media (max-width: 831px) {
        width: 100%;
        margin-top: ${({ marginTopMob }) => marginTopMob};
    }   
`;

export const Title = styled.h5`
    font-family: OpenSansBold;
    font-size: 14px;
    color: #636363;
    @media (max-width: 831px) {
        font-size: 12px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
`;

export const TextInputContainer = styled.div`
    height: ${({ height }) => height || ''};
    width: ${({ width }) => width || ''};
`;

export const TextInput = styled.input`
    margin-top: 8px;
    height: 48px;
    width: ${({ width }) => width};
    background: #F9F9F9;
    border-radius: 8px;
    padding-left: 16px;
    border-color: ${({ borderColor }) => borderColor ? '#F15557' : rgba(51, 51, 51, 0.2)} ;
    background: #F9F9F9;
    border: 1px solid #F15557;
    box-sizing: border-box;
    word-break: normal;
    @media (max-width: 831px) {
        padding-left: 5px;
        padding-right: 5px;
    }
`;

export const ErrorMessage = styled.div`
    font-family: OpenSansBold;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #F15557;
    margin-top: 6px;
    @media (max-width: 831px) {
        font-size: 10px;
    }
`;

export const Star = styled.strong`
   color: #F15557;
   margin-left: 8px;
   visibility: ${({ visibility }) => visibility || false};
`;

export const TextArea = styled.textarea`
    margin-top: 8px;
    height: ${({ height }) => height || ''};
    width: ${({ width }) => width};
    background: #F9F9F9;
    border-radius: 8px;
    border-color: ${({ borderColor }) => borderColor ? '#F15557' : rgba(51, 51, 51, 0.2)} ;
    padding-left: 16px;
    padding-top: 14px;
`;

export const UploadContainer = styled.div`
    min-height: 48px;
    width: 100%;
    margin-top: 50px;
    border: 0.65015px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    padding-left: 24px;
    padding-right: 24px;
    position: relative;
    @media (max-width: 831px) {
       margin-top: 50px;
       padding-left: 8px;
       padding-right: 8px;
       justify-content: center;
    }  
`;

export const FileSvgUpload = styled.img.attrs(() => ({}))`
  width: 24px;
  height: 20px;
  fill: #333333;
  margin-right: 16px;
  @media (max-width: 831px) {
    margin-right: 3px;
    width: 53px;
    height: 44px;
  }; 
`;

export const Upload = styled.input.attrs(() => ({
    type: 'file',
    name: 'upload',
    id: 'upload'
}))`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const UploadLabel = styled.label.attrs(() => ({
    htmlFor: "upload"
}))`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: OpenSansBold;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    word-break: normal;
    @media (max-width: 831px) {
        width: 100%;
        font-size: 12px;
        justify-content: center;
        text-align: center;
    }
`;

export const UploadFileCounter = styled.div`
    font-family: OpenSansBold;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    @media (max-width: 831px) {
        font-size: 12px;
        margin-top: 3px;
        position: absolute;
        z-index: 5;
    }
`;

export const Button = styled.div`
    width: 144px;
    height: 56px;
    background: #DA3F5B;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    color: #FFFFFF;
    font-family: OpenSansBold;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    @media (max-width: 831px) {
        width: 100%;
        font-size: 14px;
    }
`;


