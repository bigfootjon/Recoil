(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var o=n(1),a=(n(0),n(146));const r={title:"Core Concepts"},c={id:"introduction/core-concepts",title:"Core Concepts",description:"## Overview",source:"@site/docs/introduction/core-concepts.md",permalink:"/docs/introduction/core-concepts",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction/core-concepts.md",sidebar:"someSidebar",previous:{title:"Motivation",permalink:"/docs/introduction/motivation"},next:{title:"Installation",permalink:"/docs/introduction/installation"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Atoms",id:"atoms",children:[]},{value:"Selectors",id:"selectors",children:[]}],s={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Recoil lets you create a data-flow graph that flows from ",Object(a.b)("em",{parentName:"p"},"atoms")," (shared state) through ",Object(a.b)("em",{parentName:"p"},"selectors")," (pure functions) and down into your React components.\nAtoms are units of state that components can subscribe to. Selectors transform this state either synchronously or asynchronously"),Object(a.b)("h2",{id:"atoms"},"Atoms"),Object(a.b)("p",null,"Atoms are units of state. They're updateable and subscribeable: when an atom is updated, each subscribed component is re-rendered with the new value. The can be created at runtime, too. Atoms can be used in place of React local component state. If the same atom is used from multiple components, all those components share their state."),Object(a.b)("p",null,"Atoms are created using the ",Object(a.b)("inlineCode",{parentName:"p"},"atom")," function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const fontSizeState = atom({\n  key: 'fontSizeState',\n  default: 14,\n});\n")),Object(a.b)("p",null,"Atoms need a unique key, which is used for debugging, persistence, and for certain advanced APIs that let you see a map of all atoms. It is an error\nfor two atoms to have the same key, so make sure they're globally unique. Like React component state, they also have a default value."),Object(a.b)("p",null,"To read and write an atom from a component, we use a hook called ",Object(a.b)("inlineCode",{parentName:"p"},"useRecoilState"),". It's just like React's ",Object(a.b)("inlineCode",{parentName:"p"},"useState"),", but now the state can be shared between components:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function FontButton() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  return (\n    <button onClick={() => setFontSize(size => size + 1)} style={{fontSize}}>\n      Click to Enlarge\n    </button>\n  );\n}\n")),Object(a.b)("p",null,"Clicking on the button will increase the font size of the button by one. But now some other component can also use the same font size:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function Text() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  return (\n    <p style={{fontSize}}>\n      This text will increase in size too.\n    </p>\n  );\n}\n")),Object(a.b)("h2",{id:"selectors"},"Selectors"),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"selector")," is a pure function that accepts atoms or other selectors as input. When these upstream atoms or selectors are updated, the selector\nfunction will be re-evaluated. Components can subscribe to selectors just like atoms, and will then be re-rendered when the selectors change."),Object(a.b)("p",null,"Selectors are used to calculate derived data that is based on state. This lets us avoid redundant state, usually obviating the need for\nreducers to keep state in sync and valid. Instead, a minimal set of state is stored in atoms, while everything else is efficiently computed\nas a function of that minimal state. Since selectors keep track of what components need them and what state they depend on, they make this\nfunctional approach more efficient."),Object(a.b)("p",null,"From the point of view of components, selectors and atoms have the same interface and can therefore be substituted for one another."),Object(a.b)("p",null,"Selectors are defined using the ",Object(a.b)("inlineCode",{parentName:"p"},"selector")," function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const fontSizeLabelState = selector({\n  key: 'fontSizeLabelState',\n  get: ({get}) => {\n    const fontSize = get(fontSizeState);\n    const unit = 'px';\n\n    return `${fontSize}${unit}`;\n  },\n});\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"get")," property is the function that is to be computed. It can access the value of atoms and other\nselectors using the ",Object(a.b)("inlineCode",{parentName:"p"},"get")," argument passed to it. Whenever it accesses another atom or selector, a dependency relationship is created such that\nupdating the other atom or selector will cause this one to be recomputed."),Object(a.b)("p",null,"In this ",Object(a.b)("inlineCode",{parentName:"p"},"fontSizeLabelState")," example, the selector has one dependency: the ",Object(a.b)("inlineCode",{parentName:"p"},"fontSizeState")," atom. Conceptually, the ",Object(a.b)("inlineCode",{parentName:"p"},"fontSizeLabelState")," selector behaves like a pure function that takes a ",Object(a.b)("inlineCode",{parentName:"p"},"fontSizeState")," as input and returns a formatted font size label as output."),Object(a.b)("p",null,"Selectors can be read using ",Object(a.b)("inlineCode",{parentName:"p"},"useRecoilValue()"),", which takes an atom or selector as an argument and returns the corresponding value. We don't use the ",Object(a.b)("inlineCode",{parentName:"p"},"useRecoilState()")," as the ",Object(a.b)("inlineCode",{parentName:"p"},"fontSizeLabelState")," selector is not writeable (see the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api-reference/core/selector"}),"selector API reference")," for more information on writeable selectors):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function FontButton() {\n  const [fontSize, setFontSize] = useRecoilState(fontSizeState);\n  const fontSizeLabel = useRecoilValue(fontSizeLabelState);\n\n  return (\n    <>\n      <div>Current font size: ${fontSizeLabel}</div>\n\n      <button onClick={setFontSize(fontSize + 1)} style={{fontSize}}>\n        Click to Enlarge\n      </button>\n    </>\n  );\n}\n")),Object(a.b)("p",null,"Clicking on the button now does two things: it increases the font size of the button while also updating the font size label to reflect the current font size."))}l.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);