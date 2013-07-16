

function checkForValidUrl(tabId, changeInfo, tab) {
    if(tab.url.indexOf('triton.ironhelmet.com') > -1) {
        chrome.pageAction.show(tabId);
    }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);