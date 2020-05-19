import React from 'react';

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
    AddFileArea,
    Button
} from './styles';

const Dashboard = () => {
    return (
        <Wrapper>
            <Top>
                <InputElement>
                    <TitleContainer>
                        <Title>Your company name</Title>
                        <Star visibility='true'>*</Star>
                    </TitleContainer>
                    <TextInputContainer>
                        <TextInput width='280px' placeholder='Type text' borderColor='true' />
                        <ErrorMessage>Your content is not valid</ErrorMessage>
                    </TextInputContainer>
                </InputElement >
                <InputElement>
                    <TitleContainer>
                        <Title>Number of people</Title>
                        <Star>*</Star>
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
                        <Star>*</Star>
                    </ TitleContainer>
                    <TextInputContainer>
                        <TextInput width='496px' placeholder='Design, Marketing, Development, etc.' borderColor={true} />
                        <ErrorMessage>Your content is not valid</ErrorMessage>
                    </TextInputContainer>
                </InputElement>
                <InputElement marginTop="20px">
                    <TitleContainer>
                        <Title>Description</Title>
                        <Star>*</Star>
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
                <AddFileArea>123</AddFileArea>
            </Center>
            <Bottom>
                <Button>Submit</Button>
            </Bottom>
        </Wrapper>
    );
};

export default Dashboard;
