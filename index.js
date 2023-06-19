let allButtons = document.querySelector("#buttons");

allButtons.addEventListener("click",(event)=>{

    // console.log(event.target.innerText)
    let btnText = event.target.innerText;

    if(btnText==="Red"){. //strictly checker is imp as it chcks for the exact word neeeded here
    event.target.classList.toggle("btn-red");
    }
    else if(btnText==="Yellow"){
        event.target.classList.toggle("btn-yellow");
    }

    else if(btnText==="Blue"){
        event.target.classList.toggle("btn-blue");
        }


        else if(btnText==="Green"){
            event.target.classList.toggle("btn-green");
     }

     else if(btnText==="Pink"){
        event.target.classList.toggle("btn-pink");
        }

})