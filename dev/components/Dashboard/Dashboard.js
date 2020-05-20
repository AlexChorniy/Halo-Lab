import React from 'react';
import UploadSVG from '../../assets/img/folder-regular.svg';

import {
    Wrapper,
    Top,
    Center,
    Bottom,
    InputElement,
    Title,
    TextInput,
    TitleContainer,
    TextInputContainer,
    ErrorMessage,
    Star,
    TextArea,
    Button,
    UploadContainer,
    Upload,
    UploadFileCounter,
    FileSvgUpload,
    UploadLabel
} from './styles';

const Dashboard = () => {
    return (
        <Wrapper>
            <Top>
                <InputElement width='56%'>
                    <TitleContainer>
                        <Title>Your company name</Title>
                        <Star visibility='true' />
                    </TitleContainer>
                    <TextInputContainer>
                        <TextInput width='100%' placeholder='Type text' borderColor='true' />
                        <ErrorMessage>This field in required</ErrorMessage>
                    </TextInputContainer>
                </InputElement >
                <InputElement width='41%'>
                    <TitleContainer>
                        <Title>Number of people</Title>
                        <Star />
                    </ TitleContainer>
                    <TextInputContainer>
                        <TextInput width='100%' placeholder='1-99' borderColor='true' />
                        <ErrorMessage>Please enter number from 1 to 99</ErrorMessage>
                    </TextInputContainer>
                </ InputElement>
            </Top>
            <Center>
                <InputElement width='100%' marginTopMob='40px'>
                    <TitleContainer>
                        <Title>Business area</Title>
                        <Star />
                    </ TitleContainer>
                    <TextInputContainer>
                        <TextInput width='100%' placeholder='Design, Marketing, Development, etc.' borderColor={true} />
                        <ErrorMessage>This field in required</ErrorMessage>
                    </TextInputContainer>
                </InputElement>
                <InputElement marginTop="10px" width='100%'>
                    <TitleContainer>
                        <Title>Description</Title>
                        <Star />
                    </ TitleContainer>
                    <TextInputContainer width='100%' height='168px' >
                        <TextArea
                            width='96%'
                            height='168px'
                            placeholder='Type text'
                            borderColor='true'
                        />
                        <ErrorMessage>Your content is not valid</ErrorMessage>
                    </TextInputContainer>
                </InputElement>
                <UploadContainer>
                    <UploadLabel><FileSvgUpload src={UploadSVG} />Add file as attachment</UploadLabel>
                    <UploadFileCounter>3 files attached</UploadFileCounter>
                </UploadContainer>
                <Upload />
            </Center>
            <Bottom>
                <Button>Submit</Button>
            </Bottom>
        </Wrapper>
    );
};

export default Dashboard;
