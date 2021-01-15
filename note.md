### 导航栏固定采用flex布局，因为fixed在手机端bug很多
### style 标签里的 scoped的作用
    在div上加一个data-v-xxx属性，
    在样式的上加一个属性选择器[data-v-x1]
    使得这个.nav类选择器只会对这个div有效
    所以这就是,只要加上scoped，这个类样式只会在当前组件有效的原理

    经过试验，同名class的时候，scoped会导致向上继承，但不会影响父类的样式
    <div class=“nav” data-v-x1>

    <style scoped>
       .nav[data-v-x1] {border:1px solid red;}
    </style>

### 组件和视图怎么理解
    组件就是很小的视图
    视图就是很大的组件
    其实都差不多
   App.vue是主视图
    Labels是主页面视图
    Money是主页面视图
    Statistics是页面视图
        Nav是导航组件

### 懒人神器 svg-sprite-loader
https://segmentfault.com/a/1190000015367490

$ yarn add svg-sprite-loader -D

没有webpackage.json配置文件
要转换成vue.config.js
要把svg的配置文件翻译成vue cli的配置文件格式

