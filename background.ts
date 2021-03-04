chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        color: "#3aa757"
    }, () => {
        console.log("The color is green.");
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        console.log('URL updated');
        console.log(changeInfo.url);
        const currentUrl = changeInfo.url;
        if (currentUrl == "http://tz/gh") {
            console.log("target url detected");
            chrome.tabs.update({ url: "https://github.com/tianhaoz95" });
        }
    }
});
