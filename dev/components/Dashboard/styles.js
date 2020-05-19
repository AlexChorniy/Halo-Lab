import styled from "styled-components";

export const Wrapper = styled.div`
    height: 727px;
    background: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
`;

export const Top = styled.div`
    height: 24%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Center = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Bottom = styled.div`
    height: 21%;
    padding-left: 56px;
`;

export const InputElement = styled.div`
    margin-top: ${({ marginTop }) => marginTop || '8px'};
`;

export const Title = styled.h5`
    font-family: OpenSansBold;
    font-size: 14px;
    color: #636363;
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
`;

export const ErrorMessage = styled.div`
    font-family: OpenSansBold;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #F15557;
    margin-top: 8px;
`;


export const Star = styled.div.attrs(() => ({
    text: 'dfghgh',
}))`
   color: #F15557;
   margin-left: 8px;
   visibility: ${({ visibility }) => visibility};
`;

export const TextArea = styled.textarea`
    margin-top: 8px;
    height: ${({ height }) => height || ''};
    width: ${({ width }) => width || '474px'};
    background: #F9F9F9;
    border-radius: 8px;
    padding-left: 16px;
    border-color: ${({ borderColor }) => borderColor ? '#F15557' : rgba(51, 51, 51, 0.2)} ;
`;

export const UploadContainer = styled.div`
    height: 48px;
    width: 496px;
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
`;

export const FileSvgUpload = styled.img`
  width: 24px;
  height: 20px;
  fill: #333333;
  margin-right: 16px;
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
    min-width: 184px;
    height: 20px;
    display: flex;
    line-height: 20px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
`;

export const UploadFileCounter = styled.div`
    font-family: OpenSansBold;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
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
`;

