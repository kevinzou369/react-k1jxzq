const  SignUpValidation = (values) => {
    let errors = {}

    if(!values.name){
        errors.name = "Name Required"
    }
    else if (values.name.length < 5){
        errors.name = "Name must be more than 5 char"
    }

    if(!values.password){
        errors.password = "Password Required"
    }
    else if (values.password.length < 9){
        errors.password = "Password must be more than 9 char"
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "Confirmation Password Required"
    }
    else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password and Confirmation Password is not the same"
    }

    return errors;
}

export default SignUpValidation;