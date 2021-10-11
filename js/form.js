let error = {
  fullName: '',
  email: '',
};
let count = 3;
let verificationCode = '';
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const spacialChar = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '?',
  '/',
  '`',
  '|',
  ':',
  '"',
  ';',
  ',',
  '.',
  '<',
  '>',
  '{',
  '}',
  '[',
  ']',
  "'",
  '\\',
];

const stateMappping = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka ',
  'Kerala ',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur ',
  'Meghalaya',
  'Mizoram ',
  'Nagaland ',
  'Odisha',
  'Punjab ',
  'Rajasthan ',
  'Sikkim',
  'Tamil Nadu',
  'Telangana ',
  'Tripura ',
  'Uttarakhand ',
  'Uttar Pradesh',
  'West Bengal',
  'Goa ',
  'Jammu and Kashmir',
  'Delhi ',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Pondicherry ',
  'Chandigarh',
  'Andaman & Nicobar',
];
function handleChange() {
  let fullName = document.getElementById('fullName').value;
  fullName = fullName.trim();
  setErrorfullName(fullName);
}

function stringContainsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      (!isNaN(str.charAt(i)) && !(str.charAt(i) === ' ')) ||
      spacialChar.indexOf(str.charAt(i)) !== -1
    ) {
      return true;
    }
  }
  return false;
}
function setErrorEmail(emailString) {
  error['email'] = '';
  if (emailString === '') {
    error['email'] = 'Email is required';
  } else {
    const atSymbol = emailString.indexOf('@');
    if (atSymbol < 1) {
      error['email'] = 'Please enter valid email';
    }

    const dot = emailString.indexOf('.');
    if (dot <= atSymbol + 2) {
      error['email'] = 'Please enter valid email';
    }

    const emailExt = emailString.slice(atSymbol + 1, dot);

    if (!isNaN(emailExt)) {
      error['email'] = 'Please enter valid email';
    }

    const globalExt = emailString.slice(dot + 1, emailString.length);

    if (!isNaN(globalExt)) {
      error['email'] = 'Please enter valid email';
    }

    if (dot === emailString.length - 1) {
      error['email'] = 'Please enter valid email';
    }
  }

  if (error.email !== '') {
    document.getElementById('emailError').innerHTML = error.email;
    document.getElementById('emailError').style.display = 'block';
  } else {
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('emailError').style.display = 'none';
  }

  return error.email;
}

function CheckEmail() {
  const email = document.getElementById('email').value;
  setErrorEmail(email);
}

function setErrorfullName(fullName) {
  error['fullName'] = '';
  if (fullName === '') {
    error['fullName'] = 'Full Name is required';
  } else {
    const countWord = fullName.split(' ');
    const countWordLen = countWord.length;
    const errorfullName = stringContainsNumber(fullName);

    if (errorfullName === true) {
      error['fullName'] =
        'only alphabets and spaces allowed, min two words each with min 4 chars';
    }

    if (countWordLen < 2) {
      error['fullName'] =
        'only alphabets and spaces allowed, min two words each with min 4 chars';
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
        error['fullName'] =
          'only alphabets and spaces allowed, min two words each with min 4 chars';
      }
    }
  }

  if (error.fullName !== '') {
    document.getElementById('fullNameError').innerHTML = error.fullName;
    document.getElementById('fullNameError').style.display = 'block';
  } else {
    document.getElementById('fullNameError').innerHTML = '';
    document.getElementById('fullNameError').style.display = 'none';
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
  const phone = document.getElementById('phone').value;
  phone_number_mask(phone);
}

