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

const Area = ({
    onFocus,
    onBlur,
    inputClickHandler,
    fieldsValidationHelper: area,
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
        <InputElement width='100%' onFocus={onFocus} onBlur={onBlur}>
            <TitleContainer>
                <Title>Business area <Required isVisibile={area?.required}>*</Required></Title>
            </TitleContainer>
            <TextInputContainer>
                <TextInputLabel
                    brdColour={area.borderColor}
                    htmlFor='area'
                >
                    {getText}
                    <TextInput
                        type="text"
                        onChange={inputClickHandler}
                        name='area'
                        id="area"
                    />
                </TextInputLabel>
                <ErrorMessage
                    isVisibile={area?.isMessageError}
                >{area?.messageValue}</ErrorMessage>
            </TextInputContainer>
        </InputElement >
    );
};

export default Area;
