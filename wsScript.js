
var changeMode = document.getElementById("changeMode")

if (changeMode){

	chrome.storage.sync.get('hide', function(data) {

		changeMode.checked = data.hide;

	})

	changeMode.onchange = function(element) {
	  	let value = this.checked;

	  	//update the extension storage value
	  	chrome.storage.sync.set({'hide': value}, function() {
	    	console.log('The value is '+ value);
	  	});

		//Pass init or remove message to content script 
		if(value){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	      		chrome.tabs.executeScript(
	          		tabs[0].id,
	          		{code: '$("body").addClass("dark")'}
	          	);
			});
		}else{
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	      		chrome.tabs.executeScript(
	          		tabs[0].id,
	          		{code: '$("body").removeClass("dark")'}
	          	);
			});
		}
	};
}

//on init perform based on chrome stroage value
window.onload=function(){  
    chrome.storage.sync.get('hide', function(data) {
        if (chrome.tabs){

	        if(data.hide){
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		      		chrome.tabs.executeScript(
		          		tabs[0].id,
		          		{code: '$("body").addClass("dark")'}
		          	);
				});
	        }else{
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		      		chrome.tabs.executeScript(
		          		tabs[0].id,
		          		{code: '$("body").removeClass("dark")'}
		          	);
				});
	        }
	         
        }
    });
}