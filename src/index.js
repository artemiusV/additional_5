module.exports = function check(str, bracketsConfig) {
  var pairIsFound = false;
  var correctPairs = 0;
  var str = str;
  var arrayOfStr = str.split('');
  //console.log(arrayOfStr);
  var closeIndex;
  var openIndex;
    
  for (var a = 0; a < arrayOfStr.length; a++) 
  {   
    
    pairIsFound = false;
      for (var b = 0; b < bracketsConfig.length; b++) 
      {
     
              if (arrayOfStr[a] === bracketsConfig[b][0]) 
              {
       
              openIndex = a;
              if (openIndex === (closeIndex - 1) && arrayOfStr[a+1] != bracketsConfig[b][1]){
              
                break;
              } 
                  for (var p = a + 1; p < arrayOfStr.length; p++) 
                  {
                      if (arrayOfStr[p] === bracketsConfig[b][1]) 
                      { 
                                 
                          arrayOfStr.splice(p,1);
                          closeIndex = p;
                          correctPairs++;
                          pairIsFound = true;
                          break;
                      }
                  if(pairIsFound === true){break;}}
              }
          if(pairIsFound === true){break;}
      }
  }
  if((str.length / 2) === correctPairs){return(true);}
  else{return(false);}}