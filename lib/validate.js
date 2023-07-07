export default function login_validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 4 || values.password.length > 20) {
        errors.password = 'Must be between 4 and 20';
    } else if (values.password.includes(' ')) {
        errors.password = 'Invalid password';
    }

    return errors;
}

export function register_validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 4 || values.password.length > 20) {
        errors.password = 'Must be between 4 and 20';
    } else if (values.password.includes(' ')) {
        errors.password = 'Invalid password';
    }

    if (!values.cpassword) {
        errors.cpassword = 'Required';
    } else if (values.password !== values.cpassword) {
        errors.cpassword = 'Password dose not match';
    }

    return errors;
}
