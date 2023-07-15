<template>
    <header>
      <div class="logo">
        <img src="/src/assets/brasao65anos.jpg" alt="logo puc minas">
      </div>
      <span class="menu-toggle" @click="toggleMenu">+</span>
      <nav class="nav" v-bind:class="{active:menuOpen}">
        <span class="close" @click="toggleMenu">X</span>
        <ul class="nav-ul">
            <li class="nav-li">
                <a class="nav--link"><RouterLink to="/">Blog</RouterLink></a>
            </li>
            <li class="nav-li">
                <a class="nav--link" href="#">Sobre</a>
            </li>
            <li class="nav-li">
                <a class="nav--link" href="#">Descrição</a>
            </li>
        </ul>
      </nav>
    </header>
  </template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref<boolean>(false);

function toggleMenu() {
    console.log("click");
    menuOpen.value = !menuOpen.value;
}

</script>
  
<style  scoped>
  header {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    max-width: 100%;
  }
  
  .nav-ul {
    flex: 1;
    list-style: none;
    display: flex;
  }
  .nav-li:not(:last-child) {
    margin-right: 1rem;
  }
  .nav--link {
    display: block;
    padding: 1rem 2rem;
  
    text-decoration: none;
  
    text-transform: uppercase;
    font-weight: 700;
    color: var(--main-color);
    justify-content: center;
    align-items: center;
  
    transition: all 0.5s ease-in-out;
    position: relative;
  }
  .nav--link:hover {
    letter-spacing: 1px;
  }

  .nav--link:active  {
    letter-spacing: 1px;
  }
  
  .nav--link::before,
  .nav--link::after {
    visibility: hidden;
    content: "";
    margin: 0 auto;
    display: block;
    border: 1px solid var(--white-color);
    transition: width 0.5s ease-in-out;
    position: absolute;
    width: 0;
  }
  .nav--link::before {
    right: 0;
    left: 0;
    top: 0;
  }
  .nav--link::after {
    right: 0;
    left: 0;
    bottom: 0;
  }
  .nav--link:hover:before,
  .nav--link:hover:after {
    visibility: visible;
    width: 80%;
  }
  
  .logo {
    letter-spacing: 2px;
    font-weight: 900;
    font-size: 1.5rem;
    font-family: "Helvetica", Roboto;
    color: var(--white-color);
    cursor: pointer;
  }
  .menu-toggle,
  .nav .close {
    display: none;
  }
  .nav {
    margin-right: 50%;
  }
  @media (max-width: 800px) {
    .menu-toggle {
      color: var(--white-color);
      background: tomato;
      padding: 0.5rem;
      cursor: pointer;
      display: block;
    }
    .nav {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.6s cubic-bezier(0.86, 0, 0.07, 1);
      transform: translate3d(-100%, 0, 0);
    }
    .nav.active {
      transform: translateZ(0);
    }
    .nav .close {
      color: var(--white-color);
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 40px;
      height: 40px;
      font-weight: 900;
  
      background: tomato;
  
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .nav-ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  </style>
  