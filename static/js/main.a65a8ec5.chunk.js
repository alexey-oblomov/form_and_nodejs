(this.webpackJsonpform_and_nodejs=this.webpackJsonpform_and_nodejs||[]).push([[0],{102:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgBjY7NDYJAEIVn9qwRO1grUDvQEqxAznrRCtQKiAfwaKzAWAEl2MJ2oJE1iIF9LkH8iST4bjP53g/TH5JbOHzTe2TmIGrhTSw5voYEGhCLFtfCyEIiSICWatpcCelrVwba+4F93XvBxG4O539BbLpMmHWC6Ci9k1MkRwP7szOMgyTtq0ljVwbxE1iwrbSnYkNrCNhGKCTZUM3b6rOZ33tLU65q+MtQ7L64TDzGPR1Z+EwVegAaYFmyhe9bkAAAAABJRU5ErkJggg=="},121:function(e,a,n){e.exports=n(135)},127:function(e,a,n){},135:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(10),s=n.n(r),o=n(24),i=n(88),m=(n(127),n(30)),c=n(166),d=n(167),u=n(4),f=n(84),p=n(85),_=n(102),b=n.n(_);function E(){var e=Object(f.a)(["\n  padding-left: 25px;\n  appearance: none;\n  position: absolute;\n  :hover {\n    cursor: pointer;\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(f.a)(["\n  position: absolute;\n  margin-left: -25px;\n  width: 15px;\n  height: 15px;\n  border: ",";\n  box-sizing: border-box;\n  border-radius: 3px;\n  background: ",";\n  :hover {\n    cursor: pointer;\n    border: 1px solid #000000;\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(f.a)(["\n  cursor: pointer;\n  max-width: 250px;\n  font-size: 14px;\n  color: #323336;\n  margin-left: 25px;\n"]);return w=function(){return e},e}function g(e){var a=e.name,n=e.value,t=e.onChange,r=e.label,s={name:a,value:n,onChange:t,label:r};return l.a.createElement(h,{htmlFor:a},l.a.createElement(k,Object.assign({className:"checkbox__input",type:"checkbox",id:a},s)),l.a.createElement(A,{value:n}),r)}var h=p.a.label(w()),A=p.a.span(v(),(function(e){return e.value?"1px solid #2196f3":"1px solid #c4c4c4"}),(function(e){return e.value?"no-repeat url('".concat(b.a,"') center"):"#ffffff"})),k=p.a.input(E()),N=n(111),x=n(3),C=n(161),B=n(168),O=n(169),z=n(170),j=n(172),q=n(165),y=n(109),P=n.n(y),T=n(110),S=n.n(T);function I(e){var a=e.errors,n=e.touched,t=e.values,r=e.name,s=e.onChange,o=e.onBlur,i=e.label,m=e.labelWidth,c=Object(C.a)((function(){return{root:{display:"flex",flexWrap:"wrap"},textField:{width:"225px"}}}))(),d=l.a.useState({showPassword:!1}),u=Object(N.a)(d,2),f=u[0],p=u[1];return l.a.createElement(B.a,{size:"small",className:Object(x.a)(c.textField),variant:"outlined",error:n[r]&&a[r]},l.a.createElement(O.a,{htmlFor:"outlined-adornment-password",required:!0},i),l.a.createElement(z.a,{id:"outlined-adornment-password",size:"small",type:f.showPassword?"text":"password",value:t[r],autoComplete:"off",name:r,onChange:s,onBlur:o,endAdornment:l.a.createElement(j.a,{position:"end"},l.a.createElement(q.a,{onClick:function(){p({showPassword:!f.showPassword})},edge:"end"},f.showPassword?l.a.createElement(P.a,null):l.a.createElement(S.a,null))),labelWidth:m}))}var F=o.b().shape({name:o.d().min(2,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u0438\u043c\u044f. \u041d\u0435 \u043c\u0435\u043d\u0435\u0435 2 \u0437\u043d\u0430\u043a\u043e\u0432").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435. \u041d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),password:o.d().min(8,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c. \u041d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(40,"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.").matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,40}$/,"\u0411\u0443\u043a\u0432\u044b \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430 \u0438 \u0446\u0438\u0444\u0440\u044b, \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0430 \u0446\u0438\u0444\u0440\u0430 \u0438 \u043e\u0434\u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430").oneOf([o.c("repeatPassword")],null).required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),repeatPassword:o.d().oneOf([o.c("password")],"\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),email:o.d().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),website:o.d().url("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441"),age:o.d().min(1,"\u043e\u0442 18 \u0434\u043e 65").max(2,"\u043e\u0442 18 \u0434\u043e 65").matches(/^[1]{1}[8-9]{1}|^[2-5]{1}[0-9]{1}|^[6]{1}[0-5]{1}$/,"\u043e\u0442 18 \u0434\u043e 65").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),acceptTerms:o.a().oneOf([!0],"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")}),J=Object(u.a)({root:{height:"28px",alignSelf:"center",backgroundColor:"#1a73e8",color:"white",marginLeft:"0"}})(c.a);function R(){return l.a.createElement("div",{className:"app"},l.a.createElement("h1",{className:"heading"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement(m.d,{initialValues:{name:"",password:"",repeatPassword:"",email:"",website:"",age:"",skill:"",skills:[],acceptTerms:!1},onSubmit:function(e){JSON.stringify(e)},validationSchema:F},(function(e){var a=e.values,n=e.handleChange,t=e.setFieldValue,r=e.handleBlur,s=e.errors,o=e.touched,c=e.dirty,u=e.isValid,f={name:"password",errors:s,values:a,touched:o,onChange:n("password"),onBlur:r("password"),label:"\u041f\u0430\u0440\u043e\u043b\u044c",labelWidth:65},p={name:"repeatPassword",errors:s,values:a,touched:o,onChange:n("repeatPassword"),onBlur:r("repeatPassword"),label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",labelWidth:145},_={name:"acceptTerms",as:g,label:"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438",onChange:n("acceptTerms"),value:a.acceptTerms},b={size:"small",autoComplete:"off",name:"name",as:"input",component:d.a,label:"\u0418\u043c\u044f",variant:"outlined",error:o.name&&Boolean(s.name),value:a.name,onChange:n("name"),onBlur:r("name"),required:!0},E={size:"small",autoComplete:"off",name:"email",as:"input",component:d.a,label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",variant:"outlined",onChange:n("email"),error:o.email&&Boolean(s.email),onBlur:r("email"),required:!0},v={size:"small",autoComplete:"off",name:"website",as:"input",component:d.a,label:"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442",variant:"outlined",onChange:n("website"),error:o.website&&Boolean(s.website),onBlur:r("website")},w={size:"small",autoComplete:"off",name:"age",type:"text",component:d.a,label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",variant:"outlined",onChange:n("age"),value:a.age,error:o.age&&Boolean(s.age),onBlur:r("age"),required:!0},h={size:"small",autoComplete:"on",label:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u0432\u044b\u043a",name:"skill",as:"input",component:d.a,variant:"outlined",value:a.skill,onChange:n("skill"),error:o.skill&&Boolean(s.skill),onBlur:r("skill")};return l.a.createElement(m.c,null,l.a.createElement("div",{className:"form__up-block"},l.a.createElement("div",{className:"form__field form__field--name"},l.a.createElement("div",{className:"field__input"},l.a.createElement(m.a,b)),l.a.createElement("div",{className:"field__error-message"},o.name?s.name:"")),l.a.createElement("div",{className:"form__field form__field--block-password-and-repeat-password"},l.a.createElement("div",{className:"form__field form__field--password"},l.a.createElement("div",{className:"field__input"},l.a.createElement(I,f)),l.a.createElement("div",{className:"field__error-message field__error-message--password"},o.password?s.password:"")),l.a.createElement("div",{className:"form__field"},l.a.createElement("div",{className:"form__field form__field--repeate-password"},l.a.createElement("div",{className:"field__input"},l.a.createElement(I,p)),l.a.createElement("div",{className:"field__error-message field__error-message--repeat-password"},o.repeatPassword?s.repeatPassword:""))))),l.a.createElement("div",{className:"form__middle-block"},l.a.createElement("div",{className:"middle-block__left-side"},l.a.createElement("div",{className:"form__field"},l.a.createElement("div",{className:"field__input"},l.a.createElement(m.a,E)),l.a.createElement("div",{className:"field__error-message"},o.email?s.email:"")),l.a.createElement("div",{className:"form__field"},l.a.createElement("div",{className:"field__input"},l.a.createElement(m.a,w)),l.a.createElement("div",{className:"field__error-message"},o.age?s.age:"")),l.a.createElement("div",{className:"form__field"},l.a.createElement("div",{className:"field__input"},l.a.createElement(m.a,v)),l.a.createElement("div",{className:"field__error-message"},o.website?s.website:""))),l.a.createElement("div",{className:"middle-block__left-side"},l.a.createElement("div",{className:"form__field"},l.a.createElement(m.b,{name:"skills"},(function(e){var n=e.push;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form__skills-input-block"},l.a.createElement("div",{className:"field__input form__field--skill"},l.a.createElement(m.a,h)),l.a.createElement("div",{className:"button-add-skill__container"},l.a.createElement(J,{variant:"contained",size:"small",color:"primary",type:"button",onClick:function(){a.skill.trim()&&(n(a.skill),t("skill",""))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u0432\u044b\u043a"))),l.a.createElement("div",null,l.a.createElement("ul",{className:"form__listSkills"},a.skills.map((function(e){return l.a.createElement("div",{key:Object(i.uniqueId)()},l.a.createElement("li",{key:Object(i.uniqueId)()},e))})))))}))))),l.a.createElement("div",{className:"form__down-block"},l.a.createElement("div",{className:"down-block__block-accept-terms-and-submit"},l.a.createElement("div",{className:"form__field form__field--checkbox"},l.a.createElement(m.a,_)),l.a.createElement("div",{className:"form__field form__block--button-submit"},l.a.createElement(J,{variant:"contained",size:"small",color:"primary",disabled:!c||!u,type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435")))))})))}n(134);s.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.a65a8ec5.chunk.js.map