(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{32:function(e,n,t){e.exports=t(59)},58:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a,r=t(0),o=t.n(r),c=t(27),i=t.n(c),s=t(9),l=t(1),d=t(7),p=t(8);const m=Object(p.a)(s.b)(a||(a=Object(d.a)(["\n  padding-top: 24px;\n  border-radius: 2px;\n  box-shadow: 0 0 5px rgba(3, 27, 78, 0.1);\n  transition: box-shadow 0.4s ease-in-out;\n\n  &:hover {\n    box-shadow: 0 2px 20px rgba(3, 27, 78, 0.4);\n    cursor: pointer;\n  }\n\n  figure {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  dl {\n    height: 60px;\n    margin: 0;\n    padding: 6px 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  dt {\n    height: 20px;\n    padding: 0 6px;\n    border-radius: 10px;\n    background-color: #90caf9;\n    font-family: 'Open Sans Condensed', sans-serif;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  dd {\n    margin: 0;\n    font-size: 18px;\n    font-family: 'Open Sans Condensed', sans-serif;\n    text-transform: uppercase;\n  }\n"])));var u=e=>{let{id:n,name:t}=e;return o.a.createElement(m,{to:"/pokemon/".concat(n)},o.a.createElement("figure",{className:"pokemon-card-image"},o.a.createElement("img",{alt:"Pok\xe9mon: ".concat(t),height:"180px",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(n,".png")})),o.a.createElement("dl",null,o.a.createElement("dt",null,"#",n),o.a.createElement("dd",null,t)))},f=t(31),g=t.n(f);const h="https://pokeapi.co/api/v2";var b,x=(e,n)=>g.a.get(((e,n)=>"".concat(h,"/pokemon?offset=").concat(e,"&limit=").concat(n))(e,n)).then(e=>{let{data:n}=e;return n.results.map(e=>({name:e.name,id:e.url.substring(34,e.url.length-1)}))}).catch(e=>(console.error("Error occured while fetching list of pokemons: ",e),[]));const k=p.a.div(b||(b=Object(d.a)(["\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: 3px solid #e3350d4d;\n  border-radius: 50%;\n  border-top-color: #e3350d;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"])));var E,w,v=()=>o.a.createElement(k,null);const j=p.a.div(E||(E=Object(d.a)(["\n  height: 100%;\n  display: grid;\n  grid-gap: 12px;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n"]))),O=p.a.div(w||(w=Object(d.a)(["\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));var y,S,C,P=()=>{const[e,n]=Object(r.useState)(!1),[t,a]=Object(r.useState)([]),[c,i]=Object(r.useState)(0),s=Object(r.useCallback)(async e=>{n(!0);const t=await x(e,40);a(e=>[...e,...t]),n(!1)},[]);Object(r.useEffect)(()=>{s(c)},[c,s]);const l=Object(r.useRef)(0),d=Object(r.useRef)(new IntersectionObserver(e=>{const[n]=e,{y:t}=n.boundingClientRect;l.current>t&&i(e=>e+40),l.current=t},{threshold:.1})),p=Object(r.useRef)(null);return Object(r.useEffect)(()=>{const e=d&&d.current,n=p&&p.current;return n&&e.observe(n),()=>{n&&e.unobserve(n)}},[]),o.a.createElement(j,null,t.map(e=>o.a.createElement(u,Object.assign({key:e.name},e))),o.a.createElement(O,{ref:p,className:"pokedex-grid-loader"},e&&o.a.createElement(v,null)))};const R=p.a.div(y||(y=Object(d.a)(["\n  height: 100vh;\n  overflow: hidden;\n"]))),I=p.a.main(S||(S=Object(d.a)(["\n  height: calc(100% - 60px);\n  padding: 24px;\n  overflow: auto;\n"]))),z=p.a.header(C||(C=Object(d.a)(["\n  align-items: center;\n  background-color: #e3350d;\n  color: #fff;\n  display: flex;\n  font-size: larger;\n  font-weight: bold;\n  height: 60px;\n  padding-left: 60px;\n\n  a {\n    cursor: pointer;\n  }\n"])));var B=()=>o.a.createElement(R,null,o.a.createElement(z,null,o.a.createElement(s.b,{to:"/"},"Pok\xe9mon")),o.a.createElement(I,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/pokemon/:id"}),o.a.createElement(l.a,{component:P,path:"/"}))));var J=()=>o.a.createElement(l.a,{path:"/"},o.a.createElement(B,null));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(58);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,null,o.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[32,1,2]]]);
//# sourceMappingURL=main.bdbe956f.chunk.js.map