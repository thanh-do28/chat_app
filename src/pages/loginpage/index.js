import "./style.css"
export let loginpage = /*html*/ `
    <section class="loginpage">
        <div class="container">
            <div class="container1">
                <img src="./img/250px-MMPR_2010_New_Logo.jpg" alt="">
            </div>
            <div class="container2">
                <h1>Sing in to Rikkei Chat</h1>
            </div>
            <div class="container3">
                <form id="login-form">
                    <div class="container31">
                        <h5>Email address</h5>
                    </div>
                    <div class="container32">
                        <input name="email" type="email" placeholder="Please enter your email">
                        <p id="erro_email"></p>
                    </div>
                    <div class="container33">
                        <h5>Password</h5>
                    </div>
                    <div class="container34">
                        <input name="password" type="password" placeholder="Please enter your password">
                        <p id="erro_passwork"></p>
                    </div>
                    <div class="container35">
                        <button>Login</button>
                    </div>
                </form>
            </div>
            <div class="container4">
                <button id="btn_new" class="btn_newnink">New to Rikkei Chat? Create an account</button>
            </div>
            <div class="container5">
                <button id="passworlderr" class="text">Forget your password? Click here</button>
            </div>
        </div>
    </section>
`;