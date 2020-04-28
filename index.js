let burger = document.querySelector(".navbar-burger.burger");
burger.addEventListener("click", function(){
  console.log("click!")
  // if (this.classList.contains('is-active'))
  //   this.classList.remove("is-active")
  // else
  //   this.classList.add('is-active')
  let classes = this.className.split(' ')
  if (classes.includes('is-active'))
    classes = classes.filter((cls) => cls !== 'is-active')
  else
    classes.push('is-active')
  this.className = classes.join(' ')
})



