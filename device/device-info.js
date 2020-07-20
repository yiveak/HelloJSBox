/*
 * $device.info 返回设备的基本信息，返回的数据形式是一个对象
 * {
 *  "model": "string",
 *  "language": "string",
 *  "version": "string",
 *  "name": "cyan's iPhone",
 *  "screen": {
 *  "width": 240,
 *  "height": 320,
 *  // scale: 比列
 *  "scale": 2.0,
 *  // orientation: 方向
 *  "orientation": 1,
 *  }
 * }
 */

// $device.info 返回设备的基本信息，返回的数据形式是一个对象
let deviceInfo = $device.info;
// console.info("Info:" + deviceInfo); // "Info: [object Object]" 因为String(deviceInfo)
// $ui.alert(deviceInfo);
/* 
$ui.alert({
  title: "deviceInfo",
  message: info,
});
 */

// 获取：设备的model
let deviceModel = deviceInfo.model;
console.info("Model: " + deviceModel); // "iPhone10,1"

// 获取：当前app里设置的语言
let deviceLanguage = deviceInfo.language;
console.info("Language: " + deviceLanguage); // "Language: en"

// 获取：设备当前系统的版本
let deviceVersion = deviceInfo.version;
console.info("Version: " + deviceVersion); // "Version: 13.3"

// 获取：当前设备的名称
let deviceName = deviceInfo.name;
console.info("Name: " + deviceName); // "Name: Alexa's iPhone"

// 获取：当前设备屏幕尺寸的物理信息，返回的数据类型是一个对象
let deviceScreen = deviceInfo.screen;
// console.info("Screen: " + deviceScreen); // "Screen: [object Object]"
// $ui.alert(deviceScreen);

/* 
// 未旋转屏幕前
console.info("未旋转屏幕前，屏幕尺寸的各种信息:");
let unrotateWidth = deviceScreen.width;
console.info("Width: " + unrotateWidth);
let unrotateHeight = deviceScreen.height;
console.info("Height: " + unrotateHeight);
let unrotateScale = deviceScreen.scale;
console.info("Scale: " + unrotateScale);
let unrotateOrientation = deviceScreen.orientation;
console.info("Orientation: " + unrotateOrientation); // "Orientation: 1"
// 旋转屏幕后
console.info("旋转屏幕后，屏幕尺寸的各种信息:");
let rotateWidth = deviceScreen.width;
console.info("Width: " + rotateWidth);
let rotateHeight = deviceScreen.height;
console.info("Height: " + rotateHeight);
let rotateScale = deviceScreen.scale;
console.info("Scale: " + rotateScale);
let rotateOrientation = deviceScreen.orientation;
console.info("Orientation: " + rotateOrientation); // "Orientation: 3" or "Orientation: 5"
*/

// 根据屏幕是否旋转动态显示屏幕尺寸的物理信息
if (deviceScreen.orientation === 1) {
  console.info("未旋转屏幕前，屏幕尺寸的各种信息:");
  let unrotateWidth = deviceScreen.width;
  console.info("Width: " + unrotateWidth);
  let unrotateHeight = deviceScreen.height;
  console.info("Height: " + unrotateHeight);
  let unrotateScale = deviceScreen.scale;
  console.info("Scale: " + unrotateScale);
  let unrotateOrientation = deviceScreen.orientation;
  console.info("Orientation: " + unrotateOrientation); // "Orientation: 1"
} else {
  console.info("旋转屏幕后，屏幕尺寸的各种信息:");
  let rotateWidth = deviceScreen.width;
  console.info("Width: " + rotateWidth);
  let rotateHeight = deviceScreen.height;
  console.info("Height: " + rotateHeight);
  let rotateScale = deviceScreen.scale;
  console.info("Scale: " + rotateScale);
  let rotateOrientation = deviceScreen.orientation;
  console.info("Orientation: " + rotateOrientation);
}
