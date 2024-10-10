let nameInput=document.getElementById('name')
let phoneInput=document.getElementById('phone')
let sallaryInput=document.getElementById('sallary')
let addBtn=document.getElementById('add')
let updateBtn=document.getElementById('update')
let tableBody=document.getElementById('demo')
let table =document.querySelector('.table')
let container=[]
if(localStorage.getItem('member') !=null){
  container=JSON.parse(localStorage.getItem('member'))
  display();
}
function submitfun(){
    let myObject={
        name:nameInput.value,
        phone:phoneInput.value,
        sallary:sallaryInput.value,
       
    }
    container.push(myObject)
localStorage.setItem('member',JSON.stringify(container))
display();
clearInput();
}

  function display(){
    
let emptycontainer=``
for (let i = 0; i < container.length; i++) {
 emptycontainer +=`
 
 
 
   <tr>
                    <td>${container[i].name}</td>
                    <td>${container[i].phone}</td>
                    <td>${container[i].sallary}</td>
                    <td><button type="button" class="btn btn-update" onclick="updatefun(${i})">Update</button></td>
                    <td><button type="button" class="btn btn-delete"  onclick="deletefun(${i})">delete</button></td>
                </tr>
 `   
}
tableBody.innerHTML=emptycontainer
}
function deletefun(i){
container.splice(i,1)
localStorage.setItem('member',JSON.stringify(container))
display();
}
function searchFun(keyWord){
    let newcontainer=``
    for (let i = 0; i < container.length; i++) {
  if(container[i].name.toLowerCase().startsWith(keyWord.toLowerCase()))  {
    newcontainer +=`<tr>
                     <td>${container[i].name}</td>
                     <td>${container[i].phone}</td>
                     <td>${container[i].sallary}</td>
                     <td><button type="button" class="btn btn-update" onclick="updatefun(${i})">Update</button></td>
                     <td><button type="button" class="btn btn-delete"  onclick="deletefun(${i})">delete</button></td>
                 </tr>
  ` 
  }
    }
    document.getElementById('demo').innerHTML=newcontainer
}


function updatefun(i){
  nameInput.value=container[i].name
  phoneInput.value=container[i].phone
  sallaryInput.value=container[i].sallary
  addBtn.classList.add('hide')
  updateBtn.classList.add('show')
  updateBtn.addEventListener('click',()=>{
    
    container[i].name=nameInput.value
    container[i].phone=phoneInput.value
    container[i].sallary=sallaryInput.value
    localStorage.setItem('member',JSON.stringify(container))
   clearInput()
    addBtn.classList.remove('hide')
    updateBtn.classList.remove('show')
    display();
  })
}

function checkmember(){
  if(container.length ==0){
    table.classList.add('hide')
  }else{
    display();
  }
}
function clearInput(){
  nameInput.value=''
  phoneInput.value=''
  sallaryInput.value=''
}