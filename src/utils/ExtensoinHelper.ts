export class ExtensionHepler {
  static getCurrentTab(callback: any) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0]
      callback(activeTab.url)
    })
    return callback("")
  }
}
