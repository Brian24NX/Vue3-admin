<script setup lang="ts">
import { Icon } from 'tdesign-vue-next';
import { reactive } from 'vue';

type LoginForm = {
    username : string,
    password : string,
}

const loginForm = reactive<LoginForm>({     // data='loginForm'
    username : '',
    password : '',
})

const rules = {
    username: [
    { required: true, message: 'Please fill in Username'}
    ],
    password:[
    { required: true, message: 'Please fill in Password'}
    ]
}

</script>

<template>
  <div class="login-container">
    <div class="content">
        <t-card>
            <h1>Brian Admin</h1>
            <t-form ref="form" :data='loginForm' :rules='rules' class='login-form' :colon="true" :label-width="0" > 
                <t-form-item name="username">
                     <t-input v-model='loginForm.username' clearable placeholder="Please type your username">
                        <template #prefix-icon>
                            <icon name = 'desktop' />
                        </template>
                    </t-input>
                </t-form-item>

                <t-form-item name="password">
                    <t-input v-model='loginForm.password' type="password" clearable placeholder="Please type your password">
                        <template #prefix-icon>
                            <icon name = 'lock-on' />
                        </template>
                    </t-input>
                </t-form-item>

                <t-form-item>
                    <t-button theme="primary" type="submit" block>Login</t-button>
                </t-form-item>
            </t-form>
        </t-card>
    </div>
</div>

</template>



<style lang="less" scoped>
.login-container{
    width: 100vw;
    height: 100vh;
    background-color:aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        width: 400px;
        h1{
            text-align: center;
        }
        .login-form{
            margin: 20px,0;
        }
    }
}




</style>
