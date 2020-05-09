const curves = {
    circle1: function(index) {
        let width = 30;
        let borders = 2
        let height = 10;

        let top = 0;
        let len = 21 + top;

        let radius = height * len / 2;
        console.log('radius', radius)

        let x = width * index;
        console.log('x', x);
        console.log('index', index);

        let x0 = radius + width / 2 + borders;
        let y0 = radius + borders;

        let rx = Math.pow(radius, 2) - Math.pow(x - x0, 2);
        // let rx = 2 * radius * x - Math.pow(x, 2);
        return Math.sqrt(rx) + y0;
    },

    circle: function(index, options) {
        // console.log(options)

        // let borders = 2

        let {
            branch,
            height: h0,
            trunk,
            twig
        } = options;

        // let top = 1;
        let len = (trunk + twig) * branch;
        // console.log('len', len)

        let head = 0; // 0.29;
        let radius = h0 * len / 2 + head; // w0
        // let radius = (w0 * w0) / (8 * head) + head / 2;
        // console.log('radius', radius)

        // console.log('index:', index)

        // let height = h0 * ( 2 * index - head);
        let height = h0 * ( head + 2 * index - 2);

        //let rx = 3 * radius * height - 9 / 4 * Math.pow(height, 2);
        let A =  height * (head + 1)
        let rx = 2 * radius * A - A * A;
        // console.log('rx:', rx)

        if (rx > 0) {
            // return +(Math.sqrt(rx) + w0 + borders).toPrecision(3);
            return +(Math.sqrt(rx)).toPrecision(3) * 2;
        }

        return 0
    },

    eggCurve: function(index, options) {
        console.log(index, options)

        const HALF_WIDTH = 2;
        const koef = 1.293;

        let {width:fulcrum, branch, height, trunk} = options;

        // console.log('size:', size)
        let size = trunk + 2

        let len = branch * size * height;
        let step = len / (branch + 1);

        let point = (index + 1) * step;

        let major = branch * size * height;
        console.log('major:', major)

        let minor = major * 0.7;
        let A = (major - minor) - 2 * point;
        console.log(A)

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
