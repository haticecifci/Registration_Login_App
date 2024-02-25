<template>
    <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
        <div class="card w-100 bg-dark text-light" >
     <div class="card-body">
        <h1 class="d-flex align-items-center justify-content-center">
            {{ $route.fullPath.includes('register')?"Kayıt Ol":"Giriş Yap" }}
        </h1>
        <slot></slot>
        <div class="d-flex justify-content-center align-items-center mt-4">
           <RouterLink :to="$route.fullPath.includes('register')?'/login':'/register'">
            {{ $route.fullPath.includes('register')?'Zaten üye misin giriş yap':'Yeni kullanıcı mısın kayıt ol' }}
           </RouterLink>

        </div>
    </div>
    </div>
    </div>
</template>

<script>
export default{
    name:'AuthLayout'
}
</script>