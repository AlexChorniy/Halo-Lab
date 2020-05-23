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
    fieldsValidationHelper
}) => {
    return (
        <InputElement marginTop="20px" marginTopMob="10px" onFocus={onFocus} onBlur={onBlur} >
            <TitleContainer>
                <Title>Description <Required isVisibile={fieldsValidationHelper.description.required}>*</Required></Title>
            </ TitleContainer>
            <TextInputContainer>
                <TextArea
                    placeholder='Type text'
                    onChange={inputClickHandler}
                    borderColor={fieldsValidationHelper.description.boarderColor}
                    name='description'
                    width="100%"
                />
            </TextInputContainer>
            <ErrorMessage
                isVisibile={fieldsValidationHelper.description.isMessageError}
                marginTop='8px'
            >
                {fieldsValidationHelper.description.messageValue}
            </ErrorMessage>
        </InputElement>
    );
};

export default Description;
