"use strict";(self.webpackChunkpoc_strapi=self.webpackChunkpoc_strapi||[]).push([[417],{417:(ss,I,s)=>{s.d(I,{ProtectedCreatePage:()=>Y});var a=s(92132),W=s(21272),T=s(38413),U=s(55356),P=s(83997),h=s(85963),c=s(4198),d=s(94061),g=s(30893),K=s(90151),A=s(68074),f=s(7537),j=s(5287),x=s(21610),r=s(2129),y=s(46270),u=s(6103),p=s(61535),S=s(54894),C=s(17703),$=s(71389),N=s(79793),O=s(12083),n=s(382),F=s(9454),as=s(15126),ts=s(63299),_s=s(67014),os=s(59080),rs=s(79275),ns=s(14718),Es=s(82437),is=s(5790),ds=s(35223),es=s(5409),ls=s(74930),Ps=s(2600),Ms=s(48940),Ds=s(41286),Os=s(56336),ms=s(13426),hs=s(84624),gs=s(77965),As=s(54257),Cs=s(71210),Rs=s(51187),vs=s(39404),Ls=s(58692),Bs=s(501),Is=s(57646),Ws=s(23120),Ts=s(44414),Us=s(25962),cs=s(14664),Ks=s(42588),fs=s(90325),js=s(62785),xs=s(87443),ys=s(41032),us=s(22957),ps=s(93179),Ss=s(73055),$s=s(15747),Ns=s(85306),Fs=s(26509),Vs=s(32058),zs=s(81185),Hs=s(82261),Ys=s(412),Qs=s(94710);const V=O.Ik().shape({name:O.Yj().required(r.iW.required),description:O.Yj().required(r.iW.required)}),z=()=>{const t=(0,C.W5)("/settings/roles/duplicate/:id"),e=(0,r.hN)(),{lockApp:Q,unlockApp:G}=(0,r.MA)(),{formatMessage:_}=(0,S.A)(),{replace:J}=(0,C.W6)(),m=W.useRef(null),{trackUsage:R}=(0,r.z1)(),{_unstableFormatAPIError:v,_unstableFormatValidationErrors:L}=(0,r.wq)(),M=t?.params.id??null,{isLoading:X,data:B}=(0,n.A)({role:M??""}),{data:Z,isLoading:b}=(0,n.B)({id:M},{skip:!M,refetchOnMountOrArgChange:!0}),[k]=(0,n.D)(),[w]=(0,n.E)(),q=async(D,E)=>{try{Q(),R(M?"willDuplicateRole":"willCreateNewRole");const o=await k(D);if("error"in o){(0,n.x)(o.error)&&o.error.name==="ValidationError"?E.setErrors(L(o.error)):e({type:"warning",message:v(o.error)});return}const{permissionsToSend:l}=m.current?.getPermissions()??{};if(o.data.id&&Array.isArray(l)&&l.length>0){const i=await w({id:o.data.id,permissions:l});if("error"in i){(0,n.x)(i.error)&&i.error.name==="ValidationError"?E.setErrors(L(i.error)):e({type:"warning",message:v(i.error)});return}}e({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),J(`/settings/roles/${o.data.id}`)}catch{e({type:"warning",message:{id:"notification.error"}})}finally{G()}};return(0,a.jsxs)(T.g,{children:[(0,a.jsx)(r.x7,{name:"Roles"}),(0,a.jsx)(p.l1,{initialValues:{name:"",description:`${_({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,u.A)(new Date,"PPP")}`},onSubmit:q,validationSchema:V,validateOnChange:!1,children:({values:D,errors:E,handleReset:o,handleChange:l,isSubmitting:i})=>(0,a.jsx)(r.lV,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(U.Q,{primaryAction:(0,a.jsxs)(P.s,{gap:2,children:[(0,a.jsx)(h.$,{variant:"secondary",onClick:()=>{o(),m.current?.resetForm()},size:"L",children:_({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,a.jsx)(h.$,{type:"submit",loading:i,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})]}),title:_({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,a.jsx)(x.N,{as:$.k2,startIcon:(0,a.jsx)(y.A,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsx)(c.s,{children:(0,a.jsxs)(P.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,a.jsx)(d.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,a.jsxs)(P.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsxs)(P.s,{justifyContent:"space-between",children:[(0,a.jsxs)(d.a,{children:[(0,a.jsx)(d.a,{children:(0,a.jsx)(g.o,{fontWeight:"bold",children:_({id:"global.details",defaultMessage:"Details"})})}),(0,a.jsx)(d.a,{children:(0,a.jsx)(g.o,{variant:"pi",textColor:"neutral600",children:_({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,a.jsx)(H,{children:_({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,a.jsxs)(K.x,{gap:4,children:[(0,a.jsx)(A.E,{col:6,children:(0,a.jsx)(f.k,{name:"name",error:E.name&&_({id:E.name}),label:_({id:"global.name",defaultMessage:"Name"}),onChange:l,required:!0,value:D.name})}),(0,a.jsx)(A.E,{col:6,children:(0,a.jsx)(j.T,{label:_({id:"global.description",defaultMessage:"Description"}),id:"description",error:E.description&&_({id:E.description}),onChange:l,children:D.description})})]})]})}),!X&&!b&&B?(0,a.jsx)(d.a,{shadow:"filterShadow",hasRadius:!0,children:(0,a.jsx)(F.P,{isFormDisabled:!1,ref:m,permissions:Z,layout:B})}):(0,a.jsx)(d.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,a.jsx)(r.Bl,{})})]})})]})})})]})},H=N.Ay.div`
  border: 1px solid ${({theme:t})=>t.colors.primary200};
  background: ${({theme:t})=>t.colors.primary100};
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  color: ${({theme:t})=>t.colors.primary600};
  border-radius: ${({theme:t})=>t.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Y=()=>{const t=(0,n.j)(e=>e.admin_app.permissions.settings?.roles.create);return(0,a.jsx)(r.kz,{permissions:t,children:(0,a.jsx)(z,{})})}}}]);
