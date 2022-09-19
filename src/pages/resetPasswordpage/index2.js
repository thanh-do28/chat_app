import "./style2.css"
export let resetPasswordpage = /*html*/ `
<section class="resetPasswordpage">
    <div class="container">
        <div class="container1">
            <img src="./img/250px-MMPR_2010_New_Logo.jpg" alt="">
        </div>
        <div class="container2">
            <h1>Create new account</h1>
        </div>
        <div class="container3">
            <form id="resetPasswordpage-form">
                <div class="container31">
                    <h5>Email address</h5>
                </div>
                <div class="container32">
                    <input name="newemail" type="text" placeholder="Please enter your email">
                    <p id="erro_newemail"></p>
                </div>
                <div class="container35">
                    <button>Reset Password</button>
                </div>
            </form>
        </div>
        <div class="container4">
            <a href="">Alresdy have an account? Login here</a>
        </div>
    </div>
</section>
`;