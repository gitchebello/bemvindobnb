/* =========================================================
   APP — monta a página a partir de art.js, data.js e lang-*.js
   ========================================================= */
(function(){
"use strict";

var $ = function(s){ return document.querySelector(s); };
var LANG = "pt";

/* cards do menu: id da seção + tom */
var MENU = [
  {id:"checkin"},
  {id:"wifi"},
  {id:"regras"},
  {id:"saude"},
  {id:"transporte"},
  {id:"passeios"},
  {id:"comer"},
  {id:"feedback"}
];

/* ícone pequeno de linha */
function ic(name){ return ART.ic[name] || ART.ic.info; }
function mapUrl(q){ return MAPS + encodeURIComponent(q + ", Rio de Janeiro"); }
function tel(n){ return "tel:" + (String(n).replace(/\D/g,"").length > 4 ? "+55" + String(n).replace(/\D/g,"") : n); }

/* ---------- onda decorativa ---------- */
function wave(fill){
  return '<svg viewBox="0 0 1440 44" preserveAspectRatio="none" aria-hidden="true">'+
    '<path d="M0 18c180 24 320-8 520 2s300 30 470 18 270-22 450-14v20H0Z" fill="'+fill+'"/></svg>';
}

/* ================= BLOCOS ================= */
function block(b, d){
  switch(b.t){
    case "sum":
      return '<div class="sum"><span class="sum__ic">'+ART.pic.sum+'</span><p>'+b.x+'</p></div>';
    case "lead": return '<p class="lead">'+b.x+'</p>';
    case "p":    return '<p class="para">'+b.x+'</p>';
    case "h":    return '<h3 class="subh">'+b.x+'</h3>';
    case "ul":   return '<ul class="blist">'+b.x.map(function(i){return '<li>'+i+'</li>';}).join("")+'</ul>';
    case "ol":   return '<ol class="olist">'+b.x.map(function(i){return '<li><span>'+i+'</span></li>';}).join("")+'</ol>';
    case "kv":
      return '<dl class="kv">'+b.x.map(function(r){
        return '<div><dt>'+ic(r[0])+'<span>'+r[1]+'</span></dt><dd>'+r[2]+'</dd></div>';
      }).join("")+'</dl>';
    case "note":
      return '<div class="note '+(b.k||"info")+'"><span class="note__ic">'+
        (b.k==="warn"?ART.ic.warn:b.k==="ok"?ART.ic.check:ART.ic.info)+'</span><div>'+b.x+'</div></div>';
    case "wifi":        return wifiBlock(d);
    case "map":         return mapBlock(d);
    case "transport":   return transportBlock(d);
    case "rules4":      return rulesBlock(d);
    case "attractions": return attractionsBlock(d);
    case "restaurants": return restaurantsBlock(d);
    case "hospitals":   return hospitalsBlock(d);
    case "pharmacies":  return pharmaciesBlock(d);
    case "phones":      return phonesBlock(d);
    case "tv":          return tvBlock(d);
    case "sus":         return susBlock(d);
    case "caju":        return cajuBlock(d);
    case "consulates":  return consulatesBlock(d);
    case "places":      return placesBlock(DATA[b.k], d[b.k]);
    case "eco":         return ecoBlock(d);
    case "photo":
      return '<figure class="photo"><img src="'+b.src+'" alt="" loading="lazy">'+
        (b.x?'<figcaption>'+b.x+'</figcaption>':'')+'</figure>';
    default: return "";
  }
}

/* ---------- Wi-Fi ---------- */
function wifiBlock(d){
  return '<div class="wifi">'+
    '<div class="wifi__bg">'+ART.sec.wifi+'</div>'+
    '<div class="wifi__h">'+ART.ic.wifi+'<span>Wi-Fi</span></div>'+
    '<div class="wifi__grid">'+
      '<div class="wifi__f"><label>'+d.lbl.network+'</label><div class="wifi__val"><code>'+CFG.wifi+'</code>'+
        '<button class="copy" type="button" data-copy="'+CFG.wifi+'">'+d.lbl.copy+'</button></div></div>'+
      '<div class="wifi__f"><label>'+d.lbl.pass+'</label><div class="wifi__val"><code>'+CFG.wifiPass+'</code>'+
        '<button class="copy" type="button" data-copy="'+CFG.wifiPass+'">'+d.lbl.copy+'</button></div></div>'+
    '</div>'+
    '<div class="wifi__tip">'+ART.ic.bulb+'<span>'+d.lbl.wifiTip+'</span></div>'+
  '</div>';
}

/* ---------- transporte ---------- */
function transportBlock(d){
  return '<div class="cards">'+DATA.transport.map(function(m){
    var t = d.trans[m.id];
    return '<article class="card">'+
      '<div class="card__top"><span class="card__pic">'+(ART.pic[m.il]||'')+'</span>'+
      '<div class="card__ti"><h4>'+t.h+'</h4>'+(t.tag ? '<div class="sub">'+t.tag+'</div>' : '')+'</div></div>'+
      '<p class="desc">'+t.d+'</p></article>';
  }).join("")+'</div>';
}

/* ---------- 4 regras ---------- */
function rulesBlock(d){
  return '<div class="rules4">'+DATA.mainrules.map(function(r){
    var t = d.mainrules[r.id];
    return '<div class="rule"><span class="rule__il">'+ART.pic[r.il]+'</span>'+
      '<h4>'+t.h+'</h4><p>'+t.d+'</p></div>';
  }).join("")+'</div>';
}

/* ---------- pontos turísticos ---------- */
function attractionsBlock(d){
  return '<div class="cards">'+DATA.attractions.map(function(a){
    var t = d.attr[a.id];
    return '<article class="card card--photo">'+
      '<div class="card__img"><img src="'+a.img+'" alt="'+a.name+'" loading="lazy">'+
        (a.star?'<span class="tag star">★ '+d.lbl.must+'</span>':'')+'</div>'+
      '<div class="card__top"><div class="card__ti"><h4>'+a.name+'</h4><div class="sub">'+t.s+'</div></div></div>'+
      '<div class="tagrow">'+
        '<span class="tag t3">'+a.time+'</span><span class="tag">'+a.cost+'</span></div>'+
      '<div class="rows">'+
        '<div class="row"><span class="row__ic">'+ART.ic.route+'</span><span><b>'+d.lbl.how+'</b>'+t.how+'</span></div>'+
        '<div class="row"><span class="row__ic">'+ART.ic.bulb+'</span><span><b>'+d.lbl.tip+'</b>'+t.tip+'</span></div>'+
      '</div>'+
      '<a class="maplink" href="'+mapUrl(a.map)+'" target="_blank" rel="noopener">'+ART.ic.pin+d.lbl.map+'</a>'+
    '</article>';
  }).join("")+'</div>';
}

/* ---------- restaurantes ---------- */
function restaurantsBlock(d){
  return DATA.restGroupsMeta.map(function(gm){
    var list = DATA.restaurants.filter(function(r){ return r.g === gm.g; });
    if(!list.length) return "";
    return '<h3 class="subh">'+d.restGroups[gm.g]+'</h3><div class="cards">'+list.map(function(r){
      return '<article class="card">'+
        '<div class="card__top"><span class="card__pic">'+ART.pic[gm.il]+'</span>'+
          '<div class="card__ti"><h4>'+r.name+'</h4><div class="sub">'+r.addr+'</div></div></div>'+
        '<div class="tagrow"><span class="tag">'+r.price+'</span>'+
          (r.walk?'<span class="tag t2">'+r.walk+'</span>':'')+'</div>'+
        '<p class="desc">'+d.rest[r.id]+'</p>'+
        '<a class="maplink" href="'+mapUrl(r.name+" "+r.addr)+'" target="_blank" rel="noopener">'+ART.ic.pin+d.lbl.map+'</a>'+
      '</article>';
    }).join("")+'</div>';
  }).join("");
}

/* ---------- hospitais ---------- */
function hospitalsBlock(d){
  return '<div class="cards">'+DATA.hospitals.map(function(h){
    return '<article class="card">'+
      '<div class="card__top"><span class="card__pic">'+ART.pic[h.il]+'</span>'+
        '<div class="card__ti"><h4>'+h.name+'</h4><div class="sub">'+h.addr+'</div></div></div>'+
      '<div class="tagrow"><span class="tag t3">24 h</span><span class="tag t2">'+h.dist+'</span></div>'+
      '<p class="desc">'+d.hosp[h.id]+'</p>'+
      '<div class="rows"><div class="row"><span class="row__ic">'+ART.ic.phone+'</span>'+
        '<span><b>'+d.lbl.tel+'</b><a href="'+tel(h.tel)+'" style="color:var(--teal-d);font-weight:800">'+h.tel+'</a></span></div></div>'+
      '<a class="maplink" href="'+MAPS+encodeURIComponent(h.map)+'" target="_blank" rel="noopener">'+ART.ic.pin+d.lbl.map+'</a>'+
    '</article>';
  }).join("")+'</div>';
}

/* ---------- farmácias ---------- */
function pharmaciesBlock(d){
  return '<div class="cards">'+DATA.pharmacies.map(function(f){
    return '<article class="card">'+
      '<div class="card__top"><span class="card__pic">'+ART.pic[f.il]+'</span>'+
        '<div class="card__ti"><h4>'+f.name+'</h4><div class="sub">'+f.addr+'</div></div></div>'+
      '<p class="desc">'+d.farm[f.id]+'</p>'+
      '<a class="maplink" href="'+mapUrl(f.map)+'" target="_blank" rel="noopener">'+ART.ic.pin+d.lbl.map+'</a>'+
    '</article>';
  }).join("")+'</div>';
}

/* ---------- SUS: unidade pública mais perto ---------- */
function susBlock(d){
  var u = DATA.sus;
  return '<div class="spot spot--sus">'+
    '<span class="spot__ic">'+ART.pic.hosp+'</span>'+
    '<div class="spot__tx"><span class="spot__k">'+d.sus.k+'</span>'+
      '<h4>'+u.name+'</h4><p>'+d.sus.d+'</p>'+
      '<div class="tagrow"><span class="tag t3">24 h</span><span class="tag t2">'+u.dist+'</span><span class="tag">'+d.sus.free+'</span></div>'+
      '<div class="spot__btns">'+
        '<a class="btn primary" href="'+MAPS+encodeURIComponent(u.map)+'" target="_blank" rel="noopener">'+ART.ic.pin+u.addr+'</a>'+
        '<a class="btn" href="'+tel(u.tel)+'">'+ART.ic.phone+u.tel+'</a>'+
      '</div></div></div>';
}

/* ---------- Caju: o bar em frente de casa ---------- */
function cajuBlock(d){
  var c = DATA.caju;
  return '<article class="feature">'+
    '<div class="feature__img"><img src="'+c.img+'" alt="" loading="lazy"><span class="feature__badge">'+ART.ic.music+d.caju.badge+'</span></div>'+
    '<div class="feature__tx"><span class="spot__k">'+d.caju.k+'</span>'+
      '<h3>'+c.name+'</h3><p class="sub">'+c.addr+'</p>'+
      '<p>'+d.caju.d+'</p>'+
      '<ul class="blist">'+d.caju.list.map(function(i){ return '<li>'+i+'</li>'; }).join("")+'</ul>'+
      '<div class="spot__btns">'+
        '<a class="btn primary" href="'+MAPS+encodeURIComponent(c.map)+'" target="_blank" rel="noopener">'+ART.ic.pin+d.lbl.map+'</a>'+
        '<a class="btn" href="'+tel(c.tel)+'">'+ART.ic.phone+c.tel+'</a>'+
      '</div></div></article>';
}

/* ---------- quiosques e shoppings ---------- */
function placesBlock(list, tx){
  return '<div class="cards">'+list.map(function(f){
    return '<article class="card">'+
      '<div class="card__top"><span class="card__pic">'+ART.pic[f.il]+'</span>'+
        '<div class="card__ti"><h4>'+f.name+'</h4>'+(f.addr?'<div class="sub">'+f.addr+'</div>':'')+'</div></div>'+
      '<div class="tagrow"><span class="tag t2">'+f.t+'</span></div>'+
      '<p class="desc">'+tx[f.id]+'</p>'+
      '<a class="maplink" href="'+MAPS+encodeURIComponent(f.map)+'" target="_blank" rel="noopener">'+ART.ic.pin+L[LANG].lbl.map+'</a>'+
    '</article>';
  }).join("")+'</div>';
}

/* ---------- EcoTouch: energia por toque ---------- */
function ecoBlock(d){
  var e = d.eco;
  return '<div class="eco">'+
    '<div class="eco__steps">'+e.steps.map(function(st, i){
      return '<div class="eco__st"><span class="eco__n">'+(i+1)+'</span><span class="eco__ic">'+ic(st[0])+'</span>'+
        '<strong>'+st[1]+'</strong><span>'+st[2]+'</span></div>';
    }).join("")+'</div>'+
    '<ul class="blist">'+e.list.map(function(i){ return '<li>'+i+'</li>'; }).join("")+'</ul>'+
  '</div>';
}

/* ---------- consulados ---------- */
function consulatesBlock(d){
  return '<div class="consul">'+DATA.consulates.map(function(c){
    return '<a class="consul__a" href="'+MAPS+encodeURIComponent("Consulado "+c.pt+" Rio de Janeiro")+'" target="_blank" rel="noopener">'+
      '<span class="consul__f" aria-hidden="true">'+c.f+'</span><span>'+c[LANG]+'</span>'+ART.ic.pin+'</a>';
  }).join("")+'</div>';
}

/* ---------- TV: controle LG + controle Roku ---------- */
function tvBlock(d){
  var t = d.tv;
  return '<div class="tv">'+
    '<div class="tv__remotes">'+
      '<div class="remote remote--lg"><span class="remote__ic">'+ART.ic.remote+'</span>'+
        '<div><span class="spot__k">'+t.lg.k+'</span><h4>'+t.lg.h+'</h4><p>'+t.lg.d+'</p></div></div>'+
      '<div class="remote remote--roku"><span class="remote__ic">'+ART.ic.remote+'</span>'+
        '<div><span class="spot__k">'+t.roku.k+'</span><h4>'+t.roku.h+'</h4><p>'+t.roku.d+'</p></div></div>'+
    '</div>'+
    '<h4 class="tv__h">'+t.keysT+'</h4>'+
    '<div class="tv__keys">'+t.keys.map(function(k){
      return '<div class="tvkey"><span class="tvkey__b">'+k[0]+'</span><span><strong>'+k[1]+'</strong>'+k[2]+'</span></div>';
    }).join("")+'</div>'+
    '<h4 class="tv__h">'+t.stepsT+'</h4>'+
    '<ol class="olist">'+t.steps.map(function(i){ return '<li><span>'+i+'</span></li>'; }).join("")+'</ol>'+
    '<div class="note info"><span class="note__ic">'+ART.ic.info+'</span><div>'+t.tip+'</div></div>'+
  '</div>';
}

/* ---------- telefones ---------- */
function phonesBlock(d){
  return '<div class="phones">'+DATA.phones.map(function(p){
    var t = d.tel[p.id];
    return '<a class="phone" href="'+tel(p.n)+'">'+
      '<span class="phone__n'+(p.short?" sm":"")+'">'+p.n+'</span>'+
      '<span class="phone__t"><strong>'+t.l+'</strong><span>'+t.d+'</span></span></a>';
  }).join("")+'</div>';
}

/* ---------- mapa: imagens fixas com os pinos (base © OpenStreetMap) ---------- */
function mapBlock(d){
  return '<div class="mapwrap">'+
    '<div class="mapbar">'+
      '<button type="button" class="mapbtn on" data-zoom="near">'+ART.ic.pin+d.lbl.near+'</button>'+
      '<button type="button" class="mapbtn" data-zoom="city">'+ART.ic.map+d.lbl.city+'</button>'+
    '</div>'+
    '<div class="mapimg"><img id="mapImg" src="img/mapa-perto.jpg" alt="'+d.lbl.mapAria+'" width="2000" height="1522"></div>'+
    '<div class="legend">'+
      '<i><span class="dot" style="background:#FF6B4A"></span>'+d.mapLegend[0]+'</i>'+
      '<i><span class="dot" style="background:#F2B33D"></span>'+d.mapLegend[1]+'</i>'+
      '<i><span class="dot" style="background:#008991"></span>'+d.mapLegend[2]+'</i>'+
      '<i><span class="dot" style="background:#D64550"></span>'+d.mapLegend[3]+'</i>'+
      '<i><span class="dot" style="background:#3A5BA0"></span>'+d.mapLegend[4]+'</i>'+
    '</div>'+
    '<div class="mapfoot">'+
      '<a class="btn primary" href="'+HOME_MAP+'" target="_blank" rel="noopener">'+ART.ic.pin+d.lbl.openmaps+'</a>'+
      '<a class="btn" href="'+HOME_DIR+'" target="_blank" rel="noopener">'+ART.ic.route+d.lbl.route+'</a>'+
    '</div></div>';
}

function initMap(d){
  var img = document.getElementById("mapImg");
  var bar = document.querySelectorAll(".mapbtn");
  [].forEach.call(bar, function(btn){
    btn.addEventListener("click", function(){
      [].forEach.call(bar, function(x){ x.classList.toggle("on", x === btn); });
      if(img) img.src = btn.getAttribute("data-zoom") === "city" ? "img/mapa-cidade.jpg" : "img/mapa-perto.jpg";
    });
  });
}

/* ================= RENDER ================= */
function render(lang){
  LANG = lang;
  var d = L[lang];
  document.documentElement.lang = d.htmlLang;

  $("#brandMark").innerHTML = ART.mark;

  /* hero */
  $("#heroTx").innerHTML =
    '<span class="kicker">'+ART.ic.sun+d.hero.kicker+'</span>'+
    '<h1>'+d.hero.t1+'<em>'+d.hero.t2+'</em></h1>'+
    '<div class="hero__addr">'+ART.ic.pin+'<span>'+CFG.addressShort+'</span></div>'+
    '<p class="hero__lead">'+d.hero.lead+'</p>'+
    '<div class="chips">'+d.hero.chips.map(function(c){
      return '<span class="chip">'+ic(c.ic)+'<span>'+c.x+'</span></span>'; }).join("")+'</div>';
  $("#heroArt").innerHTML = '<img src="img/copa.jpg" alt="'+d.hero.photoAlt+'">'+
    '<span class="hero__tag">'+ART.ic.sun+d.hero.photoTag+'</span>';
  $("#heroWave").innerHTML = wave("#FFFFFF");

  /* faixa de emergência */
  $("#sos").innerHTML = '<div class="sos__in">'+
    '<span class="sos__lb">'+ART.ic.med+d.sos.label+'</span>'+
    '<div class="sos__btns">'+
      '<a class="sosbtn" href="tel:192"><span class="n">'+d.sos.b1.n+'</span><span class="t">'+d.sos.b1.t+'</span></a>'+
      '<a class="sosbtn alt" href="tel:190"><span class="n">'+d.sos.b2.n+'</span><span class="t">'+d.sos.b2.t+'</span></a>'+
      '<a class="sosbtn alt2" href="https://wa.me/'+CFG.phoneRaw+'" target="_blank" rel="noopener">'+
        '<span class="n sm">'+d.sos.b3.n+'</span><span class="t">'+d.sos.b3.t+'</span></a>'+
    '</div></div>';

  /* o essencial, logo no topo */
  $("#quick").innerHTML = '<div class="quick__grid">'+
    '<div class="qcard qcard--wifi"><span class="qcard__ic">'+ART.ic.wifi+'</span><div class="qcard__tx">'+
      '<span class="qcard__k">Wi-Fi</span>'+
      '<div class="qcard__row"><code>'+CFG.wifi+'</code><button class="copy copy--sm" type="button" data-copy="'+CFG.wifi+'">'+d.lbl.copy+'</button></div>'+
      '<div class="qcard__row"><code>'+CFG.wifiPass+'</code><button class="copy copy--sm" type="button" data-copy="'+CFG.wifiPass+'">'+d.lbl.copy+'</button></div>'+
    '</div></div>'+
    d.quick.map(function(q){
      return '<div class="qcard"><span class="qcard__ic">'+ic(q.ic)+'</span><div class="qcard__tx">'+
        '<span class="qcard__k">'+q.k+'</span><p>'+q.x+'</p></div></div>';
    }).join("")+
  '</div>';

  /* menu */
  $("#menuHead").innerHTML = '<h2>'+d.menu.t+'</h2><p>'+d.menu.p+'</p>';
  $("#menuGrid").innerHTML = MENU.map(function(m, i){
    var sec = null;
    for(var k=0;k<d.sections.length;k++){ if(d.sections[k].id===m.id){ sec = d.sections[k]; break; } }
    return '<a class="mcard" href="#'+m.id+'">'+
      '<span class="mcard__n">'+(i+1)+'</span>'+
      '<span class="mcard__il">'+ART.sec[sec.il]+'</span>'+
      '<h3>'+sec.t+'</h3><p>'+d.menuDesc[m.id]+'</p>'+
      '<span class="mcard__go">'+d.lbl.more+ART.ic.arrow+'</span></a>';
  }).join("");

  /* navegação (com ícone de cada seção) */
  $("#nav").innerHTML = d.sections.map(function(s){
    return '<a href="#'+s.id+'">'+ic(DATA.secIcons[s.id])+'<span>'+s.t+'</span></a>'; }).join("");

  /* seções */
  $("#sections").innerHTML = d.sections.map(function(s, i){
    var paper = (i % 2 === 1);
    return '<section class="sec'+(paper?" sec--paper":"")+'" id="'+s.id+'"><div class="wrap">'+
      '<div class="sec__head">'+
        '<span class="sec__il">'+ART.sec[s.il]+'</span>'+
        '<div class="sec__t">'+
          '<span class="sec__n">'+(i+1<10?"0":"")+(i+1)+' / '+d.sections.length+'</span>'+
          '<h2>'+s.t+'</h2><p class="kick">'+s.k+'</p></div>'+
      '</div>'+
      '<div class="sec__body">'+s.b.map(function(b){ return block(b, d); }).join("")+'</div>'+
    '</div></section>';
  }).join("");

  /* folhagens decorativas */
  $("#decoL").innerHTML  = ART.leaf1;
  $("#decoR").innerHTML  = ART.leaf2;
  $("#decoFL").innerHTML = ART.leaf2;
  $("#decoFR").innerHTML = ART.leaf1;

  /* rodapé */
  $("#foot").innerHTML =
    '<span class="foot__il">'+ART.foot+'</span>'+
    '<div><h3>'+d.foot.t+'</h3><p>'+d.foot.p+'</p></div>'+
    '<div class="foot__btns">'+
      '<a class="btn primary" href="https://wa.me/'+CFG.phoneRaw+'" target="_blank" rel="noopener">'+ART.ic.phone+d.foot.wa+'</a>'+
      '<button class="btn" type="button" id="printBtn">'+ART.ic.print+d.lbl.print+'</button>'+
    '</div>';

  $("#toTop").innerHTML = ART.ic.up;

  /* galeria de fotos (só aparece se as imagens existirem em fotos/) */
  $("#galleryHead").innerHTML = '<h2>'+d.gallery.t+'</h2><p>'+d.gallery.p+'</p>';
  $("#galleryStrip").innerHTML = (CFG.photos||[]).map(function(src){
    return '<img src="'+src+'" alt="" loading="lazy" '+
      'onload="document.getElementById(\'galleryWrap\').hidden=false" '+
      'onerror="this.remove()">';
  }).join("");

  /* barra inferior do celular */
  $("#tabbar").innerHTML = '<div class="tabbar__in">'+[
    {href:"#top",      icn:"beach", lb:d.nav.home},
    {href:"#passeios", icn:"sight", lb:d.nav.tours},
    {href:"#comer",    icn:"food",  lb:d.nav.eat},
    {href:"#saude",    icn:"med",   lb:d.nav.health},
    {href:"#numeros",  icn:"phone", lb:d.nav.phones}
  ].map(function(t){
    return '<a href="'+t.href+'" data-sec="'+t.href.slice(1)+'">'+ic(t.icn)+'<span>'+t.lb+'</span></a>';
  }).join("")+'</div>';

  /* botões de idioma com bandeira */
  var btns = document.querySelectorAll(".langs button");
  for(var j=0;j<btns.length;j++){
    var lg = btns[j].getAttribute("data-lang");
    btns[j].innerHTML = '<span class="flag">'+ART.flag[lg]+'</span><span class="lb">'+lg.toUpperCase()+'</span>';
    btns[j].setAttribute("aria-label", lg==="pt"?"Português":lg==="en"?"English":"Español");
    btns[j].setAttribute("aria-pressed", String(lg === lang));
  }
  try{ localStorage.setItem("guia_lang", lang); }catch(e){}
  spy();
  initMap(d);
}

/* ================= INTERAÇÕES ================= */
document.addEventListener("click", function(e){
  var c = e.target.closest ? e.target.closest(".copy") : null;
  if(c){
    var txt = c.getAttribute("data-copy");
    var original = c.textContent;
    var done = function(){
      c.textContent = L[LANG].lbl.copied; c.classList.add("done");
      setTimeout(function(){ c.textContent = original; c.classList.remove("done"); }, 1700);
    };
    var fallback = function(){
      var ta = document.createElement("textarea");
      ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try{ document.execCommand("copy"); done(); }catch(err){}
      document.body.removeChild(ta);
    };
    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(txt).then(done).catch(fallback);
    } else fallback();
  }
  var lb = e.target.closest ? e.target.closest(".langs button") : null;
  if(lb) render(lb.getAttribute("data-lang"));

  if(e.target.closest && e.target.closest("#printBtn")) window.print();
});

var obs;
function spy(){
  if(obs) obs.disconnect();
  if(!("IntersectionObserver" in window)) return;
  var links = [].slice.call(document.querySelectorAll("#nav a"));
  var tabs  = [].slice.call(document.querySelectorAll("#tabbar a"));
  obs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        links.forEach(function(a){
          a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id);
        });
        tabs.forEach(function(a){
          a.classList.toggle("on", a.getAttribute("data-sec") === en.target.id);
        });
      }
    });
  }, {rootMargin:"-140px 0px -66% 0px"});
  [].slice.call(document.querySelectorAll(".sec")).forEach(function(s){ obs.observe(s); });
}

var toTop = $("#toTop");
toTop.addEventListener("click", function(){ window.scrollTo({top:0, behavior:"smooth"}); });
window.addEventListener("scroll", function(){
  toTop.classList.toggle("show", window.scrollY > 800);
}, {passive:true});

/* ================= BOOT ================= */
(function init(){
  var saved;
  try{ saved = localStorage.getItem("guia_lang"); }catch(e){}
  if(!saved){
    var n = (navigator.language || "pt").slice(0,2).toLowerCase();
    saved = n === "en" ? "en" : n === "es" ? "es" : "pt";
  }
  render(L[saved] ? saved : "pt");
})();

})();
