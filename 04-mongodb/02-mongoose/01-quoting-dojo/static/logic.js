

$(document).ready(function(){
    const socket = io()
    $('form').submit(function(event){
        console.log('submit triggerd')
        event.preventDefault();
        const formData = Array.from(this)
        .filter(el=>el.name)
        .reduce((memo,element)=>{
            return{
                ...memo,
                [element.name]:element.value
            }
        },{})



        if(formData.name.trim() === "" || formData.quote.trim() === ""){
            throw new Error('please enter entries with characters in them')
        }else{
            socket.emit("newQoute",formData);
            $(this).slideUp();
            $('section').fadeIn('fast');
        }
    })
    socket.on('postQoute',quote=>{
      console.log('post a qoute triggerd')
      $('section').html(`
      ${$('section').html()}
      <p>${quote.quote}</p>
      <small>${quote.name}</p>
      `)
    })
    socket.on('postQuotes',data=>{
      console.log('this is the posting qoute', data);
      for(let i in data){
        console.log('here is the key',data[i])
        $('section').html(`
        ${$('section').html()}
        <p>${data[i].qoute}</p>
        <small>${data[i].author}</small>
        `)
      }
    })
})
