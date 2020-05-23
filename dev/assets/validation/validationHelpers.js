export const start = data => {
    let obj = {};
    for (const key in data) {
        obj = { ...obj, [key]: { value: '' } };
    };
    return obj;
};

export const validateAll = (validatedValues) => {
    let strainer = {};
    for (const key in validatedValues) {
        if (
            !validatedValues[key]?.valid
        ) {
            strainer = { checkResult: false, bodyObj: validatedValues };
            return strainer;
        }
    };

    strainer = { checkResult: true, bodyObj: validatedValues };
    return strainer;
};

export const workWithElements = (validObj) => {
    let verifyElements = {};
    let verifyValues = {};
    for (const key in validObj) {
        if (validObj.hasOwnProperty(key)) {
            const element = document.getElementsByName(key);
            const value = element[0]?.value;
            verifyElements = { ...verifyElements, [key]: element };
            verifyValues = { ...verifyValues, [key]: { value } };
        }
    };
    return { verifyElements, verifyValues }
};

const isUsedHandler = (valid, click, command) => {
    if (!valid && !click && command === 'validateAll') return true
    else if (!valid && !click && command !== 'validateAll') return false
    else if (valid && click) return false
    else return true
};

let validateFormResult = {};
export const validateForm = (data, validationFields, command) => {
    for (const key in data) {
        if (validationFields.hasOwnProperty(key)) {
            const value = data[key]?.value;
            const isEmpty = /^\s*$/.test(value);
            if (validationFields[key]) {
                const { regInf, required, messageEmpty, messageInvalid, errorColor } = validationFields[key];
                const { reg, flag } = regInf;
                const re = new RegExp(reg, flag);
                const valid = re.test(value) && !isEmpty;
                const message = !valid && isEmpty ? messageEmpty : messageInvalid;
                const isUsed = isUsedHandler(valid, !!data[key]?.isCliked, command);
                validateFormResult = {
                    ...validateFormResult,
                    [key]: {
                        valid,
                        required,
                        isUsed,
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
                validateFormResult = {
                    ...validateFormResult,
                    [key]: {
                        required,
                        isUsed,
                        isEmpty,
                        message: messageEmpty,
                        errorColor
                    }
                };
            }
        }
    };
    return validateFormResult;
};
