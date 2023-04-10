
export default function validation(userData, setErrors, errors) {
    if(!userData.email)
        setErrors({ ...errors, email:"Por favor completa este campo"})
    else if (userData.email.length > 35)
        setErrors({ ...errors, email: "No puede superar los 35 caracteres"})
    else if (
        /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/.test(userData.email)
        ) {
        setErrors({ ...errors, email: "Email invalido"})
        } else {
            setErrors({ ...errors, email: ""})
    }
    
    if(userData.password.length < 6 || userData.password.length > 10)
        setErrors({ ...errors, password: "Longitud de password invalida"})
    else if(!/\d/.test(userData.password)) {
        setErrors({ ...errors, password: "Debe contener al menos un numero"})
    } else {
        setErrors({ ...errors, password: ""})
    }
}

