/**
 * Created by zhouchao on 16/12/8.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import ReactAMap, { AMapContainer } from './src/index'

ReactAMap.initAMapLoader({
  // 高德的key
  key: 'df7823e706e2bd43755f1e8b4645a185',
  // 插件集合
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.ToolBar',
    'AMap.Geolocation',
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
      height: screen-90 + 'px'
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