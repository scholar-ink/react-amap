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

