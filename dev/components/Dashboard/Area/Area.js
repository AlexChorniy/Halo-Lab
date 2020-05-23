import React from 'react';

import {
    InputElement,
    Title,
    TextInput,
    TitleContainer,
    TextInputContainer,
    ErrorMessage,
    Required,
} from '../styles';

const Area = ({
    onFocus,
    onBlur,
    inputClickHandler,
    fieldsValidationHelper
}) => {
    return (
        <InputElement width='100%' onFocus={onFocus} onBlur={onBlur}>
            <TitleContainer>
                <Title>Your company name <Required isVisibile={fieldsValidationHelper.company.required}>*</Required></Title>
            </TitleContainer>
            <TextInputContainer>
                <TextInput
                    onChange={inputClickHandler}
                    width='100%'
                    placeholder='Type text'
                    name='company'
                    autocomplete="off"
                    borderColor={fieldsValidationHelper.company.boarderColor} />
                <ErrorMessage
                    isVisibile={fieldsValidationHelper.company.isMessageError}
                >{fieldsValidationHelper.company.messageValue}</ErrorMessage>
            </TextInputContainer>
        </InputElement >
    );
};

export default Area;
