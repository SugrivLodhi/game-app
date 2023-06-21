export const validateName = (value) => {
  if (value.length === 0) {
    return "Name is Required"
  }
  const name = value.trim();
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name should be alphabet";
  }
  if (name.length < 2) {
    return "Name should be at least two Character";
  }

  return ''
}

export const validateEmail = (value) => {
  if (value.length === 0) {
    return "Email is Required"
  }
  const email = value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Invalid Email Id"
  }

  return ''
}

export const validateMobileNumber = (value) => {
  if (value.length === 0) {
    return "Phone number is Required"
  }
  if(value.length>10){
    return "Mobile number should be 10 digit "
  }
  if (value.length < 10) {
    return "Mobile number should be 10 digit"
  }
  const number = value.trim();
  const numberPattern = /^\d{10}$/;
  if (!numberPattern.test(number)) {
    return "mobile number should be numeric value";
  }

  return ''
}

export const validatePhoto = (file) => {
  if (!file) {
    return "No file selected.";
  }
  return '';
}

export const validateNumber = (input) => {
  const numberPattern = /^[0-9]+$/;
   if(input<2){
    return "Number should be more than one"
   }
   if(input>7){
    return "Not allow more than seven"
   }
  const test = numberPattern.test(input);
  if (!test) {
    return "Please Enter only number"
  }
  return ''
}
export const numberOfArr = (input) => {
  if (!input) {
    return
  }
  const numberOfBox = parseInt(input, 10)
  const newArray = new Array(numberOfBox * numberOfBox).fill({ value: `box${input}*${input}` });
  return newArray;
}

export const timeFormater = (seconds) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const remainingSeconds = String(seconds % 60).padStart(2, '0');
  return { hours, minutes, remainingSeconds }
}