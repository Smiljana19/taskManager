export class User{
    firstName = "";
    lastName = "";
    email = "";
    password = "";
    confirmPassword = "";

    constructor(firstName: string, lastName: string, email: string, password: string, confirmPassword: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}