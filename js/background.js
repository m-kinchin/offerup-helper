chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.text === "cookies") {
    chrome.cookies.getAll({"url": "https://offerup.com"}, function(data) {console.log(data);
      sendResponse(data);
    });
  }
  return true;
});