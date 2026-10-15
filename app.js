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
        return '<div><dt>'+ic(r[0])+'<span>'+r[1]+'</span></dt><dd>'+r[2]+(r[3]==="taps"?tapsBlock(d):r[3]==="trash"?trashBlock(d):r[3]==="sofa"?sofaBlock(d):r[3]==="sink"?sinkBlock(d):r[3]==="cooktop"?cooktopBlock(d):r[3]==="trava"?travaBlock(d):"")+'</dd></div>';
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

/* ---------- chuveiro: torneira quente à esquerda, fria à direita ---------- */
function tapsBlock(d){
  return '<span class="taps">'+
    '<span class="tap tap--hot">'+ART.tap("#E2513A")+'<b>'+d.lbl.hot+'</b><span>'+d.lbl.left+'</span></span>'+
    '<span class="tap tap--cold">'+ART.tap("#2F7FD6")+'<b>'+d.lbl.cold+'</b><span>'+d.lbl.right+'</span></span>'+
  '</span>';
}

/* ---------- lixo: cesto azul, cesto amarelo e duto da escada ---------- */
var TRASH_COL = {blue:"#2F7FD6", yellow:"#D9A514", chute:"#7A8E92"};
function trashBlock(d){
  return '<span class="bins">'+d.trash.map(function(b){
    return '<span class="bin bin--'+b[0]+'">'+(b[0]==="chute"?ART.chute(TRASH_COL[b[0]]):ART.bin(TRASH_COL[b[0]]))+
      '<b>'+b[1]+'</b><strong>'+b[2]+'</strong><span>'+b[3]+'</span></span>';
  }).join("")+'</span>';
}

/* ---------- sofá-cama: fluxograma de 4 passos ---------- */
function sofaBlock(d){
  return '<span class="flow">'+d.sofa.map(function(st, i){
    return '<span class="flow__st"><span class="flow__il">'+ART.sofa[i]+'</span>'+
      '<b><span class="flow__n">'+(i+1)+'</span>'+st[0]+'</b><span class="flow__tx">'+st[1]+'</span></span>';
  }).join('<span class="flow__ar" aria-hidden="true"></span>')+'</span>';
}

/* ---------- pia da cozinha: registros em cruz Q (quente, esquerda) e F (fria, direita) ---------- */
function sinkBlock(d){
  return '<span class="taps taps--sink">'+
    '<span class="tap tap--hot">'+ART.cross("#E2513A","Q",d.lbl.open,d.lbl.shut)+'<b>'+d.lbl.hot+'</b><span>'+d.lbl.left+'</span></span>'+
    '<span class="tap tap--cold">'+ART.cross("#2F7FD6","F",d.lbl.open,d.lbl.shut)+'<b>'+d.lbl.cold+'</b><span>'+d.lbl.right+'</span></span>'+
  '</span>';
}

/* ---------- cooktop: aperte, gire, acendeu ---------- */
function cooktopBlock(d){
  var m = ["press","turn","flame"], col = ["#7A8E92","#7A8E92","#E2513A"];
  return '<span class="taps">'+d.cooktop.map(function(st, i){
    return '<span class="tap'+(i===2?' tap--hot':'')+'">'+ART.knob(m[i], col[i])+'<b>'+st[0]+'</b><span>'+st[1]+'</span></span>';
  }).join("")+'</span>';
}

/* ---------- janelas: foto da trava de segurança ---------- */
function travaBlock(d){
  return '<span class="kvphoto"><img src="img/trava-janela.jpg" alt="'+d.lbl.travaAlt+'" loading="lazy" width="640" height="589"></span>';
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
      '<h4>'+t.h+'</h4><p>'+t.d+'</p>'+
      (t.more?'<button class="rule__more" type="button" data-pop="eco">'+t.more+' →</button>':'')+'</div>';
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
        '<div class="card__top"><span class="card__pic">'+(ART.pic[r.il]||ART.pic[gm.il])+'</span>'+
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
    '<div class="eco__row"><figure class="ecophoto"><span class="ecophoto__img"><img src="img/ecotouch.jpg" alt="'+e.photoAlt+'" loading="lazy" width="600" height="631"><span class="ecophoto__ring" aria-hidden="true"></span></span>'+
      '<figcaption>'+e.photoCap.replace(/⏻/g, ART.pwr("#5B8CFF"))+'</figcaption></figure>'+
    '<ul class="blist">'+e.list.map(function(i){ return '<li>'+i+'</li>'; }).join("")+'</ul></div>'+
  '</div>';
}

