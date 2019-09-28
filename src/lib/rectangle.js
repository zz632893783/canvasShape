class Rectangle {
    constructor (x, y, width, height, fillStyle, zIndex = 0) {
        this.type = 'rectangle'
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.fillStyle = fillStyle
        this.zIndex = zIndex
        this.offsetX = this.offsetY = 0
        this.computePoint()
    }
    computePoint () {
        this.pointList = []
        this.pointList.push({
            x: this.x,
            y: this.y
        })
        this.pointList.push({
            x: this.x + this.width,
            y: this.y
        })
        this.pointList.push({
            x: this.x + this.width,
            y: this.y + this.height
        })
        this.pointList.push({
            x: this.x,
            y: this.y + this.height
        })
    }
    isHover (x, y) {
        let result = false
        if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[1])(x) <= y && this.createLineFunctionByPoint(this.pointList[2], this.pointList[3])(x) >= y && x >= this.x && x <= this.x + this.width) {
            result = true
        }
        return result
    }
    draw (ctx) {
        ctx.beginPath()
        ctx.moveTo(this.pointList[0].x, this.pointList[0].y)
        ctx.lineTo(this.pointList[1].x, this.pointList[1].y)
        ctx.lineTo(this.pointList[2].x, this.pointList[2].y)
        ctx.lineTo(this.pointList[3].x, this.pointList[3].y)
        ctx.closePath()
        ctx.fillStyle = this.fillStyle
        ctx.fill()
    }
    createLineFunctionByPoint (firstPoint, lastPoint) {
        return x => (firstPoint.y - lastPoint.y) / (firstPoint.x - lastPoint.x) * x + firstPoint.y - (firstPoint.y - lastPoint.y) / (firstPoint.x - lastPoint.x) * firstPoint.x
    }
    setOffset (x, y) {
        this.offsetX = x - this.x
        this.offsetY = y - this.y
    }
    setPosition (x, y) {
        this.x = x - this.offsetX
        this.y = y - this.offsetY
        this.computePoint()
    }
}
export default Rectangle
