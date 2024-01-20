
export const validData =(email,password)=>{

    const isEmailValid =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    //const isNameValid =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
   // if(!isNameValid) return "enter name correctly";
    if(!isEmailValid) return "Email is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
};