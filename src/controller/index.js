// import {loginpage} from '../pages/loginpage/index'
// import { setActiveScreen } from '../view';
import { renderErrorMessage } from '../view/index'
import { createNewUser} from '../model/index'
import { createlogin, restPassworld} from '../model/index'

// hàm đăng nhập
export let validateLoginInfo = (email, password) => {

// regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("erro_email", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("erro_email", "Invalid email");
  } else {
    renderErrorMessage("erro_email", "");
  }

  if (!password) {
    renderErrorMessage("erro_passwork", "Please enter your password");
  } else {
    renderErrorMessage("erro_passwork", "");
  }

  if (email&&password) {
    createlogin(email, password)
  }
};

// hàm tạo tài khoản
export let validateRegisterInfo = (firstName, lastName, emailAddress, passwordAddress, confirmPassword) => {

      const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!firstName) {
        renderErrorMessage("erro_firstName", "Please enter your first name")
    } else {
        renderErrorMessage("erro_firstName", "")
    }

    if (!lastName) {
        renderErrorMessage("erro_lastName", "Please enter your last name")
    } else {
        renderErrorMessage("erro_lastName", "")
    }

    if (!emailAddress) {
        renderErrorMessage("erro_emailAddress", "Please enter your email");
    } else if (!emailRegex.test(emailAddress)) {
        renderErrorMessage("erro_emailAddress", "Invalid email");
    } else {
        renderErrorMessage("erro_emailAddress", "");
    }

    if (!passwordAddress) {
        renderErrorMessage("erro_passwordAddress", "Please enter your password");
    } else {
        renderErrorMessage("erro_passwordAddress", "");
    }

    if (!confirmPassword) {
        renderErrorMessage("erro_confirmPassword", "Please enter your password");
    } else if (confirmPassword != passwordAddress) {
        renderErrorMessage("erro_confirmPassword", "password must be the same");
    } else if (confirmPassword == passwordAddress) {
        renderErrorMessage("erro_confirmPassword", "");
    }

    if(firstName && lastName && emailAddress && passwordAddress && confirmPassword && confirmPassword==passwordAddress) {
      createNewUser(firstName, lastName, emailAddress, passwordAddress)
    }
};


//  hàm lấy mật khẩu

export let validateresetPasswordInfo = (newemail) => {
  const emailRegex =
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!newemail) {
    renderErrorMessage("erro_newemail", "Please enter your email");
  } else if (!emailRegex.test(newemail)) {
    renderErrorMessage("erro_newemail", "Invalid email");
  } else {
    renderErrorMessage("erro_newemail", "");
  }
  if(newemail){
    restPassworld(newemail)
  }
};

// export let buttonlogin = () => {
//   let button = document.getElementById("btn_new")
//   button.onclick = () =>{
//     setActiveScreen('registerpage');
//   }
// }
