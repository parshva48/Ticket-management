let lockbtn=document.querySelector(".lock");
let lock=true;

lockbtn.addEventListener("click",function(){
 
    if(lock==true)
   {
    lockbtn.classList.remove("fa-lock");
    lockbtn.classList.add("fa-unlock-alt");
    let ticketdescbox=document.querySelectorAll(".ticket-textarea");
    for(let i=0;i<ticketdescbox.length;i++)
    {
        ticketdescbox[i].setAttribute("contenteditable",true);

    }


   }
   else{
    lockbtn.classList.remove("fa-unlock-alt");
   lockbtn.classList.add("fa-lock");
   let ticketdescbox=document.querySelectorAll(".ticket-textarea");
    for(let i=0;i<ticketdescbox.length;i++)
    {
        ticketdescbox[i].setAttribute("contenteditable",false);
        let parentnode=ticketdescbox[i].parentNode;
        let id=parentnode.children[0].innerText;
        id=id.substring(1);
        UpdateContent(id,ticketdescbox[i].innerText);
        
    }

   let strarr=JSON.stringify(alltickets);
   localStorage.setItem("tickets",strarr);

   }
   lock=!lock;
   

})

function UpdateContent(id,content)
{
   for(let i=0;i<alltickets.length;i++)
   {
       console.log("id",alltickets[i].tid);
       if(alltickets[i].tid==id)
       {
           alltickets[i].tdata=content;
       }
   }

}