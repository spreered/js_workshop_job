let act = document.querySelector('#navbar-burger');
let menu = document.querySelector('#navbar-menu');
// console.log(menu)
  act.addEventListener('click', function(e) {
       e.stopPropagation()
       menu.classList.toggle('is-active');
       act.classList.toggle('is-active');
      },false);



let form = document.forms[0]

form.addEventListener("submit", function(e){
  e.preventDefault();
  let des = document.querySelector("input[name=description]").value
  let loca = document.querySelector("input[name=location]").value
  let check = document.querySelector("input[name=full_time]").checked

  if(check === true){
  	 check = 'on'
  	}else{
     check = ''
  	}
  
  // axios.get(`https://still-spire-37210.herokuapp.com/positions.json?=description=${des}&location=${loca}&full_time=${check}`)
  axios.get('https://still-spire-37210.herokuapp.com/positions.json', { params: { description: `${des}`,
                                                                                  location: `${loca}`,
                                                                                  full_time: `${check}` 
                                                                                  } 
                                                                                  })
    .then((res) => { console.table(res.data) })
 
})


 
