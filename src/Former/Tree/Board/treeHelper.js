const treeHelper = {
    branchStyleTemplate: (options) => {
        return 'z-index: ' + options.zIndex + '; ' +
            'width: ' + options.width + 'px;' +
            'height: ' + options.height + 'px;';
    },

    setBoardStyles: (zIndex, width, height) => {
        let options = {};

        options.zIndex = zIndex;
        options.width = parseInt(width, 10);
        options.height = parseInt(height, 10);

        return this.branchStyleTemplate(options);
    },

    getTranslateZ: function(options) {
        return {
            yAxis: parseInt(options.height / 2, 10) + 'px',
            xzAxis: parseInt(options.width / 2, 10) + 'px',
            zAxis: parseInt(options.deep / 2, 10) + 'px',
        }
    },

    getBoardTemplate: function(props) {
        let {width, height} = props;

        width = parseInt(width, 10);
        height = parseInt( height, 10);

        const deep = 40;

        let xyz = { width, height, deep };

        let left = parseInt( (width - deep) / 2, 10);
        let top = parseInt( (height - deep) / 2, 10);

        let options = { width, height, deep, left, top,
            translateZ: this.getTranslateZ(xyz),
        };

        return options;
    }
};


export default treeHelper;
