function turning(turn){
  
  let bElement = document.querySelector(turn);
 
  
  if(bElement.classList.contains('is-toggle')){
    if(bElement.innerText === 'Buy'){
      bElement.innerHTML = 'Added to PCart';
      bElement.classList.add('is-Purchased');
    }
    else{
      bElement.innerHTML = 'Buy';
      bElement.classList.remove('is-Purchased');
  }
  bElement.classList.remove('is-toggle');
}
  else{
    if(bElement.innerText === 'Buy'){
      bElement.innerHTML = 'Added to PCart';
      bElement.classList.add('is-Purchased');
    }
    else{
      bElement.innerHTML = 'Buy';
      bElement.classList.remove('is-Purchased');
  }
  bElement.classList.add('is-toggle');
  
  }
}
function buy(turn){
  
  let buttonElement = document.querySelector(turn);
    if(buttonElement.innerText === 'Buy'){
      buttonElement.innerHTML = 'Added to PCart';
      buttonElement.classList.add('is-Purchased');
    }
    else{
      buttonElement.innerHTML = 'Buy';
      buttonElement.classList.remove('is-Purchased');
  }
}