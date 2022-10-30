function go(){
    rows= document.getElementById("input").value;
    document.body.style.width=rows*104+"px";
    
    for(let x=0; x<rows; x++){
      for(let y=0; y<rows; y++){
        const div=document.createElement("div");
        document.getElementById("div").append(div);
        div.id=(x+y);
        if(div.id%2===0){
          div.style.background="black";
        }
        div.style.height="100px";
        div.style.width="100px";
        div.style.border="2px solid";
        div.style.float="left";
      }
    }
  }
  // setTimeout(()=>{window.location.reload()},10000
  
