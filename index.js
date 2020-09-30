class touter {
    constructor(width, height, colorr) {
        this.height = height;
        this.width = width;
        this.colorr = colorr;
    }
    getSize() {
        return this.height * this.width
    }
    setColor(color) {
        this.colorr = color;
    }
}

module.exports = touter;