/*
 * $device.isDarkMode 检查设备是否处于 Dark Mode 状态：
 */

let status = $device.isDarkMode;
console.info("Is DarkMode? " + status);

if ($device.isDarkMode === true) {
  console.log("DarkMode On");
  $device.taptic(2);
} else {
  console.info("DarkMode Off");
}
