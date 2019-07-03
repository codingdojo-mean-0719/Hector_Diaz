function bracesValid(str){
    var dict = {
      "{":"}",
      "(":")",
      "[":"]",
    },
     theTruth = [];
    for(i = 0; i < str.length; i++){
      if(str[i] == "(" || str[i]=="{" || str[i]=="["){
        theTruth.push(str[i]);
      }else if(str[i]==")" || str[i]=="}" || str[i]=="]"){
        if(theTruth.length===0){
          console.log("truth length if triggerd")
          return false;
        }else if(dict[theTruth[theTruth.length-1]] != str[i]){
          
            console.log("dict if triggerd "+str[i]+" triggerd it "+dict[theTruth[theTruth.length-1]])
            return false;
          }else{
            console.log("pop else triggerd")
            theTruth.pop();
            }
           }
      }
      if(theTruth.length){
         return false;
      }
    return true;
    
  }
  
  console.log(bracesValid("{{{[()]}{}}{}"))