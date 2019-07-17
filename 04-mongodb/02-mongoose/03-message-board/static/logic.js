$(document).ready(function(){
  const socket = io();
  $(document).click(function(){
    console.log('FUCKING CLIK')
  })
  $('.messageForm').on('submit',function(event){
    event.preventDefault();
    const messageData = Array.from(this)
    .filter(el=>el.name)
    .reduce((memo, element)=>{
      return{
        ...memo,
        [element.name]:element.value
      }
    },{})
    if(messageData.name.trim() === ''){
      console.log("form needs to have character")
      }else{
        socket.emit('newMessage',messageData)
      }
  })
  socket.on('postMessage',messageData=>{
    $('secion h1').append(`
    <p><span>name: ${messageData.name}</span> message: ${messageData.message}</p>
    `)
  })
  $('section form').submit(function(event){
    event.preventDefault();
    const commentData = Array.from(this)
    .filter(el=>el.name)
    .reduce((memo,element)=>{
      return{
        ...memo,
        [element.name]:element.value
      }
    },{})
    if(commentData.name.trim() === ''){
      console.log('form needs character')
    }else{
      socket.emit('newComment',commentData)
      console.log('comment a sent')
    }

  })
})
