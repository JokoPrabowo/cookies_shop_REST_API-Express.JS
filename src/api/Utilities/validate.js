module.exports = {
    validatePassword(password){
        //has at least 8 characters
        const validLength = password.length >= 8;
        
        //has at least 1 letter
        let hasLetter = /[a-zA-Z]/g.test(password);
        // let hasLetter = false;
        // const alphabet = "abcdefghijklmnopqrstuvwxyz";
        // for (letter of alphabet){
        //     if(password.toLowerCase().includes(letter)){
        //         hasLetter = true;
        //     }
        // };

        //has at least one number
        let hasNumber = /[0-9]/g.test(password);
        // let hasNumber = false;
        // const numbers = "1234567890";
        // for (number of numbers){
        //     if(password.includes(number)){
        //         hasNumber = true
        //     }
        // };
        
        const validPassword = validLength && hasLetter && hasNumber;
        return validPassword;
    },

    validateEmail(email){
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        // Check if the email is defined and not too long
        if (!email || email.length > 254) return false;

        // Use a single regex check for the standard email parts
        if (!emailRegex.test(email)) return false;

        // Split once and perform length checks on the parts
        const parts = email.split("@");
        if (parts[0].length > 64) return false;

        // Perform length checks on domain parts
        const domainParts = parts[1].split(".");
        if (domainParts.some(part => part.length > 63)) return false;

        // If all checks pass, the email is valid
        return true;
    }
}