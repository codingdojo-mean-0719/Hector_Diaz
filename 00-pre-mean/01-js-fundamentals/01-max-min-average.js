function maxMinAv(arr){
    var max = arr[0], min = arr[0],sum=0, av=0;
    for(i = 0; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }else if(arr[i] < min){
        min= arr[i]
      }
      sum += arr[i];
    }
   av = sum/arr.length;
  
    return "the minium is "+min+", the maxium is "+max+", and the average is "+av;
  }
  
  console.log(maxMinAv([1,2,3,4,5,6,6,7]))