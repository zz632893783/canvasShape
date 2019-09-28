# 如何选中绘制在canvas上的图形

## 安装依赖模块
```
npm install
```

### 运行项目
```
npm run dev
```
### 问题
绘制在 canvas 上的图形并不像 html 元素一样是分开的元素，当图形绘制在canvas上之后，它们已经变成了单纯的像素，你在 canvas 上点击它的时候，并不会有任何反应，我们需要其做特殊处理，使它像普通的 html 元素一样
### 思路
- 如果是圆形，描述一个圆形，我们需要的是圆心的 x，y 坐标，圆的半径，还有圆的颜色
- 如果是矩形，描述一个矩形（这里先不考虑矩形旋转），我们需要的是矩形的起始点（左上角点）的 x，y 坐标，以及矩形的长宽，还有矩形的颜色
- 如果是正三角形（这里先不考虑正三角形旋转），我们需要的是三角形中心点的 x，y 坐标，三角形的边长，还有三角形的颜色
除此之代，每种图形还应有一个参数用以表示上下级关系

总而言之描述每种图形，所需要的参数都不相同，所以可以将每一种图形都分别声明一个类，在它们各自的构造函数中，分别设置描述该种图形所需要的数据
```
// 圆形
class Circle {
    constructor (x, y, radius, fillStyle, zIndex = 0) {
        this.type = 'circle'
        this.x = x
        this.y = y
        this.radius = radius
        this.fillStyle = fillStyle
        this.zIndex  = zIndex 
    }
}
```
```
// 矩形
class Rectangle {
    constructor (x, y, width, height, fillStyle, zIndex = 0) {
        this.type = 'rectangle'
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.fillStyle = fillStyle
        this.zIndex  = zIndex 
    }
}
```
```
// 三角形
class Triangle {
    constructor (x, y, side, fillStyle, zIndex = 0) {
        this.type = 'triangle'
        this.x = x
        this.y = y
        this.side = side
        this.fillStyle = fillStyle
        this.zIndex  = zIndex 
    }
}
```
描述每种图形的数据都不相同，它们绘制在canvas上使用的方式也不相同
- 圆形使用的是 canvas 的 arc 方法
- 矩形可以使用 canvas 的 rect 方法，也可以使用 moveTo 和 lineTo 方法
- 三角形使用 canvas 的 moveTo 和 lineTo 方法

三角形使用 moveTo 和 lineTo 方法的话，需要知道三角形三个顶点的 x，y 坐标，我们在三角形每次实例化的时候，自动调用方法计 computePoint  算三个点的位置，需要用到中学时候学到的三角函数知识
```
class Triangle {
    constructor (x, y, side, fillStyle, zIndex = 0) {
        this.type = 'triangle'
        this.x = x
        this.y = y
        this.side = side
        this.fillStyle = fillStyle
        this.zIndex  = zIndex 
        this.computePoint()
    }
    computePoint () {
        this.pointList = []
        this.pointList.push({
            x: this.x,
            y: this.y - this.side / Math.pow(3, 1 / 2)
        })
        this.pointList.push({
            x: this.x + this.side / 2,
            y: this.y + this.side / Math.pow(3, 1 / 2) / 2
        })
        this.pointList.push({
            x: this.x - this.side / 2,
            y: this.y + this.side / Math.pow(3, 1 / 2) / 2
        })
    }
}
```

##### 如何绘制
我们在每个图形的原型上声明一个 draw 方法

