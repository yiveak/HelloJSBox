/*
 * $device.networkType 获取设备当前网络的网络类型
 * 数值	说明
 * 0	无网络
 * 1	Wi-Fi
 * 2	蜂窝数据
 */

console.info("设备当前网络的网络类型：" + $device.networkType);

// 根据返回的数值，显示具体的网络类型信息
/* 
switch ($device.networkType) {
  case 0:
    console.info("无网络！");
    break;
  case 1:
    console.info("当前连接的是wifi！");
    break;
  case 2:
    console.info("当前启用了移动数据！");
    break;
} 
*/

// 扩展0.1：如果连接的是Wi-Fi，则顺便输出该网络的SSID
switch ($device.networkType) {
  case 0:
    console.info("无网络！");
    break;
  case 1:
    /* 
    console.info("当前连接的是wifi！");
    console.info("该网络的SSID是: " + $device.ssid.SSID); 
    */
    console.info(`当前连接的是名为: '${$device.ssid.SSID}' 的Wi-Fi网络！`);
    break;
  case 2:
    console.info("当前启用了移动数据！");
    break;
}