/* ---------- consulados ---------- */
function consulatesBlock(d){
  return '<div class="consul">'+DATA.consulates.map(function(c){
    return '<a class="consul__a" href="'+MAPS+encodeURIComponent("Consulado "+c.pt+" Rio de Janeiro")+'" target="_blank" rel="noopener">'+
      '<span class="consul__f" aria-hidden="true">'+c.f+'</span><span>'+c[LANG]+'</span>'+ART.ic.pin+'</a>';
  }).join("")+'</div>';
}

/* ---------- TV: Smart TV, tudo pelo controle Roku ---------- */
/* marcadores na foto img/roku-casa.jpg: [número, lado, altura %, até onde vai a linha (x %)]
   numerados na ordem em que aparecem no controle, de cima para baixo (mesma ordem de tv.keys) */
var RK_PINS = [
  [1, "r",  5.6, 56],     /* liga / desliga */
  [2, "l", 12.0, 20],     /* voltar */
  [3, "r", 12.0, 79],     /* casinha */
  [4, "l", 27.4, 22],     /* setas */
  [5, "r", 27.4, 58],     /* OK */
  [6, "r", 43.0, 49],     /* microfone (voz): a linha vai até o meio do botão */
  [7, "l", 50.0, 36]      /* play / pausa */
];
/* foto girada 90° para a esquerda: a altura vira posição horizontal,
   marcadores da esquerda vão para baixo e os da direita para cima */
