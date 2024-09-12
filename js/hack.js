const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval1 = null;

document.querySelector(".sidebar").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval1);
  
  interval1 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval1);
    }
    
    iteration += 1 / 3;
  }, 30);
}

let interval2 = null;

document.querySelector(".sidebar2").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval2);
    
    interval2 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval2);
      }
      
      iteration += 1 / 3;
    }, 30);
}

let interval3 = null;

document.querySelector(".sidebar3").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval3);
    
    interval3 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval3);
      }
      
      iteration += 1 / 3;
    }, 30);
}
