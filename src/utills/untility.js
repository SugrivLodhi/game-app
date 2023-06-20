export const validateName =(value)=> {
    if(value.length===0){
        return "Name is Required"
     }
   const name = value.trim();
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "Name should be alphabet";
    }
    if (name.length < 2) {
      return "Name should be at least two Character";
    }
  
    return false
  }
  
export const validateEmail = (value)=> {
     if(value.length===0){
        return "Email is Required"
     }
    const email = value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Invalid Email Id"
    }
  
    return false
  }
  
  export const validateMobileNumber =(value)=> {
    if(value.length===0){
        return "Phone number is Required"
     }
     if(value.length<10){
        return "Mobile number should be 10 digit"
     }
   const number = value.trim();
    const numberPattern = /^\d{10}$/;
    if (!numberPattern.test(number)) {
      return "mobile number should be numeric value";
    }
  
    return false
  }
  
  export const validatePhoto = (file)=> {
    if (!file) {
      return "No file selected.";
    }
    return false;
  }
  
  export const validateNumber =(input)=> {
    const numberPattern = /^[0-9]+$/;
    const test = numberPattern.test(input);
    if(!test){
      return "Please Enter only number"
    }
    return false
  }
  export const numberOfArr = (input)=> {
     if(!input){
      return
     }
    const numberOfBox =parseInt(input,10)
     const newArray = new Array(numberOfBox*numberOfBox).fill({value:`box${input}*${input}`});
    return newArray;
  }