import { Octokit } from "@octokit/rest";

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

chrome.alarms.create("checkRepository", {
    delayInMinutes: 1,
    periodInMinutes: 10,
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name === "checkRepository") {
        console.log("Check repository.");
        const octokit = new Octokit();
        octokit.repos.getContent({
            owner: "golink4everyone",
            repo: "global-config",
            path: "config.yaml",
        }).then((res) => {
            console.log(res);
        });
    }
});
