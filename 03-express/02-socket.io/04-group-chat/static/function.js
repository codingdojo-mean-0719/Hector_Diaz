
//add class to add color and functionality to page
function activateChat(){
    $('header').addClass('headerStyling');
    $('.userName').addClass('userNameStyling');
    $('.wrap').addClass('wrapStyling');
    $('.messageDash h2, .chatHeader').addClass(' headerColor');
    $('.displayMessages').addClass('displayMessagesStyling');
    $('.newMessage').addClass('newMessageStyling');
    $('.sendButton').addClass('sendButtonStyling');
    $('.line').addClass('lineStyling');
}
//check to see if the user is on has been successfully enterd and registerd on the page
function refuseAccess(){
    if($('.userName').html()===""){
        $('.nameFormWrap').fadeIn('slow')
    }
}

function formDataFormat(inputId,thisForm){
    let el = document.getElementById(inputId);
    const formData = Array.from(thisForm)
    .filter(el => el.name)
    .reduce((memo,element)=>{
        return {
            ...memo,
            [element.name]: element.value
        }
    },{});
    return formData

}

function addUserToChat(formData){
    //hide the name form whem a username is successfully enterd
    $('.nameFormWrap').hide();
    //add the users name to the nav bar and to 'who's in chat'
    $('.userName').html(formData.name);
    $('.whosInChatRoom .scrolling').html(`
        ${$('.whosInChatRoom .scrolling').html()}
    <p class="currentUserStyling">${formData.name}<small class="info">you</small class="info"></p>`);
    $('.sendMessageForm').html(`
        ${$('.sendMessageForm').html()}
        <input type="hidden" name="userId" value="${formData.id}">
    `);
}
function addMemberToChat(memberData){
    console.log('add memeber')
    $('.whosInChatRoom .scrolling').html(`
        ${$('.whosInChatRoom .scrolling').html()}
        <p class="senderStyling">${memberData.name}<small class="info"></small class="info"></p>

    `)
}