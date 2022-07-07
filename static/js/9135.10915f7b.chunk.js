"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9135],{49135:function(e,t,o){o.r(t),o.d(t,{default:function(){return V}});var r=o(30969),n=o(90550),i=o(24998),a=o(81073),s=o(22714),l=o(32343),c=o(6900),d=o(58792),m=o(90722),u=o(60008),h=o(67382),g=o(38879),x=o(4683),f=o(22417),p=o(68079),v=o(74426),b=o(38827),j=o(37574),k=(0,s.Z)({rulerLabel:{fontSize:"0.8rem",fontWeight:500,lineHeight:1.6,letterSpacing:"0.0075em"}});function Z(e,t,o,r){if(e.flipped){var n=[r,o];o=n[0],r=n[1]}var i=e.bpToXY(o,t),a=e.bpToXY(r,t),s=Math.abs(r-o)/e.bpPerRadian>Math.PI?"1":"0";return["M"].concat((0,p.Z)(i),["A",t,t,"0",s,"1"],(0,p.Z)(a)).join(" ")}var y=(0,n.observer)((function(e){var t=e.model,o=e.slice,r=(0,b.Z)(),n=t.radiusPx+1,i=o.endRadians,s=o.startRadians,l=o.region,c=(0,a.polarToCartesian)(n,s),d=(0,a.polarToCartesian)(n,i),m=(i-s)*n,u=i-s>Math.PI?"1":"0",h=(i+s)/2,g="[".concat(Number(l.regions.length).toLocaleString(),"]");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{text:g,view:t,maxWidthPx:m,radians:h,radiusPx:n,title:"".concat(Number(l.regions.length).toLocaleString()," more regions"),color:r.palette.text.primary}),(0,j.jsx)("path",{d:["M"].concat((0,p.Z)(c),["A",n,n,"0",u,"1"],(0,p.Z)(d)).join(" "),stroke:r.palette.text.secondary,strokeWidth:2,strokeDasharray:"2,2",fill:"none"})]})})),w=(0,n.observer)((function(e){var t=e.view,o=e.text,r=e.maxWidthPx,n=e.radians,i=e.radiusPx,s=e.title,l=e.color,c=k(),d=(0,a.polarToCartesian)(i+5,n);return o?6.5*o.length<r?(0,j.jsxs)("text",{x:0,y:0,className:c.rulerLabel,textAnchor:"middle",dominantBaseline:"baseline",transform:"translate(".concat(d,") rotate(").concat((0,a.radToDeg)(n)+90,")"),style:{fill:l},children:[o,(0,j.jsx)("title",{children:s||o})]}):r>4?(0,a.radToDeg)(n+t.offsetRadians-Math.PI/2)>=180?(0,j.jsxs)("text",{x:0,y:0,className:c.rulerLabel,textAnchor:"start",dominantBaseline:"middle",transform:"translate(".concat(d,") rotate(").concat((0,a.radToDeg)(n),")"),style:{fill:l},children:[o,(0,j.jsx)("title",{children:s||o})]}):(0,j.jsxs)("text",{x:0,y:0,className:c.rulerLabel,textAnchor:"end",dominantBaseline:"middle",transform:"translate(".concat(d,") rotate(").concat((0,a.radToDeg)(n)+180,")"),style:{fill:l},children:[o,(0,j.jsx)("title",{children:s||o})]}):null:null})),z=(0,n.observer)((function(e){var t,o=e.model,r=e.slice,n=(0,b.Z)(),i=o.radiusPx,s=r.region,l=r.endRadians,c=r.startRadians,d=(l+c)/2,m=(l-c)*i,u=(0,a.getSession)(o).assemblyManager.get(r.region.assemblyName);if(u&&(t=u.getRefNameColor(s.refName)),t)try{t=(0,v.makeContrasting)(t,n.palette.background.paper)}catch(h){t=n.palette.text.primary}else t=n.palette.text.primary;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{text:s.refName,view:o,maxWidthPx:m,radians:d,radiusPx:i,color:t}),(0,j.jsx)("path",{d:Z(r,i+1,s.start,s.end),stroke:t,strokeWidth:2,fill:"none",children:(0,j.jsx)("title",{children:s.refName})})]})})),C=(0,n.observer)((function(e){var t=e.model,o=e.slice;return o.region.elided?(0,j.jsx)(y,{model:t,slice:o},(0,a.assembleLocString)(o.region.regions[0])):(0,j.jsx)(z,{model:t,slice:o},(0,a.assembleLocString)(o.region))})),N=o(96234),S=o(92628),B=o(29623),M=o(28599),L=o(16383),R=o(84291),T=(0,s.Z)((function(e){return{importFormContainer:{marginBottom:e.spacing(4)}}})),F=(0,n.observer)((function(e){var t=e.model,o=T(),n=(0,a.getSession)(t),i=t.error,s=n.assemblyNames,l=n.assemblyManager,c=(0,r.useState)(s[0]),d=(0,N.Z)(c,2),m=d[0],u=d[1],h=(0,r.useState)(i),g=(0,N.Z)(h,2),x=g[0],f=g[1],p=l.get(m),v=s.length?null===p||void 0===p?void 0:p.error:"No configured assemblies",b=(null===p||void 0===p?void 0:p.regions)||[],k=v||x;return(0,j.jsxs)(S.Z,{className:o.importFormContainer,children:[k?(0,j.jsx)(B.Z,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:(0,j.jsx)(B.Z,{item:!0,children:(0,j.jsx)(L.default,{error:k})})}):null,(0,j.jsxs)(B.Z,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,j.jsx)(B.Z,{item:!0,children:(0,j.jsx)(R.Z,{onChange:function(e){f(void 0),u(e)},session:n,selected:m})}),(0,j.jsx)(B.Z,{item:!0,children:(0,j.jsx)(M.Z,{disabled:!(null!==b&&void 0!==b&&b.length),onClick:function(){return t.setDisplayedRegions(b)},variant:"contained",color:"primary",children:b.length?"Open":"Loading\u2026"})})]})]})})),P=(0,s.Z)((function(e){return{root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden",background:"white"},scroller:{overflow:"auto"},sliceRoot:{background:"none",boxSizing:"content-box",display:"block"},iconButton:{padding:"4px",margin:"0 2px 0 2px"},controls:{overflow:"hidden",whiteSpace:"nowrap",position:"absolute",background:c.Z[200],boxSizing:"border-box",borderRight:"1px solid #a2a2a2",borderBottom:"1px solid #a2a2a2",left:0,top:0},importFormContainer:{marginBottom:e.spacing(4)}}})),W=(0,n.observer)((function(e){var t=e.model;return(0,j.jsxs)(j.Fragment,{children:[t.staticSlices.map((function(e){return(0,j.jsx)(C,{model:t,slice:e},(0,a.assembleLocString)(e.region.elided?e.region.regions[0]:e.region))})),t.tracks.map((function(e){var o=e.displays[0];return(0,j.jsx)(o.RenderingComponent,{display:o,view:t},o.id)}))]})})),H=(0,n.observer)((function(e){var t=e.model,o=e.showingFigure,r=P();return(0,j.jsxs)("div",{className:r.controls,children:[(0,j.jsx)(l.Z,{onClick:t.zoomOutButton,className:r.iconButton,title:t.lockedFitToWindow?"unlock to zoom out":"zoom out",disabled:!o||t.atMaxBpPerPx||t.lockedFitToWindow,color:"secondary",children:(0,j.jsx)(d.Z,{})}),(0,j.jsx)(l.Z,{onClick:t.zoomInButton,className:r.iconButton,title:"zoom in",disabled:!o||t.atMinBpPerPx,color:"secondary",children:(0,j.jsx)(m.Z,{})}),(0,j.jsx)(l.Z,{onClick:t.rotateCounterClockwiseButton,className:r.iconButton,title:"rotate counter-clockwise",disabled:!o,color:"secondary",children:(0,j.jsx)(u.Z,{})}),(0,j.jsx)(l.Z,{onClick:t.rotateClockwiseButton,className:r.iconButton,title:"rotate clockwise",disabled:!o,color:"secondary",children:(0,j.jsx)(h.Z,{})}),(0,j.jsx)(l.Z,{onClick:t.toggleFitToWindowLock,className:r.iconButton,title:t.lockedFitToWindow?"locked model to window size":"unlocked model to zoom further",disabled:t.tooSmallToLock,color:"secondary",children:t.lockedFitToWindow?(0,j.jsx)(g.Z,{}):(0,j.jsx)(x.Z,{})}),t.hideTrackSelectorButton?null:(0,j.jsx)(l.Z,{onClick:t.activateTrackSelector,title:"Open track selector","data-testid":"circular_track_select",color:"secondary",children:(0,j.jsx)(f.GD,{})})]})})),V=(0,n.observer)((function(e){var t=e.model,o=P(),r=!!t.displayedRegions.length&&t.figureWidth&&t.figureHeight,n=!r&&!t.disableImportForm,a=r&&!n;return(0,j.jsx)("div",{className:o.root,style:{width:t.width,height:t.height},"data-testid":t.id,children:t.error?(0,j.jsx)(i.ErrorMessage,{error:t.error}):(0,j.jsxs)(j.Fragment,{children:[n?(0,j.jsx)(F,{model:t}):null,(0,j.jsxs)(j.Fragment,{children:[a?(0,j.jsx)("div",{className:o.scroller,style:{width:t.width,height:t.height},children:(0,j.jsx)("div",{className:o.rotator,style:{transform:["rotate(".concat(t.offsetRadians,"rad)")].join(" "),transition:"transform 0.5s",transformOrigin:t.centerXY.map((function(e){return"".concat(e,"px")})).join(" ")},children:(0,j.jsx)("svg",{style:{position:"absolute",left:0,top:0},className:o.sliceRoot,width:"".concat(t.figureWidth,"px"),height:"".concat(t.figureHeight,"px"),version:"1.1",children:(0,j.jsx)("g",{transform:"translate(".concat(t.centerXY,")"),children:(0,j.jsx)(W,{model:t})})})})}):null,(0,j.jsx)(H,{model:t,showingFigure:a}),t.hideVerticalResizeHandle?null:(0,j.jsx)(i.ResizeHandle,{onDrag:t.resizeHeight,style:{height:3,position:"absolute",bottom:0,left:0,background:"#ccc",boxSizing:"border-box",borderTop:"1px solid #fafafa"}})]})]})})}))},4683:function(e,t,o){var r=o(14859),n=o(93291);t.Z=void 0;var i=n(o(30969)),a=(0,r(o(87131)).default)(i.createElement("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");t.Z=a},38879:function(e,t,o){var r=o(14859),n=o(93291);t.Z=void 0;var i=n(o(30969)),a=(0,r(o(87131)).default)(i.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=a},60008:function(e,t,o){var r=o(14859),n=o(93291);t.Z=void 0;var i=n(o(30969)),a=(0,r(o(87131)).default)(i.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.Z=a},67382:function(e,t,o){var r=o(14859),n=o(93291);t.Z=void 0;var i=n(o(30969)),a=(0,r(o(87131)).default)(i.createElement("path",{d:"M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}),"RotateRight");t.Z=a}}]);
//# sourceMappingURL=9135.10915f7b.chunk.js.map