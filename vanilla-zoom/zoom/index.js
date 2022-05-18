class Zoom {
    constructor() {
        this._previewImage = null;
        this._containerZoom = null;
        this.getElements();
    }

    /**
     *
     * @param element
     * @param style
     */
    setStyle(element, style) {
        for(let prop in style) {
            element.style[prop] = style[prop];
        }
    }

    /**
     *
     * @param container
     * @param points
     */
    zoomMove(container, points) {
        let x = points.layerX / container.offsetWidth * 100;
        let y = points.layerY / container.offsetHeight * 100;
        const style = {
            cursor: 'zoom-in',
            backgroundSize: 'unset',
            backgroundPosition: `${x}% ${y}%`
        };
        return this.setStyle(this._containerZoom, style);
    }

    /**
     *
     */
    leaveZoom() {
        const style = {
            cursor: 'default',
            backgroundSize: 'cover',
            backgroundPosition: 'unset'
        };
        return this.setStyle(this._containerZoom, style);
    }

    /**
     *
     * @param layerX
     * @param layerY
     * @param target
     */
    setZoom({ layerX, layerY, target}) {
        const points = {layerX, layerY}, container = target;
        const relativeDimensions = (
            container.offsetWidth <= this._previewImage.naturalWidth &&
            container.offsetHeight <= this._previewImage.naturalHeight
        );
        if(relativeDimensions) {
            this.setStyle(this._previewImage, {opacity: 0});
            return this.zoomMove(container, points);
        }
    }

    /**
     *
     */
    setListeners() {
        this._containerZoom.onmousemove = e => this.setZoom(e);
        this._containerZoom.onmouseleave = _ => this.leaveZoom();
    }

    /**
     *
     */
    getElements() {
        this._containerZoom = document.querySelector('.zoom');
        this._previewImage = document.querySelector('.image__preview');
        return this.setListeners();
    }
}

new Zoom();