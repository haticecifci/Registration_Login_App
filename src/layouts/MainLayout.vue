<template>
    <nav class="navbar bg-dark navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Vue-Auth-App</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item text-light">
          <RouterLink class="nav-link text-light active" to="/">
            Anasayfa
          </RouterLink>
          
        </li>
        <li class="nav-item text-light">
          <RouterLink class="nav-link text-light" to="/users">
            Kullanıcılar
          </RouterLink>
          <a href="#"></a>
        </li>
        
       
      </ul>
    </div>
    
  </div>
</nav>
<div class="p-5"><slot></slot></div>
</template>

<script>
export default{
    name:'MainLayout'
}
</script>