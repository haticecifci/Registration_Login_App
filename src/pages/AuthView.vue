<template>
   <form @submit.prevent="validateForm">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email addresi</label>
    <input v-model="user.email"
     type="email"
      class="form-control bg-dark text-light "
      id="exampleInputEmail1" 
      :class="errors.email?'is-invalid':''"
      aria-describedby="emailHelp">

    <div id="emailHelp" class="form-text text-light">Email adresin giriş yapmak için gerekli.</div>
  </div>
   
    <div class="invalid-feedback">
        Geçerli bir email adresi giriniz.
    </div>
    

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Parola</label>
    <input v-model="user.password" 
    type="password" 
    class="form-control bg-dark text-light" 
    :class="errors.password?'is-invalid':''"
    id="exampleInputPassword1">
    
    <div class="invalid-feedback">
        Parolanız en az 8 karakterden oluşmalıdır.
    </div>
  </div>
  


  <button type="submit" class="btn btn-primary w-100">
    {{ $route.fullPath.includes('register')?"Kayıt Ol":"Giriş Yap" }}
  </button>
</form>
</template>

<script>

import axios  from 'axios'

export default{
    name:'AuthView',
    data(){
      return{
        errors:{
          email:false,
          password:false
        },
        user:{
          email:'',
          password:''
        }
      }
    },
    methods:{
      Login(){
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcvwxi5pLDB31ZNuBMsBIbFGXb64ArV5Q',
      {
        email:this.user.email,
        password:this.user.password,
        returnSecureToken:true,
      }
    ).then((res)=>{
      localStorage.setItem("userInfo",JSON.stringify(res.data))
      localStorage.setItem('expDate',Date.now()+(Number(res.data.expiresIn)*1000))
      this.$store.commit('setUserInfo',res.data)
      this.user={password:'',email:''}
      this.$router.replace('/')
    })

    },

    signUp(){
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcvwxi5pLDB31ZNuBMsBIbFGXb64ArV5Q',
      {
        email:this.user.email,
        password:this.user.password,
        returnSecureToken:true,
      }
    ).then((res)=>{
      this.user={password:'',email:''}
      this.$router.replace('/login')
      console.log(res)
    })
    },
      checkEmail(email){
        
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
         
      },
      validateForm(){
        if(this.checkEmail(this.user.email)===null){
          this.errors.email=true
        }else{
          this.errors.email=false
        }
        if(this.user.password.trim().length<8){
          this.errors.password=true
        }
        else{
          this.errors.password=false
        }
        if(this.errors.password!==true && this.errors.email!==true){
          if(this.$route.fullPath.includes('login')){
            this.Login()
            return
          }
          this.signUp()
        }

      }
    },

}
</script>