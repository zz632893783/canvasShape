class Circle {
    constructor (x, y, radius, fillStyle, zIndex = 0) {
        this.type = 'circle'
        this.x = x
        this.y = y
        this.radius = radius
        this.fillStyle = fillStyle
        this.zIndex = zIndex
        this.offsetX = this.offsetY = 0
    }
    draw (ctx) {
    	ctx.beginPath()
    	ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    	ctx.closePath()
    	ctx.fillStyle = this.fillStyle
    	ctx.fill()
    }
    isHover (x, y) {
    	return (Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) <= Math.pow(this.radius, 2)
    }
    setOffset (x, y) {
    	this.offsetX = x - this.x
    	this.offsetY = y - this.y
    }
    setPosition (x, y) {
    	this.x = x - this.offsetX
    	this.y = y - this.offsetY
    }
}
export default Circle
