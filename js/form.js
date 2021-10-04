let error = {
  fullName: "",
  email: "",
};
let count = 3;
let verificationCode = '';
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const spacialChar = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "?",
  "/",
  "`",
  "|",
  ":",
  '"',
  ";",
  ",",
  ".",
  "<",
  ">",
  "{",
  "}",
  "[",
  "]",
  "'",
  "\\",
];

const stateMappping = {
  '101': "Andhra Pradesh",
  102: "Arunachal Pradesh",
  103: "Assam",
  104: "Bihar",
  105: "Chhattisgarh",
  106: "Gujarat",
  107: "Haryana",
  108: "Himachal Pradesh",
  109: "Jharkhand",
  110: "Karnataka ",
  111: "Kerala ",
  112: "Madhya Pradesh",
  113: "Maharashtra",
  114: "Manipur ",
  115: "Meghalaya",
  116: "Mizoram ",
  117: "Nagaland ",
  118: "Odisha",
  119: "Punjab ",
  120: "Rajasthan ",
  121: "Sikkim",
  122: "Tamil Nadu",
  123: "Telangana ",
  124: "Tripura ",
  125: "Uttarakhand ",
  126: "Uttar Pradesh",
  127: "West Bengal",
  128: "Goa ",
  129: "Jammu and Kashmir",
  130: "Delhi ",
  131: "Dadra and Nagar Haveli and Daman and Diu",
  132: "Pondicherry ",
  133: "Chandigarh",
  134: "Andaman & Nicobar",
};
function handleChange() {
  const fullName = document.getElementById("fullName").value;
  setErrorfullName(fullName);
}

function stringContainsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      (!isNaN(str.charAt(i)) && !(str.charAt(i) === " ")) ||
      spacialChar.indexOf(str.charAt(i)) !== -1
    ) {
      return true;
    }
  }
  return false;
}
function setErrorEmail(emailString) {
  error["email"] = "";
  if (emailString === "") {
    error["email"] = "Email is required";
  } else {
    const atSymbol = emailString.indexOf("@");
    if (atSymbol < 1) {
      error["email"] = "Please enter valid email";
    }

    const dot = emailString.indexOf(".");
    if (dot <= atSymbol + 2) {
      error["email"] = "Please enter valid email";
    }

    if (dot === emailString.length - 1) {
      error["email"] = "Please enter valid email";
    }
  }

  if (error.email !== "") {
    document.getElementById("emailError").innerHTML = error.email;
    document.getElementById("emailError").style.display = "block";
  } else {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("emailError").style.display = "none";
  }

  return error.email;
}

function CheckEmail() {
  const email = document.getElementById("email").value;
  setErrorEmail(email);
}

function setErrorfullName(fullName) {
  error["fullName"] = "";
  if (fullName === "") {
    error["fullName"] = "Full Name is required";
  } else {
    const countWord = fullName.split(" ");
    const countWordLen = countWord.length;
    const errorfullName = stringContainsNumber(fullName);

    if (errorfullName === true) {
      error["fullName"] =
        "only alphabets and spaces allowed, min two words each with min 4 chars";
    }

    if (countWordLen < 2) {
      error["fullName"] =
        "only alphabets and spaces allowed, min two words each with min 4 chars";
    } else {
      let flag = false;
      for (let i = 0; i < countWordLen; i++) {
        if (countWord[i].length < 4) {
          flag = true;
          break;
        }
        continue;
      }
      if (flag) {
        error["fullName"] =
          "only alphabets and spaces allowed, min two words each with min 4 chars";
      }
    }
  }

  if (error.fullName !== "") {
    document.getElementById("fullNameError").innerHTML = error.fullName;
    document.getElementById("fullNameError").style.display = "block";
  } else {
    document.getElementById("fullNameError").innerHTML = "";
    document.getElementById("fullNameError").style.display = "none";
  }

  return error.fullName;
}

function validatefullName(fullName) {
  return setErrorfullName(fullName);
}

function validateEmail(email) {
  return setErrorEmail(email);
}

/**
 * charCode [48,57]     Numbers 0 to 9
 * keyCode 46           "delete"
 * keyCode 9            "tab"
 * keyCode 13           "enter"
 * keyCode 116          "F5"
 * keyCode 8            "backscape"
 * keyCode 37,38,39,40  Arrows
 * keyCode 10           (LF)
 */
