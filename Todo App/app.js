let btn = document.querySelector('#btn');

let inp = document.querySelector('input');

let ul  = document.querySelector('ul');
btn.addEventListener('click',()=>{

    let list = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = "remove";
    list.innerText= inp.value;

    list.append(button);

    ul.append(list);

})

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName == "BUTTON")
   { let getP = event.target.parentElement;
    getP.remove();}
})




