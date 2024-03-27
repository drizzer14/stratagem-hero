function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire917c,r=t.register;r("dysaJ",function(r,n){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",()=>t("39Pre").default),t("39Pre")}),r("39Pre",function(r,n){e(r.exports,"default",()=>d);var o=t("ayMG0"),i=t("acw62"),a=t("6pX2t");t("7mGZ8");var s=t("5O9lw");t("6o8v3");var l=t("bCBpA");t("9dJ6j");var c=t("6eDBx");t("kCony");var u=t("71Ftm");t("4MYRI");var p=t("cRe7k"),f=t("7QWJS");let m=()=>{let e=Object.keys(a.stratagems),t=e.length,r=0;for(;t>0;)r=Math.floor(Math.random()*t),t-=1,[e[t],e[r]]=[e[r],e[t]];let n=[];for(t=0;t<e.length;t+=8)n.push(e.slice(t,t+8));return n};var d=({onComplete:e})=>{let[t,r]=(0,i.useState)(0),n=(0,i.useRef)(m()),[d,g]=(0,i.useState)(0),_=(0,i.useMemo)(()=>n.current[d],[d]),[v,h]=(0,i.useState)(0),x=(0,i.useMemo)(()=>a.stratagems[_[v]],[_,v]),b=(0,i.useCallback)(()=>{t>+(localStorage.getItem("score")||0)&&localStorage.setItem("score",`${t}`),e(t)},[t]),[S,R]=(0,i.useState)(Date.now());(0,i.useEffect)(()=>{R(Date.now())},[x.id]);let[w,y]=(0,i.useState)(0),H=(0,i.useCallback)(()=>{let e=v===_.length-1;if(d===n.current.length-1)e&&b();else{e?(h(0),g(d+1)):h(v+1),(0,p.timer).emit("increase",20.664);let t=x.code.length,n=new Set(x.code).size,o=(Date.now()-S)/1e3;r(e=>e+Math.round(n/o*t)-(w||-1)),y(0)}},[v,d,S,r]);return(0,o.jsxs)(f.Container,{children:[(0,o.jsx)(l.default,{currentRoundIndex:d}),(0,o.jsxs)(f.Stratagems,{children:[(0,o.jsx)(u.default,{currentRound:_,currentStratagem:x,currentStratagemIndex:v}),(0,o.jsx)(s.default,{code:x.code,onError:()=>y(w+1),onComplete:H}),(0,o.jsx)(p.default,{onDeplete:b})]}),(0,o.jsx)(c.default,{score:t})]})}}),r("7mGZ8",function(r,n){e(r.exports,"default",()=>t("5O9lw").default),t("5O9lw")}),r("5O9lw",function(r,n){e(r.exports,"default",()=>p);var o=t("ayMG0"),i=t("5hgdn"),a=t("acw62"),s=t("9Kx3T");t("k0Wop");var l=t("1ES3K"),c=t("7ocfk");let u=e=>(0,i.match)(e).returnType().with("arrowup",()=>"w").with("arrowright",()=>"d").with("arrowdown",()=>"s").with("arrowleft",()=>"a").otherwise(()=>e);var p=({code:e,onError:t,onComplete:r})=>{let[n,i]=(0,a.useState)([]),[p,f]=(0,a.useState)(!1);return(0,s.useStratagemKey)(r=>{let o=u(r);e[n.length]===o?(i(n.concat(o)),f(!1)):(i([]),f(!0),t(),setTimeout(()=>f(!1),500))},[n]),(0,a.useEffect)(()=>{n.join("")===e&&setTimeout(()=>{r(),i([])},66.4)},[n,e]),(0,o.jsx)(c.Code,{children:e.split("").map((e,t)=>(0,o.jsx)(c.Input,{"data-input":e,"data-valid":e===n[t]||void 0,"data-invalid":p||void 0,children:(0,o.jsx)(l.default,{})},`${e}-${t}`))})}}),r("k0Wop",function(r,n){e(r.exports,"default",()=>t("1ES3K").default),t("1ES3K")}),r("1ES3K",function(r,n){e(r.exports,"default",()=>a);var o=t("ayMG0"),i=t("cupWG"),a=()=>(0,o.jsx)(i.Arrow,{width:"62",height:"66",viewBox:"0 0 62 66",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.715027 31.8015L31.6459 0.694458L61.707 31.8015V40.515H46.3713V65.9583H16.9198V40.515H0.71283V31.8015H0.715027Z",fill:"currentColor"})})}),r("cupWG",function(r,n){e(r.exports,"Arrow",()=>i);var o=t("lmFrL");let i=(0,o.styled).svg`
  filter: drop-shadow(0 0 5px currentColor);
`}),r("7ocfk",function(r,n){e(r.exports,"Code",()=>i),e(r.exports,"Input",()=>a);var o=t("lmFrL");let i=(0,o.styled).ol`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-top: 24px;
`,a=(0,o.styled).li`
  color: #eee;

  &[data-valid] {
    color: var(--brand);
  }

  &[data-invalid] {
    color: #f00;
  }

  &[data-input='d'] {
    transform: rotate(90deg);
  }

  &[data-input='s'] {
    transform: rotate(180deg);
  }

  &[data-input='a'] {
    transform: rotate(270deg);
  }
`}),r("6o8v3",function(r,n){e(r.exports,"default",()=>t("bCBpA").default),t("bCBpA")}),r("bCBpA",function(r,n){e(r.exports,"default",()=>a);var o=t("ayMG0"),i=t("hFYp8"),a=({currentRoundIndex:e})=>(0,o.jsxs)(i.Round,{children:[(0,o.jsx)(i.Title,{children:"Round"}),(0,o.jsx)(i.Index,{children:e+1})]})}),r("hFYp8",function(r,n){e(r.exports,"Round",()=>i),e(r.exports,"Title",()=>a),e(r.exports,"Index",()=>s);var o=t("lmFrL");let i=(0,o.styled).div`
  display: flex;
  flex-direction: column;

  margin-top: -12px;
  margin-right: 32px;
`,a=(0,o.styled).h2`
  color: #fff;
  font-size: 24px;
`,s=(0,o.styled).span`
  margin-top: -8px;

  color: var(--brand);
  font-weight: 700;
  font-size: 48px;
`}),r("9dJ6j",function(r,n){e(r.exports,"default",()=>t("6eDBx").default),t("6eDBx")}),r("6eDBx",function(r,n){e(r.exports,"default",()=>a);var o=t("ayMG0"),i=t("bsp4n"),a=({score:e})=>(0,o.jsxs)(i.Score,{children:[(0,o.jsx)(i.Amount,{children:e}),(0,o.jsx)(i.Title,{children:"Score"})]})}),r("bsp4n",function(r,n){e(r.exports,"Score",()=>i),e(r.exports,"Title",()=>a),e(r.exports,"Amount",()=>s);var o=t("lmFrL");let i=(0,o.styled).div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: -12px;
  margin-left: 64px;
`,a=(0,o.styled).h2`
  margin-top: -32px;

  color: #fff;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`,s=(0,o.styled).span`
  color: var(--brand);
  font-size: 64px;
  font-weight: 700;
`}),r("kCony",function(r,n){e(r.exports,"default",()=>t("71Ftm").default),t("71Ftm")}),r("71Ftm",function(r,n){e(r.exports,"default",()=>c);var o=t("ayMG0"),i=t("6pX2t"),a=t("7kl39"),s=t("4KY6r");let l=e=>new URL(a[e],"file:///src/game/stratagems/carousel/carousel.component.tsx");var c=({currentRound:e,currentStratagem:t,currentStratagemIndex:r})=>(0,o.jsxs)(s.Carousel,{children:[(0,o.jsxs)(s.List,{children:[(0,o.jsx)(s.CurrentItem,{children:(0,o.jsx)("img",{src:l(t.id),alt:t.title})}),e.slice(r+1,r+9).map((e,t,r)=>(0,o.jsx)(s.Item,{children:(0,o.jsx)("img",{src:l(r[t]),alt:i.stratagems[e].title})},e))]}),(0,o.jsx)(s.CurrentStratagemTitle,{children:t.title})]})}),r("7kl39",function(e,r){var n=t("51pU8"),o=t("8neYJ"),i=t("kCF0b"),a=t("dbEEw"),s=t("gai8P"),l=t("ebqel"),c=t("bBfnv"),u=t("hsvB8"),p=t("az8xW"),f=t("723BQ"),m=t("jPmaW"),d=t("4cV1C"),g=t("8ZrrH"),_=t("2ephg"),v=t("4H6eL"),h=t("86eUf"),x=t("8Nn9r"),b=t("iyEBr"),S=t("12PmL"),R=t("eHliP"),w=t("gAJCU"),y=t("fMXhl"),H=t("cQY2S"),L=t("hrEnk"),E=t("hUoop"),F=t("caizC"),A=t("jlJJZ"),k=t("g7s5H"),U=t("lFpa4"),j=t("4i67Z"),C=t("uLgJv"),O=t("9Kpb5"),T=t("34bw7"),B=t("9Rx0T"),M=t("jQltd"),I=t("iWODx"),P=t("5QUpf"),Q=t("faK4L"),J=t("kAQ5p"),K=t("jljHn"),G=t("gLpS8"),W=t("hpQO9"),z=t("h7LEq"),Y=t("4KzBg"),D=t("74JGh"),Z=t("6iry4"),N=t("hotIU"),q=t("1Lx9L"),V=t("bHfyA"),X=t("dnxKh"),$=t("kBWOq"),ee=t("gxkdR"),et=t("hGdI3"),er=t("iXBPm"),en=t("2g1Ol"),eo=t("lh1cF"),ei=t("aN96j"),ea=t("87QTB"),es=t("hwIr7"),el=t("bTQQc");e.exports={"anti-materiel_rifle":n,"anti-personnel_minefield":o,arc_thrower:i,autocannon:a,autocannon_sentry:s,ballistic_shield_backpack:l,eagle_110mm_rocket_pods:c,eagle_500kg_bomb:u,eagle_airstrike:p,eagle_cluster_bomb:f,eagle_napalm_airstrike:m,eagle_rearm:d,eagle_smoke_strike:g,eagle_strafing_run:_,ems_mortar_sentry:v,"expendable_anti-tank":h,flamethrower:x,gatling_sentry:b,grenade_launcher:S,guard_dog:R,guard_dog_rover:w,hellbomb:y,hmg_emplacement:H,incendiary_mines:L,jump_pack:E,laser_cannon:F,machine_gun:A,machine_gun_sentry:k,mortar_sentry:U,orbital_120mm_he_barrage:j,orbital_380mm_he_barrage:C,orbital_airburst_strike:O,orbital_ems_strike:T,orbital_gas_strike:B,orbital_gatling_barrage:M,orbital_illumination_flare:I,orbital_laser:P,orbital_precision_strike:Q,orbital_railcannon_strike:J,orbital_smoke_strike:K,orbital_walking_barrage:G,patriot_exosuit:W,prospecting_drill:z,railgun:Y,recoilless_rifle:D,reinforce:Z,resupply:N,rocket_sentry:q,seaf_artillery:V,seismic_probe:X,shield_generator_pack:$,shield_generator_relay:ee,sos_beacon:et,spear:er,sssd_delivery:en,stalwart:eo,super_earth_flag:ei,supply_pack:ea,tesla_tower:es,upload_data:el}}),r("51pU8",function(e,t){e.exports=new URL("anti-materiel_rifle.72a29647.svg",import.meta.url).toString()}),r("8neYJ",function(e,t){e.exports=new URL("anti-personnel_minefield.88b9bc17.svg",import.meta.url).toString()}),r("kCF0b",function(e,t){e.exports=new URL("arc_thrower.79a363cd.svg",import.meta.url).toString()}),r("dbEEw",function(e,t){e.exports=new URL("autocannon.4bb6d504.svg",import.meta.url).toString()}),r("gai8P",function(e,t){e.exports=new URL("autocannon_sentry.2ef8e729.svg",import.meta.url).toString()}),r("ebqel",function(e,t){e.exports=new URL("ballistic_shield_backpack.550ec0a9.svg",import.meta.url).toString()}),r("bBfnv",function(e,t){e.exports=new URL("eagle_110mm_rocket_pods.b5b00cfc.svg",import.meta.url).toString()}),r("hsvB8",function(e,t){e.exports=new URL("eagle_500kg_bomb.f214c808.svg",import.meta.url).toString()}),r("az8xW",function(e,t){e.exports=new URL("eagle_airstrike.38a48d6b.svg",import.meta.url).toString()}),r("723BQ",function(e,t){e.exports=new URL("eagle_cluster_bomb.bf6d3b0e.svg",import.meta.url).toString()}),r("jPmaW",function(e,t){e.exports=new URL("eagle_napalm_airstrike.1a6e2ed9.svg",import.meta.url).toString()}),r("4cV1C",function(e,t){e.exports=new URL("eagle_rearm.35be459e.svg",import.meta.url).toString()}),r("8ZrrH",function(e,t){e.exports=new URL("eagle_smoke_strike.83a2441e.svg",import.meta.url).toString()}),r("2ephg",function(e,t){e.exports=new URL("eagle_strafing_run.37303a8b.svg",import.meta.url).toString()}),r("4H6eL",function(e,t){e.exports=new URL("ems_mortar_sentry.34c2e584.svg",import.meta.url).toString()}),r("86eUf",function(e,t){e.exports=new URL("expendable_anti-tank.17bcabbd.svg",import.meta.url).toString()}),r("8Nn9r",function(e,t){e.exports=new URL("flamethrower.f2b936cb.svg",import.meta.url).toString()}),r("iyEBr",function(e,t){e.exports=new URL("gatling_sentry.e73afe66.svg",import.meta.url).toString()}),r("12PmL",function(e,t){e.exports=new URL("grenade_launcher.c556606b.svg",import.meta.url).toString()}),r("eHliP",function(e,t){e.exports=new URL("guard_dog.adbe34f8.svg",import.meta.url).toString()}),r("gAJCU",function(e,t){e.exports=new URL("guard_dog_rover.224fb77c.svg",import.meta.url).toString()}),r("fMXhl",function(e,t){e.exports=new URL("hellbomb.c455603b.svg",import.meta.url).toString()}),r("cQY2S",function(e,t){e.exports=new URL("hmg_emplacement.d7d9c7a3.svg",import.meta.url).toString()}),r("hrEnk",function(e,t){e.exports=new URL("incendiary_mines.e521d039.svg",import.meta.url).toString()}),r("hUoop",function(e,t){e.exports=new URL("jump_pack.56b64dd2.svg",import.meta.url).toString()}),r("caizC",function(e,t){e.exports=new URL("laser_cannon.202ecdfd.svg",import.meta.url).toString()}),r("jlJJZ",function(e,t){e.exports=new URL("machine_gun.3de88e4b.svg",import.meta.url).toString()}),r("g7s5H",function(e,t){e.exports=new URL("machine_gun_sentry.8d6e3f21.svg",import.meta.url).toString()}),r("lFpa4",function(e,t){e.exports=new URL("mortar_sentry.1021c87e.svg",import.meta.url).toString()}),r("4i67Z",function(e,t){e.exports=new URL("orbital_120mm_he_barrage.fc4752f1.svg",import.meta.url).toString()}),r("uLgJv",function(e,t){e.exports=new URL("orbital_380mm_he_barrage.9ed7e8b9.svg",import.meta.url).toString()}),r("9Kpb5",function(e,t){e.exports=new URL("orbital_airburst_strike.a411baa9.svg",import.meta.url).toString()}),r("34bw7",function(e,t){e.exports=new URL("orbital_ems_strike.e7fbe5b6.svg",import.meta.url).toString()}),r("9Rx0T",function(e,t){e.exports=new URL("orbital_gas_strike.8f787349.svg",import.meta.url).toString()}),r("jQltd",function(e,t){e.exports=new URL("orbital_gatling_barrage.24874e77.svg",import.meta.url).toString()}),r("iWODx",function(e,t){e.exports=new URL("orbital_illumination_flare.eac72e98.svg",import.meta.url).toString()}),r("5QUpf",function(e,t){e.exports=new URL("orbital_laser.2eccb5ac.svg",import.meta.url).toString()}),r("faK4L",function(e,t){e.exports=new URL("orbital_precision_strike.277823ce.svg",import.meta.url).toString()}),r("kAQ5p",function(e,t){e.exports=new URL("orbital_railcannon_strike.a5bdf86c.svg",import.meta.url).toString()}),r("jljHn",function(e,t){e.exports=new URL("orbital_smoke_strike.4426a737.svg",import.meta.url).toString()}),r("gLpS8",function(e,t){e.exports=new URL("orbital_walking_barrage.974aad15.svg",import.meta.url).toString()}),r("hpQO9",function(e,t){e.exports=new URL("patriot_exosuit.d7f078ec.svg",import.meta.url).toString()}),r("h7LEq",function(e,t){e.exports=new URL("prospecting_drill.97f785e3.svg",import.meta.url).toString()}),r("4KzBg",function(e,t){e.exports=new URL("railgun.cf2493fe.svg",import.meta.url).toString()}),r("74JGh",function(e,t){e.exports=new URL("recoilless_rifle.9cfca20f.svg",import.meta.url).toString()}),r("6iry4",function(e,t){e.exports=new URL("reinforce.7975f8a7.svg",import.meta.url).toString()}),r("hotIU",function(e,t){e.exports=new URL("resupply.f5f2481a.svg",import.meta.url).toString()}),r("1Lx9L",function(e,t){e.exports=new URL("rocket_sentry.7071fe2a.svg",import.meta.url).toString()}),r("bHfyA",function(e,t){e.exports=new URL("seaf_artillery.82a8ae0e.svg",import.meta.url).toString()}),r("dnxKh",function(e,t){e.exports=new URL("seismic_probe.ba02fa3a.svg",import.meta.url).toString()}),r("kBWOq",function(e,t){e.exports=new URL("shield_generator_pack.deede5d3.svg",import.meta.url).toString()}),r("gxkdR",function(e,t){e.exports=new URL("shield_generator_relay.10ebbbdc.svg",import.meta.url).toString()}),r("hGdI3",function(e,t){e.exports=new URL("sos_beacon.fa244ca3.svg",import.meta.url).toString()}),r("iXBPm",function(e,t){e.exports=new URL("spear.3e91a4ff.svg",import.meta.url).toString()}),r("2g1Ol",function(e,t){e.exports=new URL("sssd_delivery.4e334f09.svg",import.meta.url).toString()}),r("lh1cF",function(e,t){e.exports=new URL("stalwart.c021ce84.svg",import.meta.url).toString()}),r("aN96j",function(e,t){e.exports=new URL("super_earth_flag.05d31b23.svg",import.meta.url).toString()}),r("87QTB",function(e,t){e.exports=new URL("supply_pack.b652f0eb.svg",import.meta.url).toString()}),r("hwIr7",function(e,t){e.exports=new URL("tesla_tower.d68451d8.svg",import.meta.url).toString()}),r("bTQQc",function(e,t){e.exports=new URL("upload_data.4e334f09.svg",import.meta.url).toString()}),r("4KY6r",function(r,n){e(r.exports,"Carousel",()=>i),e(r.exports,"List",()=>a),e(r.exports,"CurrentItem",()=>s),e(r.exports,"Item",()=>l),e(r.exports,"CurrentStratagemTitle",()=>c);var o=t("lmFrL");let i=(0,o.styled).div`
  display: flex;
  flex-direction: column;

  height: 200px;
`,a=(0,o.styled).ol`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
`,s=(0,o.styled).li`
  height: 100%;
  aspect-ratio: 1;

  margin-left: 3px;

  border: 5px solid var(--brand);
  border-bottom: none;
  box-shadow: 0 0 15px 0 var(--brand);
`,l=(0,o.styled).li`
  height: 50%;
  aspect-ratio: 1;

  opacity: 0.75;
`,c=(0,o.styled).h2`
  width: 100%;

  text-align: center;

  color: #000;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;

  background-color: var(--brand);
  box-shadow: 0 0 30px 0 var(--brand);
`}),r("4MYRI",function(r,n){e(r.exports,"default",()=>t("cRe7k").default),e(r.exports,"timer",()=>t("cRe7k").timer),t("cRe7k")}),r("cRe7k",function(r,n){e(r.exports,"timer",()=>l),e(r.exports,"default",()=>c);var o=t("ayMG0"),i=t("7etJZ"),a=t("acw62"),s=t("9eYvQ");let l=new i.EventEmitter;var c=({onDeplete:e})=>{let[t,r]=(0,a.useState)(100);return(0,a.useEffect)(()=>{l.on("decrease",()=>{r(e=>Math.max(0,e-.2))}),l.on("increase",e=>{r(t=>Math.min(t+e,100))})},[r]),(0,a.useEffect)(()=>()=>{l.removeAllListeners()},[]),(0,a.useEffect)(()=>{let e=setInterval(()=>l.emit("decrease"),16.6);return()=>clearInterval(e)},[]),(0,a.useEffect)(()=>{0===t&&e()},[t]),(0,o.jsxs)(s.Timer,{children:[(0,o.jsx)(s.BackgroundTrack,{}),(0,o.jsx)(s.ProgressTrack,{style:{width:`${t}%`}})]})}}),r("7etJZ",function(e,t){var r,n="object"==typeof Reflect?Reflect:null,o=n&&"function"==typeof n.apply?n.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};r=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise(function(r,n){var o;function i(r){e.removeListener(t,a),n(r)}function a(){"function"==typeof e.removeListener&&e.removeListener("error",i),r([].slice.call(arguments))}_(e,t,a,{once:!0}),"error"!==t&&(o={once:!0},"function"==typeof e.on&&_(e,"error",i,o))})},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var s=10;function l(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function u(e,t,r,n){if(l(r),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),a=i[t]),void 0===a)a=i[t]=r,++e._eventsCount;else if("function"==typeof a?a=i[t]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),(o=c(e))>0&&a.length>o&&!a.warned){a.warned=!0;var o,i,a,s=Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=a.length,console&&console.warn&&console.warn(s)}return e}function p(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=p.bind(n);return o.listener=r,n.wrapFn=o,o}function m(e,t,r){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):g(o,o.length)}function d(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function g(e,t){for(var r=Array(t),n=0;n<t;++n)r[n]=e[n];return r}function _(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else if("function"==typeof e.addEventListener)e.addEventListener(t,function o(i){n.once&&e.removeEventListener(t,o),r(i)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),a.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,i=this._events;if(void 0!==i)n=n&&void 0===i.error;else if(!n)return!1;if(n){if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var a,s=Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=i[e];if(void 0===l)return!1;if("function"==typeof l)o(l,this,t);else for(var c=l.length,u=g(l,c),r=0;r<c;++r)o(u[r],this,t);return!0},a.prototype.addListener=function(e,t){return u(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return u(this,e,t,!0)},a.prototype.once=function(e,t){return l(t),this.on(e,f(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,f(this,e,t)),this},a.prototype.removeListener=function(e,t){var r,n,o,i,a;if(l(t),void 0===(n=this._events)||void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){a=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,a||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0==arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},a.prototype.listeners=function(e){return m(this,e,!0)},a.prototype.rawListeners=function(e){return m(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},a.prototype.listenerCount=d,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}}),r("9eYvQ",function(r,n){e(r.exports,"Timer",()=>i),e(r.exports,"BackgroundTrack",()=>s),e(r.exports,"ProgressTrack",()=>l);var o=t("lmFrL");let i=(0,o.styled).div`
  position: relative;

  width: 100%;
  height: 24px;

  margin-top: 10%;
`,a=(0,o.styled).div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  box-shadow: 0 0 10px currentColor;
  background-color: currentColor;
`,s=(0,o.styled)(a)`
  width: 100%;

  color: #bfbfbf;
`,l=(0,o.styled)(a)`
  color: var(--brand);

  transition: width 16.6ms;
`}),r("7QWJS",function(r,n){e(r.exports,"Container",()=>i),e(r.exports,"Stratagems",()=>a);var o=t("lmFrL");let i=(0,o.styled).div`
  display: flex;
  justify-content: center;

  width: 100%;
`,a=(0,o.styled).div`
  width: 100%;
  max-width: 900px;

  margin-bottom: 5%;
`});
//# sourceMappingURL=stratagems.34edd491.js.map
