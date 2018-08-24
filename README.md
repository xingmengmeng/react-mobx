
#### 技术栈

react + fetch + mobx(es7语法) + react-router + less

#### 配置mobx

npm run eject 暴露脚手架中的配置，然后添加相应的配置

#### es7配置

```
package.json中配置，用来支持修饰器。

"babel": {
    "plugins": [
      "transform-decorators-legacy"
    ],
    "presets": [
      "react-app"
    ]
},

```
