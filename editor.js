const SuperDiamondDriveEditor = {
 set: function (Name, Manifest) {
  var extension = {
   name: Name,
   manifest: "" + Manifest + ""
  }
  SuperDiamondDriveEditor.setRequestElement.contentWindow.postMessage(JSON.stringify(extension), "*")
 },
 delete: function (Name) {
  SuperDiamondDriveEditor.deleteRequestElement.contentWindow.postMessage(Name, "*")
 },
 get: function (Name) {
  return SuperDiamondDriveEditor.getRequestElement.contentWindow.postMessage(Name, "*");
 }
}
SuperDiamondDriveEditor.setRequestElement = document.createElement("iframe")
SuperDiamondDriveEditor.setRequestElement.style.display = "none"
SuperDiamondDriveEditor.setRequestElement.src = "https://super-diamond-drive.github.io/auth/create.html"
document.body.appendChild(SuperDiamondDriveEditor.setRequestElement)
SuperDiamondBrowserExtensionEditor.deleteRequestElement = document.createElement("iframe")
SuperDiamondBrowserExtensionEditor.deleteRequestElement.style.display = "none"
SuperDiamondBrowserExtensionEditor.deleteRequestElement.src = "https://super-diamond-drive.github.io/auth/delete.html"
document.body.appendChild(SuperDiamondBrowserExtensionEditor.deleteRequestElement)
SuperDiamondBrowserExtensionEditor.getRequestElement = document.createElement("iframe")
SuperDiamondBrowserExtensionEditor.getRequestElement.style.display = "none"
SuperDiamondBrowserExtensionEditor.getRequestElement.src = "https://super-diamond-drive.github.io/auth/get.html"
document.body.appendChild(SuperDiamondBrowserExtensionEditor.getRequestElement)
SuperDiamondBrowserExtensionEditor.clearRequestElement = document.createElement("iframe")
SuperDiamondBrowserExtensionEditor.clearRequestElement.style.display = "none"
SuperDiamondBrowserExtensionEditor.clearRequestElement.src = "https://super-diamond-drive.github.io/auth/clear.html"
document.body.appendChild(SuperDiamondBrowserExtensionEditor.clearRequestElement)
