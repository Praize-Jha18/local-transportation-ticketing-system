export function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function isValidName(name) {
    const regex = /^[a-zA-Z]{5,}$/;
    return regex.test(name);
}

export function isValidAddress(address) {
    const regex = /^([a-zA-Z0-9]+ ?)+$/;
    return regex.test(address);
}

export function isValidPhone(phone) {
    const regex = /^(\+?234|0)[7-9][01]\d{8}$/;
    return regex.test(phone);
}
