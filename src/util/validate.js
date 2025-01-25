export const validateSignInForm = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

    if (!emailRegex.test(email)) {
        return "Invalid email format";
    } 

    if (!passwordRegex.test(password)) {
        return "Invalid password format";
    }

    return null;
};