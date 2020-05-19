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
                <InputElement>
                    <TitleContainer>
                        <Title>Your company name</Title>
                        <Star visibility='true' />
                    </TitleContainer>
                    <TextInputContainer>
                        <TextInput width='280px' placeholder='Type text' borderColor='true' />
                        <ErrorMessage>Your content is not valid</ErrorMessage>
                    </TextInputContainer>
                </InputElement >
                <InputElement>
                    <TitleContainer>
                        <Title>Number of people</Title>
                        <Star />
                    </ TitleContainer>
                    <TextInputContainer>
                        <TextInput width='178px' placeholder='1-99' borderColor='true' />
                        <ErrorMessage>Your content is not valid</ErrorMessage>
                    </TextInputContainer>
                </ InputElement>
            </Top>
            <Center>
                <InputElement>
                    <TitleContainer>
                        <Title>Business area</Title>
                        <Star />
                    </ TitleContainer>
                    <TextInputContainer>
                        <TextInput width='496px' placeholder='Design, Marketing, Development, etc.' borderColor={true} />
                        <ErrorMessage>Your content is not valid</ErrorMessage>
                    </TextInputContainer>
                </InputElement>
                <InputElement marginTop="20px">
                    <TitleContainer>
                        <Title>Description</Title>
                        <Star />
                    </ TitleContainer>
                    <TextInputContainer width='496px' height='168px' >
                        <TextArea
                            width='474px'
                            height='168px'
                            placeholder='Type text'
                            borderColor='true'
                        />
                        <ErrorMessage>Your content is not valid</ErrorMessage>
                    </TextInputContainer>
                </InputElement>
                <UploadContainer>
                    <UploadLabel><FileSvgUpload src={UploadSVG} />Add file as attachment</UploadLabel>
                    <Upload />
                    <UploadFileCounter>3 files attached</UploadFileCounter>
                </UploadContainer>
            </Center>
            <Bottom>
                <Button>Submit</Button>
            </Bottom>
        </Wrapper>
    );
};

export default Dashboard;
