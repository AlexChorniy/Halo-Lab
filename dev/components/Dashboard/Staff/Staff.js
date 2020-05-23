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

const Staff = ({
    onFocus,
    onBlur,
    inputClickHandler,
    fieldsValidationHelper
}) => {
    return (
        <InputElement width='41%' onFocus={onFocus} onBlur={onBlur}>
            <TitleContainer>
                <Title>Number of people <Required isVisibile={fieldsValidationHelper.staff.required}>*</Required></Title>
            </ TitleContainer>
            <TextInputContainer>
                <TextInput
                    onChange={inputClickHandler}
                    width='100%' placeholder='1-99'
                    name='staff'
                    autocomplete="off"
                    borderColor={fieldsValidationHelper.staff.boarderColor} />
                <ErrorMessage
                    isVisibile={fieldsValidationHelper.staff.isMessageError}
                >
                    {fieldsValidationHelper.staff.messageValue}
                </ErrorMessage>
            </TextInputContainer>
        </ InputElement>
    );
};

export default Staff;
