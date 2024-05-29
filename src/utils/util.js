import { MIN_YEARS } from "../../constants";

export function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function isValidName(name) {
    const regex = /^([a-zA-Z]{3,})( [a-zA-Z]{3,})+$/;
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

export function isValidAge(date) {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    
    // Calculate the date MIN_YEARS=16 years ago from today
    const minYearsAgo = new Date();
    minYearsAgo.setFullYear(currentDate.getFullYear() - MIN_YEARS);
    
    // Compare the selected date with the date 16 years ago
    if (selectedDate > minYearsAgo) {
        return  true;
    }
    return false
}
