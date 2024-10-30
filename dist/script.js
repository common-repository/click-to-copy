!function(){"use strict";var t={410:function(t,e,n){var c=n(206);e.H=c.createRoot,c.hydrateRoot},206:function(t){t.exports=ReactDOM}},e={};function n(c){var a=e[c];if(void 0!==a)return a.exports;var o=e[c]={exports:{}};return t[c](o,o.exports,n),o.exports}!function(){var t=n(410);var e=function(t){return Object.values(t).join(" ")},c=function(t){var e=t||{},n=e.width,c=void 0===n?"0px":n,a=e.style,o=void 0===a?"solid":a,l=e.color,i=void 0===l?"#0000":l,r=e.side,d=void 0===r?"all":r,s=e.radius,u=void 0===s?"0px":s,m=function(t){var e=null==d?void 0:d.toLowerCase();return(null==e?void 0:e.includes("all"))||(null==e?void 0:e.includes(t))},v="0px"===c||!c,p="".concat(c," ").concat(o," ").concat(i),f="\n\t\t".concat(v?"":["top","right","bottom","left"].map((function(t){return m(t)?"border-".concat(t,": ").concat(p,";"):""})).join(""),"\n\t\t").concat(u?"border-radius: ".concat(u,";"):"","\n\t");return f},a=function(t){var e=t||{},n=e.color,c=void 0===n?"#333":n,a=e.bgType,o=void 0===a?"solid":a,l=e.bg,i=void 0===l?"#0000":l,r=e.gradient,d=void 0===r?"linear-gradient(135deg, #4527a4, #8344c5)":r;return"\n\t\t".concat(c?"color: ".concat(c,";"):"","\n\t\t").concat(d||i?"background: ".concat("gradient"===o?d:i,";"):"","\n\t")},o=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=e||{},a=c.fontFamily,o=void 0===a?"Default":a,l=c.fontCategory,i=void 0===l?"sans-serif":l,r=c.fontVariant,d=void 0===r?400:r,s=c.fontWeight,u=void 0===s?400:s,m=c.isUploadFont,v=void 0===m||m,p=c.fontSize,f=void 0===p?{desktop:15,tablet:15,mobile:15}:p,b=c.fontStyle,h=void 0===b?"normal":b,R=c.textTransform,g=void 0===R?"none":R,y=c.textDecoration,E=void 0===y?"auto":y,C=c.lineHeight,x=void 0===C?"135%":C,w=c.letterSpace,F=void 0===w?"0px":w,k=function(t,e){return t?"".concat(e,": ").concat(t,";"):""},T=!n||!o||"Default"===o,L=(null==f?void 0:f.desktop)||f,N=(null==f?void 0:f.tablet)||L,B=(null==f?void 0:f.mobile)||N,M="\n\t\t".concat(T?"":"font-family: '".concat(o,"', ").concat(i,";"),"\n\t\t").concat(k(u,"font-weight"),"\n\t\t","font-size: ".concat(L,"px;"),"\n\t\t").concat(k(h,"font-style"),"\n\t\t").concat(k(g,"text-transform"),"\n\t\t").concat(k(E,"text-decoration"),"\n\t\t").concat(k(x,"line-height"),"\n\t\t").concat(k(F,"letter-spacing"),"\n\t"),S=d&&400!==d?"400i"===d?":ital@1":null!=d&&d.includes("00i")?": ital, wght@1, ".concat(null==d?void 0:d.replace("00i","00")," "):": wght@".concat(d," "):"",z=T?"":"https://fonts.googleapis.com/css2?family=".concat(null==o?void 0:o.split(" ").join("+")).concat(S.replace(/ /g,""),"&display=swap");return{googleFontLink:!v||T?"":"@import url(".concat(z,");"),styles:"".concat(t,"{\n\t\t\t").concat(M,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(N,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(B,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},l=function(t){var n,l,i,r,d,s,u,m,v,p=t.attributes,f=t.clientId,b=p.labelColor,h=p.labelTypo,R=p.inputTypo,g=p.inputColors,y=p.inputPadding,E=p.inputBorder,C=p.btnTypo,x=p.btnColors,w=p.btnBorder,F=p.btnPadding,k=p.hoverContent,T="#ctcbClickToCopy-".concat(f," .form"),L="#ctcbClickToCopy-".concat(f," .default"),N="#ctcbClickToCopy-".concat(f," .form3"),B="#ctcbClickToCopy-".concat(f," .form4");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t \n\t\t".concat(null===(n=o("",null==k?void 0:k.typo))||void 0===n?void 0:n.googleFontLink," \n\t\t").concat(null===(l=o("",R))||void 0===l?void 0:l.googleFontLink,"\n\t\t").concat(null===(i=o("",h))||void 0===i?void 0:i.googleFontLink,"\n\t\t").concat(null===(r=o("",C))||void 0===r?void 0:r.googleFontLink,"\n\n\t\t").concat(null===(d=o("".concat(B," .hoverContent"),null==k?void 0:k.typo))||void 0===d?void 0:d.styles,"\n\t\t").concat(null===(s=o("".concat(B," .content .text"),R))||void 0===s?void 0:s.styles,"\n\t\t").concat(null===(u=o("".concat(T," .inputForm .text"),R))||void 0===u?void 0:u.styles,"\n\t\t").concat(null===(m=o("".concat(T," .inputForm .label"),h))||void 0===m?void 0:m.styles,"\n\t\t").concat(null===(v=o("".concat(T," .inputForm .subBtn .btnText "),C))||void 0===v?void 0:v.styles,"\n\n\t\t").concat(T," .inputForm .label {\n\t\t\tcolor:").concat(b,";\n\t\t}\n\n\t\t").concat(T," .copyText {\n\t\t\t").concat(a(g),";\n\t\t}\n\n\t\t").concat(T," .copyTextForm3 {\n\t\t\t").concat(a(g),";\n\t\t}\n\n\t\t").concat(T," .inputForm .text {\n\t\t\tpadding:").concat(e(y),";\n\t\t}\n\n\t\t").concat(T," .inputForm .copyText button {\n\t\t\tpadding:").concat(e(F),";\n\t\t\t").concat(c(w),"\n\t\t}\n\n\t\t").concat(L," .inputForm .copyText.active .subBtn::before {\n\t\t\t").concat(a(x),"\n\t\t}\n\n\t\t").concat(L," .inputForm .copyText.active .subBtn::after {\n\t\t\t").concat(a(x),"\n\t\t}\n\n\t\t").concat(T," .inputForm .subBtn{\n\t\t\t").concat(a(x),";\n\t\t\tpadding:").concat(e(F),";\n\t\t}\n\n\t\t").concat(N," .inputForm .subBtn {\n\t\t\t").concat(c(w),";\n\t\t}\n\n\t\t").concat(T," .inputForm .copyText {\n\t\t\tpadding:").concat(e(y),";\n\t\t\t").concat(c(E),";\n\t\t}\n\n\t\t").concat(T," .inputForm .copyTextForm3 {\n\t\t\tpadding:").concat(e(y),";\n\t\t\t").concat(c(E),";\n\t\t}\n\n\t\t").concat(N," .inputForm3 .message {\n\t\t\t").concat(a(x),";\n\t\t}\n\n\t\t").concat(N," .inputForm3 .message::after {\n\t\t\tborder-left: 20px solid ").concat(null==x?void 0:x.bg,";\n\t\t}\n\n\t\t").concat(B," .content .text{\n\t\t\t").concat(a(g),";\n\t\t}\n\n\t\t").concat(B," .hoverContent {\n\t\t\t").concat(a(null==k?void 0:k.colors),";\n\t\t}\n\n\t\t").replace(/\s+/g," ")}})},i=React,r=function(t){var e=t.attributes,n=t.divRef,c=t.forms,a=t.copied,o=e.input;return React.createElement("div",{className:"text",ref:n},"form1"===c&&a?"Copied":null==o?void 0:o.offerContent)},d="#4527a4",s={iconCopy:function(t,e){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 32 32",enableBackground:"new 0 0 32 32",xmlSpace:"preserve"},React.createElement("rect",{x:"13",y:"9",fill:"none",stroke:t,strokeWidth:"2",strokeMiterlimit:"10",width:"14",height:"18"}),React.createElement("polyline",{fill:"none",stroke:t,strokeWidth:"2",strokeMiterlimit:"10",points:"11,23 5,23 5,5 19,5 19,7 "}))},copy:React.createElement("svg",{width:"25px",height:"25px",viewBox:"0 0 15 15",fill:"#000"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z",fill:"#000000"})),block:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 20 20",fill:d},React.createElement("path",{fill:d,fillRule:"evenodd",d:"M9.938 4.016a.146.146 0 00-.054.057L3.027 15.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L10.12 4.073a.146.146 0 00-.054-.057.13.13 0 00-.063-.016.13.13 0 00-.064.016zm1.043-.45a1.13 1.13 0 00-1.96 0L2.166 15.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L10.982 3.566z"}),React.createElement("rect",{fill:d,width:"2",height:"2",x:"9.002",y:"13",rx:"1"}),React.createElement("path",{fill:d,d:"M9.1 7.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 7.995z"})),gearSettings:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,viewBox:"0 0 430.848 430.848"},React.createElement("path",{d:"M286.244,249.537l10.992-45.639c0.035-0.143,0.071-0.285,0.109-0.428c2.909-10.867,11.469-19.426,22.339-22.338   l33.347-8.936c-5.472-6.525-13.678-10.682-22.839-10.682h-9.837c-2.511-7.895-5.7-15.59-9.515-22.957l6.96-6.959   c11.622-11.623,11.622-30.535,0-42.156L296.76,68.4c-5.631-5.629-13.117-8.73-21.079-8.73c-7.961,0-15.447,3.102-21.078,8.732   l-6.96,6.959c-7.369-3.814-15.064-7.004-22.956-9.516V56.01c0-16.436-13.372-29.807-29.808-29.807h-29.758   c-16.436,0-29.808,13.371-29.808,29.807v9.836c-7.893,2.512-15.588,5.701-22.957,9.516l-6.96-6.961   c-5.631-5.629-13.117-8.73-21.078-8.73c-7.961,0-15.447,3.102-21.079,8.732L42.2,89.443c-11.622,11.621-11.622,30.533,0,42.156   l6.959,6.959c-3.815,7.367-7.004,15.063-9.515,22.957h-9.837C13.372,161.516,0,174.887,0,191.324v29.758   c0,16.436,13.372,29.807,29.808,29.807h9.837c2.511,7.895,5.7,15.588,9.515,22.957l-6.96,6.959   c-11.623,11.623-11.623,30.533,0,42.158l21.041,21.039c5.632,5.631,13.118,8.732,21.079,8.732s15.447-3.102,21.077-8.732   l6.96-6.959c7.366,3.815,15.061,7.002,22.957,9.514v9.838c0,16.436,13.372,29.809,29.808,29.809h25.809   c-2.388-5.691-3.644-11.852-3.645-18.209c-0.002-12.572,4.892-24.391,13.781-33.279L286.244,249.537z M180,286.201   c-44.112,0-80-35.887-80-79.998c0-44.113,35.888-80.002,80-80.002s80,35.889,80,80.002C260,250.314,224.112,286.201,180,286.201z"}),React.createElement("path",{d:"M425.267,218.734l-0.319-0.32c-0.939-0.941-2.189-1.428-3.541-1.469c-1.326,0-2.598,0.525-3.536,1.465l-21.596,21.596   c-3.304,3.305-7.699,5.125-12.375,5.125c-4.676,0-9.072-1.82-12.379-5.129c-3.307-3.305-5.128-7.701-5.128-12.377   c0.001-4.676,1.821-9.072,5.126-12.377l21.596-21.596c0.939-0.939,1.465-2.213,1.464-3.539c-0.001-1.328-0.53-2.6-1.47-3.537   l-0.314-0.313c-3.605-3.605-8.399-5.592-13.499-5.592c-1.665,0-3.325,0.219-4.936,0.65l-44.348,11.885   c-6.568,1.76-11.741,6.932-13.498,13.496c-0.011,0.041-0.021,0.08-0.031,0.121l-11.817,49.063l-87.667,87.666   c-6.528,6.527-10.122,15.207-10.121,24.44c0.002,9.232,3.598,17.91,10.126,24.439l2.088,2.088   c6.528,6.529,15.209,10.125,24.443,10.125h0c9.231,0,17.909-3.594,24.437-10.121l87.667-87.666l49.061-11.816   c0.041-0.01,0.082-0.022,0.122-0.031c6.563-1.758,11.735-6.928,13.497-13.496l11.883-44.352   C431.959,230.598,430.066,223.535,425.267,218.734z M257.26,368.406c-1.888,1.889-4.399,2.93-7.071,2.93   c-2.671,0-5.183-1.041-7.072-2.932c-1.887-1.885-2.928-4.397-2.928-7.068c-0.001-2.672,1.041-5.185,2.931-7.072   c1.886-1.887,4.398-2.928,7.069-2.928c2.672,0,5.184,1.041,7.072,2.93c1.887,1.885,2.928,4.396,2.928,7.068   C260.189,364.006,259.148,366.518,257.26,368.406z M316.194,305.935L274.82,347.31c-1.416,1.416-3.3,2.197-5.303,2.197   c-2.003,0-3.887-0.781-5.303-2.197c-1.417-1.416-2.197-3.299-2.197-5.303s0.78-3.887,2.197-5.303l41.374-41.375   c1.417-1.418,3.3-2.197,5.303-2.197s3.887,0.779,5.303,2.197c1.417,1.416,2.197,3.299,2.197,5.303S317.611,304.519,316.194,305.935   z"})),verticalLine:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 14.707 14.707"},React.createElement("rect",{x:"6.275",y:"0",width:"2.158",height:"14.707"})),horizontalLine:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 357 357"},React.createElement("path",{d:"M357,204H0v-51h357V204z"}))},u=function(t){var e=t.attributes,n=t.handleCopy,c=e.btnIcon,a=e.elements,o=c.color,l=c.size;return React.createElement("button",{className:"subBtn",onClick:function(t){t.preventDefault(),n()}},(null==a?void 0:a.icon)&&React.createElement(React.Fragment,null,React.createElement("div",{className:"icon"},s.iconCopy(o,l))),(null==a?void 0:a.text)&&React.createElement(React.Fragment,null,React.createElement("div",{className:"btnText"},"Copy")))},m=function(t){var e=t.attributes,n=t.setAttributes,c=t.isBackend,a=t.labelEl,o=t.divRef,l=t.handleCopy,i=t.copied,d=e.elements.label;return React.createElement(React.Fragment,null,React.createElement("div",{className:"inputForm"},d&&a,React.createElement("div",{className:"copyText ".concat(i&&"active")},React.createElement(r,{divRef:o,attributes:e,setAttributes:n,isBackend:c}),React.createElement(u,{attributes:e,handleCopy:l}))))},v=function(t){var e=t.forms,n=t.attributes,c=t.labelEl,a=t.divRef,o=t.handleCopy,l=t.copied,i=n.elements.label;return React.createElement(React.Fragment,null,React.createElement("div",{className:"inputForm"},i&&c,React.createElement("div",{className:"copyText ".concat(l&&"active")},React.createElement(u,{attributes:n,handleCopy:o}),React.createElement(r,{attributes:n,divRef:a,forms:e,copied:l}))))},p=function(t){var e=t.forms,n=t.attributes,c=t.labelEl,a=t.divRef,o=t.handleCopy,l=t.copied,i=n.elements.label;return React.createElement("div",{className:"inputForm"},i&&c,React.createElement("div",{className:"copyText ".concat(l&&"active")},React.createElement(r,{attributes:n,divRef:a,forms:e,copied:l}),React.createElement(u,{attributes:n,handleCopy:o})),l&&React.createElement("div",{className:"message"},"Copied!"))},f=function(t){var e=t.forms,n=t.attributes,c=t.labelEl,a=t.divRef,o=t.handleCopy,l=t.copied,i=n.elements.label;return React.createElement("div",{className:"inputForm inputForm3"},i&&c,React.createElement("div",{className:"copyTextForm3 ".concat(l&&"active")},React.createElement(r,{attributes:n,divRef:a,forms:e,copied:l})),React.createElement(u,{attributes:n,handleCopy:o}),l&&React.createElement("div",{className:"message"},"Copied!"))},b=function(t){var e=t.forms,n=t.attributes,c=t.divRef,a=t.handleCopy,o=t.copied;return n.elements.text&&React.createElement("div",{className:"form4"},React.createElement("div",{className:"formMainArea"},React.createElement("div",{className:"content",onClick:function(t){t.preventDefault(),a()}},React.createElement(r,{attributes:n,divRef:c,forms:e,copied:o})),React.createElement("div",{className:"hoverContent"},o?"Copied":"Click to copy")))};function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var c,a,o,l,i=[],r=!0,d=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;r=!1}else for(;!(r=(c=o.call(n)).done)&&(i.push(c.value),i.length!==e);r=!0);}catch(t){d=!0,a=t}finally{try{if(!r&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(d)throw a}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return R(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,c=Array(e);n<e;n++)c[n]=t[n];return c}var g=function(t){var e=t.attributes,n=t.isBackend,c=t.labelEl,a=e.forms,o=(0,i.useRef)(null),l=h((0,i.useState)(!1),2),r=l[0],d=l[1];function s(){var t=o.current.innerText;navigator.clipboard.writeText(t),d(!0),setTimeout((function(){d(!1)}),2e3)}return React.createElement("div",{className:"ctcClickToCopy form ".concat(a)},"default"===a&&React.createElement(m,{attributes:e,isBackend:n,labelEl:c,divRef:o,handleCopy:s,copied:r}),"form1"===a&&React.createElement(v,{forms:a,attributes:e,labelEl:c,divRef:o,handleCopy:s,copied:r}),"form2"===a&&React.createElement(p,{forms:a,attributes:e,labelEl:c,divRef:o,handleCopy:s,copied:r}),"form3"===a&&React.createElement(f,{forms:a,attributes:e,labelEl:c,divRef:o,handleCopy:s,copied:r}),"form4"===a&&React.createElement(b,{forms:a,attributes:e,divRef:o,handleCopy:s,copied:r}))};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-ctcb-click-to-copy").forEach((function(e){var n=JSON.parse(e.dataset.attributes),c=n.input,a=React.createElement("div",{className:"label",dangerouslySetInnerHTML:{__html:null==c?void 0:c.label}});(0,t.H)(e).render(React.createElement(React.Fragment,null,React.createElement(l,{attributes:n,clientId:n.cId}),React.createElement(g,{attributes:n,labelEl:a}))),null==e||e.removeAttribute("data-attributes")}))}))}()}();
//# sourceMappingURL=script.js.map