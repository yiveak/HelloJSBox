/*
 * $device.isJailbroken 检查设备是否越狱
 */
const isJailbroken = $device.isJailbroken;
console.info("Is JailBroken? " + isJailbroken);

if ($device.isJailBroken === true) {
  console.info("Jail Broken");
} else {
  console.info("Unjail Broken");
}
