/*
 * $device.ssid 获取当前 Wi-Fi 的 SSID 信息
 * 返回的数据类型是一个对象
 * {
 *  "SSIDDATA": {},
 *  "BSSID": "aa:bb:cc:dd:ee:ff",
 *  "SSID": "SSID"
 *  }
 */

let wifiSSID = $device.ssid;
// console.info("SSID: " + currentSSID);
console.info("BSSID: " + wifiSSID.BSSID);
console.info("设备所在无线网络的名称");
console.info("SSID: " + wifiSSID.SSID);
