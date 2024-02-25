import axios from 'axios';

export default (await import('vue')).defineComponent({
name: 'App',
components: {
HelloWorld
},
methods: {
signUp() {
axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBcvwxi5pLDB31ZNuBMsBIbFGXb64ArV5Q',
{
email: 'abc@gmail.com',
password: "12345678",
returnSecureToken: true,
}
).then((res) => {
console.log('res', res);
});


}
}
});
