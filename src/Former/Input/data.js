const data = [{
    label: {
        htmlFor: "height_board",
        value: "h"
    },
    input: {
        min: "1",
        max: "40",
        step: "1",
        id: "height_board",
        name: "height",
        type: "number",
        readonly: false
    }
}, {
    label: {
        htmlFor: "width_board",
        value: "w"
    },
    input: {
        min: "1",
        max: "40",
        step: "1",
        id: "width_board",
        name: "width",
        type: "number",
        readonly: false
    }
}, {
    label: {
        htmlFor: "long_board",
        value: "l"
    },
    input: {
        min: "100",
        max: "100000",
        step: "100",
        id: "long_board",
        name: "long",
        type: "number",
        readonly: false
    }
}, {
    label: {
        htmlFor: "trunk",
        value: "t"
    },
    input: {
        min: "1",
        max: "3",
        step: "1",
        id: "trunk",
        name: "trunk",
        type: "number",
        readonly: true,
        className: "readonly"
    }
}, {
    label: {
        htmlFor: "branch",
        value: "b"
    },
    input: {
        min: "5",
        max: "37",
        step: "1",
        id: "branch",
        name: "branch",
        type: "number",
        readonly: true,
        className: "readonly"
    }
}, {
    label: {
        htmlFor: "spread",
        value: "s"
    },
    input: {
        min: "15",
        max: "90",
        step: "1",
        id: "spread",
        name: "spread",
        type: "number",
        readonly: true,
        className: "readonly"
    }
}
];

export default data;
