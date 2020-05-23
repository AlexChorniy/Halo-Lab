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
                <Title>Business area <Required isVisibile={fieldsValidationHelper.area.required}>*</Required></Title>
            </TitleContainer>
            <TextInputContainer>
                <TextInput
                    onChange={inputClickHandler}
                    width='100%'
                    placeholder='Type text'
                    name='area'
                    autocomplete="off"
                    borderColor={fieldsValidationHelper.area.boarderColor} />
                <ErrorMessage
                    isVisibile={fieldsValidationHelper.area.isMessageError}
                >{fieldsValidationHelper.area.messageValue}</ErrorMessage>
            </TextInputContainer>
        </InputElement >
    );
};

export default Area;
