chrome.tabs.onActivated.addListener( function(activeInfo){
  chrome.tabs.get(activeInfo.tabId, function(tab){
      let url = tab.url;
      if (url.startsWith("https://www.curseforge.com/")){
       url = url.replace("www", "legacy")
        chrome.tabs.update(tab.id, {url: url});
      }
  })
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
  if (tab.active && change.url) {
    if (change.url.startsWith("https://www.curseforge.com/")){
      change.url = change.url.replace("www", "legacy")
      chrome.tabs.update(tab.id, {url: change.url});
  }          
  }
});