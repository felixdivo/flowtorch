(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{110:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return p})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return l}));var s=t(3),n=t(7),m=(t(0),t(143)),r=["components"],p={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/users"},i={unversionedId:"users/introduction",id:"users/introduction",isDocsHomePage:!1,title:"Introduction",description:"What is a Normalizing Flow?",source:"@site/docs/users/intro.mdx",slug:"/users",permalink:"/users",editUrl:"https://github.com/facebookincubator/flowtorch/edit/master/website/docs/users/intro.mdx",version:"current",sidebar_label:"Introduction",sidebar:"usersSidebar",next:{title:"Installation",permalink:"/users/installation"}},c=[{value:"What is a Normalizing Flow?",id:"what-is-a-normalizing-flow",children:[]},{value:"What is FlowTorch?",id:"what-is-flowtorch",children:[]},{value:"Where to From Here?",id:"where-to-from-here",children:[]}],b={toc:c};function l(e){var a=e.components,t=Object(n.a)(e,r);return Object(m.b)("wrapper",Object(s.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h2",{id:"what-is-a-normalizing-flow"},"What is a Normalizing Flow?"),Object(m.b)("p",null,"Normalizing Flows are a family a methods for representing and learning high-dimensional probability distributions. They have found ",Object(m.b)("a",{parentName:"p",href:"/dev/bibliography#applications"},"state-of-the-art applications")," in modeling complex distributions over images, ",Object(m.b)("a",{parentName:"p",href:"/dev/bibliography#kim2020wavenode"},"speech"),", ",Object(m.b)("a",{parentName:"p",href:"/dev/bibliography#jin2019unsupervised"},"syntactic structure"),", and molecules, to name a few. ",Object(m.b)("em",{parentName:"p"},"Simply put, a Normalizing Flow is a composition of learnable functions that inputs samples from a simple random distribution, typically Gaussian noise, and outputs samples from a more complex target distribution.")," Here is an illustration (",Object(m.b)("a",{parentName:"p",href:"https://github.com/janosh/awesome-normalizing-flows"},"taken with permission from here"),"):"),Object(m.b)("p",{align:"center"},Object(m.b)("img",{src:"/img/normalizing-flow.svg"})),Object(m.b)("p",null,"A simple source of noise, ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"z"),Object(m.b)("mn",{parentName:"msub"},"0"))),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z_0")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.58056em",verticalAlign:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.04398em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"0")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))))))),", is passed through a number of invertible functions, ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"f"),Object(m.b)("mn",{parentName:"msub"},"1")),Object(m.b)("mo",{parentName:"mrow",separator:"true"},","),Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"f"),Object(m.b)("mn",{parentName:"msub"},"2")),Object(m.b)("mo",{parentName:"mrow",separator:"true"},","),Object(m.b)("mo",{parentName:"mrow"},"\u2026"),Object(m.b)("mo",{parentName:"mrow",separator:"true"},","),Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"f"),Object(m.b)("mi",{parentName:"msub"},"k"))),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f_1,f_2,\\ldots,f_k")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10764em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"1")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mpunct"},","),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10764em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mtight"},"2")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mpunct"},","),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(m.b)("span",{parentName:"span",className:"minner"},"\u2026"),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(m.b)("span",{parentName:"span",className:"mpunct"},","),Object(m.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.33610799999999996em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10764em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"}))))))))))," to produce a more complex random variable, ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"z"),Object(m.b)("mi",{parentName:"msub"},"k"))),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z_k")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.58056em",verticalAlign:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.33610799999999996em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.04398em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))))))),". The invertible functions are constructed in a clever way so that we can easily sample from ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"z"),Object(m.b)("mi",{parentName:"msub"},"k"))),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z_k")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"0.58056em",verticalAlign:"-0.15em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.33610799999999996em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.04398em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"}))))))))))," and calculate its density function, ",Object(m.b)("span",{parentName:"p",className:"math math-inline"},Object(m.b)("span",{parentName:"span",className:"katex"},Object(m.b)("span",{parentName:"span",className:"katex-mathml"},Object(m.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("msub",{parentName:"mrow"},Object(m.b)("mi",{parentName:"msub"},"p"),Object(m.b)("mi",{parentName:"msub"},"k")),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},"("),Object(m.b)("mo",{parentName:"mrow"},"\u22c5"),Object(m.b)("mo",{parentName:"mrow",stretchy:"false"},")")),Object(m.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p_k(\\cdot)")))),Object(m.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(m.b)("span",{parentName:"span",className:"base"},Object(m.b)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),Object(m.b)("span",{parentName:"span",className:"mord"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal"},"p"),Object(m.b)("span",{parentName:"span",className:"msupsub"},Object(m.b)("span",{parentName:"span",className:"vlist-t vlist-t2"},Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.33610799999999996em"}},Object(m.b)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},Object(m.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(m.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(m.b)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k")))),Object(m.b)("span",{parentName:"span",className:"vlist-s"},"\u200b")),Object(m.b)("span",{parentName:"span",className:"vlist-r"},Object(m.b)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},Object(m.b)("span",{parentName:"span"})))))),Object(m.b)("span",{parentName:"span",className:"mopen"},"("),Object(m.b)("span",{parentName:"span",className:"mord"},"\u22c5"),Object(m.b)("span",{parentName:"span",className:"mclose"},")"))))),". The field of Normalizing Flows can be seen as a modern take on the ",Object(m.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Probability_density_function#Function_of_random_variables_and_change_of_variables_in_the_probability_density_function"},"change of variables method for random distributions"),", where the transformations are ",Object(m.b)("em",{parentName:"p"},"high-dimensional"),", often employing ",Object(m.b)("em",{parentName:"p"},"neural networks"),", and are designed for ",Object(m.b)("em",{parentName:"p"},"effective stochastic optimization"),"."),Object(m.b)("p",null,"We believe, although still a nascent field, that Normalizing Flows are a fundamental component of the modern Bayesian statistics and probabilistic computing toolkit, and we will likely see many more exciting applications in the near future."),Object(m.b)("h2",{id:"what-is-flowtorch"},"What is FlowTorch?"),Object(m.b)("p",null,Object(m.b)("a",{parentName:"p",href:"https://flowtorch.ai"},"FlowTorch")," is a library that provides PyTorch components for constructing Normalizing Flows using the latest research in the field. It builds on an earlier sub-library of code from ",Object(m.b)("a",{parentName:"p",href:"https://github.com/pyro-ppl/pyro/tree/dev/pyro/distributions/transforms"},"Pyro")," developed by the author since 2018. The main goals behind creating a new library for Normalizing Flows are to:"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},"define an elegant interface for Normalizing Flow methodology, building on our experience with Pyro, so that practitioners can easily utilize these methods and researchers can easily contribute their own implementations;"),Object(m.b)("li",{parentName:"ul"},"develop robust unit tests and other code quality practices to guarantee production quality code;"),Object(m.b)("li",{parentName:"ul"},"promote the methods in applied settings by fostering a community of Normalizing Flow practioners and linking them with researchers;"),Object(m.b)("li",{parentName:"ul"},"accelerate research in Normalizing Flows by providing standard implementations, benchmarking, and a comprehensive literature survey.")),Object(m.b)("h2",{id:"where-to-from-here"},"Where to From Here?"),Object(m.b)("p",null,"We recommend reading the next two sections to ",Object(m.b)("a",{parentName:"p",href:"/users/installation"},"install FlowTorch")," and ",Object(m.b)("a",{parentName:"p",href:"/users/start"},"train your first Normalizing Flow"),".  For more theoretical background on Normalizing Flows and information about their applications, see the primer ",Object(m.b)("a",{parentName:"p",href:"/users/univariate"},"here")," and the list of survey papers ",Object(m.b)("a",{parentName:"p",href:"/dev/bibliography#surveys"},"here"),"."))}l.isMDXComponent=!0},143:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return h}));var s=t(0),n=t.n(s);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},m=Object.keys(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(s=0;s<m.length;s++)t=m[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),b=function(e){var a=n.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=b(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},N=n.a.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=b(t),N=s,h=l["".concat(r,".").concat(N)]||l[N]||o[N]||m;return t?n.a.createElement(h,p(p({ref:a},c),{},{components:t})):n.a.createElement(h,p({ref:a},c))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var c=2;c<m;c++)r[c]=t[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,t)}N.displayName="MDXCreateElement"}}]);