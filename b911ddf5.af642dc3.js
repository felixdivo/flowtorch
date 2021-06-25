(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(143)),l=["components"],i={id:"releases",title:"Releases",sidebar_label:"Releases"},c={unversionedId:"dev/releases",id:"dev/releases",isDocsHomePage:!1,title:"Releases",description:"A list of FlowTorch releases is to be found here. In this section, we detail the process of making a release.",source:"@site/docs/dev/releases.md",slug:"/dev/releases",permalink:"/dev/releases",editUrl:"https://github.com/facebookincubator/flowtorch/edit/master/website/docs/dev/releases.md",version:"current",sidebar_label:"Releases",sidebar:"devsSidebar",previous:{title:"Help Wanted!",permalink:"/dev"},next:{title:"About the Team",permalink:"/dev/about"}},s=[{value:"Versioning Scheme",id:"versioning-scheme",children:[]},{value:"Making a Release",id:"making-a-release",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A list of FlowTorch releases is to be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookincubator/flowtorch/releases"},"here"),". In this section, we detail the process of making a release."),Object(o.b)("h2",{id:"versioning-scheme"},"Versioning Scheme"),Object(o.b)("p",null,"First, let us describe the versioning scheme we use. It is a simple system with versions of the form ",Object(o.b)("em",{parentName:"p"},"<","major",">",".","<","minor",">","[.dev","<","build",">]"),". Some examples are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0.5"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"1.4"),"; and,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0.0.dev1"),".")),Object(o.b)("p",null,"We use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pypa/setuptools_scm"},Object(o.b)("inlineCode",{parentName:"a"},"setuptools_scm"))," to automatically handle versions, and it is able to bump the version for builds without ",Object(o.b)("inlineCode",{parentName:"p"},".dev"),". A description of how ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pypa/setuptools_scm"},Object(o.b)("inlineCode",{parentName:"a"},"setuptools_scm"))," handles versioning can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pypa/setuptools_scm/#default-versioning-scheme"},"here"),"."),Object(o.b)("h2",{id:"making-a-release"},"Making a Release"),Object(o.b)("p",null,"Core developers should follow this procedure to release a new version of FlowTorch."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add a version tag to release commit, or optionally, allow ",Object(o.b)("a",{parentName:"li",href:"https://github.com/pypa/setuptools_scm"},Object(o.b)("inlineCode",{parentName:"a"},"setuptools_scm"))," to bump the version automatically, and push:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git tag <version>\ngit push\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Make release notes and add to ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookincubator/flowtorch/releases"},"GitHub releases"),"."),Object(o.b)("li",{parentName:"ol"},"Build the wheel and test that the package description will render correctly on PyPI:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"python setup.py sdist bdist_wheel\ntwine check dist/*\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Upload the package to PyPI:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"twine upload dist/*\n")),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make release announcements on:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pytorch.slack.com"},"PyTorch Slack")," channels ",Object(o.b)("inlineCode",{parentName:"li"},"#normalizing_flows"),", ",Object(o.b)("inlineCode",{parentName:"li"},"#pyro"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"#announcements")),Object(o.b)("li",{parentName:"ul"},"Personal account on Facebook"),Object(o.b)("li",{parentName:"ul"},"Personal account on Twitter"),Object(o.b)("li",{parentName:"ul"},"Personal account on LinkedIn")),Object(o.b)("p",{parentName:"li"},"including link to release notes and ",Object(o.b)("a",{parentName:"p",href:"https://flowtorch.ai"},"main website"),"."))))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);