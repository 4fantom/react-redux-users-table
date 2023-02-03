"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[474],{8515:function(e,r,t){var n=t(6362),a=t(4925),i=t(599),l=t(9891),o=t(184);r.Z=function(e){var r=e.handleChange,t=e.value,u=e.label,s=e.menuItems,d=e.name;return(0,o.jsxs)(n.Z,{sx:{m:2,minWidth:320,width:500},children:[(0,o.jsxs)(a.Z,{id:"".concat(d,"-label"),children:[" ",u," "]}),(0,o.jsx)(i.Z,{labelId:"selectLabel",id:d,value:t,label:u,onChange:r,children:s.map((function(e){return(0,o.jsx)(l.Z,{value:e.value,children:e.label},e.value)}))},d)]})}},7950:function(e,r,t){t.d(r,{m:function(){return u}});var n=t(4165),a=t(5861),i=t(9439),l=t(3263),o=t(2791),u=l.Z.create({baseURL:"https://gorest.co.in/public/v2/users",headers:{Accept:"application/json",Authorization:"Bearer 907ab48240dc59db6ca0cb99783470eb5ddd6e77823b0727c798969003e6900c"}});r.Z=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,o.useState)(!1),l=(0,i.Z)(t,2),s=l[0],d=l[1],c=(0,o.useState)(null),v=(0,i.Z)(c,2),m=v[0],p=v[1],f=(0,o.useState)(null),h=(0,i.Z)(f,2),Z=h[0],x=h[1];return(0,o.useEffect)((function(){d(!0);var t=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var a,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get(e,r);case 3:a=t.sent,i=a.data,p(i),d(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),x(t.t0),d(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),{isLoading:s,apiData:m,apiError:Z}}},8874:function(e,r,t){t.d(r,{O:function(){return n},W:function(){return a}});var n=[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"",label:"None"}],a=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}]},3474:function(e,r,t){t.r(r),t.d(r,{default:function(){return J}});var n=t(4165),a=t(5861),i=t(4942),l=t(1413),o=t(9439),u=t(2791),s=t(7689),d=t(4554),c=t(5527),v=t(890),m=t(7462),p=t(3366),f=t(8182),h=t(4419),Z=t(6248),x=t(7630),b=t(1046),g=t(7078),j=t(4527),w=t(8029),F=t(4925),y=t(6362),R=t(6147),C=t(2930),T=t(4036),S=t(5878),P=t(1217);function z(e){return(0,P.Z)("MuiFormHelperText",e)}var I,k=(0,S.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),q=t(184),M=["children","className","component","disabled","error","filled","focused","margin","required","variant"],N=(0,x.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.size&&r["size".concat((0,T.Z)(t.size))],t.contained&&r.contained,t.filled&&r.filled]}})((function(e){var r,t=e.theme,n=e.ownerState;return(0,m.Z)({color:(t.vars||t).palette.text.secondary},t.typography.caption,(r={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,i.Z)(r,"&.".concat(k.disabled),{color:(t.vars||t).palette.text.disabled}),(0,i.Z)(r,"&.".concat(k.error),{color:(t.vars||t).palette.error.main}),r),"small"===n.size&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})})),W=u.forwardRef((function(e,r){var t=(0,b.Z)({props:e,name:"MuiFormHelperText"}),n=t.children,a=t.className,i=t.component,l=void 0===i?"p":i,o=(0,p.Z)(t,M),u=(0,C.Z)(),s=(0,R.Z)({props:t,muiFormControl:u,states:["variant","size","disabled","error","filled","focused","required"]}),d=(0,m.Z)({},t,{component:l,contained:"filled"===s.variant||"outlined"===s.variant,variant:s.variant,size:s.size,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),c=function(e){var r=e.classes,t=e.contained,n=e.size,a=e.disabled,i=e.error,l=e.filled,o=e.focused,u=e.required,s={root:["root",a&&"disabled",i&&"error",n&&"size".concat((0,T.Z)(n)),t&&"contained",o&&"focused",l&&"filled",u&&"required"]};return(0,h.Z)(s,z,r)}(d);return(0,q.jsx)(N,(0,m.Z)({as:l,ownerState:d,className:(0,f.Z)(c.root,a),ref:r},o,{children:" "===n?I||(I=(0,q.jsx)("span",{className:"notranslate",children:"\u200b"})):n}))})),H=t(599);function L(e){return(0,P.Z)("MuiTextField",e)}(0,S.Z)("MuiTextField",["root"]);var A=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],B={standard:g.Z,filled:j.Z,outlined:w.Z},E=(0,x.ZP)(y.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),V=u.forwardRef((function(e,r){var t=(0,b.Z)({props:e,name:"MuiTextField"}),n=t.autoComplete,a=t.autoFocus,i=void 0!==a&&a,l=t.children,o=t.className,u=t.color,s=void 0===u?"primary":u,d=t.defaultValue,c=t.disabled,v=void 0!==c&&c,x=t.error,g=void 0!==x&&x,j=t.FormHelperTextProps,w=t.fullWidth,y=void 0!==w&&w,R=t.helperText,C=t.id,T=t.InputLabelProps,S=t.inputProps,P=t.InputProps,z=t.inputRef,I=t.label,k=t.maxRows,M=t.minRows,N=t.multiline,V=void 0!==N&&N,D=t.name,O=t.onBlur,U=t.onChange,_=t.onFocus,G=t.placeholder,Y=t.required,J=void 0!==Y&&Y,K=t.rows,Q=t.select,X=void 0!==Q&&Q,$=t.SelectProps,ee=t.type,re=t.value,te=t.variant,ne=void 0===te?"outlined":te,ae=(0,p.Z)(t,A),ie=(0,m.Z)({},t,{autoFocus:i,color:s,disabled:v,error:g,fullWidth:y,multiline:V,required:J,select:X,variant:ne}),le=function(e){var r=e.classes;return(0,h.Z)({root:["root"]},L,r)}(ie);var oe={};"outlined"===ne&&(T&&"undefined"!==typeof T.shrink&&(oe.notched=T.shrink),oe.label=I),X&&($&&$.native||(oe.id=void 0),oe["aria-describedby"]=void 0);var ue=(0,Z.Z)(C),se=R&&ue?"".concat(ue,"-helper-text"):void 0,de=I&&ue?"".concat(ue,"-label"):void 0,ce=B[ne],ve=(0,q.jsx)(ce,(0,m.Z)({"aria-describedby":se,autoComplete:n,autoFocus:i,defaultValue:d,fullWidth:y,multiline:V,name:D,rows:K,maxRows:k,minRows:M,type:ee,value:re,id:ue,inputRef:z,onBlur:O,onChange:U,onFocus:_,placeholder:G,inputProps:S},oe,P));return(0,q.jsxs)(E,(0,m.Z)({className:(0,f.Z)(le.root,o),disabled:v,error:g,fullWidth:y,ref:r,required:J,color:s,variant:ne,ownerState:ie},ae,{children:[null!=I&&""!==I&&(0,q.jsx)(F.Z,(0,m.Z)({htmlFor:ue,id:de},T,{children:I})),X?(0,q.jsx)(H.Z,(0,m.Z)({"aria-describedby":se,id:ue,labelId:de,value:re,input:ve},$,{children:l})):ve,R&&(0,q.jsx)(W,(0,m.Z)({id:se},j,{children:R}))]}))})),D=t(6151),O=t(5206),U=(t(5462),t(2613)),_=t(8515),G=t(8874),Y=t(7950),J=function(){var e=(0,s.TH)().state,r=(0,s.s0)();e||r(U.Z.root);var t=(0,u.useState)({email:null===e||void 0===e?void 0:e.email,gender:null===e||void 0===e?void 0:e.gender,name:null===e||void 0===e?void 0:e.name,status:null===e||void 0===e?void 0:e.status}),m=(0,o.Z)(t,2),p=m[0],f=m[1],h=(0,u.useState)(!1),Z=(0,o.Z)(h,2),x=Z[0],b=Z[1],g=function(e){return O.Am.error(e)},j=function(e,r){f((0,l.Z)((0,l.Z)({},p),{},(0,i.Z)({},r,e.target.value)))},w=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var a,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,Y.m.put("/".concat(e.id),(0,l.Z)({},p));case 4:O.Am.success("You edited user successfully"),setTimeout((function(){return r(U.Z.users)}),3e3),t.next=14;break;case 8:t.prev=8,t.t0=t.catch(1),i="".concat(null===t.t0||void 0===t.t0?void 0:t.t0.message,"; "),null!==(a=t.t0.response.data)&&void 0!==a&&a.length&&t.t0.response.data.forEach((function(e){i+="".concat(e.field," ").concat(e.message,"; ")})),g(i),b(!1);case 14:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return(0,q.jsx)(d.Z,{display:"flex",justifyContent:"center",alignItems:"center",m:2,children:(0,q.jsxs)(c.Z,{children:[(0,q.jsx)(v.Z,{variant:"h5",children:"Edit User"}),(0,q.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column","& .MuiTextField-root":{m:2,width:500}},children:[(0,q.jsx)(V,{id:"name",label:"Name",value:p.name,variant:"outlined",onChange:function(e){return j(e,"name")}},"name"),(0,q.jsx)(V,{id:"email",label:"Email",value:p.email,variant:"outlined",onChange:function(e){return j(e,"email")}},"email"),(0,q.jsx)(_.Z,{name:"gender",label:"Gender",handleChange:function(e){return j(e,"gender")},defaultValue:p.gender,value:p.gender,menuItems:G.O}),(0,q.jsx)(_.Z,{name:"status",label:"Status",defaultValue:p.status,value:p.status,handleChange:function(e){return j(e,"status")},menuItems:G.W}),(0,q.jsx)(d.Z,{m:2,children:(0,q.jsx)(D.Z,{variant:"outlined",sx:{width:200},onClick:w,disabled:x,children:"Save"})})]}),(0,q.jsx)(O.Ix,{})]})})}}}]);
//# sourceMappingURL=474.e0cbc29a.chunk.js.map