<template>
    <header>
    <div class="inner">
      <h1><router-link :to="{path: '/'}">프레임마스터</router-link></h1>
      <ul>
        <li><a href="javascript:void(0)">안경</a></li>
        <li><a href="javascript:void(0)">선글라스</a></li>
        <li><a href="javascript:void(0)">악세사리</a></li>
        <li><a href="./serviceCenter.html">고객센터</a></li>
      </ul>
      <div>
        <router-link :to="{name: 'Login'}">로그인</router-link> 
      </div>
    </div>
  </header>
</template>
