import Branch from "./Branch";

const treeHelper = {
    getFrontPlaneStyles: (options) => {
        let style = ' style = "';

        style += 'width: ' + options.width + 'px; ' +
            'height: ' + options.height + 'px; ';

        style += 'transform: rotateY(0) ';
        style += 'translateZ(' + options.translateZ.zAxis + ');"';

        return style;
    },

    getBackPlaneStyles: (options) => {
        let style = ' style = "';

        style += 'width: ' + options.width + 'px; ' +
            'height: ' + options.height + 'px; ';

        style += 'transform: rotateX(180deg) ';
        style += 'translateZ(' + options.translateZ.zAxis + ');"';

        return style;
    },

    getRightPlaneStyles: (options) => {
        let style = ' style = "';

        style += 'width: ' + options.deep + 'px; ' +
            'height: ' + options.height + 'px; ';

        if (options.left) {
            style += 'left: ' + options.left + 'px; ';
        }

        style += 'transform: rotateY(90deg) ';
        style += 'translateZ(' + options.translateZ.xzAxis + ');"';

        return style;
    },

    getLeftPlaneStyles: (options) => {
        let style = ' style = "';

        style += 'width: ' + options.deep + 'px; ' +
            'height: ' + options.height + 'px; ';

        if (options.left) {
            style += 'left: ' + options.left + 'px; ';
        }

        style += 'transform: rotateY(-90deg) ';
        style += 'translateZ(' + options.translateZ.xzAxis + ');"';

        return style;
    },

    getTopPlaneStyles: (options) => {
        let style = ' style = "';

        style += 'width: ' + options.width + 'px; ' +
            'height: ' + options.deep + 'px; ';

        if (options.top) {
            style += 'top: ' + options.top + 'px; ';
        }

        style += 'transform: rotateX(90deg) ';
        style += 'translateZ(' + options.translateZ.yAxis + ');"';

        return style;
    },

    getBottomPlaneStyles: (options) => {
        let style = ' style = "';

        style += 'width: ' + options.width + 'px; ' +
            'height: ' + options.deep + 'px; ';

        if (options.top) {
            style += 'top: ' + options.top + 'px; ';
        }

        style += 'transform: rotateX(-90deg) ';
        style += 'translateZ(' + options.translateZ.yAxis + ');"';

        return style;
    },

    /*branchTemplate: function(options) {
        return ('<div class="prism_holder">' +
            '<div class="prism">' +
                '<div class="face front branch side_view"' +
                        this.getFrontPlaneStyles(options) +
                    '></div>' +
                    '<div class="face back branch side_view"' +
                        this.getBackPlaneStyles(options) +
                    '></div>' +
                    '<div class="face right branch side_view"' +
                        this.getRightPlaneStyles(options) +
                    '></div>' +
                    '<div class="face left branch side_view"' +
                        this.getLeftPlaneStyles(options) +
                    '></div>' +
                    '<div class="face top branch side_view"' +
                        this.getTopPlaneStyles(options) +
                    '></div>' +
                    '<div class="face bottom branch side_view"' +
                        this.getBottomPlaneStyles(options) +
                    '></div>' +
                '</div>' +
            '</div>')
    },*/

    /*showScandTree: () => {
        let branchesHolder = document.createElement('UL');

        let holder = document.getElementById(wrapper.treeHolder);
        holder.appendChild(branchesHolder);

        let topBoard = getTopBoard();

        let parent = document.querySelector(wrapper.treeParent);
        parent.appendChild(topBoard);

        /!*let branch = getInputParam('branch');
        let size = getSizeBranch('size');

        let i = 1;
        let len = branch * size + 1;

        let branches = createBranchElems(i, len);

        if (branches) {
            let elems = makeFragment(branches);

            parent.appendChild(elems);
            branchesHolder.addEventListener('click', trackball);

        } else {
            console.log('No branches!');
        }*!/
    },*/

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

        return Branch(options);
    }
};


export default treeHelper;
