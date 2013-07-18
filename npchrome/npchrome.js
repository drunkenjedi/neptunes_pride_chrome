

function checkForValidUrl(tabId, changeInfo, tab) {
//    chrome.pageAction.show(tabId)
    if(tab.url.indexOf('triton.ironhelmet.com') > -1) {
        chrome.pageAction.show(tabId);
    }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
