const data = [
    /*{
    label: {
        htmlFor: "long",
        value: "l"
    },
    input: {
        min: "100",
        max: "100000",
        step: "100",
        id: "long",
        title: "Long of Board",
        name: "long",
        type: "number",
        readonly: false
    }
},*/
    {
    label: {
        htmlFor: "height",
        value: "h"
    },
    input: {
        min: "1",
        max: "40",
        step: "1",
        id: "height",
        title: "Height of Board",
        name: "height",
        type: "number",
        readonly: false
    }
}, {
    label: {
        htmlFor: "width",
        value: "w"
    },
    input: {
        min: "1",
        max: "80",
        step: "1",
        id: "width",
        title: "Width of Board",
        name: "width",
        type: "number",
        readonly: false
    }
},
/*{
    label: {
        htmlFor: "twig",
        value: "twig"
    },
    input: {
        min: "1",
        max: "1",
        step: "1",
        id: "twig",
        title: "Twig of Tree",
        name: "twig",
        type: "number",
        readonly: true,
        className: "readonly"
    }
},*/
    {
    label: {
        htmlFor: "trunk",
        value: "t"
    },
    input: {
        min: "1",
        max: "3",
        step: "1",
        id: "trunk",
        title: "Trunk of Tree",
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
        min: "4",
        max: "37",
        step: "1",
        id: "branch",
        title: "Branch of Tree",
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
        title: "Spread of Tree",
        name: "spread",
        type: "number",
        readonly: true,
        className: "readonly"
    }
}
];

export default data;
