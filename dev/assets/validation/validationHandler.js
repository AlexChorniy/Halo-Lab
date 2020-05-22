import {
    start,
    emptyFields,
    workWithElements,
    validateForm,
    validateAll
} from './validationHelpers';
export function validationForm(data) {
    const validationFields = {
        company: {
            regInf: { reg: '^[a-zA-Zа-яА-Я]*$', flag: 'ui' },
            messageEmpty: 'This field in required',
            messageInvalid: 'This field in required',
            required: false,
            errorColor: '#F15557',
        },
        staff: {
            regInf: { reg: '^([1-9]|[1-9][0-9])$', flag: 'g' },
            messageEmpty: 'This field in required',
            messageInvalid: 'Please enter number from 1 to 99',
            required: true,
            errorColor: '#F15557',
        },
        area: {
            regInf: { reg: '^[a-zA-Zа-яА-Я]+$', flag: 'ui' },
            messageEmpty: 'This field in required',
            messageInvalid: 'This field in required',
            required: true,
            errorColor: '#F15557',
        },
        description: {
            regInf: false,
            required: true,
            messageEmpty: 'This field in required',
            messageInvalid: 'This field in required',
            errorColor: '#F15557',
        },
    };

    return function (controller) {
        const anchorObj = start(validationFields);
        const { verifyElements, verifyValues } = workWithElements(anchorObj);
        const validatedValues = validateForm(verifyValues, validationFields);
        const commandController = command => {
            const commands = {
                validate: () => validateForm(data, validationFields),
                empty: () => emptyFields(validatedValues, verifyElements),
                validateAll: () => validateAll(validatedValues, verifyElements),
            };
            if (commands.hasOwnProperty(command)) return commands[command]();
        };
        return commandController(controller);
    };
};
