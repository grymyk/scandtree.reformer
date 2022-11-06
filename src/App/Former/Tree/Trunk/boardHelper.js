const halfMeasure = (size) => {
    const BASE = 10;
    const TWO = 2

    return `${parseInt(size / TWO, BASE)}px`
}

const boardHelper = {
    getTranslateZ: function({ width, height, deep }) {
        return {
            xzAxis: halfMeasure(width),
            yAxis: halfMeasure(height),
            zAxis: halfMeasure(deep),
        }
    },

    getBoardTemplate: function({ width, height }) {
        const BASE = 10;

        width = parseInt(width, BASE);
        height = parseInt( height, BASE);

        const deep = 40;

        let left = halfMeasure( width - deep ) 
        let top = halfMeasure( height - deep )
        
        let xyz = { width, height, deep };
        let translateZ = this.getTranslateZ(xyz)

        return  {
            width,
            height,
            deep,
            left,
            top,
            translateZ 
        }
    }
};


export default boardHelper;
