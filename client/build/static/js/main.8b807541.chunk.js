(window.webpackJsonpktype=window.webpackJsonpktype||[]).push([[0],{25:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},31:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),l=a.n(r),o=(a(30),a(7)),s=(a(31),a(1)),c={colors:{white:"#ffffff",black:"#000000",light:"#f3f3f3",grey:"#b9b9b9",brown:"#61512D"},fonts:{serif:"'PT Serif', serif",sans:"'Josefin Sans', sans-serif"},sizes:{contentWidth:960,cardHeight:256,cardWidth:448,spacingV1:60,spacingV2:25,spacingV3:40,indent:20,triangleHeight:20},breakpoints:{work:1140,mobile:800}};function m(){return window.innerWidth}function p(){var e=Object(n.useState)(m()),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(a),l=Object(s.a)(r,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){function e(){var e=m();e!==o&&(i(e),c(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),a}function u(){var e=Object(n.useState)(c.colors.grey),t=Object(s.a)(e,2),a=t[0],r=t[1],l=p();return i.a.createElement("footer",{style:{backgroundColor:c.colors.white,textAlign:"center",width:"100%"}},i.a.createElement("a",{href:"mailto: hi@ktype.xyz"},i.a.createElement("div",{style:{margin:"0 auto",backgroundColor:c.colors.light},className:"trans-shrink"},i.a.createElement("p",{style:{fontSize:l>c.breakpoints.mobile?"2.8em":"2.4em",fontWeight:"bold",marginBottom:20}},"hi@ktype.xyz"),i.a.createElement("p",{style:{fontFamily:c.fonts.sans,letterSpacing:6,fontWeight:300,color:c.colors.black,fontSize:l>c.breakpoints.mobile?18:15}},"LET'S START A PROJECT"))),i.a.createElement("p",{style:{backgroundColor:c.colors.white,padding:25,marginBottom:0,fontSize:l>c.breakpoints.mobile?15:13}},"All visual material \xa9 Kade Tyler"," ",i.a.createElement("span",null,i.a.createElement("span",{style:{marginLeft:10,display:"inline",color:c.colors.grey}},"|"),i.a.createElement("a",{onMouseEnter:function(){r(c.colors.brown)},onMouseLeave:function(){r(c.colors.grey)},href:"https://www.linkedin.com/in/darzaccaro/",target:"_blank",rel:"noopener noreferrer",style:{marginLeft:12,color:a}},"Site Credit"))))}var g=a(3),d=function(e){var t=e.text,a=e.to,n=e.isMobile,r=e.isActive,l=e.onClick;return console.log(t,r),i.a.createElement(g.b,{className:"nav-link ".concat(r&&"nav-active"," ").concat(n&&"nav-link-mobile"),to:a,onClick:l},t)},h=a(22),E=a.n(h);var b=Object(o.e)((function(e){var t=e.location,a=p(),r=Object(n.useState)(!1),l=Object(s.a)(r,2),o=l[0],m=l[1];return a<c.breakpoints.mobile?i.a.createElement("header",{style:{width:"100%",paddingTop:15,overflow:"hidden",backgroundColor:c.colors.white}},i.a.createElement(E.a,{isActive:o}),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.a.createElement(g.b,{to:"/",onClick:function(){return m(!1)},style:{width:35,float:"left",position:"relative",top:10,paddingLeft:c.sizes.spacingV2}},i.a.createElement("img",{src:"/logo.svg",alt:"logo"})),i.a.createElement((function(){return i.a.createElement("div",null,i.a.createElement("button",{className:"mobile-menu-button",onClick:function(){return m(!o)}},o?i.a.createElement("img",{src:"/icons/x.svg",alt:"x",width:"25px",style:{position:"relative",bottom:5,right:10}}):"MENU"))}),null)),i.a.createElement("div",{style:{zIndex:2,position:"absolute",display:o?"inherit":"none",width:"100%",height:"calc(100vh - 79px)",backgroundColor:c.colors.white,paddingTop:75}},i.a.createElement("nav",{style:{width:"100%"}},i.a.createElement(d,{isMobile:!0,text:"WORK",to:"/work",isActive:"work"===t.pathname.split("/")[1]||"/"===t.pathname,onClick:function(){return m(!1)}}),i.a.createElement(d,{isMobile:!0,text:"ABOUT",to:"/about",isActive:"about"===t.pathname.split("/")[1],onClick:function(){return m(!1)}}),i.a.createElement(d,{isMobile:!0,text:"CONTACT",to:"/contact",isActive:"contact"===t.pathname.split("/")[1],onClick:function(){return m(!1)}})))):i.a.createElement("header",{style:{maxWidth:c.sizes.contentWidth,margin:"0 auto",paddingTop:25,overflow:"hidden"}},i.a.createElement(g.b,{to:"/",style:{width:35,float:"left",position:"relative",top:10}},i.a.createElement("img",{src:"/logo.svg",alt:"logo"})),i.a.createElement("nav",{style:{paddingTop:15,paddingBottom:10,float:"right"}},i.a.createElement(d,{text:"WORK",to:"/work",isActive:"work"===t.pathname.split("/")[1]||"/"===t.pathname}),i.a.createElement(d,{text:"ABOUT",to:"/about",isActive:"about"===t.pathname.split("/")[1]}),i.a.createElement(d,{text:"CONTACT",to:"/contact",isActive:"contact"===t.pathname.split("/")[1]})))}));function f(){var e=p();return i.a.createElement("div",{className:"anim-fade-in"},i.a.createElement("div",{style:{maxWidth:c.sizes.contentWidth,margin:"0 auto"}},i.a.createElement("p",{style:{textAlign:"center",marginBottom:c.sizes.spacingV1,fontWeight:"normal",fontSize:"27px",lineHeight:"40px"}},"Hi, I'm Kade",i.a.createElement("br",null),i.a.createElement("strong",{style:{letterSpacing:8}},"...")),i.a.createElement("img",{src:"/about/01_sketching.jpg",alt:"sketching",maxHeight:"400px",width:"100%"}),i.a.createElement(y,{isMobile:e<c.breakpoints.mobile})),i.a.createElement("div",{style:{backgroundColor:c.colors.brown,marginTop:e<c.breakpoints.mobile?c.sizes.spacingV1:c.sizes.spacingV1+30}},i.a.createElement("h2",{style:{color:c.colors.white,textAlign:"center",padding:50,paddingTop:55,marginBottom:0,fontSize:e<c.breakpoints.mobile?18:21,letterSpacing:10}},"MY APPROACH",e>c.breakpoints.mobile&&" & CORE VALUES")),i.a.createElement("div",{style:{backgroundColor:c.colors.black}},i.a.createElement("div",{style:{margin:"0 auto",width:43,position:"relative",bottom:6,height:c.sizes.triangleHeight}},i.a.createElement("img",{src:"/icons/triangle.png",alt:"triangle icon",style:{margin:0,height:c.sizes.triangleHeight}})),i.a.createElement(v,{isMobile:e<c.breakpoints.mobile,title:"Approach",src:"/about/03_approach.jpg",data:[{title:"PHASE 1: DISCOVERY",description:"Understand your goals and what drives you. Establish a personalized project road map."},{title:"PHASE 2: STRATEGY",description:"Conscientiously analyze your industry landscape. Uncover an opportunistic pathway."},{title:"PHASE 3: DESIGN",description:"Explore, trial, and reflect on various solutions. Meticulously refine meaningful ideas into form."},{title:"PHASE 4: DEADLINE",description:"Finalize and prepare all project deliverables. Launch forward-looking solutions to the world."}]}),i.a.createElement(v,{isMobile:e<c.breakpoints.mobile,title:"Core Values",src:"/about/04_approach2.jpg",data:[{title:"DEFINE FRAMEWORK.",description:"No structure can last without a foundational blueprint. Endlessly reference personal values among the underlying core."},{title:"ALLOW FAILURE.",description:"Visual problems have unlimited solutions. The valid solutions are identified through the result of many failed explorations."},{title:"CRITICAL EYES.",description:"Critically accept and provide mindful feedback. Observe problems objectively with openness and a dynamic perspective."}]}),i.a.createElement(k,{isMobile:e<c.breakpoints.mobile}),i.a.createElement("div",{style:{padding:14}})))}function y(e){var t=e.isMobile;e.title,e.src,e.data;return t?i.a.createElement("div",null,i.a.createElement("div",{style:{marginTop:c.sizes.spacingV3,width:"90%",margin:"0 auto",maxWidth:"400px"}},i.a.createElement("div",null,i.a.createElement("h2",{style:{color:c.colors.grey,marginTop:c.sizes.spacingV3,fontWeight:"normal",fontSize:15}},"DESIGN & LETTERING"),i.a.createElement("p",null,"I\u2019m a designer focused on expanding meaning into enduring visuals. My passion-driven process generates thoughtful design solutions through the repetition of extensive trials and explorations.")),i.a.createElement("div",null,i.a.createElement("h3",{style:{marginTop:c.sizes.spacingV3}},"Services"),i.a.createElement("ul",{style:{marginBottom:c.sizes.spacingV3}},i.a.createElement("li",null,"Branding & Strategy"),i.a.createElement("li",null,"Visual Identity"),i.a.createElement("li",null,"Design Systems"),i.a.createElement("li",null,"Custom Lettering"),i.a.createElement("li",null,"Illustration"),i.a.createElement("li",null,"Web Design")),i.a.createElement("h3",{style:{marginTop:c.sizes.spacingV3}},"Elsewhere"),i.a.createElement("ul",{style:{marginBottom:c.sizes.spacingV3}},i.a.createElement("li",null,i.a.createElement("a",{href:"https://instagram.com/ktype.xyz",target:"_blank",rel:"noopener noreferrer"},"Instagram")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://behance.net/ktype",target:"_blank",rel:"noopener noreferrer"},"Behance")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://dribbble.com/ktype",target:"_blank",rel:"noopener noreferrer"},"Dribbble"))))),i.a.createElement("img",{style:{marginTop:c.sizes.spacingV3-16},src:"/about/02_profile.jpg",alt:"profile",width:"100%"})):i.a.createElement("div",{style:{overflow:"hidden"}},i.a.createElement("div",null,i.a.createElement("h2",{style:{color:c.colors.grey,marginTop:c.sizes.spacingV3,fontWeight:"normal",fontSize:15}},"DESIGN & LETTERING"),i.a.createElement("p",null,"I\u2019m a designer focused on expanding meaning into enduring visuals. My passion-driven process generates thoughtful design solutions through the repetition of extensive trials and explorations.")),i.a.createElement("img",{style:{float:"right",marginTop:c.sizes.spacingV3-16},src:"/about/02_profile.jpg",alt:"profile",width:"650px"}),i.a.createElement("div",null,i.a.createElement("h3",{style:{marginTop:c.sizes.spacingV3+7}},"Services"),i.a.createElement("ul",null,i.a.createElement("li",null,"Branding & Strategy"),i.a.createElement("li",null,"Visual Identity"),i.a.createElement("li",null,"Design Systems"),i.a.createElement("li",null,"Custom Lettering"),i.a.createElement("li",null,"Illustration"),i.a.createElement("li",null,"Web Design")),i.a.createElement("h3",{style:{marginTop:c.sizes.spacingV3+7}},"Elsewhere"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://instagram.com/ktype.xyz",target:"_blank",rel:"noopener noreferrer"},"Instagram")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://behance.net/ktype",target:"_blank",rel:"noopener noreferrer"},"Behance")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://dribbble.com/ktype",target:"_blank",rel:"noopener noreferrer"},"Dribbble")))))}function v(e){var t=e.isMobile,a=e.title,n=e.src,r=e.data;return t?i.a.createElement("div",null,i.a.createElement("div",{style:{overflow:"hidden",margin:"0 auto",width:"90%",maxWidth:"400px",marginTop:c.sizes.spacingV1-c.sizes.triangleHeight,marginBottom:c.sizes.spacingV1}},i.a.createElement("div",null,i.a.createElement("h3",{style:{color:c.colors.brown,marginBottom:c.sizes.spacingV3}},a),r.map((function(e,t){return i.a.createElement("div",{key:t,style:{marginLeft:c.sizes.indent,width:400}},i.a.createElement("h5",{style:{color:c.colors.white}},e.title),i.a.createElement("p",{style:{color:c.colors.grey,marginBottom:c.sizes.spacingV3,width:"75%"}},e.description))}))),i.a.createElement("div",{style:{marginBottom:c.sizes.spacingV1}}),i.a.createElement("img",{style:{display:"block",margin:"0 auto",marginTop:8},src:n,alt:a,width:"100%",maxWidth:"400px"}))):i.a.createElement("div",{style:{overflow:"hidden",width:c.sizes.contentWidth,margin:"0 auto",marginTop:c.sizes.spacingV1,marginBottom:c.sizes.spacingV1}},i.a.createElement("img",{style:{float:"right",marginTop:8,maxWidth:400},src:n,alt:a}),i.a.createElement("div",null,i.a.createElement("h3",{style:{color:c.colors.brown,marginBottom:c.sizes.spacingV3+10}},a),r.map((function(e,t){var a=t!==Object.keys(r).length-1?c.sizes.spacingV3+10:25;return i.a.createElement("div",{key:t,style:{marginLeft:c.sizes.indent+c.sizes.spacingV3,maxWidth:400}},i.a.createElement("h5",{style:{color:c.colors.white}},e.title),i.a.createElement("p",{style:{color:c.colors.grey,marginBottom:a}},e.description))}))))}function k(e){return e.isMobile?i.a.createElement("div",{style:{overflow:"auto",width:"90%",maxWidth:"400px",margin:"0 auto",paddingBottom:c.sizes.spacingV1}},i.a.createElement("div",{style:{maxWidth:465+c.sizes.indent}},i.a.createElement("div",null,i.a.createElement("p",{style:{color:c.colors.white,marginTop:0,marginBottom:c.sizes.spacingV3}},i.a.createElement("em",null,"\u201cDesign is not a thing you do. It is a way of life.\u201d"),i.a.createElement("br",null),"\u2014Alan Fletcher, circa 1956"),i.a.createElement("p",{style:{color:c.colors.white,marginTop:0,marginBottom:c.sizes.spacingV3}},"Thank you for reading a bit about my process. If you\u2019re interested in what I do, ",i.a.createElement(g.b,{to:"/contact"},"come say hi."))),i.a.createElement("img",{style:{marginLeft:c.sizes.indent,marginBottom:c.sizes.spacingV3},width:"140px",src:"/about/05_signature.png",alt:"signature"}),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement("div",null,i.a.createElement("img",{style:{display:"block",margin:"0 auto",marginTop:8,maxWidth:400},src:"/about/06_studiobooks.jpg",alt:"books",width:"100%"}))))):i.a.createElement("div",{style:{overflow:"hidden",width:c.sizes.contentWidth,margin:"0 auto",paddingBottom:c.sizes.spacingV1,paddingTop:c.sizes.spacingV1-35}},i.a.createElement("img",{style:{float:"right"},src:"/about/06_studiobooks.jpg",alt:"books",width:400}),i.a.createElement("div",{style:{width:465+c.sizes.indent}},i.a.createElement("div",null,i.a.createElement("p",{style:{color:c.colors.white,marginTop:0,marginBottom:c.sizes.spacingV3}},i.a.createElement("em",null,"\u201cDesign is not a thing you do. It is a way of life.\u201d"),i.a.createElement("br",null),"\u2014Alan Fletcher, circa 1956"),i.a.createElement("p",{style:{color:c.colors.white,marginTop:0,marginBottom:c.sizes.spacingV3}},"Thank you for reading a bit about my process. If you\u2019re interested in what I do, ",i.a.createElement(g.b,{to:"/contact"},"come say hi."))),i.a.createElement("div",{style:{marginLeft:c.sizes.indent+c.sizes.spacingV3}},i.a.createElement("img",{width:"140px",src:"/about/05_signature.png",alt:"signature"}))))}var w=function(e){var t=e.text,a=e.to,r=Object(n.useState)(!1),l=Object(s.a)(r,2),o=l[0],m=l[1],u=p();return i.a.createElement(g.b,{to:a,onClick:function(){return window.scrollTo(0,0)},onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)}},i.a.createElement("div",{style:{transition:"background-color 0.4s, color 0.2s",backgroundColor:o?c.colors.brown:c.colors.white}},i.a.createElement("h2",{style:{color:o?c.colors.white:c.colors.brown,textAlign:"center",padding:50,paddingLeft:u>c.breakpoints.mobile?50:10,paddingRight:u>c.breakpoints.mobile?50:10,paddingTop:55,marginBottom:0,fontSize:u>c.breakpoints.mobile?21:18,letterSpacing:10}},t)))};function z(e){var t=e.title,a=e.description,n=e.images,r=p();return i.a.createElement("div",{className:"anim-fade-in"},i.a.createElement("div",{style:{maxWidth:c.sizes.contentWidth,margin:"0 auto",marginBottom:c.sizes.spacingV1,display:"flex",justifyContent:"space-between",flexWrap:"wrap",paddingLeft:r<c.breakpoints.mobile?c.sizes.spacingV2:0}},i.a.createElement("h1",{style:{display:"inline-block"}},t),i.a.createElement("p",{style:{display:"inline-block",marginTop:r<c.breakpoints.mobile?0:23,paddingRight:30}},a)),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",maxWidth:c.sizes.contentWidth,margin:"0 auto",marginBottom:c.sizes.spacingV1}},n.map((function(e,t){return i.a.createElement("img",{key:t,src:e.src,alt:e.alt,style:{marginBottom:c.sizes.spacingV2,width:"100%"}})}))),i.a.createElement(w,{text:"VIEW ALL WORK",to:"/work"}))}function x(){return i.a.createElement(z,{title:"Lettering Set",description:"A collection of custom hand-drawn lettering from over the years.",images:[{src:"/lettering_set/01_rhythm.jpg",alt:"rhythm"},{src:"/lettering_set/02_correlate.jpg",alt:"correlate"},{src:"/lettering_set/03_sunday.jpg",alt:"sunday"},{src:"/lettering_set/04_thanks.jpg",alt:"thanks"},{src:"/lettering_set/05_balance.jpg",alt:"balance"},{src:"/lettering_set/06_surreal.jpg",alt:"surreal"},{src:"/lettering_set/07_format.jpg",alt:"format"},{src:"/lettering_set/08_jfs.jpg",alt:"jfs"},{src:"/lettering_set/09_faux.jpg",alt:"faux"},{src:"/lettering_set/10_refine.jpg",alt:"refine"}]})}function j(){return i.a.createElement(z,{title:"Sketchbook",description:"Various in-progress lettering sketches, vector processes, and play.",images:[{src:"/sketchbook/01_process_wip.jpg",alt:"process (WIP)"},{src:"/sketchbook/02_thanks_progression.gif",alt:"thanks (progression)"},{src:"/sketchbook/03_quiver_sketch.jpg",alt:"quiver (sketch)"},{src:"/sketchbook/05_jfs_progression.gif",alt:"jfs (progression)"},{src:"/sketchbook/06_a_sketch_play.gif",alt:"a playful sketch (progression)"},{src:"/sketchbook/07_push_through.jpg",alt:"push through"}]})}var S=a(16),O=a.n(S),T=a(23);a(43);function V(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),m=o[0],p=o[1],u=Object(n.useState)(""),g=Object(s.a)(u,2),d=g[0],h=g[1],E=Object(n.useState)(""),b=Object(s.a)(E,2),f=b[0],y=b[1],v=Object(n.useState)(""),k=Object(s.a)(v,2),w=k[0],z=k[1],x=Object(n.useState)(""),j=Object(s.a)(x,2),S=j[0],V=j[1],C=Object(n.useState)(0),_=Object(s.a)(C,2),W=_[0],A=_[1],B=["Under $5K","Under $10K","Under $15K","$20K+"];function L(e){return I.apply(this,arguments)}function I(){return(I=Object(T.a)(O.a.mark((function e(t){var n,i,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000/api/mail",n='?name="'.concat(a,'"&email="').concat(m,'"&company=').concat(d,'&url="').concat(f||"no website provided",'"&details="').concat(w,'"&deadline="').concat(S||"idk, because they didn't provide a deadline",'"&priceRange="').concat(B[W],'"'),i={name:a,email:m,company:d,url:f,details:w,deadline:S,priceRange:W},(r=new FormData).append("json",JSON.stringify(i)),console.log("Submitting from client",JSON.stringify(r)),t.preventDefault(),e.next=9,fetch("http://localhost:5000/api/mail"+n,{method:"POST",mode:"no-cors",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},body:r});case 9:200===e.sent.status?alert("Success! Your message was sent."):alert("Oops, your message failed to send! Try again, or email hi@ktype.xyz directly.");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement("div",{className:"contact-container anim-fade-in"},i.a.createElement("p",null,"If you have a question, inquiry, or just want to say hi, you can write me at ",i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:hi@ktype.xyz"},"hi@ktype.xyz")," or use the form below."),i.a.createElement("form",{onSubmit:L,style:{margin:"0 auto",marginTop:c.sizes.spacingV1,marginBottom:c.sizes.spacingV2}},i.a.createElement("div",{className:"contact-subcontainer"},i.a.createElement("div",null,i.a.createElement("label",{for:"name"},"Full Name: *"),i.a.createElement("br",null),i.a.createElement("input",{value:a,onChange:function(e){return r(e.target.value)},type:"text",name:"name",autoComplete:"off"})),i.a.createElement("div",null,i.a.createElement("label",{for:"email"},"Email Address: *"),i.a.createElement("br",null),i.a.createElement("input",{value:m,onChange:function(e){return p(e.target.value)},type:"text",name:"email",autoComplete:"off"}))),i.a.createElement("div",{className:"contact-subcontainer"},i.a.createElement("div",null,i.a.createElement("label",{for:"company"}," Name of company/organization: *"),i.a.createElement("br",null),i.a.createElement("input",{value:d,onChange:function(e){return h(e.target.value)},type:"text",name:"company",autoComplete:"off"}),i.a.createElement("br",null)),i.a.createElement("div",null,i.a.createElement("label",{for:"url"},"Website URL:"),i.a.createElement("br",null),i.a.createElement("input",{value:f,onChange:function(e){return y(e.target.value)},type:"text",name:"url",autoComplete:"off"}),i.a.createElement("br",null))),i.a.createElement("div",{className:"contact-subcontainer"},i.a.createElement("div",null,i.a.createElement("label",{for:"deadline"},"Are there any deadlines we should be aware of? *"),i.a.createElement("br",null),i.a.createElement("input",{value:S,onChange:function(e){return V(e.target.value)},type:"text",name:"deadline",autoComplete:"off"})),i.a.createElement("div",null,i.a.createElement("label",{for:"budget"},"Do you have a budget range in mind?\xa0*"),i.a.createElement("br",null),i.a.createElement("select",{value:W,onChange:function(e){return A(e.target.value)},name:"budget"},i.a.createElement("option",{value:0},B[0]),i.a.createElement("option",{value:1},B[1]),i.a.createElement("option",{selected:!0,value:2},B[2]),i.a.createElement("option",{value:3},B[3]))),i.a.createElement("div",null,i.a.createElement("label",{for:"details"},"What are your hopes and goals for this project? *"),i.a.createElement("br",null),i.a.createElement("textarea",{value:w,onChange:function(e){return z(e.target.value)},name:"details",cols:43,rows:7}))),i.a.createElement("br",null),i.a.createElement("div",{className:"k-mbv1"},i.a.createElement("button",{className:"k-button",onClick:function(e){return L(e)},disabled:!(a&&m&&d&&w&&S)},"Submit"),(a||m||d||w||S)&&!(a&&m&&d&&w&&S)&&i.a.createElement("p",{style:{fontSize:"0.9em",display:"inline"}},"* Please enter all required fields."))))}var C=a(24);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(C.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(){var e=p();function t(e){var t=e.title,a=e.description,n=e.alignLeft,r=e.style;return i.a.createElement("div",{style:W({backgroundColor:"white",maxWidth:c.sizes.cardWidth-85,maxHeight:c.sizes.cardHeight/4,position:"relative",top:n?0:25,margin:n?0:"0 auto",padding:15,paddingLeft:n?c.sizes.spacingV2:15},r),className:"trans-fade"},i.a.createElement("h6",{style:{color:c.colors.black,textAlign:n?"left":"center",marginTop:13,marginBottom:0,lineHeight:1}},t),i.a.createElement("p",{style:{textAlign:n?"left":"center",marginTop:0,fontStyle:"italic",fontSize:16,color:c.colors.grey,letterSpacing:1}},a))}function a(e){var a=e.title,r=e.description,l=e.imgSrc,o=e.to,m=e.isMobile,p=Object(n.useState)(0),u=Object(s.a)(p,2),d=u[0],h=u[1];return m?i.a.createElement(g.b,{to:o,onClick:function(){return window.scrollTo(0,0)},style:{marginBottom:c.sizes.spacingV3}},i.a.createElement("div",null,i.a.createElement("img",{src:l,width:"100%",maxWidth:"400px",alt:a})),i.a.createElement(t,{title:a,description:r,alignLeft:!0,style:{opacity:1}})):i.a.createElement(g.b,{to:o,onClick:function(){return window.scrollTo(0,0)},style:{marginBottom:c.sizes.spacingV3}},i.a.createElement("div",{onMouseOver:function(){return h(1)},onMouseLeave:function(){return h(0)},style:{backgroundImage:"url(".concat(l,")"),backgroundSize:"".concat(c.sizes.cardWidth,"px ").concat(c.sizes.cardHeight,"px"),width:c.sizes.cardWidth,height:c.sizes.cardHeight}},i.a.createElement(t,{title:a,description:r,style:{opacity:d}})))}return i.a.createElement("div",{style:{marginTop:c.sizes.spacingV1-65,width:"100%"},className:"anim-fade-in"},i.a.createElement("p",{style:{fontSize:"27px",textAlign:"center",marginBottom:c.sizes.spacingV1,padding:20,lineHeight:"40px"}},"The strategic design studio of Kade Tyler\u2014specializing in",i.a.createElement("br",null),"thoughtful visual identities & custom lettering."),i.a.createElement("div",{style:{display:"flex",justifyContent:e<c.breakpoints.mobile?"center":"space-between",maxWidth:e<c.breakpoints.mobile?"100%":c.sizes.contentWidth,margin:"0 auto",marginBottom:c.sizes.spacingV1-10,flexWrap:e<c.breakpoints.mobile?"wrap":"nowrap"}},[{title:"LETTERING SET",description:"Custom Lettering",imgSrc:"/work/01_Thumbnail_LetteringSet.jpg",to:"/lettering-set"},{title:"SKETCHBOOK",description:"Custom Lettering",imgSrc:"/work/02_Thumbnail_Sketchbook.jpg",to:"/sketchbook"}].map((function(t,n){return i.a.createElement(a,{isMobile:e<c.breakpoints.mobile,key:n,title:t.title,description:t.description,imgSrc:t.imgSrc,to:t.to})}))))}var B=function(e){return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement("div",{style:{marginBottom:c.sizes.spacingV1-15}}),i.a.createElement(o.a,{exact:!0,path:"/",component:A}),i.a.createElement(o.a,{path:"/work",component:A}),i.a.createElement(o.a,{path:"/lettering-set",component:x}),i.a.createElement(o.a,{path:"/sketchbook",component:j}),i.a.createElement(o.a,{path:"/about",component:f}),i.a.createElement(o.a,{path:"/contact",component:V}),i.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(g.a,null,i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.8b807541.chunk.js.map