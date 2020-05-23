"use strict"

import React, { useState, useEffect } from 'react';
import UploadSVG from '../../assets/img/folder-regular.svg';
import { validationForm } from '../../assets/validation/validationHandler';

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
    Required,
    TextArea,
    Button,
    UploadContainer,
    Upload,
    UploadFileCounter,
    FileSvgUpload,
    UploadLabel
} from './styles';

let clientDB = {};

const Dashboard = () => {
    const [getFiles, setFiles] = useState([]);
    const [getValue, setValue] = useState('');
    const [getName, setName] = useState('');
    const [getValid, setValid] = useState({});
    const clientWidth = window.innerWidth;
    const { company, staff, area, description, companyFocus, staffFocus, areaFocus, descriptionFocus } = getValid;

    useEffect(() => {
        const validResult = validationForm(clientDB, 'validate');
        setValid(Object.assign(getValid, validResult));
    }, [getValue, getName, getValid]);

    const fileSelectedHandler = event => {
        const newFile = event.target.files[0];
        const obj = [...getFiles, newFile];
        setFiles([...getFiles, obj]);
    };

    const onFocus = event => {
        const name = event.target.name;
        const value = event.target.value;
        clientDB = { ...clientDB, [name]: { value, isCliked: true } };
        if (getValid[name]) {
            setValid({ ...getValid, [`${name}Focus`]: true });
        }
    };

    const onBlur = event => {
        const name = event.target.name;
        if (getValid[name]) {
            setValid({ ...getValid, [`${name}Focus`]: false });
        }
    };

    function inputClickHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        clientDB = { ...clientDB, [name]: { value, isCliked: true } };
        setValue(value);
        setName(name);
    };

    const submitButHandler = () => {
        const validationAllResult = validationForm('', 'validateAll');
        clientDB = { ...clientDB, files: getFiles.length };
        if (validationAllResult.checkResult) {
            for (const key in clientDB) {
                if (clientDB.hasOwnProperty(key)) {
                    delete clientDB[key]['isCliked'];
                }
            }
            console.log('result', clientDB);
        } else {
            setValid(validationAllResult.bodyObj);
        }
    };
    const fieldsValidationHelper = {
        company: {
            required: company?.required && !companyFocus && !company?.valid && company?.isUsed,
            boarderColor: !companyFocus && !company?.valid && company?.isUsed,
            isMessageError: company?.required && !companyFocus && !company?.valid && company?.isUsed,
            messageValue: company?.message,
        },
        staff: {
            required: staff?.required && !staffFocus && !staff?.valid && staff?.isUsed,
            boarderColor: !staffFocus && !staff?.valid && staff?.isUsed,
            isMessageError: staff?.required && !staffFocus && !staff?.valid && staff?.isUsed,
            messageValue: staff?.message,
        },
        area: {
            required: area?.required && !areaFocus && !area?.valid && area?.isUsed,
            boarderColor: !areaFocus && !area?.valid && area?.isUsed,
            isMessageError: area?.required && !areaFocus && !area?.valid && area?.isUsed,
            messageValue: area?.message,
        },
        description: {
            required: description?.required && !descriptionFocus && !description?.valid && description?.isUsed,
            boarderColor: !descriptionFocus && !description?.valid && description?.isUsed,
            isMessageError: description?.required && !descriptionFocus && !description?.valid && description?.isUsed,
            messageValue: description?.message,
        },
    };
    return (
        <Wrapper>
            <Top>
                <InputElement width='56%' onFocus={onFocus} onBlur={onBlur}>
                    <TitleContainer>
                        <Title>Your company name <Required isVisibile={fieldsValidationHelper.company.required}>*</Required></Title>
                    </TitleContainer>
                    <TextInputContainer>
                        <TextInput
                            onChange={inputClickHandler}
                            width='100%' placeholder='Type text'
                            name='company'
                            autocomplete="off"
                            borderColor={fieldsValidationHelper.company.boarderColor} />
                        <ErrorMessage
                            isVisibile={fieldsValidationHelper.company.isMessageError}
                        >{fieldsValidationHelper.company.messageValue}</ErrorMessage>
                    </TextInputContainer>
                </InputElement >
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
            </Top>
            <Center>
                <InputElement width='100%' marginTopMob='16px' onFocus={onFocus} onBlur={onBlur}>
                    <TitleContainer>
                        <Title>Business area <Required isVisibile={fieldsValidationHelper.area.required}>*</Required></Title>
                    </ TitleContainer>
                    <TextInputContainer>
                        <TextInput
                            onChange={inputClickHandler}
                            name='area'
                            width='100%'
                            placeholder='Design, Marketing, Development, etc.'
                            borderColor={fieldsValidationHelper.area.boarderColor}
                        />
                        <ErrorMessage isVisibile={fieldsValidationHelper.area.isMessageError}>
                            {fieldsValidationHelper.area.messageValue}
                        </ErrorMessage>
                    </TextInputContainer>
                </InputElement>
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
                <UploadContainer>
                    <UploadLabel><FileSvgUpload src={UploadSVG} />{clientWidth <= 831 ? "" : 'Add file as attachment'}</UploadLabel>
                    <UploadFileCounter>{clientWidth <= 831 ? getFiles.length : `${getFiles.length} files attached`} </UploadFileCounter>
                </UploadContainer>
                <Upload onChange={fileSelectedHandler} />
            </Center>
            <Bottom>
                <Button onClick={submitButHandler}>Submit</Button>
            </Bottom>
        </Wrapper>
    );
};

export default Dashboard;
