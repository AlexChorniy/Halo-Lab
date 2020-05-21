import React, { useState, useEffect, useCallback, useMemo } from 'react';
import UploadSVG from '../../assets/img/folder-regular.svg';
import { formValidation } from '../../assets/helpers';

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
    const [getValue, setValue] = useState();
    const [getValid, setValid] = useState({});
    const clientWidth = window.innerWidth;

    useEffect(() => {
        const validResult = formValidation(clientDB);
        setValid(Object.assign(getValid, validResult));
    }, [getValue]);

    const fileSelectedHandler = event => {
        const newFile = event.target.files[0];
        const obj = [...getFiles, newFile];
        setFiles([...getFiles, obj]);
    };

    const onFocus = event => {
        const name = event.target.name;
        if (getValid[name]) {
            setValid({ ...getValid, [`${name}Focus`]: true });
        }
        event.target.value = "";
    };

    const onBlur = event => {
        const name = event.target.name;
        if (getValid[name]) {
            setValid({ ...getValid, [`${name}Focus`]: false });
        }
    };

    function companyValueHandler(event) {
        const value = event.target.value;
        clientDB = { ...clientDB, company: value };
        setValue(value);

        let newEevent = new Event("click");
        this.dispatchEvent(newEevent);
    };
    const staffNumberHandler = event => {
        const value = event.target.value;
        clientDB = { ...clientDB, staff: value };
        setValue(value);
    };
    const areaHandler = event => {
        const value = event.target.value;
        clientDB = { ...clientDB, area: value };
        setValue(value);
    };
    const descriptionHandler = event => {
        const value = event.target.value;
        clientDB = { ...clientDB, description: value };
        setValue(value);
    };
    const submitButHandler = event => {
        // ['company', 'staff', area, description]
        let newEevent = new Event("click");
        company.dispatchEvent(newEevent);

        console.log('submitButHandler', getValid);

        // console.log('submitButHandler', getValid);
    };

    return (
        <Wrapper>
            <Top>
                <InputElement width='56%' onFocus={onFocus} onBlur={onBlur}>
                    <TitleContainer>
                        <Title>Your company name <Required isVisibile={getValid.company && getValid.company.required}>*</Required></Title>
                    </TitleContainer>
                    <TextInputContainer>
                        <TextInput
                            onChange={companyValueHandler}
                            width='100%' placeholder='Type text'
                            name='company'
                            id="company"
                            autocomplete="off"
                            borderColor={getValid.company && !getValid.companyFocus && !getValid.company.valid} />
                        <ErrorMessage
                            isVisibile={getValid.company && getValid.company.isEmpty}
                        >{getValid.company && getValid.company.message}</ErrorMessage>
                    </TextInputContainer>
                </InputElement >
                <InputElement width='41%' onFocus={onFocus} onBlur={onBlur} name='staff'>
                    <TitleContainer>
                        <Title>Number of people <Required isVisibile={getValid.staff?.required}>*</Required></Title>
                    </ TitleContainer>
                    <TextInputContainer>
                        <TextInput
                            onChange={staffNumberHandler}
                            width='100%' placeholder='1-99'
                            name='staff'
                            id="staff"
                            autocomplete="off"
                            borderColor={getValid.staff && !getValid.staffFocus && !getValid.staff.valid} />
                        <ErrorMessage
                            isVisibile={getValid.staff?.isEmpty || getValid.staff?.valid}
                        >
                            {getValid.staff && getValid.staff.message}
                        </ErrorMessage>
                    </TextInputContainer>
                </ InputElement>
            </Top>
            <Center>
                <InputElement width='100%' marginTopMob='32px' onFocus={onFocus} onBlur={onBlur}>
                    <TitleContainer>
                        <Title>Business area <Required isVisibile={getValid.area?.isEmpty}>*</Required></Title>
                    </ TitleContainer>
                    <TextInputContainer>
                        <TextInput
                            onChange={areaHandler}
                            name='area'
                            width='100%'
                            id="area"
                            placeholder='Design, Marketing, Development, etc.'
                            borderColor={getValid.area && !getValid.areaFocus && !getValid.area.valid}
                        />
                        <ErrorMessage isVisibile={getValid.area?.isEmpty}>
                            {getValid.area && getValid.area.message}
                        </ErrorMessage>
                    </TextInputContainer>
                </InputElement>
                <InputElement marginTop="17px" marginTopMob="10px" width='100%' onFocus={onFocus} onBlur={onBlur} >
                    <TitleContainer>
                        <Title>Description <Required isVisibile={getValid.description?.isEmpty}>*</Required></Title>
                    </ TitleContainer>
                    <TextInputContainer onChange={descriptionHandler} width='100%' height='168px' >
                        <TextArea
                            width='96%'
                            height='168px'
                            id="description"
                            placeholder='Type text'
                            borderColor={!getValid.descriptionFocus && getValid.description?.isEmpty}
                            name='description'
                        />
                    </TextInputContainer>
                    <ErrorMessage
                        isVisibile={getValid.description?.isEmpty}
                        marginTop='37px'
                    >
                        {getValid.description && getValid.description.message}
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
