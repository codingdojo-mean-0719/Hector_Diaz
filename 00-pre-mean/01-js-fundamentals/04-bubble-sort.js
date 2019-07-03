function bubbleSort(arr){
    var bigCatcher = arr[0], lilCatcher = arr[0];
    
      for(var i = 0; i < arr.length; i++){
           lilCatcher =arr[i];
          if(lilCatcher > bigCatcher){
            bigCatcher = lilCatcher;
          }
        if( bigCatcher > lilCatcher){
          lilCatcher = arr[i];
          arr[i-1]=lilCatcher;
          arr[i]=bigCatcher;
          var j = i + 1;
          i = 0
          bigCatcher = arr[0]
      }
  
        }
        return arr
  }
  console.log(bubbleSort([3,7,5,1]))
  