export const start = data => {
    let obj = {};
    for (const key in data) {
        obj = { ...obj, [key]: '' };
    };
    return obj;
};

export const emptyFields = (validatedValues, verifyElements) => {

    for (const key in validatedValues) {
        if (validatedValues.hasOwnProperty(key) && validatedValues[key].isEmpty) {
            console.log(validatedValues);
            verifyElements[key][0].style.borderColor = validatedValues[key].errorColor;
        }
    };
};

export const validateAll = (validatedValues, verifyElements) => {
    let strainer = {};
    for (const key in validatedValues) {
        if (validatedValues.hasOwnProperty(key) && !validatedValues[key].valid) {
            strainer = { checkResult: false, bodyObj: validatedValues };
            return strainer;
        }
    };
    strainer = { checkResult: true, bodyObj: validatedValues };
    return strainer;
};


export const workWithElements = validObj => {
    let verifyElements = {};
    let verifyValues = {};
    for (const key in validObj) {
        if (validObj.hasOwnProperty(key)) {
            const element = document.getElementsByName(key) || '';
            const value = element[0]?.value || '';
            verifyElements = { ...verifyElements, [key]: element };
            verifyValues = { ...verifyValues, [key]: value };
        }
    };
    return { verifyElements, verifyValues }
};

let result = {};
export const validateForm = (data, validationFields) => {
    for (const key in data) {
        if (validationFields.hasOwnProperty(key)) {
            const value = data[key];
            const isEmpty = /^\s*$/.test(value);
            if (validationFields[key]) {
                const { regInf, required, messageEmpty, messageInvalid, errorColor } = validationFields[key];
                const { reg, flag } = regInf;
                const re = new RegExp(reg, flag);
                const valid = re.test(value) && value.length > 0;
                const message = isEmpty ? messageEmpty : messageInvalid;
                result = {
                    ...result,
                    [key]: {
                        valid,
                        required,
                        isUsed: true,
                        isEmpty,
                        message,
                        errorColor
                    }
                };
            } else {
                const {
                    required,
                    messageEmpty,
                    errorColor
                } = validationFields[key];
                result = {
                    ...result,
                    [key]: {
                        required,
                        isUsed: true,
                        isEmpty,
                        message: messageEmpty,
                        errorColor
                    }
                };
            }
        }
    };
    return result;
};
