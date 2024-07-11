<template>
    <div class="container">
        <div class="row">
            <div class="col-6 left_screen">
                <div>
                <div class="text">
                    <h1>Forgot password!</h1>
                    <p>Please enter your email to reset the password</p>
                </div>
                <form @submit.prevent="formSubmit">
                    <div class="input">
                        <label class="label" for="email">Email address</label> <br>
                        <input type="text" id="email" placeholder="Enter your email" v-model="email"> <br>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
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
const formSubmit = () => {
  console.log("Form submitted with:", { email: email.value });
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
