browser.tabs.onUpdated.addListener((tabId, change) => {
  if (change.url && change.url.startsWith("https://www.curseforge.com/")) {
      change.url = change.url.replace("www", "legacy")
      browser.tabs.update(tabId, {url: change.url});    
  }
})
