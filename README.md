<p align="center">
  <img src="https://cdn.rawgit.com/ElemeFE/react-amap/master/src/homepage/assets/images/logo_c.png">
</p>

# react-amap
[![Build Status](https://travis-ci.org/scholar-ink/react-amap.svg?branch=master)](https://travis-ci.org/scholar-ink/react-amap)
[![npm package](https://img.shields.io/npm/v/react-amap.svg)](https://www.npmjs.org/package/react-amap)
[![NPM downloads](http://img.shields.io/npm/dm/react-amap.svg)](https://npmjs.org/package/react-amap)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/react-amap/src/lib/index.js?compression=gzip&label=gzip%20size:%20JS)
[![license](https://img.shields.io/github/license/elemefe/react-amap.svg?style=flat-square)](https://github.com/scholar-ink/react-amap)
[![GitHub stars](https://img.shields.io/github/stars/scholar-ink/react-amap.svg?style=social&label=Star)](https://github.com/scholar-ink/react-amap)

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

