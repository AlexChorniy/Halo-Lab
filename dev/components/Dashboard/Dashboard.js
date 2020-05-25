import React, { useState, useEffect } from 'react';
import { validationForm } from '../../assets/validation/validationHandler';
import CompanyElement from './Company/Company';
import Staff from './Staff/Staff';
import Description from './Description/Description';
import Area from './Area/Area';
import Upload from './Upload/Upload';

import {
    Wrapper,
    Top,
    Center,
    Bottom,
    Button,
} from './styles';

let clientDB = {};

const Dashboard = () => {
    const [getFiles, setFiles] = useState([]);
    const [getValue, setValue] = useState('');
    const [getName, setName] = useState('');
    const [getValid, setValid] = useState({});
    const { company, staff, area, description, companyFocus, staffFocus, areaFocus, descriptionFocus } = getValid;

    useEffect(() => {
        const validResult = validationForm(clientDB, 'validate');
        setValid(Object.assign(getValid, validResult));
    }, [getValue, getName, getValid]);

    const fileSelectedHandler = event => {
        const newFile = event.target?.files[0];
        const obj = [...getFiles, newFile];
        setFiles([...getFiles, obj]);
    };

    const onFocus = event => {
        const name = event.target?.name;
        const value = event.target?.value;
        clientDB = { ...clientDB, [name]: { value, isCliked: true } };
        if (getValid[name]) {
            setValid({ ...getValid, [`${name}Focus`]: true });
        }
        if (!getValid[name]?.valid) {
            document.getElementsByName(name)[0].value = '';
        }
    };

    const onBlur = event => {
        const name = event.target?.name;
        if (getValid[name] || getValid[name]?.valid) {
            setValid({ ...getValid, [`${name}Focus`]: false });
        }
        if (!getValid[name]?.valid) {
            document.getElementsByName(name)[0].value = '';
        }

    };

    function inputClickHandler(event) {
        const name = event.target?.name;
        const value = event.target?.value;
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
            borderColor: !companyFocus && !company?.valid && company?.isUsed,
            isMessageError: company?.required && !companyFocus && !company?.valid && company?.isUsed,
            messageValue: company?.message,
        },
        staff: {
            required: staff?.required && !staffFocus && !staff?.valid && staff?.isUsed,
            borderColor: !staffFocus && !staff?.valid && staff?.isUsed,
            isMessageError: staff?.required && !staffFocus && !staff?.valid && staff?.isUsed,
            messageValue: staff?.message,
        },
        area: {
            required: area?.required && !areaFocus && !area?.valid && area?.isUsed,
            borderColor: !areaFocus && !area?.valid && area?.isUsed,
            isMessageError: area?.required && !areaFocus && !area?.valid && area?.isUsed,
            messageValue: area?.message,
        },
        description: {
            required: description?.required && !descriptionFocus && !description?.valid && description?.isUsed,
            borderColor: !descriptionFocus && !description?.valid && description?.isUsed,
            isMessageError: description?.required && !descriptionFocus && !description?.valid && description?.isUsed,
            messageValue: description?.message,
        },
    };
    return (
        <Wrapper>
            <Top>
                <CompanyElement
                    onFocus={onFocus}
                    onBlur={onBlur}
                    inputClickHandler={inputClickHandler}
                    fieldsValidationHelper={fieldsValidationHelper?.company}
                    getValue={clientDB['company']?.value}
                />
                <Staff
                    onFocus={onFocus}
                    onBlur={onBlur}
                    inputClickHandler={inputClickHandler}
                    fieldsValidationHelper={fieldsValidationHelper?.staff}
                    getValue={clientDB['staff']?.value}
                />
            </Top>
            <Center>
                <Area
                    onFocus={onFocus}
                    onBlur={onBlur}
                    inputClickHandler={inputClickHandler}
                    fieldsValidationHelper={fieldsValidationHelper?.area}
                    getValue={clientDB['area']?.value}
                />
                <Description
                    onFocus={onFocus}
                    onBlur={onBlur}
                    inputClickHandler={inputClickHandler}
                    fieldsValidationHelper={fieldsValidationHelper?.description}
                />
                <Upload
                    fileSelectedHandler={fileSelectedHandler}
                    getFiles={getFiles}
                />
            </Center>
            <Bottom>
                <Button onClick={submitButHandler}>Submit</Button>

            </Bottom>
        </Wrapper>
    );
};

export default Dashboard;
