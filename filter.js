let colorbtn=document.querySelectorAll(".color")
let targetcolor;
let pcolor=null;
for(let i=0;i<colorbtn.length;i++)
{
    colorbtn[i].addEventListener("click",function(){
        let children=colorbtn[i].children[0];
        let color=children.classList[1];
        let allticketsElem=document.querySelectorAll(".ticket-box");
        for(let j=0;j<allticketsElem.length;j++)
        {
            allticketsElem[j].remove();
        }
         if(pcolor!=null && pcolor==color)
         {
             targetcolor=alltickets;
             pcolor=null;
             filteron=false;
         }
         else{
            targetcolor=alltickets.filter(function(myobj){
               
                return myobj.tcolor==color;
    
            });
            pcolor=color;
            filteron=true;
         }
       for(let j=0;j<targetcolor.length;j++)
        {
            let content=targetcolor[j].tdata;
            let color=targetcolor[j].tcolor;
            let uniqueid=targetcolor[j].tid;
             CreateTicket(color,content,uniqueid,true,targetcolor[j]); 
        
        }

    })
}



