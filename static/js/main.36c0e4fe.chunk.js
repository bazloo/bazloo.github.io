(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{13:function(e,t,n){e.exports={text:"textArea_text__2N4rP",conten:"textArea_conten__3sGY9",author:"textArea_author__1cQ1H"}},14:function(e,t,n){e.exports={wrapper:"quotesBox_wrapper__2RWwo",btnWrapper:"quotesBox_btnWrapper__2a72h",btn:"quotesBox_btn__2bch4"}},33:function(e,t,n){e.exports={btn:"button_btn__SGdXd"}},42:function(e,t,n){},43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),o=n.n(r),c=n(10),u=n.n(c),i=(n(42),n(43),n(6)),g=n(30),s=n(31),b=n(36),d=n(35),l=n(12),h=n(33),p=n.n(h),j=function(e){return Object(a.jsx)("a",{onClick:function(){e.getNewQuote()},className:p.a.btn,children:"New quote"})},w=n(13),f=n.n(w),O=function(e){return Object(a.jsxs)("div",{className:f.a.text,children:[Object(a.jsx)("span",{className:f.a.conten,children:e.content?e.content:"waiting for quote..."}),Object(a.jsx)("span",{id:"author",className:f.a.author,children:e.author?e.author:"..."})]})},x=n(14),k=n.n(x),m=function(e){var t=e.newQuote.newQuote.length,n=Object(i.a)({height:"18.5vw"},e.newQuote.actualBackgroundCollor);return t<70?n.height="18.5vw":t>90?n.height="22vw":t>150?n.height="24vw":t>210&&(n.height="26vw"),Object(a.jsxs)("div",{className:k.a.wrapper,style:n,children:[Object(a.jsx)(O,{author:e.newQuote.newQuote.author,content:e.newQuote.newQuote.content}),Object(a.jsxs)("div",{className:k.a.btnWrapper,children:[Object(a.jsx)(j,{getNewQuote:e.getNewQuote}),Object(a.jsx)("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",target:"_blank",className:k.a.btn,"data-show-count":"false",children:"Tweet"}),Object(a.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})]})]})},v="GENERATE",Q="CHOOSE-COLOR",_={newQuote:"Waiting for new quote",backgroundColor:[{background:"linear-gradient(45deg, teal,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #16a085,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #27ae60,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #2c3e50,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #f39c12,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #e74c3c,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #9b59b6,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #FB6964,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #342224,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #472E32,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #BDBB99,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #77B1A9,rgba(172, 217, 231, 0.089))"},{background:"linear-gradient(45deg, #73A857,rgba(172, 217, 231, 0.089))"}],actualBackgroundCollor:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t.type===v?Object(i.a)(Object(i.a)({},e),{},{newQuote:t.quote}):t.type===Q?Object(i.a)(Object(i.a)({},e),{},{actualBackgroundCollor:t.color}):e},C=n(18),q=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getNewQuote=function(){C.get("https://api.quotable.io/random").then((function(t){e.props.generateNewQuote(t.data)}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;C.get("https://api.quotable.io/random").then((function(t){e.props.generateNewQuote(t.data);var n,a;e.props.chooseColor(e.props.newQuote.backgroundColor[(n=0,a=12,Math.floor(Math.random()*(a-n)+n))])}))}},{key:"render",value:function(){return Object(a.jsx)(m,Object(i.a)(Object(i.a)({},this.props),{},{getNewQuote:this.getNewQuote}))}}]),n}(o.a.Component),B=Object(l.b)((function(e){return{newQuote:e.newQuote}}),{generateNewQuote:function(e){return{type:v,quote:e}},chooseColor:function(e){return{type:Q,color:e}}})(q);var y=function(){return Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)("div",{className:"background"}),Object(a.jsx)(B,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},E=n(9),F=Object(E.b)({newQuote:N}),W=Object(E.c)(F),T=n(34);u.a.render(Object(a.jsx)(T.a,{basename:"/rqm",children:Object(a.jsx)(l.a,{store:W,children:Object(a.jsx)(y,{})})}),document.getElementById("root")),A()}},[[67,1,2]]]);
//# sourceMappingURL=main.36c0e4fe.chunk.js.map