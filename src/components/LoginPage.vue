<template>
    <div class="container">
        <div class="row">
            <div class="col-6 left_screen">
                <div>
                <div class="text">
                    <h1>Welcome back!</h1>
                    <p>Enter your Credentials to access your account</p>
                </div>
                <form action="" @submit.prevent="formSubmit">
                    <div class="input">
                        <label class="label" for="email">Email address</label> <br>
                        <input type="text" id="email" placeholder="Enter your email" v-model="email"> <br>
                    </div>
                    <div class="input">
                        <label class="label" for="password">Password</label> <br>
                        <input type="text" id="password" placeholder="Enter your password" v-model="password">
                        <i class='bx bx-low-vision'></i>
                    </div>
                    <div class="forgotpassword">
                        <router-link to="/forgotpassword">Forgot Password</router-link> <br>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
            </div>
            <div class="col-6 right_screen"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const email = ref('');
const password = ref('');
const formSubmit = () => {
  console.log("Form submitted with:", { email: email.value, password: password.value });
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* .body {
    display: flex;
    align-items: center;
    justify-self: center;
    min-height: 100vh;
    background: #ffffff;
    font-family: 'Poppins', sans-serif;
} */
.left_screen {
    display: flex;
    align-self: center;
}
.text {
    margin: 30px;
    margin-bottom: 60px;
    text-align: left;
}

.container .input {
    width: 100%;
    height: 50px;
    margin: 30px;
    font-size: 16px;
    position: relative;
}

.input input {
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 15px;
    border: 2px solid #D9D9D9;
    font-size: 16px;
    padding: 20px 45px 20px 20px;
}

.input i {
    position: absolute;
    right: 20px;
    top: 55%;
    transform: translateY(45%);
    font-size: 20px;
}

.forgotpassword a {
    text-decoration: none;
}

.container .forgotpassword {
    display: flex;
    justify-content: end;
}

.container .btn {
    width: 100%;
    height: 50px;
    margin: 30px;
    font-size: 16px;
    background-color: #3A5B22;
    -webkit-text-fill-color: #ffffff;
    margin: 30px;
    margin-top: 40px;
    border-radius: 15px;
}

</style>
