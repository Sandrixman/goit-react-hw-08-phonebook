"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[892],{2892:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,o,i,a,c,s,l,d,u,m,h=t(9434),x=t(5705),p=t(6727),f=t(5984),b=t(5985),j=t(8700),g=function(n){return n.phonebook.contacts.items},Z=function(n){return n.phonebook.contacts.isLoading},v=function(n){return n.phonebook.contacts.error},k=function(n){return n.phonebook.contacts.items.filter((function(e){return e.name.toLowerCase().includes(n.phonebook.filter.toLowerCase())}))},y=t(168),C=t(225),w=(0,C.Z)(x.l0)(r||(r=(0,y.Z)(["\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  max-width: 300px;\n  padding: 20px;\n"]))),F=C.Z.p(o||(o=(0,y.Z)(["\n  color: red;\n  margin: 0;\n"]))),_=C.Z.label(i||(i=(0,y.Z)(["\n  :nth-of-type(2) {\n    margin-top: 10px;\n  }\n"]))),N=C.Z.button(a||(a=(0,y.Z)(["\n  margin-top: 20px;\n"]))),A=t(3329),q=(0,f.x0)(),I=function(){var n=(0,h.v9)(g),e=(0,h.I0)(),t=(0,p.Ry)({name:(0,p.Z_)().required(),number:(0,p.Z_)().required()}),r=function(n){var e=n.name;return(0,A.jsx)(x.Bc,{name:e,render:function(n){return(0,A.jsx)(F,{children:n})}})};return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(x.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var o=r.resetForm;n.some((function(n){return n.name===t.name}))?b.Am.error("".concat(t.name," is already in contacts"),{position:"top-center"}):e(j.addContact(t)),o()},validationSchema:t,children:(0,A.jsxs)(w,{children:[(0,A.jsx)(_,{htmlFor:q,children:"Name"}),(0,A.jsx)(x.gN,{id:q,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,A.jsx)(r,{name:"name"}),(0,A.jsx)(_,{htmlFor:q,children:"Number"}),(0,A.jsx)(x.gN,{id:q,type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,A.jsx)(r,{name:"number"}),(0,A.jsx)(N,{type:"submit",children:"Add contact"})]})})})},B=t(2791),L=t(893),E=C.Z.p(c||(c=(0,y.Z)(["\n  min-width: 250px;\n"]))),J=C.Z.p(s||(s=(0,y.Z)(["\n  min-width: 180px;\n"]))),P=C.Z.button(l||(l=(0,y.Z)(["\n  :hover {\n    background-color: red;\n  }\n"]))),S=function(n){var e=n.contact,t=n.index,r=(0,h.v9)(Z),o=(0,h.I0)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(E,{children:[t+1,". ",e.name,":"]}),(0,A.jsx)(J,{children:e.number}),(0,A.jsx)(P,{onClick:function(){return o((0,j.deleteContact)(e.id))},disabled:r,children:r?(0,A.jsx)(L.i,{}):"Delete"})]})},z=C.Z.ul(d||(d=(0,y.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-top: 20px;\n"]))),D=C.Z.li(u||(u=(0,y.Z)(["\n  display: flex;\n  border-bottom: 1px solid;\n"]))),M=function(){var n=(0,h.I0)(),e=(0,h.v9)(Z),t=(0,h.v9)(v),r=(0,h.v9)(k);return(0,B.useEffect)((function(){n(j.fetchContacts())}),[n]),e?(0,A.jsx)(L.i,{}):t?b.Am.error("Error occurred while fetching contacts",{position:"top-center",autoClose:2e3}):(0,A.jsx)(A.Fragment,{children:r&&(0,A.jsxs)(z,{children:[Boolean(0===r.length)&&(0,A.jsx)("h2",{children:"No contacts found."}),r.map((function(n,e){return(0,A.jsx)(D,{children:(0,A.jsx)(S,{contact:n,index:e})},n.id)}))]})})},R=t(1714),T=C.Z.div(m||(m=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]))),V=(0,f.x0)(),G=null,H=function(){var n=(0,h.I0)();return(0,A.jsxs)(T,{children:[(0,A.jsx)("label",{htmlFor:V,children:"Find contacts by name"}),(0,A.jsx)("input",{id:V,type:"text",onChange:function(e){G=e.currentTarget.value,n((0,R.f)(G))}})]})},K=function(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("h1",{children:"Phonebook"}),(0,A.jsx)(I,{}),(0,A.jsx)("h2",{children:"Contacts"}),(0,A.jsx)(H,{}),(0,A.jsx)(M,{})]})}}}]);
//# sourceMappingURL=892.52f13d98.chunk.js.map