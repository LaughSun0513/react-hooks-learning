### 怎么使用装饰器
前提条件
1.babel7+
2.create-react-app
3.执行npm run eject 解锁配置
4.添加插件"@babel/plugin-proposal-decorators": "^7.4.4"
5.babel配置
````
"babel": {
    "plugins":[
      ["@babel/plugin-proposal-decorators",{"legacy": true}]
    ],
    "presets": [
      "react-app"
    ]
  }
````

### React Hooks
```
useState
useEffect
useReducer
useContext
useMemo
useRef
useCallback
```
