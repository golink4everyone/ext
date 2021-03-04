import YAML from 'yaml';

window.onload = () => {
    console.log("Popup loaded");
    const refreshBtn = document.getElementById("refesh_btn");
    refreshBtn?.addEventListener("click", () => {
        console.log("Clicked");
        // Should fetch from the repository and save to local
        const updateConfig = YAML.parse("");
        chrome.storage.sync.set({
            username: "golink4everyone",
            repository: "global-config",
            filename: "config.yaml"
        }, () => {
            console.log("The color is green.");
        });
    }, false);
};