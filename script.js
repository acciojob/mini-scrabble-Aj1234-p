let evalText = document.querySelector('#evaluatedText');
let countText = document.querySelector('#letterCount');

evalText.addEventListener('input',(e)=>{
      if(e.target.value){
        if(e.target.value.length>0)
           countText.textContent = e.target.value.length;
        else
           countText.textContent = 0;
      }
})

