class FivePointedStar {
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
export default FivePointedStar
