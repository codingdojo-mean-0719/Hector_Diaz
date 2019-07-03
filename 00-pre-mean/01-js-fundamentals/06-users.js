var users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  
  function userLanguages(users){
      var string = '',
          userIndex = users.length;
   
      for(var interest of users){
          string += interest.fname+" "+interest.lname+" knows ";
          for(var index in interest.languages){
            
            if(index != interest.languages.length-1){
              string += (interest.languages[index])+", ";
            }else{
              string += interest.languages[index]+".";
            }
          }
        userIndex--;
        if(userIndex ){
          string += "\n";
        }
  
        }
    
    return string
  }
  
  
  console.log(userLanguages(users))