function hideAllLogo() {
  const x = document.getElementsByClassName('logo');

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
}
function phone_number_mask(phone) {
  error['phone'] = 'Number is invalid';
  const myMask = '(___) ___-____';
  const myNumbers = [];
  let myOutPut = '';
  let theLastPos = 1;
  //get numbers
  for (let i = 0; i < phone.length; i++) {
    if (!isNaN(phone.charAt(i)) && phone.charAt(i) != ' ') {
      myNumbers.push(phone.charAt(i));
    }
  }
  //write over mask
  for (let j = 0; j < myMask.length; j++) {
    if (myMask.charAt(j) == '_') {
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
  const countryCode = myOutPut.slice(1, 4).replaceAll('_', '');
  if (countryCode.length >= 3) {
    if (countryCode >= 621 && countryCode <= 799) {
      hideAllLogo();
      document.getElementById('jio').style.display = 'block';
      error['phone'] = '';
    } else if (countryCode >= 801 && countryCode <= 920) {
      hideAllLogo();
      document.getElementById('idea').style.display = 'block';
      error['phone'] = '';
    } else if (countryCode >= 921 && countryCode <= 999) {
      hideAllLogo();
      document.getElementById('vodaphone').style.display = 'block';
      error['phone'] = '';
    } else {
      hideAllLogo();
      error['phone'] = 'Number is invalid';
    }
  } else {
    hideAllLogo();
    error['phone'] = 'Number is invalid';
  }

  const stateCode = parseInt(myOutPut.slice(5, 9).replaceAll('_', ''));

  let lastDigit = 0;
  let stateName = '';
  if (stateCode > 0) {
    lastDigit = stateCode.toString().slice(1, 3);
    const firstDigit = lastDigit.toString().slice(0, 1);
    if (firstDigit === '0') {
      lastDigit = stateCode.toString().slice(2, 3);
    }
    if (lastDigit > 34) {
      lastDigit = stateCode.toString().slice(2, 3);
    }
    stateName = stateMappping[lastDigit];
  }

  document.getElementById('state').innerHTML = stateName;

  const numberFilter = myOutPut
    .replaceAll('_', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', '')
    .replaceAll(' ', '');
  if (numberFilter.length < 10) {
    error['phone'] = 'Number is invalid';
  }
  if (error['phone'] !== '') {
    document.getElementById('phoneError').innerHTML = 'Number is invalid';
    document.getElementById('phoneError').style.display = 'block';
  } else {
    document.getElementById('phoneError').innerHTML = '';
    document.getElementById('phoneError').style.display = 'none';
  }

  document.getElementById('phone').value = myOutPut;
  document.getElementById('phone').setSelectionRange(theLastPos, theLastPos);
  return error.phone;
}

function handleSubmit() {
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  error['fullName'] = validatefullName(fullName);
  error['email'] = validateEmail(email);
  error['phone'] = phone_number_mask(phone);

  if (
    error['fullName'] === '' &&
    error['email'] === '' &&
    error['phone'] === ''
  ) {
    var val = Math.floor(1000 + Math.random() * 9000);
    verificationCode = val;
    const firstName = fullName.split(' ')[0];
    document.getElementById('reg').style.display = 'none';
    const message = `Dear <strong>${firstName}</strong>,
    Thank you for your inquiry. A 4 digit verification number has been sent to your
     phone number: <strong>${phone}</strong>, 
        please enter in the following box and submit for confirmation (Your OTP is ${verificationCode})`;
    document.getElementById('validateOTP').style.display = 'block';
    document.getElementById('message').innerHTML = message;

    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }
}

function verifyOtp() {
  const otpCode = document.getElementById('otpCode').value;
  if (otpCode !== '') {
    if (verificationCode == otpCode) {
      document.getElementById('validateOTP').style.display = 'none';
      document.getElementById('success').style.display = 'block';
      window.location.href = ' http://pixel6.co';
    } else {
      count--;
      if (count === 0) {
        window.location.href = ' http://pixel6.co';
      }
      document.getElementById('otpError').style.display = 'block';
      document.getElementById(
        'otpError'
      ).innerHTML = `Please enter valid OTP. ${count} attemp left`;
    }
  } else {
    document.getElementById('otpError').style.display = 'block';
    document.getElementById('otpError').innerHTML = `Please enter OTP`;
  }
}
