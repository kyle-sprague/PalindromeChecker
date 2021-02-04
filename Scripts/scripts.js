function palindrome(str) {
    str = str.replace(/[\W_]+/g, ''); 
    str = str.toLowerCase(); 
    if(str.length % 2 == 0){
      for (let i = 0; i <= str.length/2 -1; i++){
          if(str[i] != str[str.length - i - 1]){
            return false; 
          }
        } 
      return true; 
    }
    else{
      for (let i = 0; i <= str.length/2; i++){
          if(str[i] != str[str.length - i - 1]){
            return false; 
          }   
      }
      return true; 
    }
  }
  
  