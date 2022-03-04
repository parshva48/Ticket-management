let secondbox=document.querySelector(".second-box");
let colors=["pink","blue","green","black"];
let deletestate=false;
let alltickets=[];
let filteron=false;
// localStorage.removeItem("tickets");
if(localStorage.getItem("tickets")!=undefined)
{
    let stringformarr=localStorage.getItem("tickets");
    console.log(stringformarr);
    alltickets=JSON.parse(stringformarr)
  for(let i=0;i<alltickets.length;i++)
  {
     let content=alltickets[i].tdata;
     let color=alltickets[i].tcolor;
     let uniqueid=alltickets[i].tid;
      CreateTicket(color,content,uniqueid,true,alltickets[i]);

  }

}
// BASIC PRACTISE
// for(let i=0;i<colorbtn.length;i++)
// {
//     colorbtn[i].addEventListener("click",function(e){
//      let color=colorbtn[i].classList[1];
//      console.log(color);
//      secondbox.style.backgroundColor=color;

//     });
// }


let iconbtn=document.querySelector(".icons");
iconbtn.addEventListener("click",createmodule);

function createmodule()
{      
       let obj=document.querySelector(".hidden-box");
        if(obj==undefined && filteron==false){
     let div=document.createElement("div");
     div.setAttribute("class","hidden-box");
     secondbox.appendChild(div);
     div.innerHTML=` <div class="input-box">
     <textarea class="hidden-text" placeholder="Enter your text Here"></textarea>
    </div>
    
    <div class="hidden-color-box">
     <div class="hidden-color pink"></div>
     <div class="hidden-color blue"></div>
     <div class="hidden-color green"></div>
     <div class="hidden-color black border"></div>
    </div>
    </div>`
        
     let inputbox=document.querySelector(".hidden-text");
       let color="black";
       let hiddencolorbtn=document.querySelectorAll(".hidden-color");
        for(let i=0;i<hiddencolorbtn.length;i++)
        {
            hiddencolorbtn[i].addEventListener("click",function(){
                for(let j=0;j<hiddencolorbtn.length;j++)
                {
                    hiddencolorbtn[j].classList.remove("border");
                }
                hiddencolorbtn[i].classList.add("border");
                color=hiddencolorbtn[i].classList[1];
              
    
            })
        }
       inputbox.addEventListener("keydown",function(e){
            if(e.key=="Enter"){
                div.remove();
                console.log("hi");
                let content=inputbox.value;

               CreateTicket(color,content,uid(),false);

            }
    
          
        })
    }

    }

function HandleColor(ticket,object)
{

ticket.addEventListener("click",function(){
   let color=ticket.classList[1];
        let cColoridx=colors.indexOf(color)
        ticket.classList.remove(color);
        cColoridx=(cColoridx+1)%4;
        ticket.classList.add(colors[cColoridx]);
        object.tcolor=colors[cColoridx];
        let stringarr=JSON.stringify(alltickets);
        localStorage.setItem("tickets",stringarr);

    })
}
function HandleDelete(ticket,uniqueid)
{
    ticket.addEventListener("click",function(){
        if(deletestate)
        {
            ticket.remove();
            for(let i=0;i<alltickets.length;i++)
            {
                if(alltickets[i].tid==uniqueid)
                alltickets.splice(i,1);
            }
            let stringarr=JSON.stringify(alltickets);
            localStorage.setItem("tickets",stringarr);

        }
    })
}

function CreateTicket(color,content,uniqueid,Isformed,myobj)
{
    let ticket=document.createElement("div");
              secondbox.appendChild(ticket);
              ticket.setAttribute("class","ticket-box");
              ticket.setAttribute("id",uniqueid);
              ticket.innerHTML=` <div class="upper-ticket"></div>
              <div class="lower-ticket">
                <div class="uid">
                #${uniqueid}
                </div>
                <div class="ticket-textarea">
                </div>
    
              
              </div>`
              let upperticket=document.querySelectorAll(".upper-ticket");
              upperticket[upperticket.length-1].classList.add(color);
              let text=document.querySelectorAll(".ticket-textarea");
              text[text.length-1].innerText=content;
              let cticketnode=upperticket[upperticket.length-1];
              if(Isformed==false){
               let object={
                  tcolor:color,
                  tid:uniqueid,
                  tdata:content  

               }
               alltickets.push(object);
              
               let stringarr=JSON.stringify(alltickets);
               localStorage.setItem("tickets",stringarr);
               HandleColor(cticketnode,object);
               
            }
            else{
                HandleColor(cticketnode,myobj);
            }
            HandleDelete(ticket,uniqueid);
             

}
// DELETE BUTTON PE CLICK KRNE KE LIYE
let crossbtn=document.querySelectorAll(".icons")[1];
crossbtn.addEventListener("click",function(){
  if(deletestate==false)
  {
    crossbtn.style.backgroundColor="#555858"
  }
  else{
      crossbtn.style.backgroundColor="#636e72"
  }
  deletestate=!deletestate;

})