function rkTurn(m){ return [m[0], m[1] === "l" ? "b" : "t", m[2], 100 - m[3]]; }
/* número + nome curto do botão (tv.keys[i][3]) embaixo dele */
function rkPin(m){
  var pos = (m[1] === "l" || m[1] === "r") ? "top" : "left", k = L[LANG].tv.keys[m[0]-1];
  return '<span class="rkpin rkpin--'+m[1]+'" style="'+pos+':'+m[2]+'%;--to:'+m[3]+'%"><b>'+m[0]+'<em>'+k[3]+'</em></b></span>';
}
function tvBlock(d){
  var t = d.tv;
  return ('<div class="tv">'+
    '<div class="tv__remotes tv__remotes--one">'+
      '<div class="remote remote--roku"><span class="remote__ic">'+ART.ic.remote+'</span>'+
        '<div><span class="spot__k">'+t.roku.k+'</span><h4>'+t.roku.h+'</h4><p>'+t.roku.d+'</p></div></div>'+
    '</div>'+
    '<h4 class="tv__h">'+t.keysT+'</h4>'+
    '<div class="tv__roku">'+
      /* foto do controle com os botões numerados (mesma ordem da lista ao lado) */
      /* celular: controle em pé · desktop: controle deitado (mesma foto girada) */
      '<figure class="rkphoto rkphoto--v"><img src="img/roku-casa.jpg" alt="'+t.photoAlt+'" loading="lazy" width="500" height="1434">'+
        RK_PINS.map(rkPin).join("")+'</figure>'+
      '<figure class="rkphoto rkphoto--h"><img src="img/roku-casa-deitado.jpg" alt="'+t.photoAlt+'" loading="lazy" width="1434" height="500">'+
        RK_PINS.map(rkTurn).map(rkPin).join("")+'</figure>'+
      '<div class="tv__keys">'+t.keys.map(function(k, i){
        return '<div class="tvkey'+(k[0]==="＋ －" ? ' tvkey--wide' : '')+'"><span class="tvkey__b">'+k[0]+(i < RK_PINS.length ? '<i>'+(i+1)+'</i>' : '')+'</span>'+
          '<span class="tvkey__t"><strong>'+k[1]+'</strong>'+k[2]+'</span>'+
          (k[0]==="＋ －" ? '<img class="tvkey__ph" src="img/roku-lateral.jpg" alt="" width="240" height="595" loading="lazy">' : '')+'</div>';
      }).join("")+'</div>'+
    '</div>'+
    '<h4 class="tv__h">'+t.stepsT+'</h4>'+
    '<ol class="olist">'+t.steps.map(function(i){ return '<li><span>'+i+'</span></li>'; }).join("")+'</ol>'+
    '<div class="lostbox"><span class="lostbox__k" aria-hidden="true">⌂</span><div>'+t.lost+'</div></div>'+
    '<div class="note info"><span class="note__ic">'+ART.ic.info+'</span><div>'+t.tip+'</div></div>'+
  '</div>').replace(/⏻/g, ART.pwr()).replace(/🎤/g, ART.mic());   /* o caractere ⏻ falha em várias fontes: vira o desenho do botão do controle */
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
    '<div class="mapimg"><img id="mapImg" src="img/mapa-perto.jpg" alt="'+d.lbl.mapAria+'" width="2000" height="1523"></div>'+
    '<div class="legend">'+
      /* mesmas cores dos pinos desenhados nas imagens do mapa */
      ["#FF6B4A","#E89B12","#2E9B72","#7B4FD0","#D64550","#3A5BA0","#008991"].map(function(c, i){
        return '<i><span class="dot" style="background:'+c+'"></span>'+d.mapLegend[i]+'</i>';
      }).join("")+
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

/* folha decorativa avulsa: lado, tamanho (px), altura (top em %), ângulo e ritmo do balanço */
function leaf(o){
  var off = -Math.round(o.w * (o.w > 180 ? .42 : .3));
  return '<div class="leaf leaf--'+o.side+(o.hm ? " leaf--hm" : "")+'" aria-hidden="true" style="--w:'+o.w+';top:'+o.at+';'+
    (o.side === "l" ? "left" : "right")+':'+off+'px;--rot:'+o.rot+'deg;--dur:'+o.dur.toFixed(1)+'s;--del:'+o.del.toFixed(1)+'s">'+
    ART.monstera({cuts:o.cuts, holes:o.holes})+'</div>';
}

/* ================= RENDER ================= */
function render(lang){
  sheetReset();
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
  $("#heroWave").innerHTML = wave("currentColor");

  /* faixa de emergência */
  $("#sos").innerHTML = '<div class="sos__in">'+
    '<span class="sos__lb">'+ART.ic.med+d.sos.label+'</span>'+
    '<div class="sos__btns">'+
      '<a class="sosbtn" href="tel:192"><span class="n">'+d.sos.b1.n+'</span><span class="t">'+d.sos.b1.t+'</span></a>'+
      '<a class="sosbtn alt" href="tel:190"><span class="n">'+d.sos.b2.n+'</span><span class="t">'+d.sos.b2.t+'</span></a>'+
      /* anfitriã: só informa (sem link), com foto em plano americano */
      '<div class="sosbtn alt2 sosbtn--host">'+
        '<img class="ava ava--host" src="img/auristela-corpo.jpg" alt="'+CFG.host+'" width="96" height="96">'+
        '<span class="sosbtn__tx"><span class="n sm">'+d.sos.b3.n+'</span>'+
          '<span class="sosbtn__bio">'+d.foot.bio+'</span><span class="t">'+d.sos.b3.t+'</span></span></div>'+
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
  /* folhas em volta do menu e uma a mais no topo */
  [].forEach.call(document.querySelectorAll(".menu > .leaf, .hero > .leaf"), function(x){ x.remove(); });
  $(".menu").insertAdjacentHTML("afterbegin",
    leaf({side:"l", w:220, at:"-2%", rot:-24, cuts:6, holes:true, dur:6.8, del:-2}) +
    leaf({side:"r", w:150, at:"48%", rot:150, cuts:5, holes:true, dur:6.1, del:-4.4}) +
    leaf({side:"r", w:88, at:"8%", rot:40, cuts:3, holes:false, dur:5.4, del:-1.1, hm:1}) +
    leaf({side:"l", w:110, at:"84%", rot:-120, cuts:4, holes:false, dur:7.2, del:-3.3}));
  $(".hero").insertAdjacentHTML("afterbegin",
    leaf({side:"r", w:120, at:"52%", rot:58, cuts:4, holes:false, dur:6.4, del:-2.7, hm:1}) +
    leaf({side:"l", w:90, at:"74%", rot:-80, cuts:3, holes:false, dur:5.6, del:-.8}));
  $("#menuHead").innerHTML = '<h2>'+d.menu.t+'</h2><p>'+d.menu.p+'</p>';
  $("#menuGrid").innerHTML = MENU.map(function(m, i){
    var sec = null;
    for(var k=0;k<d.sections.length;k++){ if(d.sections[k].id===m.id){ sec = d.sections[k]; break; } }
    return '<a class="mcard" href="#'+m.id+'" style="--i:'+i+'">'+
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
    /* uma costela-de-adão por seção, alternando o lado, o tamanho e a altura */
    var deco = '<div class="sec__deco sec__deco--'+(i % 2 ? "r" : "l")+' sec__deco--v'+(i % 3)+'" aria-hidden="true">'+
      (i % 3 === 1 ? ART.monstera({cuts:4, holes:false}) : ART.monstera({cuts:5 + i % 2}))+'</div>';
    /* mais folhas: uma do outro lado, de tamanho variado, e às vezes uma pequenininha */
    var other = i % 2 ? "l" : "r", W = [130, 230, 95, 280, 165, 115, 205][i % 7];
    deco += leaf({side:other, w:W, at:["58%", "14%", "72%", "34%", "82%", "46%", "22%"][i % 7],
      rot:(other === "l" ? -1 : 1) * [28, 145, 12, 62, 118, 40, 160][i % 7], cuts:4 + i % 3, holes:i % 2 === 0,
      dur:5.8 + (i * 0.7) % 2.2, del:-(i * 1.3) % 6});
    if(i % 3 !== 1) deco += leaf({side:i % 2 ? "r" : "l", w:78 + (i * 9) % 30, at:i % 3 ? "86%" : "64%",
      rot:(i % 2 ? 1 : -1) * (70 + i * 11 % 50), cuts:3, holes:false, dur:5.2 + (i % 4) * 0.5, del:-(i * 0.9) % 5, hm:i % 2});
    return '<section class="sec'+(paper?" sec--paper":"")+'" id="'+s.id+'">'+deco+'<div class="wrap">'+
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
  $("#decoL").innerHTML  = ART.monstera();
  $("#decoR").innerHTML  = ART.monstera({cuts:4, holes:false});
  $("#decoFL").innerHTML = ART.monstera({cuts:4, holes:false});
  $("#decoFR").innerHTML = ART.monstera({cuts:7});

  /* rodapé */
  $("#foot").innerHTML =
    '<span class="foot__il foot__il--ava"><img class="ava ava--lg" src="img/auristela-corpo.jpg" alt="'+CFG.host+'" width="130" height="130" loading="lazy"></span>'+
    '<div><h3>'+d.foot.t+'</h3><p class="foot__bio">'+d.foot.bio+'</p><p>'+d.foot.p+'</p></div>'+
    '<div class="foot__btns">'+
      '<a class="btn primary" href="'+CFG.airbnbMsg+'" target="_blank" rel="noopener">'+ART.ic.chat+d.foot.wa+'</a>'+
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
  requestAnimationFrame(syncWaves);
  themeBtn();
  spy();
  initMap(d);
}

/* ================= MODO CLARO / ESCURO =================
   O padrão é o modo escuro (definido no <head> do index.html);
   o botão troca e grava a escolha do hóspede.
   O botão grava a escolha em data-theme no <html>. */
var darkMQ = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
function isDark(){
  var t = document.documentElement.getAttribute("data-theme");
  return t ? t === "dark" : !!(darkMQ && darkMQ.matches);
}
function themeBtn(){
  var b = $("#themeBtn"), dark = isDark(), lb = L[LANG].lbl;
  if(!b) return;
  b.innerHTML = (dark ? ART.ic.sun : ART.ic.moon)+'<span class="themebtn__lb">'+(dark ? lb.light : lb.dark)+'</span>';
  b.setAttribute("aria-label", dark ? lb.toLight : lb.toDark);
  b.title = dark ? lb.toLight : lb.toDark;
  var meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.content = dark ? "#0B1A1D" : "#008991";
}
$("#themeBtn").addEventListener("click", function(){
  var t = isDark() ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);
  try{ localStorage.setItem("guia_theme", t); }catch(e){}
  themeBtn();
});
if(darkMQ && darkMQ.addEventListener) darkMQ.addEventListener("change", themeBtn);
/* impressão / PDF sempre no modo claro (texto escuro no papel branco) */
var themeBeforePrint;
window.addEventListener("beforeprint", function(){
  themeBeforePrint = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", "light");
});
window.addEventListener("afterprint", function(){
  if(themeBeforePrint) document.documentElement.setAttribute("data-theme", themeBeforePrint);
});

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

/* ================= PULSADA DOS CARTÕES =================
   Na primeira vez que o menu entra na tela, os cartões pulsam uma vez, em onda. */
var pulsed = false;
(function(){
  var grid = $("#menuGrid");
  if(!grid || !("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function(entries){
    if(pulsed || !entries.some(function(en){ return en.isIntersecting; })) return;
    pulsed = true; io.disconnect();
    [].forEach.call(grid.querySelectorAll(".mcard"), function(c, i){
      c.classList.add("pulse");
      setTimeout(function(){ c.classList.remove("pulse"); }, i * 110 + 1400);
    });
  }, {threshold:.15});
  io.observe(grid);
})();

/* ================= POP-UP DO ECOTOUCH (link no cartão das regras) =================
   Mostra a mesma explicação da seção "Entrada e saída", sem sair do lugar. */
var pop = document.createElement("dialog");
pop.className = "pop";
document.body.appendChild(pop);
document.addEventListener("click", function(e){
  var b = e.target.closest ? e.target.closest("[data-pop]") : null;
  if(!b) return;
  var d = L[LANG];
  pop.innerHTML = '<button class="pop__x" type="button" aria-label="'+d.lbl.close+'" title="'+d.lbl.close+'">'+
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg></button>'+
    '<h3 class="subh">'+d.eco.title+'</h3>'+ecoBlock(d);
  pop.showModal();
});
pop.addEventListener("click", function(e){
  if(e.target === pop || (e.target.closest && e.target.closest(".pop__x"))) pop.close();
});

/* ================= TÓPICOS QUE "ABREM" NO LUGAR =================
   Clicar num tópico (cartão do menu, chip da navegação, barra do celular) não rola mais a página:
   a seção abre por cima, crescendo a partir do próprio botão clicado, e fecha encolhendo de volta nele.
   O botão voltar do celular também fecha. */
var sheet = document.createElement("div");
sheet.className = "sheet"; sheet.hidden = true;
sheet.innerHTML = '<div class="sheet__bg"></div>'+
  '<div class="sheet__panel" role="dialog" aria-modal="true" tabindex="-1">'+
    '<button class="sheet__x" type="button"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">'+
      '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg></button>'+
    '<div class="sheet__in"></div></div>';
document.body.appendChild(sheet);
var sPanel = sheet.querySelector(".sheet__panel"), sIn = sheet.querySelector(".sheet__in"),
    sX = sheet.querySelector(".sheet__x"), sBg = sheet.querySelector(".sheet__bg");
var cur = null, closing = false;
var EASE = "cubic-bezier(.2,.85,.25,1)";
function calmMotion(){ return window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches; }
function panelRound(){ return window.innerWidth >= 900 ? "28px" : "0px"; }
/* recorte do painel do tamanho exato do botão clicado, para a seção "nascer" dele */
function clipAt(el){
  var p = sPanel.getBoundingClientRect(), r = el && el.isConnected ? el.getBoundingClientRect() : null;
  if(!r || !r.width || r.bottom < 0 || r.top > window.innerHeight)
    return "inset(42% 30% 42% 30% round 24px)";
  return "inset("+Math.max(0, r.top - p.top)+"px "+Math.max(0, p.right - r.right)+"px "+
    Math.max(0, p.bottom - r.bottom)+"px "+Math.max(0, r.left - p.left)+"px round 22px)";
}
function putBack(){
  if(!cur) return;
  if(cur.holder.parentNode){ cur.holder.parentNode.insertBefore(cur.sec, cur.holder); cur.holder.remove(); }
  else cur.sec.remove();
}
function openSheet(sec, origin){
  if(cur){   /* já aberto: troca o conteúdo com um fade rápido */
    putBack();
    cur.sec = sec; cur.holder = document.createComment("sec");
    sec.parentNode.insertBefore(cur.holder, sec); sIn.appendChild(sec);
    sPanel.scrollTop = 0;
    if(!calmMotion()) sIn.animate([{opacity:0, transform:"translateY(14px)"}, {opacity:1, transform:"none"}], {duration:320, easing:EASE});
    return;
  }
  var holder = document.createComment("sec");
  sec.parentNode.insertBefore(holder, sec);
  sIn.appendChild(sec);
  cur = {sec:sec, holder:holder, origin:origin, pushed:false};
  sX.setAttribute("aria-label", L[LANG].lbl.close); sX.title = L[LANG].lbl.close;
  sPanel.setAttribute("aria-label", (sec.querySelector("h2") || {}).textContent || "");
  sheet.hidden = false;
  document.documentElement.classList.add("sheet-open");
  sPanel.scrollTop = 0;
  if(calmMotion()){
    sheet.animate([{opacity:0}, {opacity:1}], {duration:180});
  } else {
    sBg.animate([{opacity:0}, {opacity:1}], {duration:420, easing:"ease-out"});
    sPanel.animate([{clipPath:clipAt(origin)}, {clipPath:"inset(0px 0px 0px 0px round "+panelRound()+")"}],
      {duration:580, easing:EASE});
    sIn.animate([{opacity:0, transform:"translateY(26px) scale(.985)"}, {opacity:1, transform:"none"}],
      {duration:460, delay:160, easing:EASE, fill:"backwards"});
    sX.animate([{opacity:0, transform:"scale(.6) rotate(-90deg)"}, {opacity:1, transform:"none"}],
      {duration:380, delay:260, easing:EASE, fill:"backwards"});
  }
  try{ history.pushState({sheet:sec.id}, "", "#"+sec.id); cur.pushed = true; }catch(e){}
  sPanel.focus({preventScroll:true});
}
function finishClose(){
  var origin = cur && cur.origin;
  putBack();
  cur = null; closing = false;
  sheet.hidden = true;
  document.documentElement.classList.remove("sheet-open");
  if(origin && origin.isConnected) try{ origin.focus({preventScroll:true}); }catch(e){}
}
function closeSheet(fromHistory){
  if(!cur || closing) return;
  if(!fromHistory && cur.pushed){ cur.pushed = false; history.back(); return; }   /* o popstate termina o fechamento */
  closing = true;
  if(calmMotion()){ finishClose(); return; }
  sIn.animate([{opacity:1, transform:"none"}, {opacity:0, transform:"scale(.96)"}], {duration:300, delay:90, easing:"ease-in", fill:"forwards"});
  sBg.animate([{opacity:1}, {opacity:0}], {duration:420, easing:"ease-in", fill:"forwards"});
  var a = sPanel.animate([{clipPath:"inset(0px 0px 0px 0px round "+panelRound()+")"}, {clipPath:clipAt(cur.origin)}],
    {duration:440, easing:"cubic-bezier(.5,0,.75,.2)", fill:"forwards"});
  a.onfinish = function(){ finishClose(); sIn.getAnimations().concat(sBg.getAnimations(), sPanel.getAnimations()).forEach(function(x){ x.cancel(); }); };
}
/* troca de idioma ou impressão com um tópico aberto: fecha na hora, sem animação */
function sheetReset(){
  if(!cur) return;
  var pushed = cur.pushed;
  closing = false; finishClose();
  if(pushed) try{ history.replaceState(null, "", location.pathname + location.search); }catch(e){}
}
window.addEventListener("popstate", function(){
  if(cur && !(history.state && history.state.sheet)){ cur.pushed = false; closeSheet(true); }
});
window.addEventListener("beforeprint", sheetReset);
sX.addEventListener("click", function(){ closeSheet(); });
sBg.addEventListener("click", function(){ closeSheet(); });
document.addEventListener("keydown", function(e){ if(e.key === "Escape" && cur && !pop.open) closeSheet(); });
document.addEventListener("click", function(e){
  var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
  if(!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
  var id = a.getAttribute("href").slice(1);
  if(id === "top"){ if(cur){ e.preventDefault(); closeSheet(); } return; }
  var sec = id && document.getElementById(id);
  if(!sec || !sec.classList.contains("sec")) return;
  e.preventDefault();
  openSheet(sec, a);
});

/* ================= ONDAS SINCRONIZADAS =================
   Todas as camadas de ondas andam no mesmo compasso, e o desenho do cartão do Wi-Fi começa exatamente
   onde está o do fundo da seção, então as ondas passam por dentro do cartão sem quebrar. */
function syncWaves(){
  [].forEach.call(document.querySelectorAll(".wifi"), function(w){
    var host = w.closest(".sec, .hero, footer") || document.body;
    var r = w.getBoundingClientRect(), h = host.getBoundingClientRect();
    w.style.setProperty("--wx", (h.left - r.left) + "px");
    w.style.setProperty("--wy", (h.top - r.top) + "px");
  });
  if(document.getAnimations) document.getAnimations().forEach(function(a){
    if(a.animationName && a.animationName.indexOf("wave") === 0) a.startTime = 0;
  });
}
window.addEventListener("resize", syncWaves);
window.addEventListener("load", syncWaves);

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
