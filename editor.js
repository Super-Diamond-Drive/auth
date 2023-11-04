const SuperDiamondDriveEditor = {
 set: function (Name, Content) {
  var extension = {
   name: Name,
   content: Content
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
SuperDiamondDriveEditor.deleteRequestElement = document.createElement("iframe")
SuperDiamondDriveEditor.deleteRequestElement.style.display = "none"
SuperDiamondDriveEditor.deleteRequestElement.src = "https://super-diamond-drive.github.io/auth/delete.html"
document.body.appendChild(SuperDiamondDriveEditor.deleteRequestElement)
SuperDiamondDriveEditor.getRequestElement = document.createElement("iframe")
SuperDiamondDriveEditor.getRequestElement.style.display = "none"
SuperDiamondDriveEditor.getRequestElement.src = "https://super-diamond-drive.github.io/auth/get.html"
document.body.appendChild(SuperDiamondDriveEditor.getRequestElement)
SuperDiamondDriveEditor.clearRequestElement = document.createElement("iframe")
SuperDiamondDriveEditor.clearRequestElement.style.display = "none"
SuperDiamondDriveEditor.clearRequestElement.src = "https://super-diamond-drive.github.io/auth/clear.html"
document.body.appendChild(SuperDiamondDriveEditor.clearRequestElement)
