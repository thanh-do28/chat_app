import "./style1.css"
export let registerpage = /*html*/ `
<section class="registerpage">
    <div class="container">
        <div class="container1">
            <img src="./img/250px-MMPR_2010_New_Logo.jpg" alt="">
        </div>
        <div class="container2">
            <h1>Create new account</h1>
        </div>
        <div class="container3">
            <form id="register-form">
                <div class="container31">
                    <h5>First Name</h5>
                </div>
                <div class="container32">
                    <input name="firstName" type="text" placeholder="Please enter your first">
                    <p id="erro_firstName"></p>
                </div>
                <div class="container33">
                    <h5>Last Name</h5>
                </div>
                <div class="container34">
                    <input name="lastName" type="text" placeholder="Please enter your last">
                    <p id="erro_lastName"></p>
                </div>
                <div class="container33">
                    <h5>Email address</h5>
                </div>
                <div class="container34">
                    <input name="emailAddress" type="email" placeholder="Please enter your email">
                    <p id="erro_emailAddress"></p>
                </div>
                <div class="container33">
                    <h5>Password</h5>
                </div>
                <div class="container34">
                    <input name="passwordAddress" type="password" placeholder="Please enter your password">
                    <p id="erro_passwordAddress"></p>
                </div>
                <div class="container33">
                    <h5>Confirm Password</h5>
                </div>
                <div class="container34">
                    <input name="confirmPassword" type="password" placeholder="Please enter your password">
                    <p id="erro_confirmPassword"></p>
                </div>
                <div class="container35">
                    <button>Register</button>
                    <p class="err" id="server-error-messager"></p>
                    <p class="ok" id="ok"></p>
                </div>
            </form>
        </div>
        <div class="container4">
            <a href="">Alresdy have an account? Login here</a>
        </div>
    </div>
</section>
`;