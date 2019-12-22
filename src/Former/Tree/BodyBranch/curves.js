const curves = {
    circle: function(index) {
        let a = 140;
        let b = 100;
        let x = index * 45;

        let ba = b / a;
        let t = 1;

        return  ba * Math.sqrt((a * a - x * x) * t);
    },

    eggCurve: function(index, options) {
        const HALF_WIDTH = 2;
        const koef = 1.293;

        let {fulcrum, branch, height, size} = options;

        let len = branch * size * height;
        let step = len / (branch + 1);

        let point = (index + 1) * step;

        let major = branch * size * height;
        let minor = major * 0.7;
        let A = (major - minor) - 2 * point;
        let B = Math.pow(major - major, 2);
        let C = Math.sqrt(4 * minor * point + B);
        let D = Math.sqrt(point / 2);

        let width0 = Math.sqrt(A + C) * D;

        return (HALF_WIDTH + koef) * width0 - fulcrum / 2
    },

    ellipse: function(index, options) {
        let {branch, height, size} = options;

        let major = branch * size * height / 2;

        let minor = major * 1.4;
        let shiftX = major;
        let shiftY = 0;

        let axis = minor / major;

        let len = branch * size * height;
        let step = len / (branch + 1);

        let point = (index + 1) * step;

        let powerX = Math.pow(point - shiftX, 2);

        let powerMajor = Math.pow(major, 2);

        return axis * Math.sqrt(powerMajor - powerX) + shiftY;
    },

    getDelta: function(index, spread, height) {
        const MAX_SPREAD = 179;

        const degreeToRadian = (degree) => Math.PI / 180 * degree;

        if (0 < spread && spread < MAX_SPREAD) {
            const HALF_WIDTH = 2;
            let alpha = spread / HALF_WIDTH;

            alpha = degreeToRadian(alpha);

            return alpha * index * height;
        }

        return 0;
    },

    linear: function(index, options) {
        let {width, height, spread} = options;

        let delta = this.getDelta(index, spread, height);

        const koef = 1.293;

        return (index * delta + width) * koef ^ 0;
    },

    parabola: function(index, options) {
        let {width, height} = options;

        const koef = 1.293;

        return (width / height * Math.pow(index, 2) + width) * koef ^ 0;
    }
};

export default curves;
