import {loginpage} from '../pages/loginpage/index'
import {registerpage} from '../pages/registerpage/index1'
import {resetPasswordpage} from '../pages/resetPasswordpage/index2'
import {chatpage} from '../pages/chatpage/index3'
import {validateLoginInfo} from '../controller/index'
import {validateRegisterInfo} from '../controller/index'
import {validateresetPasswordInfo} from '../controller/index'
import {buttonlogin} from '../controller/index'

export let setActiveScreen = (screenName) => {
    const app = document.getElementById('app');
    switch (screenName) {
        case 'loginpage':
            if(app) {
                app.innerHTML = loginpage;
            }
            const loginForm = document.getElementById("login-form");
            if (loginForm) {
                loginForm.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const email = loginForm.email.value;
                    const password = loginForm.password.value;

                    validateLoginInfo(email, password);

                });
            };
            const buttonnewnick = document.getElementById("btn_new");
            buttonnewnick.onclick = () => {
                setActiveScreen("registerpage")
            }
            const buttonpassworlderr = document.getElementById("passworlderr")
            buttonpassworlderr.onclick = () => {
                setActiveScreen("resetPasswordpage")
            }
            break;
        case 'registerpage':
            if(app) {
                app.innerHTML = registerpage;
            }
            const registerform = document.getElementById("register-form");
            if(registerform) {
                registerform.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const firstName = registerform.firstName.value;
                    const lastName = registerform.lastName.value;
                    const emailAddress = registerform.emailAddress.value;
                    const passwordAddress = registerform.passwordAddress.value;
                    const confirmPassword = registerform.confirmPassword.value;

                    validateRegisterInfo(firstName, lastName, emailAddress, passwordAddress, confirmPassword);
                }); 
            };

            break;
        case 'resetPasswordpage':
            if(app) {
                app.innerHTML = resetPasswordpage;
            }
            const resetPassword = document.getElementById("resetPasswordpage-form");
            if(resetPassword) {
                resetPassword.addEventListener("submit", (event) => {
                    event.preventDefault();

                    const newemail = resetPassword.newemail.value;

                    validateresetPasswordInfo(newemail);
                });
            };
            break;
        case 'chatpage':
            if(app) {
                app.innerHTML = chatpage;
            }
            break;
        default:
            break;
    };
};

export let renderErrorMessage = (id, text) => {
    const errorMessage = document.getElementById(id);
    if (errorMessage) {
      errorMessage.innerText = text;
    }
  };

                    // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó

        //    làm giống hệt csc bước trên với những màn res
    
