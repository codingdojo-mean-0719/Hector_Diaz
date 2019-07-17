$(document).ready(function(){

    //present the user with a form to register thier name to join the chat room
    setTimeout(function(){ refuseAccess()},3000);
    const socket = io();
    //get the new page up to date with the current activity
    socket.on('populatePage',data=>{
        console.log('this is data',data)
        if(data.users){
            for(let user in data.users){
                addMemberToChat(data.users[user])
            }
        }
    })
    //do what I can on the client side to limit thier ablity to navagate around the index page.
    $(document).click(function(){
        console.log('click triggerd')
        refuseAccess()
    });
    $(document).keydown(function(){
        refuseAccess();
    })
    //check if the name submitted is at least a character before sending the info to the server.
    $('.nameForm').submit( function(event){
        const thisForm = this;
        event.preventDefault()
        const formData = formDataFormat(thisForm);

        if(formData.name.trim() === ''){
        // $('.nameForm.info').slideUp()
            $('.nameForm .info').slideDown()
        }else{
            socket.emit('newUser', formData)
        }
    })
    //ask the user to pick a different name if submission taken
    socket.on('nameTaken',()=>{
        $('.nameForm .info').slideDown()
    });
    //activate chat once use entered into server
    socket.on('activateChat', userData=>{
        activateChat();
        addUserToChat(userData);
    })

    socket.on('newMember',memberData=>{
        addMemberToChat(memberData);
    })
    $('.displayMessages').click(function(){
        if($(this).html() === 'DISPLAY PERVIOUS CHAT' ){
            $(this).html('HIDE CURRENT CHAT')
        }
        else{
            $(this).html('DISPLAY PERVIOUS CHAT')
        }
    })
    $('.sendMessageForm').submit( function(event){
        const thisForm = this;
        $('.newMessage').html('')
        const formData = formDataFormat(thisForm);
        if(formData.newMessage.trim() === ''){
            $('.nameForm .info').slideDown()
        }else{
            socket.emit('newMessage',formData )
            //this will be in the .on('newUser)
        }
        return false
    })
    socket.on('postMyMessage',(data)=>{
        console.log('this is the post my messagr data',data)
        $('section div').html(`
        ${$('section div').html()}
        <p class="messages messagesStyling userMessage"><small class="info"><span class="senderStyling">${$('.userName').html()}</span>${data.stamp.date}</small class="info">${data.content}</p>
        `)

    })
    socket.on('postMessage',(data)=>{
        console.log('this is the post messagr data',data)
        $('section div').html(`
        ${$('section div').html()}
        <p class="messages messagesStyling"><small class="info"><span class="senderStyling">${data.sender}</span>${data.stamp.date}</small class="info">${data.content}</p>
        `)
    })

    //set the cursor to be at the bottom
    var messageDisplayArea = document.getElementById("messagesDisplayArea");
    messageDisplayArea.scrollTop = messageDisplayArea.scrollHeight;

})
