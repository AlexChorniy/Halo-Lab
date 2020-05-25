import React from 'react';

import {
    InputElement,
    Title,
    TextArea,
    TitleContainer,
    TextInputContainer,
    ErrorMessage,
    Required,
} from '../styles';

const Description = ({
    onFocus,
    onBlur,
    inputClickHandler,
    fieldsValidationHelper: description
}) => {
    return (
        <InputElement marginTop="20px" marginTopMob="10px" onFocus={onFocus} onBlur={onBlur} >
            <TitleContainer>
                <Title>Description <Required isVisibile={description?.required}>*</Required></Title>
            </ TitleContainer>
            <TextInputContainer>
                <TextArea
                    placeholder='Type text'
                    onChange={inputClickHandler}
                    brdColor={description?.borderColor}
                    name='description'
                    width="100%"
                />
            </TextInputContainer>
            <ErrorMessage
                isVisibile={description.isMessageError}
                marginTop='8px'
            >
                {description?.messageValue}
            </ErrorMessage>
        </InputElement>
    );
};

export default Description;
