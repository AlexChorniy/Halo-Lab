import {
    start,
    workWithElements,
    validateForm,
    validateAll
} from './validationHelpers';
export function validationForm(data, command) {
    const validationFields = {
        company: {
            regInf: { reg: '^[a-zA-Zа-яА-Я]*$', flag: 'ui' },
            messageEmpty: 'This field in required',
            messageInvalid: 'This field in required',
            required: true,
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
            regInf: { reg: '.*' },
            required: true,
            messageEmpty: 'This field in required',
            messageInvalid: 'This field in required',
            errorColor: '#F15557',
        },
    };

    function commandsController(command) {
        const anchorObj = start(validationFields);
        const { verifyValues } = workWithElements(anchorObj);
        const validatedForm = validateForm(verifyValues, validationFields, command);
        const commands = {
            validate: () => validateForm(data, validationFields),
            validateAll: () => validateAll(validatedForm),
        };
        if (commands.hasOwnProperty(command)) return commands[command]();
    };
    return commandsController(command);
};
