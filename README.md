<p align="center">
  <img src="https://cdn.rawgit.com/scholar-ink/react-amap/46f028fa/src/assets/react.jpg">
</p>

# react-amap

> react-amap是一套基于React 和高德地图的地图组件。

## 安装
```
npm i -S react-mobile-amap
```

## 快速上手

引入react-amap

```javascript
// 引入react-amap
import ReactAMap from 'react-amap';

// 初始化react-amap
ReactAMap.initAMapLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ]
});

const screen = window.screen.height;

let AMap = null;

const parameters = {
  base: {
    zoom: 11,
    center: [
      121.474704,
      31.22789
    ],
  },
  style: {
      height: screen + 'px'
  },
  scale: {
    visible: false,
  },
  // toolBar: {
  //   visible: true,
  //   locate: true,
  //   autoPosition: false,
  // },
  autoPosition: true,
  markers: [
    {
      icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
      position: [116.2054671, 39.907761]
    },
    {
      icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b2.png',
      position: [116.368904, 39.913423]
    },
    {
      icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
      position: [116.305467, 39.807761]
    }
  ],
  marker: {
    fitView: true
  },
  onLoad: (map) => {
    AMap = map;
  },
  onMapMove: (map) => {
  },
  onLocationComplete: (data) => {
    console.log(data);
  },
  onLocationError: (data) => {
    console.log(data);
  }
};

const click = function () {
  
  AMap.panBy(50, 100);
};

ReactDOM.render(
  <div>
    <AMapContainer {...parameters} />
    <button onClick={click} style={{height:'200px',background:'#ccc'}}>click</button>
  </div>,
  document.getElementById('root')
);
```
## 文档 （具体参数详见amap官方文档）

```bash
├── base             # 基本参数
│ ├── zoom              # 地图显示的缩放级别
│ ├── center            # 地图中心点坐标值
├── style            # 地图基本样式
│ ├── height            # 显示高度 
├── markers          # 点标记 
│ ├── icon              # 需在点标记中显示的图标
│ ├── position          # 点标记在地图上显示的位置
├── marker           # 点标记相关配置 
│ ├── fitView           # 是否根据点标记适配view
├── scale            # 地图比例尺插件
│ ├── visible           # 是否显示
├── toolBar          # 地图操作工具条插件）
│ ├── visible           # 是否显示
│ ├── locate            # 是否显示定位按钮
│ ├── autoPosition      # 是否自动定位
├── onLoad           # 地图加载完成执行
│ ├── map               # 返回map 对象
├── onMapMove        # 地图移动结束后触发
├── onLocationComplete  # 定位成功时触发此事件
│ ├── data                  # 返回数据格式：GeolocationResult 
├── onLocationError     # 定位失败时触发此事件
│ ├── data                  # 返回数据格式：GeolocationError 

```

