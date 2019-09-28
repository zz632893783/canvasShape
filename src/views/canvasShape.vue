<template>
    <canvas class="canvasShape" ref="canvasShape" v-bind:width="width" v-bind:height="height" v-on:mousedown="mousedownFunc($event)" v-on:mousemove="mousemoveFunc" v-on:mouseup="mouseupFunc" v-on:mouseleave="mouseleaveFunc"></canvas>
</template>
<script>
import Circle from '@/lib/circle'
import Triangle from '@/lib/triangle'
import Rectangle from '@/lib/rectangle'
import Dolphin from '@/lib/dolphin'
export default {
    data: function () {
        return {
            ctx: null,
            width: 800,
            height: 500,
            activeShape: null,
            shapeList: [
                new Circle(100, 100, 50, 'red', 0),
                new Triangle(200, 200, 100, 'green', 0),
                new Rectangle(300, 300, 100, 50, 'blue', 0),
                new Dolphin(400, 100, 400, 0)
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
        },
        mousedownFunc: function (event) {
            let x = event.offsetX
            let y = event.offsetY
            let hoverList = []
            this.shapeList.forEach(shape => {
                shape.isHover(x, y) && (hoverList.push(shape))
            })
            if (hoverList.length) {
                // 对选中的图形做排序，zIndex最大的那个图形即当前鼠标选择的图形
                hoverList.sort((x, y) => y.zIndex - x.zIndex)
                this.activeShape = hoverList[0]
                this.activeShape.setOffset(x, y)
                this.activeShape.zIndex = Math.max(...this.shapeList.map(shape => shape.zIndex)) + 1
                this.shapeList.sort((x, y) => x.zIndex - y.zIndex)
            }
        },
        mousemoveFunc: function (event) {
            if (this.activeShape) {
                let x = event.offsetX
                let y = event.offsetY
                this.activeShape.setPosition(x, y)
            }
        },
        mouseupFunc: function () {
            this.activeShape = null
        },
        mouseleaveFunc: function () {
            this.activeShape = null
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