function validate_int(event) {
  if (
    (event.charCode >= 48 && event.charCode <= 57) ||
    event.keyCode == 9 ||
    event.keyCode == 10 ||
    event.keyCode == 13 ||
    event.keyCode == 8 ||
    event.keyCode == 116 ||
    event.keyCode == 46 ||
    (event.keyCode <= 40 && event.keyCode >= 37)
  ) {
    dato = true;
  } else {
    dato = false;
  }
  return dato;
}
function validatePhone() {
  const phone = document.getElementById("phone").value;
  phone_number_mask(phone);
}
function phone_number_mask(phone) {
  error["phone"] = "Number is invalid";
  const myMask = "(___) ___-____";
  const myNumbers = [];
  let myOutPut = "";
  let theLastPos = 1;
  //get numbers
  for (let i = 0; i < phone.length; i++) {
    if (!isNaN(phone.charAt(i)) && phone.charAt(i) != " ") {
      myNumbers.push(phone.charAt(i));
    }
  }
  //write over mask
  for (let j = 0; j < myMask.length; j++) {
    if (myMask.charAt(j) == "_") {
      //replace "_" by a number
      if (myNumbers.length == 0) myOutPut = myOutPut + myMask.charAt(j);
      else {
        myOutPut = myOutPut + myNumbers.shift();
        theLastPos = j + 1; //set caret position
      }
    } else {
      myOutPut = myOutPut + myMask.charAt(j);
    }
  }
  const countryCode = myOutPut.slice(1, 4).replaceAll("_", "");
  if (countryCode.length >= 3) {
    if (countryCode >= 621 && countryCode <= 799) {
      document.getElementById("jio").style.display = "block";
      document.getElementById("idea").style.display = "none";
      document.getElementById("vodaphone").style.display = "none";
      error["phone"] = "";
    } else if (countryCode >= 801 && countryCode <= 920) {
      document.getElementById("jio").style.display = "none";
      document.getElementById("idea").style.display = "block";
      document.getElementById("vodaphone").style.display = "none";
      error["phone"] = "";
    } else if (countryCode >= 921 && countryCode <= 999) {
      document.getElementById("jio").style.display = "none";
      document.getElementById("idea").style.display = "none";
      document.getElementById("vodaphone").style.display = "block";
      error["phone"] = "";
    } else {
      error["phone"] = "Number is invalid";
      document.getElementById("jio").style.display = "none";
      document.getElementById("idea").style.display = "none";
      document.getElementById("vodaphone").style.display = "none";
      error["phone"] = "Number is invalid";
    }
  } else {
    document.getElementById("jio").style.display = "none";
    document.getElementById("idea").style.display = "none";
    document.getElementById("vodaphone").style.display = "none";
    error["phone"] = "Number is invalid";
  }

  const stateCode = parseInt(myOutPut.slice(5, 9).replaceAll("_", ""));
  if(stateCode >= 101 && stateCode <=134) {
    const stateName = stateMappping[stateCode];
    document.getElementById("state").innerHTML = stateName;
  } else {
    error["phone"] = "Number is invalid";
    document.getElementById("state").innerHTML = '';
  }
  const numberFilter = myOutPut.replaceAll("_",'').replaceAll("(",'').replaceAll(")",'').replaceAll("-",'').replaceAll(" ",'');
  if(numberFilter.length < 10) {
    error["phone"] = "Number is invalid";
  }
  if (error["phone"] !== "") {
    document.getElementById("phoneError").innerHTML = "Number is invalid";
    document.getElementById("phoneError").style.display = "block";
  } else {
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("phoneError").style.display = "none";
  }
  
  document.getElementById("phone").value = myOutPut;
  document.getElementById("phone").setSelectionRange(theLastPos, theLastPos);
  return error.phone;
}

function handleSubmit() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  error["fullName"] = validatefullName(fullName);
  error["email"] = validateEmail(email);
  error["phone"] = phone_number_mask(phone);
  
  if(error["fullName"] === '' && error["email"] === '' && error["phone"] === '') {
    var val = Math.floor(1000 + Math.random() * 9000);
    verificationCode = val;
    const firstName = fullName.split(' ')[0];
    document.getElementById("reg").style.display = "none";
    const message = `Dear <strong>${firstName}</strong>,
    Thank you for your inquiry. A 4 digit verification number has been sent to your
     phone number: <strong>${phone}</strong>, 
        please enter in the following box and submit for confirmation`;
        document.getElementById("validateOTP").style.display = "block";
    document.getElementById('message').innerHTML = message;

    document.getElementById("fullName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
  }
}


function verifyOtp() {
  
  const otpCode = document.getElementById("otpCode").value;
  console.log(verificationCode, otpCode)
  if(verificationCode == otpCode) {
    document.getElementById("validateOTP").style.display = "none";
    document.getElementById("success").style.display = "block";
    setTimeout(() => {
      window.location.href  = " http://pixel6.co";
    }, 2000);
  } else {
    count--;
    if(count === 0) {
      window.location.href  = 'PageNotFound.html'
    }
    document.getElementById("otpError").style.display = "block";
    document.getElementById('otpError').innerHTML = `Please enter valid OTP. ${count} attemp left`;
  }
}
