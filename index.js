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
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ]
});

const parameters = {
  base: {
    zoom: 11,
    center: [
      121.474704,
      31.22789
    ],
  },
  style: {
      height: '600px'
  },
  scale: {
    visible: true,
  },
  toolBar:{
    visible: true,
    locate: true,
    autoPosition: true,
  }
};

ReactDOM.render(
  <div>
    <AMapContainer {...parameters}  />
  </div>,
  document.getElementById('root')
);