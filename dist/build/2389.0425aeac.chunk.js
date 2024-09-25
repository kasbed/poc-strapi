"use strict";(self.webpackChunkpoc_strapi=self.webpackChunkpoc_strapi||[]).push([[2389],{42389:(x,f,t)=>{t.d(f,{ProtectedListView:()=>rt});var s=t(92132),l=t(21272),U=t(38413),I=t(55356),d=t(25815),D=t(4198),o=t(2129),E=t(5194),a=t(5409),M=t(54894),e=t(17703),W=t(382),K=t(29749),L=t(99831),B=t(22185),u=t(15126),z=t(63299),F=t(67014),V=t(59080),G=t(79275),H=t(14718),p=t(82437),Y=t(61535),Q=t(5790),J=t(12083),Z=t(35223),n=t(74930),r=t(2600),P=t(48940),O=t(41286),m=t(56336),T=t(13426),i=t(84624),v=t(77965),A=t(54257),y=t(71210),X=t(51187),w=t(39404),b=t(58692),q=t(501),tt=t(57646),_=t(23120),st=t(44414),S=t(25962),Ot=t(14664),mt=t(42588),At=t(90325),ft=t(62785),ct=t(87443),gt=t(41032),Ct=t(22957),Lt=t(93179),vt=t(73055),Rt=t(15747),ht=t(85306),Ut=t(26509),It=t(32058),Wt=t(81185),Bt=t(82261);const _t=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],ot=()=>{(0,o.L4)();const{formatMessage:c}=(0,M.A)(),R=(0,o.hN)(),dt=(0,W.j)(C=>C.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:Et,allowedActions:{canCreate:k,canDelete:it,canUpdate:lt,canRead:h}}=(0,o.ec)(dt),{push:at}=(0,e.W6)(),{trackUsage:j}=(0,o.z1)(),{_unstableFormatAPIError:N}=(0,o.wq)();l.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]),(0,W.b)(()=>{j("willAccessTokenList",{tokenType:L.T})});const Mt=_t.map(C=>({...C,metadatas:{...C.metadatas,label:c(C.metadatas.label)}})),{data:g=[],isLoading:Tt,error:$}=(0,K.c)(void 0,{skip:!h});l.useEffect(()=>{g&&j("didAccessTokenList",{number:g.length,tokenType:L.T})},[j,g]),l.useEffect(()=>{$&&R({type:"warning",message:N($)})},[$,N,R]);const[Dt]=(0,K.d)(),Pt=async C=>{try{const nt=await Dt(C);"error"in nt&&R({type:"warning",message:N(nt.error)})}catch{R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},et=Tt||Et;return(0,s.jsxs)(U.g,{"aria-busy":et,children:[(0,s.jsx)(o.x7,{name:"Transfer Tokens"}),(0,s.jsx)(I.Q,{title:c({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:c({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:k?(0,s.jsx)(d.z,{"data-testid":"create-transfer-token-button",startIcon:(0,s.jsx)(E.A,{}),size:"S",onClick:()=>j("willAddTokenFromList",{tokenType:L.T}),to:"/settings/transfer-tokens/create",children:c({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),(0,s.jsxs)(D.s,{children:[!h&&(0,s.jsx)(o.UW,{}),h&&g.length>0&&(0,s.jsx)(B.T,{permissions:{canRead:h,canDelete:it,canUpdate:lt},headers:Mt,contentType:"trasfer-tokens",isLoading:et,onConfirmDelete:Pt,tokens:g,tokenType:L.T}),h&&k&&g.length===0&&(0,s.jsx)(o.R1,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:(0,s.jsx)(d.z,{variant:"secondary",startIcon:(0,s.jsx)(E.A,{}),to:"/settings/transfer-tokens/create",children:c({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})})}),h&&!k&&g.length===0&&(0,s.jsx)(o.R1,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},rt=()=>{const c=(0,W.j)(R=>R.admin_app.permissions.settings?.["transfer-tokens"].main);return(0,s.jsx)(o.kz,{permissions:c,children:(0,s.jsx)(ot,{})})}},22185:(x,f,t)=>{t.d(f,{T:()=>V});var s=t(92132),l=t(21272),U=t(25641),I=t(90361),d=t(33363),D=t(30893),o=t(83997),E=t(94061),a=t(88353),M=t(21610),e=t(2129),W=t(50612),K=t(83925),L=t(41909),B=t(54894),u=t(17703),z=t(71389),F=t(79793);const V=({permissions:n,headers:r=[],contentType:P,isLoading:O=!1,tokens:m=[],onConfirmDelete:T,tokenType:i})=>{const{canDelete:v,canUpdate:A,canRead:y}=n;return(0,s.jsx)(e.Ee,{headers:r,contentType:P,rows:m,withBulkActions:v||A||y,isLoading:O,onConfirmDelete:T,children:(0,s.jsx)(G,{tokenType:i,permissions:n,onConfirmDelete:T})})},G=({tokenType:n,permissions:r,rows:P=[],withBulkActions:O,onConfirmDelete:m})=>{const{canDelete:T,canUpdate:i,canRead:v}=r,[{query:A}]=(0,e.sq)(),{formatMessage:y}=(0,B.A)(),[,X]=A&&A.sort?A.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,u.W6)(),{trackUsage:q}=(0,e.z1)(),tt=[...P].sort((_,st)=>{const S=_.name.localeCompare(st.name);return X==="DESC"?-S:S});return(0,s.jsx)(U.N,{children:tt.map(_=>(0,s.jsxs)(I.Tr,{...(0,e.qM)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${_.id}`)},condition:i}),children:[(0,s.jsx)(d.Td,{maxWidth:(0,e.a8)(250),children:(0,s.jsx)(D.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,s.jsx)(d.Td,{maxWidth:(0,e.a8)(250),children:(0,s.jsx)(D.o,{textColor:"neutral800",ellipsis:!0,children:_.description})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(D.o,{textColor:"neutral800",children:(0,s.jsx)(e.sR,{timestamp:new Date(_.createdAt)})})}),(0,s.jsx)(d.Td,{children:_.lastUsedAt&&(0,s.jsx)(D.o,{textColor:"neutral800",children:(0,s.jsx)(e.sR,{timestamp:new Date(_.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,s.jsx)(d.Td,{children:(0,s.jsxs)(o.s,{justifyContent:"end",children:[i&&(0,s.jsx)(Z,{tokenName:_.name,tokenId:_.id}),!i&&v&&(0,s.jsx)(J,{tokenName:_.name,tokenId:_.id}),T&&(0,s.jsx)(Q,{tokenName:_.name,onClickDelete:()=>m?.(_.id),tokenType:n})]})})]},_.id))})},H={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},p=({tokenName:n,tokenId:r,buttonType:P="edit",children:O})=>{const{formatMessage:m}=(0,B.A)(),{location:{pathname:T}}=(0,u.W6)();return(0,s.jsx)(Y,{forwardedAs:z.k2,to:`${T}/${r}`,title:m(H[P],{target:n}),children:O})},Y=(0,F.Ay)(M.N)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,Q=({tokenName:n,onClickDelete:r,tokenType:P})=>{const{formatMessage:O}=(0,B.A)(),{trackUsage:m}=(0,e.z1)(),[T,i]=l.useState(!1),v=()=>{i(!1),m("willDeleteToken",{tokenType:P}),r()};return(0,s.jsxs)(E.a,{paddingLeft:1,onClick:A=>A.stopPropagation(),children:[(0,s.jsx)(a.K,{onClick:()=>{i(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(W.A,{})}),(0,s.jsx)(e.TM,{onToggleDialog:()=>i(!1),onConfirm:v,isOpen:T})]})},J=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,buttonType:"read",children:(0,s.jsx)(K.A,{})}),Z=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,children:(0,s.jsx)(L.A,{width:12})})},99831:(x,f,t)=>{t.d(f,{A:()=>s,T:()=>l});const s="api-token",l="transfer-token"},29749:(x,f,t)=>{t.d(f,{a:()=>d,b:()=>o,c:()=>U,d:()=>D,u:()=>I});var s=t(382);const l=s.n.injectEndpoints({endpoints:E=>({getTransferTokens:E.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:a=>a.data,providesTags:(a,M)=>[...a?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:E.query({query:a=>`/admin/transfer/tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:E.mutation({query:a=>({url:"/admin/transfer/tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:E.mutation({query:a=>({url:`/admin/transfer/tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:E.mutation({query:({id:a,...M})=>({url:`/admin/transfer/tokens/${a}`,method:"PUT",data:M}),transformResponse:a=>a.data,invalidatesTags:(a,M,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:U,useGetTransferTokenQuery:I,useCreateTransferTokenMutation:d,useDeleteTransferTokenMutation:D,useUpdateTransferTokenMutation:o}=l}}]);
