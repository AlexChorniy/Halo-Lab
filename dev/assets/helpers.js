export function formValidation(data, result = {}) {
    const validationFields = {
        company: {
            regInf: { reg: '^[a-zA-Zа-яА-Я]*$', flag: 'ui' },
            messageEmpty: 'This field in required',
            messageInvalid: 'This field in required',
            required: false,
        },
        staff: {
            regInf: {
                reg: '^([1-9]|[1-9][0-9])$', flag: 'g'
            },
            messageEmpty: 'This field in required',
            messageInvalid: 'Please enter number from 1 to 99',
            required: true
        },
        area: {
            regInf: { reg: '^[a-zA-Zа-яА-Я]+$', flag: 'ui' },
            messageEmpty: 'This field in required',
            messageInvalid: 'This field in required',
            required: true
        },
        description: {
            regInf: false, required: true,
            messageEmpty: 'This field in required',
            messageInvalid: 'This field in required',
            required: true
        },
        submit: { regInf: false, required: false },
    };

    for (const key in data) {
        if (validationFields.hasOwnProperty(key)) {
            const value = data[key];
            const isEmpty = /^\s*$/.test(value);
            if (validationFields[key]) {
                const { regInf, required, messageEmpty, messageInvalid } = validationFields[key];
                const { reg, flag } = regInf;
                const re = new RegExp(reg, flag);
                const valid = re.test(value) && value.length > 0;
                const message = isEmpty ? messageEmpty : messageInvalid;
                result[key] = { valid, required, isUsed: true, isEmpty, message };
            } else {
                const { required, messageEmpty, messageInvalid } = validationFields[key];
                result[key] = { required, isUsed: true, isEmpty, message: messageEmpty };
            }
        }
    }
    return result;
};
