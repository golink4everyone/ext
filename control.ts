import YAML from 'yaml';

window.onload = () => {
    console.log("Popup loaded");
    const refreshBtn = document.getElementById("refesh_btn");
    refreshBtn?.addEventListener("click", () => {
        console.log("Clicked");
        // Should fetch from the repository and save to local
        const updateConfig = YAML.parse("");
        chrome.storage.sync.set({
            color: "#3aa757"
        }, () => {
            console.log("The color is green.");
        });
    }, false);
};