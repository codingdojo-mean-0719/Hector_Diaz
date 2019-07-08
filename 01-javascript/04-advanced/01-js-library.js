var _ = {
    map: function(list,iteraterCallback) {
        var newList = [];
      if(typeof(list) == "Array"){
        for(let i = 0; i < list.length; i++){
            newList.push(iteraterCallback(list[index]))
        }
        return newList;
        }
        else if(typeof(list)== "object"){
            for(let key in list){
                newList.push(iteraterCallback(list[key]))
            }
            return newList;
        }
    },
    reduce: function(list,iteraterCallback,memo) { 
        let index = 0;

        if(memo===undefined){
            memo = list[0];
            index = 1;
        };

        for(index; index < list.length; index++){
            memo =  iteraterCallback(memo,list[index],index,list);
          console.log("this is the result",memo);
        }
        
      return memo;
    },
    filter: function(list,filteringCallback) {
        let filterd = [],
            check;

        for(let i = 0; i < list.length; i++){
          check=filteringCallback(list[i]);
            if(check){
              filterd.push(list[i]);
              }
        }
        return filterd
    },
    find: function(list,filteringCallback) { 
        let check;

        for(let i = 0; i < list.length; i++){
        check=filteringCallback(list[i]);
            if(check){
                return list[i];
            }
        }
    },

    reject: function(list,filteringCallback) { 
        let filterd = [],
        check;

        for(let i = 0; i < list.length; i++){
            check=filteringCallback(list[i]);
            if(!check){
                filterd.push(list[i]);
            }
        }
        return filterd
    }
  }
 // you just created a library with 5 methods!
 
let doubledList = _.map({one:1,two:4,three:3},function(num){return num * 2;});

// console.log(doubledList)

// console.log(_.reduce([1,2,3],(memo,num)=>memo+num,0));

// console.log(_.filter([1,2,3,4,5,6],(num)=>num%2==0))










