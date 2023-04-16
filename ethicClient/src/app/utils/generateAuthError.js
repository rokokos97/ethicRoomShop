export function generetaAuthError(message) {
    switch (message) {
        case "INVALID_PASSWORD":
            return "Email of password not correct";
        case "EMAIL_EXISTS":
            return "UserLayout with this Email already exists";
        case "EMAIL_NOT_FOUND":
            return "UserLayout with this email was not found";
        default:
            return "Too many login attempts. Please try later";
    }
}
