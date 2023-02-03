self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
arZ(){return new B.ku(null)},
ku:function ku(d){this.a=d},
an_(d,e,f){var x,w,v,u,t
if(f<=C.c.gI(e))return C.c.gI(d)
if(f>=C.c.gG(e))return C.c.gG(d)
x=C.c.A6(e,new B.adN(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=A.C(w,u,(f-t)/(e[v]-t))
t.toString
return t},
axy(d,e,f,g,h){var x,w,v=A.a55(null,null,y.b)
v.H(0,e)
v.H(0,g)
x=A.ao(v,!1,v.$ti.c)
w=A.a9(x).h("aq<1,H>")
return new B.a8o(A.ao(new A.aq(x,new B.adh(d,e,f,g,h),w),!1,w.h("aL.E")),x)},
ajX(d,e,f){var x,w,v,u=d==null
if(u&&e==null)return null
if(u)return e.aJ(0,f)
if(e==null)return d.aJ(0,1-f)
x=B.axy(d.a,d.wX(),e.a,e.wX(),f)
u=A.Bo(d.d,e.d,f)
u.toString
w=A.Bo(d.e,e.e,f)
w.toString
v=f<0.5?d.f:e.f
return new B.pi(u,w,v,x.a,x.b,null)},
a8o:function a8o(d,e){this.a=d
this.b=e},
adN:function adN(d){this.a=d},
adh:function adh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
WK:function WK(){},
pi:function pi(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
YU:function YU(d){this.a=d}},A,C,E,D,J
B=a.updateHolder(c[3],B)
A=c[0]
C=c[2]
E=c[5]
D=c[6]
J=c[1]
B.ku.prototype={
J(d){var x=null,w=A.a([new A.H(4288922054),new A.H(4293513927)],y.c)
return A.a2a(x,x,A.hZ(C.Q,A.kl(A.a([A.XB("assets/icons/logo.png",x,x),A.bI(x,32,x),A.ajl(A.df("\u5f00\u59cb\u4e0b\u8f7d",x,x,x,x),this.gTI(),A.afD(x,x,x,x,x,x,x,x,x,x,x,x,x,x,C.k,x,x,x,x,x,x))],y.e),C.a2,C.fY,C.aG),x,x,new A.d8(x,x,x,x,x,new B.pi(E.bz,D.vP,C.c5,w,x,x),C.Y),x,x,x,x))},
qm(){var x=0,w=A.O(y.f)
var $async$qm=A.P(function(d,e){if(d===1)return A.L(e,w)
while(true)switch(x){case 0:x=2
return A.V(A.t_("https://sharefs.ali.kugou.com/202201021430/d7a942d073b9c9b257455b26e4e2572a/KGTX/CLTX001/a9527f71f7149f13e1f78b23c25dd30b.mp3"),$async$qm)
case 2:return A.M(null,w)}})
return A.N($async$qm,w)}}
B.a8o.prototype={}
B.WK.prototype={
wX(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
if(u>4294967295)A.X(A.br(u,0,4294967295,"length",null))
w=J.mv(new Array(u),y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
B.pi.prototype={
a1V(d,e,f){var x=this,w=x.d.W(f).LY(e),v=x.e.W(f).LY(e),u=x.wX()
return A.afN(w,v,x.a,u,x.f,null)},
aJ(d,e){var x=this,w=x.a,v=A.a9(w).h("aq<1,H>")
return new B.pi(x.d,x.e,x.f,A.ao(new A.aq(w,new B.YU(e),v),!0,v.h("aL.E")),x.b,null)},
ck(d,e){var x=B.ajX(d,this,e)
return x},
cl(d,e){var x=B.ajX(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Y(e)!==A.D(x))return!1
return e instanceof B.pi&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&A.cS(e.a,x.a)&&A.cS(e.b,x.b)},
gu(d){var x=this,w=A.e7(x.a),v=x.b
v=v==null?null:A.e7(v)
return A.W(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
i(d){var x=this,w=A.a(["begin: "+x.d.i(0),"end: "+x.e.i(0),"colors: "+A.h(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.h(v))
w.push("tileMode: "+x.f.i(0))
return"LinearGradient("+C.c.aM(w,", ")+")"}}
var z=a.updateTypes(["ae<~>()"])
B.adN.prototype={
$1(d){return d<=this.a},
$S:411}
B.adh.prototype={
$1(d){var x=this,w=A.C(B.an_(x.a,x.b,d),B.an_(x.c,x.d,d),x.e)
w.toString
return w},
$S:412}
B.YU.prototype={
$1(d){var x=A.C(null,d,this.a)
x.toString
return x},
$S:51};(function installTearOffs(){var x=a._instance_0u
x(B.ku.prototype,"gTI","qm",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ku,A.aB)
w(A.F,[B.a8o,B.WK])
w(A.ch,[B.adN,B.adh,B.YU])
x(B.pi,B.WK)})()
A.ah0(b.typeUniverse,JSON.parse('{"ku":{"aB":[],"i":[]}}'))
var y={c:A.a4("w<H>"),h:A.a4("w<j>"),e:A.a4("w<i>"),b:A.a4("U"),f:A.a4("~")};(function constants(){D.vP=new A.dz(1,1)})()}
$__dart_deferred_initializers__["W+Otyu3uKXjQw8sv/YdPjHV2soQ="] = $__dart_deferred_initializers__.current
