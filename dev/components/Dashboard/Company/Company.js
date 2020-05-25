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

const Company = ({
    onFocus,
    onBlur,
    inputClickHandler,
    fieldsValidationHelper: company,
    getValue
}) => {
    const defaultText = 'Type text';
    const [getText, setText] = useState(defaultText);
    const isEmpty = /^\s*$/.test(getValue);
    useEffect(() => {
        const value = isEmpty || !getValue ? defaultText : getValue;
        setText(value);
    }, [getValue]);
    return (
        <InputElement width='56%' onFocus={onFocus} onBlur={onBlur}>
            <TitleContainer>
                <Title>Your company name <Required isVisibile={company?.required}>*</Required></Title>
            </TitleContainer>
            <TextInputContainer>
                <TextInputLabel
                    brdColour={company?.borderColor}
                    htmlFor='company'
                >
                    {getText}
                    <TextInput
                        type="text"
                        onChange={inputClickHandler}
                        name='company'
                        id="company"
                    />
                </TextInputLabel>
                <ErrorMessage
                    isVisibile={company?.isMessageError}
                >{company?.messageValue}</ErrorMessage>
            </TextInputContainer>
        </InputElement >
    );
};

export default Company;

