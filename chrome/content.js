
var addListeners = function(){

    $("body").addClass("dark")
    console.log('added')
}

var removeListeners = function(){
    $("body").removeClass("dark")
    console.log('remove')

}

//message listener for background
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
    console.log(request)
    if(request.action === 'init'){
        addListeners();
    }else{
        removeListeners();
    }
    sendResponse({result: "success"});
});

//on init perform based on chrome stroage value
window.onload=function(){  
    chrome.storage.sync.get('hide', function(data) {
        console.log(data.hide)
        if(data.hide){
            addListeners();
        }else{
            removeListeners();
        } 
    });
}