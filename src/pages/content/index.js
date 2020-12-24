console.log("content is loaded")


chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  if (request.type === 'getPage') {
    let response = {
      html: document.getElementsByTagName('html')[0].innerHTML,
      url: document.URL
    }
    callback(response);
  }
})
