const re = /https:\/\/www\.curseforge\.com\/(.*)$/;
const newUrl = `https://legacy.curseforge.com/${(window.location.href.match(re))[1]}`;
window.location.replace(newUrl);
history.replaceState(null, '', re)