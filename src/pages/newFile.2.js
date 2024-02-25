import axios from 'axios';

export default (await import('vue')).defineComponent({
name: 'AuthView',
data() {
return {
errors: {
email: false,
password: false
},
user: {
email: '',
password: ''
}
};
},
methods: {
Login() {
axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcvwxi5pLDB31ZNuBMsBIbFGXb64ArV5Q',
{
email: this.user.email,
password: this.user.password,
returnSecureToken: true,
}
).then((res) => {
console.log('res', res.data);
console.log(this.$store);
this.$store.commit('setUserInfo', res.data);
this.user = { password: '', email: '' };
});

},

signUp() {
axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcvwxi5pLDB31ZNuBMsBIbFGXb64ArV5Q',
{
email: this.user.email,
password: this.user.password,
returnSecureToken: true,
}
).then((res) => {
this.user = { password: '', email: '' };
this.$router.replace('/login');
console.log(res);
});
},
checkEmail(email) {

return String(email)
.toLowerCase()
.match(
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

},
validateForm() {
if (this.checkEmail(this.user.email) === null) {
this.errors.email = true;
} else {
this.errors.email = false;
}
if (this.user.password.trim().length < 8) {
this.errors.password = true;
}
else {
this.errors.password = false;
}
if (this.errors.password !== true && this.errors.email !== true) {
if (this.$route.fullPath.includes('Login')) {
this.Login();
return;
}
this.signUp();
}

}
},
//     watch:{
//       errors:{
//         handler(old,newVal){
//         console.log(newVal,old)
//       },
//       deep:true
//     }
// }
});
