//目標一：取得一個新的 url
//步驟
//1. 取得欄位的值
//2. 將欄位的值放入 ${} 中

let submit = document.getElementById('submit')



submit.addEventListener('click',function(e){
  e.preventDefault();
  
  let form = document.forms[0]
  let description = form.elements["description"].value
  let place = form.elements["location"].value
  let fullTime = form.elements["full_time"].checked  //true or false

  let paramsString = ""
  let searchParams = new URLSearchParams(paramsString);
  let el1 = searchParams.append("description", description)
  let el2 = searchParams.set("location", place)
  // let el3 = searchParams.set("full_time", fullTime)

  let url = `https://still-spire-37210.herokuapp.com/positions.json?${searchParams.toString()}`
  console.log(url)
  axios.get(url)
     .then(function(resp){
       console.log(resp.data)
     })
})



function transOn(){
  let fullTimeChecked = form.elements["full_time"].checked
  if (fullTimeChecked){
    searchParams.set("full_time", "on")
  }else {
    searchParams.set("", "")
  }
}

//目標二：把這個 url 用 axios 打出去
//步驟
//1. let url = ``
//2. axios.get(url)
//3. .then(function(resp){ console.log(resp)})

