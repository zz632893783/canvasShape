class Triangle {
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
    draw (ctx) {
    	ctx.beginPath()
    	ctx.moveTo(this.pointList[0].x, this.pointList[0].y)
    	ctx.lineTo(this.pointList[1].x, this.pointList[1].y)
    	ctx.lineTo(this.pointList[2].x, this.pointList[2].y)
    	ctx.closePath()
    	ctx.fillStyle = this.fillStyle
    	ctx.fill()
    }
    isHover (x, y) {
    	let result = false
    	if (this.createLineFunctionByPoint(this.pointList[0], this.pointList[1])(x) <= y && this.createLineFunctionByPoint(this.pointList[0], this.pointList[2])(x) <= y && this.createLineFunctionByPoint(this.pointList[1], this.pointList[2])(x) >= y) {
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
export default Triangle
