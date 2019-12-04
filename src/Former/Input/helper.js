const helper = {};

const codeScalar = {
    "plus" : 1,
    "minus" : -1
};

helper.getSign = (sign) => codeScalar[sign];

const tagNames = {
    "SPAN": (elem) => {
        const parent = elem.parentNode.parentNode;
        return parent.getElementsByTagName('INPUT')[0];
    }
};

helper.getInput = (target) => {
    const tagFn = tagNames[target.tagName];

    if (tagFn) {
        return tagFn(target);
    }

    return 0;
};

helper.getName = (target) => {
    return helper.getInput(target).getAttribute('name');
};

helper.checkDelta = (elem, value) => {
    const min = elem.getAttribute('min');
    const max = elem.getAttribute('max');

    return value >= min && value <= max
};

helper.getDelta = (target) => {
    const input = helper.getInput(target);

    if (input) {
        let value = +input.getAttribute('value');

        const sign = helper.getSign(target.getAttribute('data-sign'));
        const step = +input.getAttribute('step');

        const delta = step * sign;

        const newValue = delta + value;

        const inRange = helper.checkDelta(input, newValue);

        if (inRange) {
            return delta;
        }

        return 0;
    }

    return 0;
};

export default helper;