如果是圆形的话，使用 arc 方法
```
    draw (ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = this.fillStyle
        ctx.fill()
    }
```
如果是矩形的话，使用 rect 方法
```
    draw (ctx) {
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.closePath()
        ctx.fillStyle = this.fillStyle
        ctx.fill()
    }
```
如果是三角形的话，使用 moveTo 和 lineTo 方法，三角形实例化的时候，已经调用了 computePoint 计算了三角形三个顶点的位置，保存在 this.pointList 中
```
    draw (ctx) {
        ctx.beginPath()
        ctx.moveTo(this.pointList[0].x, this.pointList[0].y)
        ctx.lineTo(this.pointList[1].x, this.pointList[1].y)
        ctx.lineTo(this.pointList[2].x, this.pointList[2].y)
        ctx.closePath()
        ctx.fillStyle = this.fillStyle
        ctx.fill()
    }
```
##### 绘制到 canvas 中
声明三种图形类之后，调用它们并绘制到 canvas 中，首先就是分别实例化三种图形，保存在 shapeList 中，window.requestAnimationFrame 不停地刷新，每次遍历 shapeList 的时候，分别调用每个实例的 draw 方法绘制图形
```
<template>
    <canvas class="canvasShape" ref="canvasShape" v-bind:width="width" v-bind:height="height"></canvas>
</template>
<script>
import Circle from '@/lib/circle'
import Triangle from '@/lib/triangle'
import Rectangle from '@/lib/rectangle'
export default {
    data: function () {
        return {
            ctx: null,
            width: 800,
            height: 500,
            shapeList: [
                new Circle(100, 100, 50, 'red', 0),
                new Triangle(200, 200, 100, 'green', 1),
                new Rectangle(300, 300, 100, 50, 'blue', 2)
            ]
        }
    },
    methods: {
        init: function () {
            this.ctx = this.$refs.canvasShape.getContext('2d')
        },
        draw: function () {
            this.ctx.clearRect(0, 0, this.width, this.height)
            this.shapeList.forEach(shape => shape.draw(this.ctx))
        },
        animationFrame: function () {
            window.requestAnimationFrame(() => {
                this.draw()
                this.animationFrame()
            })
        }
    },
    mounted: function () {
        this.init()
        this.animationFrame()
    }
}

</script>
<style lang="stylus" scoped>
.canvasShape {
    box-sizing: content-box;
    border: 1px solid;
}
</style>
```
##### 如何判断鼠标选中了图形
和绘制图形一样，每种图形判断是否选中也不一样，所以同样的，在每种图形的原型上声明一个 isHover 方法，判断是否选中
- 圆形： 回忆下中学数学，判断一个点是否在圆内部的方法，点距离圆心的距离 < 圆的半径，就可认为这个点在圆内部
```
    isHover (x, y) {
        // 勾股定理
        return (Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) <= Math.pow(this.radius, 2)
    }
```
- 矩形：矩形非常简单，矩形左侧的 x 坐标 < 鼠标点击的 x 坐标 < 矩形右侧的 x 坐标，并且 矩形上侧的 y 坐标 < 鼠标点击的 y 坐标 < 矩形下侧的 y 坐标，可认为这个点在矩形内部
```
    isHover (x, y) {
        return this.x <= x && this.x + this.width >= x && this.y <= y && this.y + this.height >= y
    }
```
- 三角形：这里又得运用中学数学的知识了，直线方程式是 y = a * x + b，我们有一个点 (m, n)，将 x = m 带入方程，通过比较 a * m + b 与 n 的大小关系，可以判断 (m, n) 点是在直线的上方还是直线的下方。类比到我们的代码中，判断 D 点是否在三角形内部，可以转换为，D 是否在直线AB的下方，并且在直线AC的下方，并且在直线BC的上方，而三角形三个顶点的坐标我们在实例化三角形的时候，就已经计算并保存在 pointList 中了
![未标题-3.png](https://upload-images.jianshu.io/upload_images/16013687-ffa36d22eeaa85b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 然后又得运用到中学数学的知识了，已知两个点，如何求这条直线的方程
![微信截图_20190928184948.png](https://upload-images.jianshu.io/upload_images/16013687-937df84cb96a35d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 我们可以通过带入不同的点来生成这条直线的方程，转换成代码
```
    // 传入不同的点，生成这条直线的函数
    createLineFunctionByPoint (firstPoint, lastPoint) {
        return x => (firstPoint.y - lastPoint.y) / (firstPoint.x - lastPoint.x) * x + firstPoint.y - (firstPoint.y - lastPoint.y) / (firstPoint.x - lastPoint.x) * firstPoint.x
    }
```
直线 AB 的方程为 
```
createLineFunctionByPoint(pointA, pointB)
```
判断鼠标点击的 (mouseX, mouseY) 是否在直线AB的下方，则
```
// 由于我们的 canvas 坐标系的 y 轴和数学作坐标系相反，所以这里是 <= mouseY
createLineFunctionByPoint(pointA, pointB)(mouseX) <= mouseY
```

我们代码中的 pointA 即 shapeList[0]，pointB 即 shapeList[2]
代码写成
```
    isHover (x, y) {
        if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[2])(x) <= y) {
            console.log('点击位置在直线AB的下方')
        }
    }
```
同理我们带入不同的点，用以判断 D 点是否在 AC 下方，D 点是否在 BC 上方
```
    isHover (x, y) {
        let result = false
        if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[1])(x) <= y && this.createLineFunctionByPoint(this.pointList[0], this.pointList[2])(x) <= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[2])(x) >= y) {
            result = true
        }
        return result
    }
```
##### 点击 canvas
当点击 canvas 的时候，取得鼠标点击的 x, y坐标，遍历 shapeList 中的每个图形实例，调用每个实例的 isHover 方法，判断是否选中了图形，如果点击到了图形的重合区域，则比较实例化时候传入的 zIndex 参数，zIndex 大的为点击的图形
![微信截图_20190928190936.png](https://upload-images.jianshu.io/upload_images/16013687-4638320dc8e6c4a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 
```
        mousedownFunc: function (event) {
            let x = event.offsetX
            let y = event.offsetY
            let hoverList = []
            // 首先筛选出点击的图形
            this.shapeList.forEach(shape => {
                shape.isHover(x, y) && (hoverList.push(shape))
            })
            if (hoverList.length) {
                // 对选中的图形做排序，zIndex最大的那个图形即当前鼠标选择的图形
                hoverList.sort((x, y) => y.zIndex - x.zIndex)
                // 将当前选中的图形实例赋值到 this.activeShape
                this.activeShape = hoverList[0]
                // 将当前选中的图形的 zIndex 设置为最大
                this.activeShape.zIndex = Math.max(...this.shapeList.map(shape => shape.zIndex)) + 1
                // 将当前的 shapeList 排序，确保 zIndex 越大的图形越后绘制
                this.shapeList.sort((x, y) => x.zIndex - y.zIndex)
            }
        }
```
##### 移动图形
点击图形的时候，首先记录一次点击位置距离图形标记位置的偏移量
然后移动鼠标的时候，图形位置x = 鼠标当前x - x方向的偏移量，将这两个函数写在每个图形的原型中
```
    setOffset (x, y) {
        this.offsetX = x - this.x
        this.offsetY = y - this.y
    }
    setPosition (x, y) {
        this.x = x - this.offsetX
        this.y = y - this.offsetY
    }
```
由于三角形的绘制方法是由 moveTo 和 lineTo 连线构成的，所以移动的时候，需要重新调用一次 computePoint 计算三个点的位置
```
    setPosition (x, y) {
        this.x = x - this.offsetX
        this.y = y - this.offsetY
        this.computePoint()
    }
```
点击 canvas 的时候调用实例的 setOffset 方法
```
       mousedownFunc: function (event) {
            let x = event.offsetX
            let y = event.offsetY
            let hoverList = []
            // 首先筛选出点击的图形
            this.shapeList.forEach(shape => {
                shape.isHover(x, y) && (hoverList.push(shape))
            })
            if (hoverList.length) {
                // 对选中的图形做排序，zIndex最大的那个图形即当前鼠标选择的图形
                hoverList.sort((x, y) => y.zIndex - x.zIndex)
                // 将当前选中的图形实例赋值到 this.activeShape
                this.activeShape = hoverList[0]
                // 设置该图形的偏移量
                this.activeShape.setOffset(x, y)
                // 将当前选中的图形的 zIndex 设置为最大
                this.activeShape.zIndex = Math.max(...this.shapeList.map(shape => shape.zIndex)) + 1
                // 将当前的 shapeList 排序，确保 zIndex 越大的图形越后绘制
                this.shapeList.sort((x, y) => x.zIndex - y.zIndex)
            }
        }
```
移动鼠标的时候，重新设置图形的位置
```
        mousemoveFunc: function (event) {
            // 如果现在已经选中了一个图形
            if (this.activeShape) {
                let x = event.offsetX
                let y = event.offsetY
                this.activeShape.setPosition(x, y)
            }
        }
```
##### 其他图形
例如要绘制一个五角星，我们的思路还是一样的，首选确定描述这个图形需要的参数，传入构造方法中
确定一个五角星，需要位置坐标 x，y，尺寸，颜色，确定图形在 canvas 中的上下层级，还需要 zIindex，并且由于五角星我们也是使用 moveTo 和 lineTo 方法，所以还需要知道五角星各个顶点的坐标
```
    constructor (x, y, side, fillStyle, zIndex = 0) {
        this.type = 'triangle'
        this.x = x
        this.y = y
        this.side = side
        this.fillStyle = fillStyle
        this.zIndex = zIndex
        this.offsetX = this.offsetY = 0
        this.computePoint()
    }
```
根据五角星的中心店，计算各个顶点的坐标，同样需要用到一些中学数学知识
```
    computePoint () {
    	this.pointList = []
        let temp = (this.side * Math.sin(18 / 180 * Math.PI) + this.side) / Math.cos(18 / 180 * Math.PI)
        this.pointList.push({
        	x: temp * Math.cos((72 * 0 - 18 - 72) / 180 * Math.PI) + this.x,
        	y: temp * Math.sin((72 * 0 - 18 - 72) / 180 * Math.PI) + this.y
        })
        this.pointList.push({
        	x: temp * Math.cos((72 * 1 - 18 - 72) / 180 * Math.PI) + this.x,
        	y: temp * Math.sin((72 * 1 - 18 - 72) / 180 * Math.PI) + this.y
        })
        this.pointList.push({
        	x: temp * Math.cos((72 * 2 - 18 - 72) / 180 * Math.PI) + this.x,
        	y: temp * Math.sin((72 * 2 - 18 - 72) / 180 * Math.PI) + this.y
        })
        this.pointList.push({
        	x: temp * Math.cos((72 * 3 - 18 - 72) / 180 * Math.PI) + this.x,
        	y: temp * Math.sin((72 * 3 - 18 - 72) / 180 * Math.PI) + this.y
        })
        this.pointList.push({
        	x: temp * Math.cos((72 * 4 - 18 - 72) / 180 * Math.PI) + this.x,
        	y: temp * Math.sin((72 * 4 - 18 - 72) / 180 * Math.PI) + this.y
        })
    }
```
这里的 pointList[0]，pointList[1]，pointList[2]，pointList[3]，pointList[4] 分别对应下图的 ABCDE 点
![微信截图_20190928194113.png](https://upload-images.jianshu.io/upload_images/16013687-c4a1de4f9a505643.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
接着是绘制图形，顺序 A → C → E → B → D
```
    draw (ctx) {
    	ctx.beginPath()
        ctx.moveTo(this.pointList[0].x, this.pointList[0].y)
        ctx.lineTo(this.pointList[2].x, this.pointList[2].y)
        ctx.lineTo(this.pointList[4].x, this.pointList[4].y)
        ctx.lineTo(this.pointList[1].x, this.pointList[1].y)
        ctx.lineTo(this.pointList[3].x, this.pointList[3].y)
        ctx.closePath()
        ctx.fillStyle = this.fillStyle
        ctx.fill()
    }
```
同样的再接着是判断是否被选中，将五角星拆分为 △AFJ + △BGF + △CHG + △DIH + △EJI + 五边形FGHIJ
- 是否在 △AFJ 中可以转化为，是否在直线 AD 下方，并且在直线 AC 下方，并且在直线 EB 上方
  A 点对应 this.pointList[0]
  B 点对应 this.pointList[1]
  C 点对应 this.pointList[2]
  D 点对应 this.pointList[3]
  E 点对应 this.pointList[4]
 
鼠标点击位置（mouseX, mouseY）是否在 AD 下方可转换为
```
createLineFunctionByPoint(this.pointList[0], this.pointList[3])(mouseX) <= mouseY
```
同理可知是否在直线 AC 下方为
```
createLineFunctionByPoint(this.pointList[0], this.pointList[2])(mouseX) <= mouseY
```
是否在直线 EB 上方为
```
createLineFunctionByPoint(this.pointList[1], this.pointList[4])(mouseX) >= mouseY
```
是否在 △AFJ 中表示为
```
    isHover (x, y) {
        if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[3])(x) <= y && this.createLineFunctionByPoint(this.pointList[0], this.pointList[2])(x) <= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[4])(x) >= y) {
        	console.log('在三角形中')
        }
    }
```
同理可得到另外四个三角形点击的代码
中心的五边形方法也是相同，即是否在直线 IJ ，直线 JF ，直线 FG 下方，并且在直线 GH ，直线 HI 上方，将点 FGHIJ 带入 createLineFunctionByPoint 即可
最后得到是否点击了五角星的代码
```
     isHover (x, y) {
        let result = false
        if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[3])(x) <= y && this.createLineFunctionByPoint(this.pointList[0], this.pointList[2])(x) <= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[4])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[2])(x) >= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[3])(x) >= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[4])(x) <= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[2])(x) <= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[3])(x) <= y && this.createLineFunctionByPoint(this.pointList[2], this.pointList[4])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[2], this.pointList[4])(x) <= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[3])(x) >= y && this.createLineFunctionByPoint(this.pointList[0], this.pointList[3])(x) <= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[1], this.pointList[4])(x) <= y && this.createLineFunctionByPoint(this.pointList[0], this.pointList[3])(x) >= y && this.createLineFunctionByPoint(this.pointList[2], this.pointList[4])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[3])(x) <= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[4])(x) <= y && this.createLineFunctionByPoint(this.pointList[0], this.pointList[2])(x) <= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[3])(x) >= y && this.createLineFunctionByPoint(this.pointList[2], this.pointList[4])(x) >= y) {
            result = true
        }
        return result
    }
```
设置偏移量，移动函数与之前的相同
```
    setOffset (x, y) {
        this.offsetX = x - this.x
        this.offsetY = y - this.y
    }
    setPosition (x, y) {
        this.x = x - this.offsetX
        this.y = y - this.offsetY
        this.computePoint()
    }
```
##### 扩展到其它图形
例如绘制几何图形组成的海豚
![微信截图_20190928210106.png](https://upload-images.jianshu.io/upload_images/16013687-e8e9e7eff69f95dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
其实思路都是一样的，将海豚拆分为若干个几何图形
![微信截图_20190928210334.png](https://upload-images.jianshu.io/upload_images/16013687-c9d4b20b56bcf9ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
按照上面的做法，构造方法中定义各个点的位置信息，判断是否点击的时候将图形拆分为各个小的几何图形就可以了，具体就不再赘述了，请查看 海豚.psd 中的位置信息，与项目代码即可
