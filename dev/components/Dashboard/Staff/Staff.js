import React, { useState, useEffect } from 'react';

import {
    InputElement,
    Title,
    TextInput,
    TitleContainer,
    TextInputContainer,
    ErrorMessage,
    Required,
    TextInputLabel
} from '../styles';

const Staff = ({
    onFocus,
    onBlur,
    inputClickHandler,
    fieldsValidationHelper: staff,
    getValue
}) => {
    const defaultText = '1-99';
    const [getText, setText] = useState(defaultText);
    const isEmpty = /^\s*$/.test(getValue);
    useEffect(() => {
        const value = isEmpty || !getValue ? defaultText : getValue;
        setText(value);
    }, [getValue]);
    return (
        <InputElement width='41%' onFocus={onFocus} onBlur={onBlur}>
            <TitleContainer>
                <Title>Number of people <Required isVisibile={staff?.required}>*</Required></Title>
            </ TitleContainer>
            <TextInputContainer>
                <TextInputLabel
                    brdColour={staff?.borderColor}
                    htmlFor='staff'
                >
                    {getText}
                    <TextInput
                        type="text"
                        onChange={inputClickHandler}
                        name='staff'
                        id="staff"
                    />
                </TextInputLabel>
                <ErrorMessage
                    isVisibile={staff?.isMessageError}
                >
                    {staff?.messageValue}
                </ErrorMessage>
            </TextInputContainer>
        </ InputElement>
    );
};

export default Staff;
