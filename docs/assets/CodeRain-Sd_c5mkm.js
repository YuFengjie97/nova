var $=Object.defineProperty;var A=(i,o,n)=>o in i?$(i,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[o]=n;var l=(i,o,n)=>(A(i,typeof o!="symbol"?o+"":o,n),n);import{C as F}from"./Card-OtZax_HE.js";import{P as O}from"./P5Con-jLXa2jFz.js";import{a as S}from"./p5.min--W7QciFv.js";import{d as R,o as E,b as N,l as y,p as T}from"./index-7fEuWlIe.js";const j=["Hello World","مرحبا بالعالم","Salam Dünya","Прывітанне Сусвет","Здравей свят","ওহে বিশ্ব","Zdravo svijete","Hola món","Kumusta Kalibutan","Ahoj světe","Helo Byd","Hej Verden","Hallo Welt","Γειά σου Κόσμε","Hello World","Hello World","Hola Mundo","Tere, Maailm","Kaixo Mundua","سلام دنیا","Hei maailma","Bonjour le monde","Dia duit an Domhan","Ola mundo","હેલો વર્લ્ડ","Sannu Duniya","नमस्ते दुनिया","Hello World","Pozdrav svijete","Bonjou Mondyal la","Helló Világ","Բարեւ աշխարհ","Halo Dunia","Ndewo Ụwa","Halló heimur","Ciao mondo","שלום עולם","こんにちは世界","Hello World","Გამარჯობა მსოფლიო","Сәлем Әлем","សួស្តី​ពិភពលោក","ಹಲೋ ವರ್ಲ್ಡ್","안녕하세요 월드","Ciao mondo","ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ","Labas pasauli","Sveika pasaule","Hello World","Kia Ora","Здраво свету","ഹലോ വേൾഡ്","Сайн уу","हॅलो वर्ल्ड","Hai dunia","Hello dinja","မင်္ဂလာပါကမ္ဘာလောက","नमस्कार संसार","Hallo Wereld","Hei Verden","Moni Dziko Lapansi","ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ","Witaj świecie","Olá Mundo","Salut Lume","Привет, мир","හෙලෝ වර්ල්ඩ්","Ahoj svet","Pozdravljen, svet","Waad salaaman tihiin","Përshendetje Botë","Здраво Свете","Lefatše Lumela","Halo Dunya","Hej världen","Salamu, Dunia","ஹலோ வேர்ல்ட்","హలో వరల్డ్","Салом Ҷаҳон","สวัสดีชาวโลก","Kamusta Mundo","Selam Dünya","Привіт Світ","ہیلو ورلڈ","Salom Dunyo","Chào thế giới","העלא וועלט","Mo ki O Ile Aiye","你好，世界","Sawubona Mhlaba"],G="/nova/assets/Roboto-Regular-po5xd_Q0.ttf",I={class:"codeRain viewCon"},X=R({__name:"CodeRain",setup(i){const{random:o,floor:n}=Math;let f,H="#000",r,c,u=20,g=2,M=15,_=5,x=.3,v=.001,B=[120,100,100],W=[120,30,100],b=[0,255,127];const p=[],C=200;class D{constructor(a,e,s,h){l(this,"char");l(this,"$p");l(this,"pos");this.$p=a,this.char=e,this.pos=s}draw(){this.$p.textSize(u);let a=o();o()<v?this.$p.fill(b):a>v&&a<x?this.$p.fill(W):this.$p.fill(B),this.$p.text(this.char,this.pos.x,this.pos.y)}}class P{constructor(a,e,s,h){l(this,"$p");l(this,"str");l(this,"pos");l(this,"length",0);l(this,"vel");l(this,"chars",[]);l(this,"translateZ",0);l(this,"scale",1);this.$p=a,this.str=e,this.pos=s,this.vel=h;let m=parseFloat((-8*o()+3).toFixed(1));this.translateZ=m;for(let d=0;d<e.length;d++){let w=u+g;this.length+=w;let Z=this.pos.copy().add(0,d*w);this.chars.push(new D(this.$p,this.str[d],Z))}}draw(){this.$p.textFont(f),this.$p.translate(0,0,this.translateZ),this.chars.forEach(a=>{a.draw()})}edge(){this.pos.y>c+this.length*2&&this.pos.set(o()*r,-this.length*2)}update(){this.pos.add(this.vel),this.updateCharsPosByPos(),this.edge()}updateCharsPosByPos(){let{pos:{y:a}}=this;for(let e=0;e<this.str.length;e++){let s=this.chars[e];s.pos.set(s.pos.x,a+e*(u+g))}}}function k(t){let a=j.length;for(let e=0;e<C;e++){let s=j[e<a?e:e%a],h=new S.Vector(t.random(r),-100),m=new S.Vector(0,_+o()*M);p.push(new P(t,s,h,m))}}function L(){for(let t=0;t<C;t++)p[t].update(),p[t].draw()}function V(t){f=t.loadFont(G)}function z(t){r=t.width,c=t.height,t.background(H),t.colorMode(t.HSB),k(t)}function K(t){t.translate(-r/2,-c/2),t.background(H),L()}return(t,a)=>(E(),N("div",I,[y(F,null,{default:T(()=>[y(O,{isWEBGL:!0,preLoad:V,setup:z,draw:K})]),_:1})]))}});export{X as default};
