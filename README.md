<p align="center">
  <img src="https://cdn.rawgit.com/scholar-ink/react-amap/46f028fa/src/assets/react.jpg">
</p>

# react-amap

> react-amap是一套基于React 和高德地图的地图组件。

## 安装
```
npm install -S react-amap
```

## 文档


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
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
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
    visible: true,
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
