import './index.css';
import {useRef, useCallback} from 'react';

export const Zoom = ({image}) => {

    const refImagePreview = useRef(null);

    /**
     *
     * @param container
     * @param cursor
     * @param size
     * @param position
     */
    const setStyle = useCallback((element, style) => {
        for(let prop in style) {
            element.style[prop] = style[prop];
        }
    },[]);

    /**
     * If dimensions of image contains valid relation in height and width with image container   
     * @param currentTarget
     * @param nativeEvent
     */
    const setZoom = useCallback(({currentTarget, nativeEvent}) => {
        const points = nativeEvent, container = currentTarget;
        const relativeDimensions = (
            container.offsetWidth <= refImagePreview.current.naturalWidth &&
            container.offsetHeight <= refImagePreview.current.naturalHeight
        );
        if(relativeDimensions) {
            setStyle(refImagePreview.current, {opacity: 0});
            return zoomMove(container, points);
        }
    },[]);

    /**
     *
     * @type {function({currentTarget: *}): void}
     */
    const leaveZoom = useCallback(({currentTarget}) => {
        const style = {
            cursor: 'default',
            backgroundSize: 'cover',
            backgroundPosition: 'unset'
        };
        return setStyle(currentTarget, style);
    },[]);

    /**
     *
     * @param container
     * @param points
     */
    const zoomMove = useCallback((container, points) => {
        const x = points.offsetX / container.offsetWidth * 100;
        const y = points.offsetY / container.offsetHeight * 100;
        const style = {
            cursor: 'zoom-in',
            backgroundSize: 'unset',
            backgroundPosition: `${x}% ${y}%`
        };
        return setStyle(container, style);
    },[]);

    return (
        <div className="container">
            <figure
                className="zoom"
                onMouseMove={setZoom}
                onMouseLeave={leaveZoom}
                style={{backgroundImage: `url(${image})`}}
            >
                <img
                    alt="zoom"
                    src={image}
                    ref={refImagePreview}
                    className="image__preview"
                />
            </figure>
        </div>
    )
}
