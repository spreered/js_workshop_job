"use strict";var menuBtn=document.querySelector("#navbar-burger"),menuBody=document.querySelector("#navbar-menu");function menuRWD(){this.classList.toggle("is-active"),menuBody.classList.toggle("is-active")}menuBtn.addEventListener("click",menuRWD);