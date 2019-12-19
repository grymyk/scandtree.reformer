const boardHelper = {
    getTranslateZ: function(options) {
        return {
            yAxis: parseInt(options.height / 2, 10) + 'px',
            xzAxis: parseInt(options.width / 2, 10) + 'px',
            zAxis: parseInt(options.deep / 2, 10) + 'px',
        }
    },

    getBoardTemplate: function(props) {
        let { width, height } = props;

        width = parseInt(width, 10);
        height = parseInt( height, 10);

        const deep = 40;

        let xyz = { width, height, deep };

        return  { width, height, deep,
            left: parseInt( (width - deep) / 2, 10),
            top: parseInt( (height - deep) / 2, 10),
            translateZ: this.getTranslateZ(xyz),
        }
    }
};


export default boardHelper;
