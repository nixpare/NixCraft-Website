import{r as u,s as Ht,_ as Gt,a as Xt,b as Yt,R as me,T as it,u as qt,c as E,j as i,g as Ge,d as oe,e as Xe,f as Jt,h as ht,i as at,k as ye,l as mt,m as Qt,n as N,o as Zt,p as en,q as le,t as K,v as tn,N as nn,F as rn,S as on}from"./client-CuiwugDl.js";const Ye=u.createContext({});var yt={exports:{}},p={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=typeof Symbol=="function"&&Symbol.for,qe=v?Symbol.for("react.element"):60103,Je=v?Symbol.for("react.portal"):60106,Ce=v?Symbol.for("react.fragment"):60107,_e=v?Symbol.for("react.strict_mode"):60108,we=v?Symbol.for("react.profiler"):60114,je=v?Symbol.for("react.provider"):60109,Pe=v?Symbol.for("react.context"):60110,Qe=v?Symbol.for("react.async_mode"):60111,ze=v?Symbol.for("react.concurrent_mode"):60111,Re=v?Symbol.for("react.forward_ref"):60112,Ee=v?Symbol.for("react.suspense"):60113,sn=v?Symbol.for("react.suspense_list"):60120,Me=v?Symbol.for("react.memo"):60115,$e=v?Symbol.for("react.lazy"):60116,an=v?Symbol.for("react.block"):60121,cn=v?Symbol.for("react.fundamental"):60117,ln=v?Symbol.for("react.responder"):60118,un=v?Symbol.for("react.scope"):60119;function j(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qe:switch(e=e.type,e){case Qe:case ze:case Ce:case we:case _e:case Ee:return e;default:switch(e=e&&e.$$typeof,e){case Pe:case Re:case $e:case Me:case je:return e;default:return t}}case Je:return t}}}function vt(e){return j(e)===ze}p.AsyncMode=Qe;p.ConcurrentMode=ze;p.ContextConsumer=Pe;p.ContextProvider=je;p.Element=qe;p.ForwardRef=Re;p.Fragment=Ce;p.Lazy=$e;p.Memo=Me;p.Portal=Je;p.Profiler=we;p.StrictMode=_e;p.Suspense=Ee;p.isAsyncMode=function(e){return vt(e)||j(e)===Qe};p.isConcurrentMode=vt;p.isContextConsumer=function(e){return j(e)===Pe};p.isContextProvider=function(e){return j(e)===je};p.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qe};p.isForwardRef=function(e){return j(e)===Re};p.isFragment=function(e){return j(e)===Ce};p.isLazy=function(e){return j(e)===$e};p.isMemo=function(e){return j(e)===Me};p.isPortal=function(e){return j(e)===Je};p.isProfiler=function(e){return j(e)===we};p.isStrictMode=function(e){return j(e)===_e};p.isSuspense=function(e){return j(e)===Ee};p.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ce||e===ze||e===we||e===_e||e===Ee||e===sn||typeof e=="object"&&e!==null&&(e.$$typeof===$e||e.$$typeof===Me||e.$$typeof===je||e.$$typeof===Pe||e.$$typeof===Re||e.$$typeof===cn||e.$$typeof===ln||e.$$typeof===un||e.$$typeof===an)};p.typeOf=j;yt.exports=p;var dn=yt.exports,gt=dn,fn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xt={};xt[gt.ForwardRef]=fn;xt[gt.Memo]=pn;function hn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ht(t)}var Ze=function(){var t=hn.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function ct(e){try{return e.matches(":focus-visible")}catch{}return!1}function mn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function et(e,t){var n=function(s){return t&&u.isValidElement(s)?t(s):s},r=Object.create(null);return e&&u.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function yn(e,t){e=e||{},t=t||{};function n(h){return h in t?t[h]:e[h]}var r=Object.create(null),o=[];for(var s in e)s in t?o.length&&(r[s]=o,o=[]):o.push(s);var a,l={};for(var c in t){if(r[c])for(a=0;a<r[c].length;a++){var f=r[c][a];l[r[c][a]]=n(f)}l[c]=n(c)}for(a=0;a<o.length;a++)l[o[a]]=n(o[a]);return l}function Q(e,t,n){return n[t]!=null?n[t]:e.props[t]}function vn(e,t){return et(e.children,function(n){return u.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Q(n,"appear",e),enter:Q(n,"enter",e),exit:Q(n,"exit",e)})})}function gn(e,t,n){var r=et(e.children),o=yn(t,r);return Object.keys(o).forEach(function(s){var a=o[s];if(u.isValidElement(a)){var l=s in t,c=s in r,f=t[s],h=u.isValidElement(f)&&!f.props.in;c&&(!l||h)?o[s]=u.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:Q(a,"exit",e),enter:Q(a,"enter",e)}):!c&&l&&!h?o[s]=u.cloneElement(a,{in:!1}):c&&l&&u.isValidElement(f)&&(o[s]=u.cloneElement(a,{onExited:n.bind(null,a),in:f.props.in,exit:Q(a,"exit",e),enter:Q(a,"enter",e)}))}}),o}var xn=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Sn={component:"div",childFactory:function(t){return t}},tt=function(e){Gt(t,e);function t(r,o){var s;s=e.call(this,r,o)||this;var a=s.handleExited.bind(mn(s));return s.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},s}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,s){var a=s.children,l=s.handleExited,c=s.firstRender;return{children:c?vn(o,l):gn(o,a,l),firstRender:!1}},n.handleExited=function(o,s){var a=et(this.props.children);o.key in a||(o.props.onExited&&o.props.onExited(s),this.mounted&&this.setState(function(l){var c=Xt({},l.children);return delete c[o.key],{children:c}}))},n.render=function(){var o=this.props,s=o.component,a=o.childFactory,l=Yt(o,["component","childFactory"]),c=this.state.contextValue,f=xn(this.state.children).map(a);return delete l.appear,delete l.enter,delete l.exit,s===null?me.createElement(it.Provider,{value:c},f):me.createElement(it.Provider,{value:c},me.createElement(s,l,f))},t}(me.Component);tt.propTypes={};tt.defaultProps=Sn;class ge{static create(){return new ge}static use(){const t=qt(ge.create).current,[n,r]=u.useState(!1);return t.shouldMount=n,t.setShouldMount=r,u.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Cn(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function bn(){return ge.use()}function Cn(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function _n(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:s,rippleSize:a,in:l,onExited:c,timeout:f}=e,[h,x]=u.useState(!1),S=E(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:a,height:a,top:-(a/2)+s,left:-(a/2)+o},y=E(n.child,h&&n.childLeaving,r&&n.childPulsate);return!l&&!h&&x(!0),u.useEffect(()=>{if(!l&&c!=null){const I=setTimeout(c,f);return()=>{clearTimeout(I)}}},[c,l,f]),i.jsx("span",{className:S,style:b,children:i.jsx("span",{className:y})})}const M=Ge("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Le=550,wn=80,jn=Ze`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Pn=Ze`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,zn=Ze`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Rn=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),En=oe(_n,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${M.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${jn};
    animation-duration: ${Le}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${M.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${M.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${M.childLeaving} {
    opacity: 0;
    animation-name: ${Pn};
    animation-duration: ${Le}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${M.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${zn};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Mn=u.forwardRef(function(t,n){const r=Xe({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:a,...l}=r,[c,f]=u.useState([]),h=u.useRef(0),x=u.useRef(null);u.useEffect(()=>{x.current&&(x.current(),x.current=null)},[c]);const S=u.useRef(!1),b=Jt(),y=u.useRef(null),I=u.useRef(null),$=u.useCallback(m=>{const{pulsate:P,rippleX:g,rippleY:z,rippleSize:T,cb:G}=m;f(R=>[...R,i.jsx(En,{classes:{ripple:E(s.ripple,M.ripple),rippleVisible:E(s.rippleVisible,M.rippleVisible),ripplePulsate:E(s.ripplePulsate,M.ripplePulsate),child:E(s.child,M.child),childLeaving:E(s.childLeaving,M.childLeaving),childPulsate:E(s.childPulsate,M.childPulsate)},timeout:Le,pulsate:P,rippleX:g,rippleY:z,rippleSize:T},h.current)]),h.current+=1,x.current=G},[s]),L=u.useCallback((m={},P={},g=()=>{})=>{const{pulsate:z=!1,center:T=o||P.pulsate,fakeElement:G=!1}=P;if(m?.type==="mousedown"&&S.current){S.current=!1;return}m?.type==="touchstart"&&(S.current=!0);const R=G?null:I.current,A=R?R.getBoundingClientRect():{width:0,height:0,left:0,top:0};let W,B,V;if(T||m===void 0||m.clientX===0&&m.clientY===0||!m.clientX&&!m.touches)W=Math.round(A.width/2),B=Math.round(A.height/2);else{const{clientX:se,clientY:X}=m.touches&&m.touches.length>0?m.touches[0]:m;W=Math.round(se-A.left),B=Math.round(X-A.top)}if(T)V=Math.sqrt((2*A.width**2+A.height**2)/3),V%2===0&&(V+=1);else{const se=Math.max(Math.abs((R?R.clientWidth:0)-W),W)*2+2,X=Math.max(Math.abs((R?R.clientHeight:0)-B),B)*2+2;V=Math.sqrt(se**2+X**2)}m?.touches?y.current===null&&(y.current=()=>{$({pulsate:z,rippleX:W,rippleY:B,rippleSize:V,cb:g})},b.start(wn,()=>{y.current&&(y.current(),y.current=null)})):$({pulsate:z,rippleX:W,rippleY:B,rippleSize:V,cb:g})},[o,$,b]),H=u.useCallback(()=>{L({},{pulsate:!0})},[L]),O=u.useCallback((m,P)=>{if(b.clear(),m?.type==="touchend"&&y.current){y.current(),y.current=null,b.start(0,()=>{O(m,P)});return}y.current=null,f(g=>g.length>0?g.slice(1):g),x.current=P},[b]);return u.useImperativeHandle(n,()=>({pulsate:H,start:L,stop:O}),[H,L,O]),i.jsx(Rn,{className:E(M.root,s.root,a),ref:I,...l,children:i.jsx(tt,{component:null,exit:!0,children:c})})});function $n(e){return ht("MuiButtonBase",e)}const Nn=Ge("MuiButtonBase",["root","disabled","focusVisible"]),kn=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,a=mt({root:["root",t&&"disabled",n&&"focusVisible"]},$n,o);return n&&r&&(a.root+=` ${r}`),a},In=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Nn.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),On=u.forwardRef(function(t,n){const r=Xe({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:s=!1,children:a,className:l,component:c="button",disabled:f=!1,disableRipple:h=!1,disableTouchRipple:x=!1,focusRipple:S=!1,focusVisibleClassName:b,LinkComponent:y="a",onBlur:I,onClick:$,onContextMenu:L,onDragLeave:H,onFocus:O,onFocusVisible:m,onKeyDown:P,onKeyUp:g,onMouseDown:z,onMouseLeave:T,onMouseUp:G,onTouchEnd:R,onTouchMove:A,onTouchStart:W,tabIndex:B=0,TouchRippleProps:V,touchRippleRef:se,type:X,...ie}=r,ae=u.useRef(null),F=bn(),Et=at(F.ref,se),[Y,pe]=u.useState(!1);f&&Y&&pe(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{pe(!0),ae.current.focus()}}),[]);const Mt=F.shouldMount&&!h&&!f;u.useEffect(()=>{Y&&S&&!h&&F.pulsate()},[h,S,Y,F]);function D(d,ot,Kt=x){return ye(st=>(ot&&ot(st),Kt||F[d](st),!0))}const $t=D("start",z),Nt=D("stop",L),kt=D("stop",H),It=D("stop",G),Ot=D("stop",d=>{Y&&d.preventDefault(),T&&T(d)}),Tt=D("start",W),Bt=D("stop",R),Ft=D("stop",A),Dt=D("stop",d=>{ct(d.target)||pe(!1),I&&I(d)},!1),Lt=ye(d=>{ae.current||(ae.current=d.currentTarget),ct(d.target)&&(pe(!0),m&&m(d)),O&&O(d)}),Te=()=>{const d=ae.current;return c&&c!=="button"&&!(d.tagName==="A"&&d.href)},At=ye(d=>{S&&!d.repeat&&Y&&d.key===" "&&F.stop(d,()=>{F.start(d)}),d.target===d.currentTarget&&Te()&&d.key===" "&&d.preventDefault(),P&&P(d),d.target===d.currentTarget&&Te()&&d.key==="Enter"&&!f&&(d.preventDefault(),$&&$(d))}),Wt=ye(d=>{S&&d.key===" "&&Y&&!d.defaultPrevented&&F.stop(d,()=>{F.pulsate(d)}),g&&g(d),$&&d.target===d.currentTarget&&Te()&&d.key===" "&&!d.defaultPrevented&&$(d)});let he=c;he==="button"&&(ie.href||ie.to)&&(he=y);const ce={};he==="button"?(ce.type=X===void 0?"button":X,ce.disabled=f):(!ie.href&&!ie.to&&(ce.role="button"),f&&(ce["aria-disabled"]=f));const Vt=at(n,ae),rt={...r,centerRipple:s,component:c,disabled:f,disableRipple:h,disableTouchRipple:x,focusRipple:S,tabIndex:B,focusVisible:Y},Ut=kn(rt);return i.jsxs(In,{as:he,className:E(Ut.root,l),ownerState:rt,onBlur:Dt,onClick:$,onContextMenu:Nt,onFocus:Lt,onKeyDown:At,onKeyUp:Wt,onMouseDown:$t,onMouseLeave:Ot,onMouseUp:It,onDragLeave:kt,onTouchEnd:Bt,onTouchMove:Ft,onTouchStart:Tt,ref:Vt,tabIndex:f?-1:B,type:X,...ce,...ie,children:[a,Mt?i.jsx(Mn,{ref:Et,center:s,...V}):null]})});function Tn(e){return typeof e.main=="string"}function Bn(e,t=[]){if(!Tn(e))return!1;for(const n of t)if(!e.hasOwnProperty(n)||typeof e[n]!="string")return!1;return!0}function Fn(e=[]){return([,t])=>t&&Bn(t,e)}function Dn(e){return ht("MuiButton",e)}const te=Ge("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Ln=u.createContext({}),An=u.createContext(void 0),Wn=e=>{const{color:t,disableElevation:n,fullWidth:r,size:o,variant:s,classes:a}=e,l={root:["root",s,`${s}${N(t)}`,`size${N(o)}`,`${s}Size${N(o)}`,`color${N(t)}`,n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${N(o)}`],endIcon:["icon","endIcon",`iconSize${N(o)}`]},c=mt(l,Dn,a);return{...a,...c}},St=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],Vn=oe(On,{shouldForwardProp:e=>Qt(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${N(n.color)}`],t[`size${N(n.size)}`],t[`${n.variant}Size${N(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(Zt(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],n=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${te.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${te.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${te.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${te.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(e.palette).filter(Fn()).map(([r])=>({props:{color:r},style:{"--variant-textColor":(e.vars||e).palette[r].main,"--variant-outlinedColor":(e.vars||e).palette[r].main,"--variant-outlinedBorder":e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.5)`:le(e.palette[r].main,.5),"--variant-containedColor":(e.vars||e).palette[r].contrastText,"--variant-containedBg":(e.vars||e).palette[r].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[r].dark,"--variant-textBg":e.vars?`rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:le(e.palette[r].main,e.palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[r].main,"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:le(e.palette[r].main,e.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:le(e.palette.text.primary,e.palette.action.hoverOpacity),"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:le(e.palette.text.primary,e.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${te.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${te.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),Un=oe("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${N(n.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...St]}),Kn=oe("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${N(n.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...St]}),ve=u.forwardRef(function(t,n){const r=u.useContext(Ln),o=u.useContext(An),s=en(r,t),a=Xe({props:s,name:"MuiButton"}),{children:l,color:c="primary",component:f="button",className:h,disabled:x=!1,disableElevation:S=!1,disableFocusRipple:b=!1,endIcon:y,focusVisibleClassName:I,fullWidth:$=!1,size:L="medium",startIcon:H,type:O,variant:m="text",...P}=a,g={...a,color:c,component:f,disabled:x,disableElevation:S,disableFocusRipple:b,fullWidth:$,size:L,type:O,variant:m},z=Wn(g),T=H&&i.jsx(Un,{className:z.startIcon,ownerState:g,children:H}),G=y&&i.jsx(Kn,{className:z.endIcon,ownerState:g,children:y}),R=o||"";return i.jsxs(Vn,{ownerState:g,className:E(r.className,z.root,h,R),component:f,disabled:x,focusRipple:!b,focusVisibleClassName:E(z.focusVisible,I),ref:n,type:O,...P,classes:z,children:[T,l,G]})}),bt=({label:e,sendFunc:t,prefix:n=""})=>{const[r,o]=u.useState(n),s=async()=>{t(r),o(n)},a=c=>{c.target.value==""&&(c.target.value=n),o(c.target.value)},l=c=>{c.key==="Enter"&&s()};return i.jsxs("div",{className:"send-command",children:[i.jsx("h5",{children:e})," ",i.jsx("input",{type:"text",value:r,onChange:a,onKeyDown:l}),i.jsx(ve,{onClick:s,children:"Send"})]})};function Hn({user:e,server:t,show:n,showMessage:r}){const o=async()=>{(await K.post(`/${t.name}/start`)).status===200?r("Server started"):r("Server failed to start")},s=async()=>{(await K.post(`/${t.name}/stop`)).status===200?r("Server stopped"):r("Server failed to stop")},a=async()=>{const c=await K.post(`/${t.name}/connect`).catch(f=>{r(f.message)});c!=null&&(c.status>=400?r("Failed to connect to server"):r("Connected to server"))},l=async c=>{const f=await K.post(`/${t.name}/broadcast`,c).catch(h=>{r(h.message)});f&&f.status>=400&&r(f.data)};return i.jsxs("div",{className:"server-info",style:n?void 0:{display:"none"},children:[i.jsxs("div",{children:[i.jsx(ve,{onClick:o,disabled:t.running,children:"Start Server"}),i.jsx(ve,{onClick:s,disabled:!t.running,children:"Stop Server"})]}),t.running&&i.jsx("div",{children:e.server!=t.name?i.jsx(i.Fragment,{children:i.jsx(ve,{onClick:a,children:"Connect to this Server"})}):i.jsxs(i.Fragment,{children:["Connected",i.jsx("i",{className:"fa-solid fa-circle-check connected-check"})]})}),i.jsx(bt,{label:"Broadcast Message",sendFunc:l})]})}function Ct({server:e}){return i.jsxs("div",{className:`server-state ${e.running?"online":""}`,children:[i.jsx("i",{className:"server-state-dot"}),i.jsx("div",{className:"server-state-descr",children:e.running?"Online":"Offline"}),e.running?i.jsxs("div",{className:"online-players",children:[i.jsx("i",{className:"fa-solid fa-users"}),Object.values(e.players).length??0]}):void 0]})}function Gn({aside:e,setCurrentServer:t}){const{user:n,servers:r}=u.useContext(Ye);if(!(!n||!r))return i.jsx("ul",{className:`servers-list ${e?"aside":""}`,children:r.servers&&Object.values(r.servers).map(o=>{const s=()=>{t(o.name)};return i.jsxs("li",{className:"server-entry",onClick:s,children:[i.jsxs("div",{children:[i.jsx("div",{className:"server-name",children:o.name}),i.jsx("div",{className:"server-type",children:"Vanilla"}),i.jsx(Ct,{server:o})]}),i.jsx("i",{className:"fa-solid fa-chevron-right"})]},o.name)})})}var _t=Symbol.for("immer-nothing"),lt=Symbol.for("immer-draftable"),_=Symbol.for("immer-state");function k(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ne=Object.getPrototypeOf;function re(e){return!!e&&!!e[_]}function Z(e){return e?wt(e)||Array.isArray(e)||!!e[lt]||!!e.constructor?.[lt]||ke(e)||Ie(e):!1}var Xn=Object.prototype.constructor.toString();function wt(e){if(!e||typeof e!="object")return!1;const t=ne(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===Xn}function xe(e,t){Ne(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Ne(e){const t=e[_];return t?t.type_:Array.isArray(e)?1:ke(e)?2:Ie(e)?3:0}function Ae(e,t){return Ne(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function jt(e,t,n){const r=Ne(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Yn(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ke(e){return e instanceof Map}function Ie(e){return e instanceof Set}function q(e){return e.copy_||e.base_}function We(e,t){if(ke(e))return new Map(e);if(Ie(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=wt(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[_];let o=Reflect.ownKeys(r);for(let s=0;s<o.length;s++){const a=o[s],l=r[a];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[a]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[a]})}return Object.create(ne(e),r)}else{const r=ne(e);if(r!==null&&n)return{...e};const o=Object.create(r);return Object.assign(o,e)}}function ue(e,t=!1){return Oe(e)||re(e)||!Z(e)||(Ne(e)>1&&(e.set=e.add=e.clear=e.delete=qn),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>ue(r,!0))),e}function qn(){k(2)}function Oe(e){return Object.isFrozen(e)}var Jn={};function ee(e){const t=Jn[e];return t||k(0,e),t}var de;function Pt(){return de}function Qn(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ut(e,t){t&&(ee("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ve(e){Ue(e),e.drafts_.forEach(Zn),e.drafts_=null}function Ue(e){e===de&&(de=e.parent_)}function dt(e){return de=Qn(de,e)}function Zn(e){const t=e[_];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ft(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[_].modified_&&(Ve(t),k(4)),Z(e)&&(e=Se(t,e),t.parent_||be(t,e)),t.patches_&&ee("Patches").generateReplacementPatches_(n[_].base_,e,t.patches_,t.inversePatches_)):e=Se(t,n,[]),Ve(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==_t?e:void 0}function Se(e,t,n){if(Oe(t))return t;const r=t[_];if(!r)return xe(t,(o,s)=>pt(e,r,t,o,s,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return be(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let s=o,a=!1;r.type_===3&&(s=new Set(o),o.clear(),a=!0),xe(s,(l,c)=>pt(e,r,o,l,c,n,a)),be(e,o,!1),n&&e.patches_&&ee("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function pt(e,t,n,r,o,s,a){if(re(o)){const l=s&&t&&t.type_!==3&&!Ae(t.assigned_,r)?s.concat(r):void 0,c=Se(e,o,l);if(jt(n,r,c),re(c))e.canAutoFreeze_=!1;else return}else a&&n.add(o);if(Z(o)&&!Oe(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Se(e,o),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&be(e,o)}}function be(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ue(t,n)}function er(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Pt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,s=nt;n&&(o=[r],s=fe);const{revoke:a,proxy:l}=Proxy.revocable(o,s);return r.draft_=l,r.revoke_=a,l}var nt={get(e,t){if(t===_)return e;const n=q(e);if(!Ae(n,t))return tr(e,n,t);const r=n[t];return e.finalized_||!Z(r)?r:r===Be(e.base_,t)?(Fe(e),e.copy_[t]=He(r,e)):r},has(e,t){return t in q(e)},ownKeys(e){return Reflect.ownKeys(q(e))},set(e,t,n){const r=zt(q(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const o=Be(q(e),t),s=o?.[_];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(Yn(n,o)&&(n!==void 0||Ae(e.base_,t)))return!0;Fe(e),Ke(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Be(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Fe(e),Ke(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=q(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){k(11)},getPrototypeOf(e){return ne(e.base_)},setPrototypeOf(){k(12)}},fe={};xe(nt,(e,t)=>{fe[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});fe.deleteProperty=function(e,t){return fe.set.call(this,e,t,void 0)};fe.set=function(e,t,n){return nt.set.call(this,e[0],t,n,e[0])};function Be(e,t){const n=e[_];return(n?q(n):e)[t]}function tr(e,t,n){const r=zt(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}function zt(e,t){if(!(t in e))return;let n=ne(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=ne(n)}}function Ke(e){e.modified_||(e.modified_=!0,e.parent_&&Ke(e.parent_))}function Fe(e){e.copy_||(e.copy_=We(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var nr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const s=n;n=t;const a=this;return function(c=s,...f){return a.produce(c,h=>n.call(this,h,...f))}}typeof n!="function"&&k(6),r!==void 0&&typeof r!="function"&&k(7);let o;if(Z(t)){const s=dt(this),a=He(t,void 0);let l=!0;try{o=n(a),l=!1}finally{l?Ve(s):Ue(s)}return ut(s,r),ft(o,s)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===_t&&(o=void 0),this.autoFreeze_&&ue(o,!0),r){const s=[],a=[];ee("Patches").generateReplacementPatches_(t,o,s,a),r(s,a)}return o}else k(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(a,...l)=>this.produceWithPatches(a,c=>t(c,...l));let r,o;return[this.produce(t,n,(a,l)=>{r=a,o=l}),r,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Z(e)||k(8),re(e)&&(e=rr(e));const t=dt(this),n=He(e,void 0);return n[_].isManual_=!0,Ue(t),n}finishDraft(e,t){const n=e&&e[_];(!n||!n.isManual_)&&k(9);const{scope_:r}=n;return ut(r,t),ft(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const r=ee("Patches").applyPatches_;return re(e)?r(e,t):this.produce(e,o=>r(o,t))}};function He(e,t){const n=ke(e)?ee("MapSet").proxyMap_(e,t):Ie(e)?ee("MapSet").proxySet_(e,t):er(e,t);return(t?t.scope_:Pt()).drafts_.push(n),n}function rr(e){return re(e)||k(10,e),Rt(e)}function Rt(e){if(!Z(e)||Oe(e))return e;const t=e[_];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=We(e,t.scope_.immer_.useStrictShallowCopy_)}else n=We(e,!0);return xe(n,(r,o)=>{jt(n,r,Rt(o))}),t&&(t.finalized_=!1),n}var w=new nr,or=w.produce;w.produceWithPatches.bind(w);w.setAutoFreeze.bind(w);w.setUseStrictShallowCopy.bind(w);w.applyPatches.bind(w);w.createDraft.bind(w);w.finishDraft.bind(w);function sr(e){var t=u.useState(function(){return ue(typeof e=="function"?e():e,!0)}),n=t[1];return[t[0],u.useCallback(function(r){n(typeof r=="function"?or(r):ue(r))},[])]}let C=!1;function ir({serverName:e,server:t,show:n,showMessage:r}){const[o,s]=sr([]),a=()=>{De(C)&&C.close()};u.useEffect(()=>{s(c=>{c.length=0})},[e]),u.useEffect(()=>(a(),C&&!De(C)||(C=!0,cr(t.name,r,s)),a),[t]);const l=c=>{if(!De(C)){r("Could not send command to server");return}C.send(c)};return i.jsxs("div",{style:n?void 0:{display:"none"},children:[i.jsx(bt,{label:"Command",sendFunc:l,prefix:"/"}),i.jsx("div",{className:"server-logs",children:i.jsxs("table",{className:"logs-table",style:{whiteSpace:"pre-wrap"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"TIME"}),i.jsx("th",{scope:"col",children:"FROM"}),i.jsx("th",{scope:"col",children:"LEVEL"}),i.jsx("th",{scope:"col",children:"LOG"})]})}),i.jsx("tbody",{children:o.map(c=>i.jsx(ar,{log:c},c.id))})]})})]})}function ar({log:e}){const t=e.message.includes(`
`)?"multiline":"",[n,r]=u.useState(!1),o=s=>{s.preventDefault(),r(!n)};return i.jsxs("tr",{children:[i.jsx("td",{children:e.date}),i.jsx("td",{children:e.from}),i.jsx("td",{style:{color:e.levelColor},children:e.level}),i.jsx("td",{children:i.jsxs("div",{className:`log-message ${t} ${n?"show":""}`,onClick:o,children:[i.jsxs("div",{className:"message",children:[e.message,i.jsxs("div",{className:"tags",children:["Tags:",e.tags?.map(s=>i.jsx("p",{children:s},s))]})]}),i.jsx("div",{className:"expand",children:i.jsx("i",{className:"fa-solid fa-chevron-right"})})]})})]})}async function cr(e,t,n){const r=`/ws/${e}/console`;if(await K.get(r).catch(s=>{t(s.response.data)})==null){C=!1;return}C=new WebSocket(r),C.onopen=()=>{n(s=>{s.length=0})},C.onclose=()=>{C=!1},C.onmessage=s=>{n(a=>{const l=JSON.parse(s.data);lr(l,a)})},C.onerror=()=>{t("Server connection error")}}function lr(e,t){let n,r,o,s=e.message;const a=new Date(e.date).toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).replace(", ",`
`);let l=!1;switch(!0){case e.tags?.includes("stderr"):n="Server",r="FATAL",o="hsl(0, 80%, 60%)";break;case e.tags?.includes("user"):n="NixCraft",r="USER",o="hsl(90, 80%, 60%)";break;case e.tags?.includes("server"):n="NixCraft",r="SERVER",o="hsl(90, 80%, 60%)";break;default:switch(!0){case(s.indexOf("] ")>=0&&s.indexOf("]: ")>s.indexOf("] ")):s=s.substring(s.indexOf("] ")+2,s.length),[n,r]=s.substring(1,s.indexOf("]: ")).split("/",2),s=s.substring(s.indexOf("]: ")+3,s.length);break;case s.indexOf("]: ")>=0:n="Server",r=s.substring(1,s.indexOf("]: ")).split(" ",2)[1],s=s.substring(s.indexOf("]: ")+3,s.length);break;default:n="Server",r="",l=!0;break}switch(r){case"INFO":o="hsl(190, 80%, 60%)";break;case"WARN":o="hsl(20, 80%, 60%)";break;case"ERROR":o="hsl(0, 80%, 60%)";break;default:o=""}}if(e.extra!=""&&(s=s.concat(`
`,e.extra)),l&&t[t.length-1]!=null){let c=t[t.length-1];c.message=c.message.concat(`
`,s),t[t.length-1]=c;return}t.push({id:e.id,date:a,from:n,level:r,levelColor:o,message:s,tags:e.tags})}function De(e){return e&&e.close}function ur({closeServer:e,serverName:t,showMessage:n}){const[r,o]=u.useState("info"),{user:s,servers:a}=u.useContext(Ye);if(!s||!a)return;const l=a.servers[t];if(l)return i.jsxs("div",{className:"selected-server",children:[i.jsx("h1",{children:l.name}),i.jsx("button",{className:"close-button",onClick:e,children:i.jsx("i",{className:"fa-solid fa-xmark"})}),i.jsx(Ct,{server:l}),i.jsxs("div",{className:"sections-selector",children:[i.jsx("div",{className:r=="info"?"selected":void 0,onClick:()=>o("info"),children:"Info"}),i.jsx("div",{className:r=="logs"?"selected":void 0,onClick:()=>o("logs"),children:"Logs"})]}),i.jsxs("div",{className:"sections",children:[i.jsx(Hn,{user:s,server:l,show:r=="info",showMessage:n}),i.jsx(ir,{serverName:t,server:l,show:r=="logs",showMessage:n})]})]})}tn(document.getElementById("root")).render(i.jsx(u.StrictMode,{children:i.jsx(dr,{})}));let J=!1,U=!1;function dr(){const[e,t]=u.useState(!1),[n,r]=u.useState(localStorage.getItem("username")),[o,s]=u.useState(void 0);u.useEffect(()=>{J||(J=!0,fr(s,h))});const[a,l]=u.useState(void 0);u.useEffect(()=>{U||(U=!0,pr(l,h))},[U]);const[c,f]=u.useState(localStorage.getItem("selectedServer"));u.useEffect(()=>{c==null?localStorage.removeItem("selectedServer"):localStorage.setItem("selectedServer",c)},[c]);const h=y=>{t(!0),r(y)},x=async()=>{await K.get("/logout"),window.location.href="/login"},S=()=>{f(null)},b=c!=null&&o?.servers[c]!=null;return i.jsxs(Ye.Provider,{value:{user:a,servers:o},children:[i.jsxs("div",{className:"page-wrapper",children:[i.jsxs("div",{children:[i.jsx(nn,{showLogoutButton:!0,onLogout:x}),i.jsxs("div",{className:"page",children:[a!=null&&i.jsxs("h2",{className:"welcome",children:["Welcome, ",i.jsx("span",{children:a.name})]}),i.jsxs("div",{className:"servers",children:[i.jsx(Gn,{aside:b,setCurrentServer:f}),b?i.jsx(i.Fragment,{children:i.jsx(ur,{closeServer:S,serverName:c,showMessage:h})}):void 0]})]})]}),i.jsx("div",{children:i.jsx(rn,{})})]}),i.jsx(on,{open:e,message:n,autoHideDuration:6e3,onClose:()=>{t(!1)},onClick:()=>{t(!1)}})]})}async function fr(e,t){const n="/ws/servers";await K.get(n).catch(o=>{t(o.response.data)})!=null&&(J=new WebSocket(n),J.onclose=()=>{J=!1},J.onmessage=o=>{e(JSON.parse(o.data))},J.onerror=()=>{t("Server connection error")})}async function pr(e,t){const n="/ws/user";await K.get(n).catch(o=>{t(o.response.data)})!=null&&(U=new WebSocket(n),U.onclose=()=>{U=!1},U.onmessage=o=>{e(JSON.parse(o.data))},U.onerror=()=>{t("Server connection error")})}
