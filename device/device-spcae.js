/* 
* $device.space 获取设备的内存/磁盘空间
* 返回的数据类型是一个对象
{
  "disk": {
    "free": {
      "bytes": 87409733632,
      "string": "87.41 GB"
    },
    "total": {
      "bytes": 127989493760,
      "string": "127.99 GB"
    }
  },
  "memory": {
    "free": {
      "bytes": 217907200,
      "string": "207.8 MB"
    },
    "total": {
      "bytes": 3221225472,
      "string": "3 GB"
    }
  }
}
*/

// $ui.alert($device.space);

console.info("当前磁盘的总空间大小: " + $device.space.disk.total.string);
console.info("当前磁盘的空余空间: " + $device.space.disk.free.string);
console.info("当前内存的总大小: " + $device.space.memory.total.string);
console.info("当前内存的剩余大小: " + $device.space.memory.free.string);
