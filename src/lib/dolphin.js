class Dolphin {
    constructor (x, y, size, zIndex) {
        this.type = 'dolphin'
        this.x = x
        this.y = y
        this.size = size
        this.zIndex = zIndex
        this.offsetX = this.offsetY = 0
        this.scale = this.size / 2000
        this.pointMap = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            AA: 26,
            BB: 27,
            CC: 28,
            DD: 29,
            EE: 30,
            FF: 31,
            GG: 32,
            HH: 33
        }
        this.computePoint()
    }
    computePoint () {
        this.pointList = []
        this.pointList.push({
            x: this.x + 0 * this.scale,
            y: this.y + 700 * this.scale
        })
        this.pointList.push({
            x: this.x + 191 * this.scale,
            y: this.y + 528 * this.scale
        })
        this.pointList.push({
            x: this.x + 238 * this.scale,
            y: this.y + 366 * this.scale
        })
        this.pointList.push({
            x: this.x + 545 * this.scale,
            y: this.y + 195 * this.scale
        })
        this.pointList.push({
            x: this.x + 851 * this.scale,
            y: this.y + 180 * this.scale
        })
        this.pointList.push({
            x: this.x + 1177 * this.scale,
            y: this.y + 44 * this.scale
        })
        this.pointList.push({
            x: this.x + 1377 * this.scale,
            y: this.y + 0 * this.scale
        })
        this.pointList.push({
            x: this.x + 1255 * this.scale,
            y: this.y + 100 * this.scale
        })
        this.pointList.push({
            x: this.x + 1230 * this.scale,
            y: this.y + 269 * this.scale
        })
        this.pointList.push({
            x: this.x + 1389 * this.scale,
            y: this.y + 365 * this.scale
        })
        this.pointList.push({
            x: this.x + 1717 * this.scale,
            y: this.y + 629 * this.scale
        })
        this.pointList.push({
            x: this.x + 1989 * this.scale,
            y: this.y + 607 * this.scale
        })
        this.pointList.push({
            x: this.x + 1878 * this.scale,
            y: this.y + 660 * this.scale
        })
        this.pointList.push({
            x: this.x + 1843 * this.scale,
            y: this.y + 738 * this.scale
        })
        this.pointList.push({
            x: this.x + 1831 * this.scale,
            y: this.y + 808 * this.scale
        })
        this.pointList.push({
            x: this.x + 1862 * this.scale,
            y: this.y + 923 * this.scale
        })
        this.pointList.push({
            x: this.x + 1690 * this.scale,
            y: this.y + 712 * this.scale
        })
        this.pointList.push({
            x: this.x + 1154 * this.scale,
            y: this.y + 602 * this.scale
        })
        this.pointList.push({
            x: this.x + 830 * this.scale,
            y: this.y + 674 * this.scale
        })
        this.pointList.push({
            x: this.x + 966 * this.scale,
            y: this.y + 818 * this.scale
        })
        this.pointList.push({
            x: this.x + 718 * this.scale,
            y: this.y + 744 * this.scale
        })
        this.pointList.push({
            x: this.x + 617 * this.scale,
            y: this.y + 616 * this.scale
        })
        this.pointList.push({
            x: this.x + 673 * this.scale,
            y: this.y + 735 * this.scale
        })
        this.pointList.push({
            x: this.x + 740 * this.scale,
            y: this.y + 832 * this.scale
        })
        this.pointList.push({
            x: this.x + 569 * this.scale,
            y: this.y + 724 * this.scale
        })
        this.pointList.push({
            x: this.x + 523 * this.scale,
            y: this.y + 638 * this.scale
        })
        this.pointList.push({
            x: this.x + 378 * this.scale,
            y: this.y + 629 * this.scale
        })
        this.pointList.push({
            x: this.x + 43 * this.scale,
            y: this.y + 728 * this.scale
        })
        this.pointList.push({
            x: this.x + 302 * this.scale,
            y: this.y + 570 * this.scale
        })
        this.pointList.push({
            x: this.x + 502 * this.scale,
            y: this.y + 551 * this.scale
        })
        this.pointList.push({
            x: this.x + 805 * this.scale,
            y: this.y + 585 * this.scale
        })
        this.pointList.push({
            x: this.x + 1133 * this.scale,
            y: this.y + 484 * this.scale
        })
        this.pointList.push({
            x: this.x + 1766 * this.scale,
            y: this.y + 669 * this.scale
        })
        this.pointList.push({
            x: this.x + 1747 * this.scale,
            y: this.y + 720 * this.scale
        })
    }
    draw (ctx) {
        ctx.fillStyle = '#4c4c4c'
        ctx.beginPath()
        ctx.moveTo(this.pointList[0].x, this.pointList[0].y)
        ctx.lineTo(this.pointList[1].x, this.pointList[1].y)
        ctx.lineTo(this.pointList[2].x, this.pointList[2].y)
        ctx.lineTo(this.pointList[3].x, this.pointList[3].y)
        ctx.lineTo(this.pointList[4].x, this.pointList[4].y)
        ctx.lineTo(this.pointList[5].x, this.pointList[5].y)
        ctx.lineTo(this.pointList[6].x, this.pointList[6].y)
        ctx.lineTo(this.pointList[7].x, this.pointList[7].y)
        ctx.lineTo(this.pointList[8].x, this.pointList[8].y)
        ctx.lineTo(this.pointList[9].x, this.pointList[9].y)
        ctx.lineTo(this.pointList[10].x, this.pointList[10].y)
        ctx.lineTo(this.pointList[11].x, this.pointList[11].y)
        ctx.lineTo(this.pointList[32].x, this.pointList[32].y)
        ctx.lineTo(this.pointList[13].x, this.pointList[13].y)
        ctx.lineTo(this.pointList[31].x, this.pointList[31].y)
        ctx.lineTo(this.pointList[30].x, this.pointList[30].y)
        ctx.lineTo(this.pointList[18].x, this.pointList[18].y)
        ctx.lineTo(this.pointList[19].x, this.pointList[19].y)
        ctx.lineTo(this.pointList[20].x, this.pointList[20].y)
        ctx.lineTo(this.pointList[21].x, this.pointList[21].y)
        ctx.lineTo(this.pointList[22].x, this.pointList[22].y)
        ctx.lineTo(this.pointList[23].x, this.pointList[23].y)
        ctx.lineTo(this.pointList[24].x, this.pointList[24].y)
        ctx.lineTo(this.pointList[25].x, this.pointList[25].y)
        ctx.lineTo(this.pointList[21].x, this.pointList[21].y)
        ctx.lineTo(this.pointList[29].x, this.pointList[29].y)
        ctx.lineTo(this.pointList[28].x, this.pointList[28].y)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(this.pointList[15].x, this.pointList[15].y)
        ctx.lineTo(this.pointList[16].x, this.pointList[16].y)
        ctx.lineTo(this.pointList[33].x, this.pointList[33].y)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = '#b1aea9'
        ctx.beginPath()
        ctx.moveTo(this.pointList[32].x, this.pointList[32].y)
        ctx.lineTo(this.pointList[11].x, this.pointList[11].y)
        ctx.lineTo(this.pointList[12].x, this.pointList[12].y)
        ctx.lineTo(this.pointList[13].x, this.pointList[13].y)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(this.pointList[13].x, this.pointList[13].y)
        ctx.lineTo(this.pointList[14].x, this.pointList[14].y)
        ctx.lineTo(this.pointList[15].x, this.pointList[15].y)
        ctx.lineTo(this.pointList[33].x, this.pointList[33].y)
        ctx.lineTo(this.pointList[17].x, this.pointList[17].y)
        ctx.lineTo(this.pointList[18].x, this.pointList[18].y)
        ctx.lineTo(this.pointList[30].x, this.pointList[30].y)
        ctx.lineTo(this.pointList[31].x, this.pointList[31].y)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(this.pointList[0].x, this.pointList[0].y)
        ctx.lineTo(this.pointList[27].x, this.pointList[27].y)
        ctx.lineTo(this.pointList[26].x, this.pointList[26].y)
        ctx.lineTo(this.pointList[25].x, this.pointList[25].y)
        ctx.lineTo(this.pointList[21].x, this.pointList[21].y)
        ctx.lineTo(this.pointList[29].x, this.pointList[29].y)
        ctx.lineTo(this.pointList[28].x, this.pointList[28].y)
        ctx.closePath()
        ctx.fill()
    }
    isHover (x, y) {
        let result = false
        if (this.createLineFunctionByPoint(this.pointList[this.pointMap.A], this.pointList[this.pointMap.B])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.B], this.pointList[this.pointMap.CC])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.A], this.pointList[this.pointMap.CC])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.B], this.pointList[this.pointMap.C])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.C], this.pointList[this.pointMap.D])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.D], this.pointList[this.pointMap.E])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.B], this.pointList[this.pointMap.CC])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.DD], this.pointList[this.pointMap.CC])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.DD], this.pointList[this.pointMap.E])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.E], this.pointList[this.pointMap.F])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.F], this.pointList[this.pointMap.H])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.H], this.pointList[this.pointMap.I])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.E], this.pointList[this.pointMap.I])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.G], this.pointList[this.pointMap.F])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.G], this.pointList[this.pointMap.H])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.F], this.pointList[this.pointMap.H])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.V], this.pointList[this.pointMap.I])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.I], this.pointList[this.pointMap.J])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.J], this.pointList[this.pointMap.FF])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.EE], this.pointList[this.pointMap.FF])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.EE], this.pointList[this.pointMap.V])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.FF], this.pointList[this.pointMap.J])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.N], this.pointList[this.pointMap.J])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.N], this.pointList[this.pointMap.FF])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.K], this.pointList[this.pointMap.L])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.GG], this.pointList[this.pointMap.L])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.GG], this.pointList[this.pointMap.K])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.Q], this.pointList[this.pointMap.HH])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.P], this.pointList[this.pointMap.HH])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.P], this.pointList[this.pointMap.Q])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.V], this.pointList[this.pointMap.EE])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.S], this.pointList[this.pointMap.EE])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.S], this.pointList[this.pointMap.V])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.V], this.pointList[this.pointMap.S])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.T], this.pointList[this.pointMap.S])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.T], this.pointList[this.pointMap.U])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.V], this.pointList[this.pointMap.U])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.Y], this.pointList[this.pointMap.W])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.X], this.pointList[this.pointMap.W])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.X], this.pointList[this.pointMap.Y])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.Z], this.pointList[this.pointMap.V])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.W], this.pointList[this.pointMap.V])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.W], this.pointList[this.pointMap.Y])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.Z], this.pointList[this.pointMap.Y])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.DD], this.pointList[this.pointMap.E])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.I], this.pointList[this.pointMap.E])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.I], this.pointList[this.pointMap.V])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.DD], this.pointList[this.pointMap.V])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.GG], this.pointList[this.pointMap.L])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.M], this.pointList[this.pointMap.L])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.M], this.pointList[this.pointMap.GG])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.GG], this.pointList[this.pointMap.M])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.M], this.pointList[this.pointMap.N])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.N], this.pointList[this.pointMap.GG])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.HH], this.pointList[this.pointMap.N])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.O], this.pointList[this.pointMap.N])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.O], this.pointList[this.pointMap.HH])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.HH], this.pointList[this.pointMap.O])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.O], this.pointList[this.pointMap.P])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.P], this.pointList[this.pointMap.HH])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.FF], this.pointList[this.pointMap.N])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.R], this.pointList[this.pointMap.N])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.R], this.pointList[this.pointMap.FF])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.EE], this.pointList[this.pointMap.FF])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.R], this.pointList[this.pointMap.FF])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.R], this.pointList[this.pointMap.S])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.EE], this.pointList[this.pointMap.S])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.CC], this.pointList[this.pointMap.DD])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.V], this.pointList[this.pointMap.DD])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.V], this.pointList[this.pointMap.Z])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.AA], this.pointList[this.pointMap.Z])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.AA], this.pointList[this.pointMap.CC])(x) >= y) {
            result = true
        } else if (this.createLineFunctionByPoint(this.pointList[this.pointMap.A], this.pointList[this.pointMap.CC])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.AA], this.pointList[this.pointMap.CC])(x) <= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.AA], this.pointList[this.pointMap.BB])(x) >= y && this.createLineFunctionByPoint(this.pointList[this.pointMap.A], this.pointList[this.pointMap.BB])(x) >= y) {
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
export default Dolphin
