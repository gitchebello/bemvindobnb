/* =========================================================
   ART — ícones e ilustrações em SVG, estilo "linha fofa":
   traço grosso e arredondado, sem preenchimento, em 2 tons
   (azul-petróleo para a forma + turquesa para os detalhes).
   ========================================================= */
(function(){
  var T="#008991", TD="#00646E", S="#F6DA84", M="#95E4C0", MD="#5CC79B", W="#FFFFFF";
  var P="#143A45", A="#10A89E", C="#FF7A5C";   /* forma · detalhe · destaque */

  function s(vb, inner){ return '<svg viewBox="'+vb+'" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+inner+'</svg>'; }
  /* desenho em linha: p = forma principal, a = detalhes, c = destaque coral */
  function line(vb, sw, p, a, c, bg){
    return s(vb, (bg||"")+
      '<g stroke-linecap="round" stroke-linejoin="round" stroke-width="'+sw+'">'+
        '<g class="a-p" stroke="'+P+'">'+(p||"")+'</g>'+
        '<g class="a-a" stroke="'+A+'">'+(a||"")+'</g>'+
        (c?'<g class="a-c" stroke="'+C+'">'+c+'</g>':'')+
      '</g>');
  }

  var ART = { sec:{}, pic:{}, ic:{} };

  /* ---------------- Marca (topo) ---------------- */
  ART.mark = s("0 0 48 48",
    '<rect width="48" height="48" rx="14" fill="'+T+'"/>'+
    '<g stroke="'+W+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">'+
      '<circle cx="31" cy="16" r="5"/>'+
      '<path d="M9 30c3-3 5.5-3 8 0s5 3 7.5 0 5-3 7.5 0 5 3 7 0"/>'+
      '<path d="M9 37c3-3 5.5-3 8 0s5 3 7.5 0 5-3 7.5 0 5 3 7 0" opacity=".6"/></g>');

  /* ================= ILUSTRAÇÕES DE SEÇÃO (120x96) ================= */
  function sec(p, a, c){
    return line("0 0 120 96", 3.4, p, a, c,
      '<circle cx="62" cy="50" r="40" fill="#E9F8F3"/>');
  }

  ART.sec.checkin = sec(
    '<path d="M40 86V22a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v64"/><path d="M30 86h60"/>',
    '<rect x="54" y="40" width="14" height="20" rx="3"/><path d="M58 46h.01M64 46h.01M58 51h.01M64 51h.01M58 56h.01M64 56h.01"/>',
    '<path d="M96 22v10M91 27h10M24 40v6M21 43h6"/>');

  ART.sec.wifi = sec(
    '<rect x="34" y="60" width="56" height="18" rx="7"/><path d="M42 78v6M82 78v6"/>',
    '<path d="M40 38a32 32 0 0 1 44 0"/><path d="M48 46a20 20 0 0 1 28 0"/><path d="M62 54h.01"/>',
    '<path d="M44 69h.01M52 69h.01"/>');

  ART.sec.regras = sec(
    '<rect x="38" y="18" width="48" height="66" rx="8"/><path d="M52 18v-4h20v4"/>',
    '<path d="M47 36l4 4 7-8M47 54l4 4 7-8M47 72l4 4 7-8"/>',
    '<path d="M64 36h13M64 54h13M64 72h13"/>');

  ART.sec.transporte = sec(
    '<rect x="38" y="16" width="48" height="56" rx="14"/><path d="M38 46h48"/><path d="M46 72l-8 12M78 72l8 12M34 84h56"/>',
    '<rect x="46" y="24" width="32" height="14" rx="5"/>',
    '<path d="M50 58h.01M74 58h.01"/>');

  ART.sec.passeios = sec(
    '<path d="M18 84c4-14 14-22 26-22s22 8 26 22"/><path d="M44 62V38M30 38h28"/><circle cx="44" cy="31" r="4"/>',
    '<path d="M70 84c1-22 7-36 16-36s14 14 15 36"/><path d="M62 30l40 12"/><path d="M80 35v4"/><rect x="75" y="39" width="10" height="7" rx="2"/>',
    '<path d="M14 84h96"/>');

  ART.sec.comer = sec(
    '<circle cx="58" cy="54" r="24"/><circle cx="58" cy="54" r="14"/><path d="M24 30v14a6 6 0 0 0 6 6v32M24 30v10M30 30v10"/>',
    '<path d="M96 30c-5 4-6 10-6 18 0 4 2 6 6 6v28"/>',
    '<path d="M52 50c2-3 6-3 8 0"/>');

  ART.sec.dicas = sec(
    '<path d="M40 50a24 24 0 0 1 48 0Z"/><path d="M64 50v34"/><path d="M52 50c0-14 5-22 12-24M76 50c0-14-5-22-12-24"/>',
    '<path d="M22 86c5-4 9-4 14 0s9 4 14 0 9-4 14 0 9 4 14 0 9-4 14 0 9 4 14 0"/>',
    '<circle cx="28" cy="26" r="7"/><path d="M28 12v3M28 37v3M14 26h3M39 26h3"/>');

  ART.sec.saude = sec(
    '<path d="M62 84S30 64 30 42a16 16 0 0 1 32-6 16 16 0 0 1 32 6c0 22-32 42-32 42Z"/>',
    '<path d="M62 42v18M53 51h18"/>',
    '<path d="M16 60h10l4-8 6 16 4-8h6"/>');

  ART.sec.mapa = sec(
    '<path d="M28 28l20-8 24 8 22-8v56l-22 8-24-8-20 8Z"/><path d="M48 20v56M72 28v56"/>',
    '<path d="M86 52s-9-8-9-15a9 9 0 0 1 18 0c0 7-9 15-9 15Z"/><circle cx="86" cy="37" r="3"/>',
    '<path d="M34 60c6-2 8 4 14 2"/>');

  ART.sec.numeros = sec(
    '<path d="M36 20h10l6 16-7 4a40 40 0 0 0 19 19l4-7 16 6v10a6 6 0 0 1-6 6A54 54 0 0 1 30 26a6 6 0 0 1 6-6Z"/>',
    '<path d="M70 14h24a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-14l-8 6v-6h-2a6 6 0 0 1-6-6V20a6 6 0 0 1 6-6Z"/>',
    '<path d="M76 26h.01M82 26h.01M88 26h.01"/>');

  ART.sec.feedback = sec(
    '<path d="M60 18l7 15 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2Z"/>',
    '<path d="M26 74l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/><path d="M98 66l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>',
    '<path d="M60 92s-8-5-8-10a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5-8 10-8 10Z"/>');

  /* rodapé: coqueiro, sol e mar */
  ART.foot = line("0 0 120 96", 3.4,
    '<path d="M50 88c-2-20 0-36 8-48"/><path d="M58 40c-10-8-22-8-30-2M58 40c4-12 14-18 26-16M58 40c10-6 22-4 28 4M58 40c-4-10-12-16-22-16"/>',
    '<path d="M14 88c5-4 9-4 14 0s9 4 14 0 9-4 14 0 9 4 14 0 9-4 14 0 9 4 14 0 9-4 14 0"/>',
    '<circle cx="92" cy="20" r="8"/>',
    '<circle cx="60" cy="52" r="40" fill="#E9F8F3"/>');

  /* ================= PICTOGRAMAS (48x48) ================= */
  var P2 = ART.pic;
  function pic(p, a, c, bg){
    return line("0 0 48 48", 2.6, p, a, c, '<circle cx="24" cy="24" r="23" fill="'+(bg||"#E6F7F2")+'"/>');
  }

  /* --- transporte --- */
  P2.metro = pic('<rect x="14" y="9" width="20" height="25" rx="7"/><path d="M14 22h20M18 34l-3 5M30 34l3 5"/>',
    '<rect x="18" y="13" width="12" height="5" rx="2"/>', '<path d="M19 28h.01M29 28h.01"/>');
  P2.bus = pic('<rect x="10" y="10" width="28" height="24" rx="6"/><path d="M10 25h28"/>',
    '<path d="M15 34v4M33 34v4M15 16h18"/>', '<path d="M16 30h.01M32 30h.01"/>');
  P2.app = pic('<path d="M10 30l3-9a3 3 0 0 1 3-2h16a3 3 0 0 1 3 2l3 9v5H10Z"/><path d="M13 35v3M35 35v3"/>',
    '<path d="M24 6s-5 4-5 7a5 5 0 0 0 10 0c0-3-5-7-5-7Z"/>', '<path d="M15 29h.01M33 29h.01"/>', "#FFF1D6");
  P2.taxi = pic('<path d="M10 30l3-9a3 3 0 0 1 3-2h16a3 3 0 0 1 3 2l3 9v5H10Z"/><path d="M13 35v3M35 35v3"/>',
    '<path d="M19 19v-5h10v5"/>', '<path d="M15 29h.01M33 29h.01"/>', "#FFF1D6");
  P2.walk = pic('<circle cx="26" cy="10" r="3.4"/><path d="M26 16l-5 9 5 5v10M26 30l6 4 2 6M21 25l-6 3"/>',
    '<path d="M8 41c3-2 6-2 9 0"/>');
  P2.vlt = pic('<rect x="10" y="13" width="28" height="21" rx="6"/><path d="M24 13V7M18 7h12M15 38l4-4M33 38l-4-4"/>',
    '<path d="M15 19h7v6h-7zM26 19h7v6h-7z"/>');
  P2.brt = pic('<rect x="14" y="12" width="26" height="22" rx="6"/><path d="M14 26h26M18 34v4M36 34v4"/>',
    '<path d="M5 17h5M3 24h7M5 31h5"/>');
  P2.bike = pic('<circle cx="14" cy="31" r="7"/><circle cx="34" cy="31" r="7"/><path d="M14 31l7-12h8l5 12M21 19h6"/>',
    '<circle cx="30" cy="12" r="2.4"/>');
  P2.scooter = pic('<circle cx="12" cy="35" r="4.5"/><circle cx="36" cy="35" r="4.5"/><path d="M16 33h14l2-21"/><path d="M27 12h9"/>',
    '<path d="M14 22l5-6h-4l5-6"/>', '<path d="M32 35h.01"/>');

  /* --- comida e bebida --- */
  P2.coco = pic('<circle cx="22" cy="28" r="12"/>', '<path d="M15 21c4-2 10-2 14 0"/><path d="M26 18l11-10"/>', '<path d="M37 8l2 2"/>', "#FFF1D6");
  P2.drink = pic('<path d="M12 12h24L24 27Z"/><path d="M24 27v11M17 38h14"/>', '<path d="M17 17h14"/>', '<circle cx="34" cy="11" r="3.4"/>');
  P2.beer = pic('<rect x="12" y="15" width="19" height="24" rx="4"/><path d="M31 20h4a4 4 0 0 1 0 8h-4"/>',
    '<path d="M12 20h19M18 25v9M24 25v9"/>', '<path d="M14 15c0-4 4-5 6-3 2-3 7-2 7 1"/>', "#FFF1D6");
  P2.coffee = pic('<path d="M12 19h21v9a10 10 0 0 1-21 0Z"/><path d="M33 22h3a4 4 0 0 1 0 8h-3M10 41h26"/>',
    '<path d="M18 9c0 3 3 3 3 6M25 9c0 3 3 3 3 6"/>');
  /* ícones próprios de cada restaurante (cada um combina com o tipo de lugar) */
  P2.wine = pic('<path d="M17 9h14c0 9-3 15-7 15s-7-6-7-15Z"/><path d="M24 24v12M18 38h12"/>', '<path d="M17.6 15h12.8"/>', '<circle cx="36" cy="30" r="2"/><circle cx="39" cy="34" r="2"/><circle cx="35" cy="35" r="2"/>', "#F6E7F0");
  P2.sandwich = pic('<path d="M9 22c0-6 7-10 15-10s15 4 15 10Z"/><path d="M10 32h28v3a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3Z"/>',
    '<path d="M9 26c2-2 4 2 6 0s4 2 6 0 4 2 6 0 4 2 6 0 4 2 6 0"/>', '<path d="M11 29h26"/>', "#FFF1D6");
  P2.bread = pic('<path d="M9 26a8 8 0 0 1 8-8h14a8 8 0 0 1 8 8v8a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3Z"/>',
    '<path d="M17 23l3 6M23 22l3 6M29 23l3 6"/>', '', "#FFF1D6");
  P2.croissant = pic('<path d="M7 31c2-10 10-17 17-17s15 7 17 17c-4 2-8 1-10-2-2 4-12 4-14 0-2 3-6 4-10 2Z"/>',
    '<path d="M19 16l3 11M29 16l-3 11M24 14v12"/>', '', "#FFF1D6");
  P2.icecream = pic('<path d="M16 23l8 17 8-17"/>', '<path d="M14 23h20M16 22a6 6 0 0 1 3-10 7 7 0 0 1 10 0 6 6 0 0 1 3 10"/>',
    '<path d="M20 29h8M22 34h4M26 8c1-2 3-3 5-2"/>', "#FDE8EE");
  P2.chicken = pic('<path d="M29 9c6 0 11 4 11 10 0 7-6 11-12 11-3 0-5-1-6-2"/><path d="M29 9c-6 0-10 5-9 11 0 3 1 6 2 8"/>',
    '<path d="M22 28l-7 7M15 35l-2.5 1a2.5 2.5 0 1 1-1.5-3.5 2.5 2.5 0 1 1 3.5-1.5Z"/>', '<path d="M30 15c3 0 5 2 5 5"/>', "#FFF1D6");
  P2.cake = pic('<path d="M10 26h28v12H10Z"/><path d="M14 26v-6h20v6"/>', '<path d="M10 31c3 2 5 2 7 0s5 2 7 0 5 2 7 0 5 2 7 0"/>',
    '<path d="M24 20v-6M24 9.5c-1.4 1.2-1.4 2.6 0 3.6 1.4-1 1.4-2.4 0-3.6Z"/>', "#FDE8EE");
  P2.shrimp = pic('<path d="M34 13c-10-2-21 4-21 14 0 6 5 10 12 10"/><path d="M34 13c4 2 6 6 5 10-1 5-6 8-11 8"/>',
    '<path d="M23 15l2 6M17 20l5 3M14 27h6M18 33l4-3"/>', '<path d="M25 37l5 3-1-6M34 13c3-3 6-4 8-3"/>', "#FFE9E3");
  P2.pot = pic('<path d="M10 22h28v10a7 7 0 0 1-7 7H17a7 7 0 0 1-7-7Z"/><path d="M10 25H6M38 25h4"/>',
    '<path d="M12 22a12 6 0 0 1 24 0M24 16v-2"/>', '<path d="M18 11c0-2 2-2 2-4M28 11c0-2 2-2 2-4"/>', "#FFF1D6");
  P2.skewer = pic('<path d="M8 40L40 8"/>', '<rect x="12" y="25" width="9" height="9" rx="2.5" transform="rotate(45 16.5 29.5)"/><rect x="26" y="11" width="9" height="9" rx="2.5" transform="rotate(45 30.5 15.5)"/>',
    '<rect x="19" y="18" width="9" height="9" rx="2.5" transform="rotate(45 23.5 22.5)"/><path d="M10 44c1-2 3-2 4-4"/>', "#FFE9E3");
  P2.toast = pic('<g transform="rotate(-14 16 24)"><path d="M12 10h8l-1 12a3 3 0 0 1-6 0Z"/><path d="M16 25v11M12 38h8"/></g><g transform="rotate(14 32 24)"><path d="M28 10h8l-1 12a3 3 0 0 1-6 0Z"/><path d="M32 25v11M28 38h8"/></g>',
    '<path d="M24 5v4M19.5 7l2 2.5M28.5 7l-2 2.5"/>', '<g transform="rotate(-14 16 24)"><path d="M13 15h6"/></g><g transform="rotate(14 32 24)"><path d="M29 15h6"/></g>', "#FFF5D6");
  P2.juice = pic('<path d="M14 16h20l-2 21a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3Z"/>', '<path d="M26 16l4-10h5"/>',
    '<path d="M31 16a5 5 0 0 1 9-3M16 24h16"/>', "#E4F8EE");
  P2.music = pic('<path d="M18 34V12l18-4v22"/><circle cx="14" cy="34" r="4"/><circle cx="32" cy="30" r="4"/>', '<path d="M18 18l18-4"/>',
    '<path d="M6 16c2-1 3-3 3-5M42 38c-2 0-3 2-3 4"/>', "#F1E9FB");
  P2.bottle = pic('<path d="M21 6h6v6c0 3 5 5 5 10v16a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3V22c0-5 5-7 5-10Z"/>', '<path d="M16 25h16v8H16Z"/>',
    '<path d="M21 9h6M37 14v3M40 20v2"/>', "#FFF1D6");
  P2.fish = pic('<path d="M8 24c6-8 18-10 26 0-8 10-20 8-26 0Z"/><path d="M34 24l7-6v12Z"/>', '<path d="M20 19c2 3 2 7 0 10"/>',
    '<path d="M14 22.5h.01"/>', "#E3F3FB");
  P2.sushi = pic('<path d="M10 31c0-4 4-6 14-6s14 2 14 6-4 6-14 6-14-2-14-6Z"/>', '<path d="M11 28c2-6 7-9 14-9s11 3 12 8"/>',
    '<path d="M23 20v16M6 12l26 5M8 8l26 7"/>', "#FFE9E3");
  P2.pizza = pic('<path d="M24 41L9 12c9-4 21-4 30 0Z"/>', '<path d="M11 16c8-3 18-3 26 0"/>',
    '<circle cx="21" cy="22" r="2.3"/><circle cx="28" cy="25" r="2.3"/><circle cx="24" cy="31" r="2"/>', "#FFF1D6");
  P2.bowl = pic('<path d="M8 25h32a16 13 0 0 1-32 0Z"/><path d="M18 38h12"/>', '<path d="M26 21L38 7M30 22L42 10"/>',
    '<path d="M15 19c0-2 2-2 2-4M21 19c0-2 2-2 2-4"/>', "#FFE9E3");
  P2.tea = pic('<path d="M12 20h20v6a10 10 0 0 1-20 0Z"/><path d="M32 22h3a3 3 0 0 1 0 6h-3M8 38h28"/>', '<path d="M18 9c0 3 3 3 3 6M25 9c0 3 3 3 3 6"/>',
    '<path d="M17 27h10"/>', "#FDE8EE");
  P2.leaf = pic('<path d="M36 11C20 11 11 19 11 30c0 3 1 6 1 6s15-1 21-9 3-16 3-16Z"/>', '<path d="M12 37c6-9 13-16 22-22"/>');
  P2.kiosk = pic('<path d="M9 18l4-8h22l4 8Z"/><path d="M12 18v20M36 18v20M9 38h30"/>',
    '<path d="M16 29h16"/>', '<circle cx="24" cy="24" r=".01"/><path d="M13 18c0 2 2 3 3.5 3S20 20 20 18c0 2 2 3 4 3s4-1 4-3c0 2 1.5 3 3.5 3S35 20 35 18"/>', "#FFF1D6");
  P2.mall = pic('<path d="M12 17h24l-2 22H14Z"/>', '<path d="M18 17v-3a6 6 0 0 1 12 0v3"/>', '<path d="M20 26c2 2 6 2 8 0"/>');
  P2.cart = pic('<path d="M8 12h5l4 18h18l3-12H15"/>', '<circle cx="19" cy="36" r="2.6"/><circle cx="32" cy="36" r="2.6"/>', '<path d="M21 23h11"/>');

  /* --- regras principais (o risco é coral) --- */
  P2.nosmoke = pic('<rect x="10" y="25" width="22" height="6" rx="2"/><path d="M32 25v6"/>',
    '<path d="M28 21c0-3-3-3-3-6s3-3 3-6"/>', '<circle cx="24" cy="24" r="19"/><path d="M11 37 37 11"/>', "#FFF1D6");
  P2.noparty = pic('<path d="M13 37l6-18 13 13Z"/>', '<path d="M27 15l3-4M33 21l4-2M30 9h.01M38 14h.01"/>',
    '<circle cx="24" cy="24" r="19"/><path d="M11 37 37 11"/>', "#FFF1D6");
  P2.quiet = pic('<path d="M31 30a12 12 0 1 1-13-17 9 9 0 0 0 13 17Z"/>', '<path d="M31 9h6l-6 7h6"/>', '<path d="M38 22h.01"/>');
  P2.people = pic('<circle cx="17" cy="16" r="4.4"/><circle cx="31" cy="16" r="4.4"/><path d="M8 34c0-5 4-8 9-8s9 3 9 8M22 34c0-5 4-8 9-8s9 3 9 8"/>',
    '<path d="M20 41h8"/>');
  P2.toilet = pic('<rect x="27" y="8" width="11" height="14" rx="2.5"/><path d="M9 22h29c0 7-5 11-12 11h-6C14 33 9 29 9 22Z"/><path d="M17 33l-1.5 6h15L29 33"/>',
    '<path d="M30 12.5h4M14 26.5h17"/>', '<path d="M9 8l7 7M16 8l-7 7"/>', "#FFF1D6");
  P2.ecotouch = pic('<rect x="14" y="7" width="20" height="34" rx="3"/><path d="M20 35.5h8"/>',
    '<circle cx="24" cy="18" r="6.5"/><path d="M24 14.2v3.6M21.3 15.6a3.8 3.8 0 1 0 5.4 0"/><path d="M19.5 27.5h9"/>');

  /* marcador de "resumo": solzinho */
  P2.sum = line("0 0 48 48", 2.6, '<path d="M15 35c2-5 6-8 9-8s7 3 9 8"/>',
    '<circle cx="24" cy="20" r="6"/><path d="M24 8v2M24 30v0M12 20h2M34 20h2M15.5 11.5l1.4 1.4M31.1 11.5l-1.4 1.4"/>',
    '<path d="M11 40c3-2 5-2 8 0s5 2 8 0 5-2 8 0"/>', '<circle cx="24" cy="24" r="23" fill="#FFFFFF"/>');

  /* saúde */
  P2.hosp = pic('<rect x="10" y="14" width="28" height="25" rx="5"/><path d="M16 14V9h16v5"/>',
    '<path d="M24 20v13M17.5 26.5h13"/>', null, "#FFE9E3");
  P2.pharma = pic('<rect x="12" y="16" width="24" height="23" rx="6"/><path d="M15 16v-5h18v5"/>',
    '<path d="M24 22v11M18.5 27.5h11"/>');

  /* ================= ÍCONES DE LINHA (24x24) =================
     forma na cor do texto; detalhe em --ic-accent (ver style.css) */
  function ic(p, a){
    return s("0 0 24 24", '<g stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+
      '<g stroke="currentColor">'+p+'</g>'+
      (a?'<g class="ica" style="stroke:var(--ic-accent,'+A+')">'+a+'</g>':'')+'</g>');
  }
  /* registro do chuveiro (manopla de 4 pontas, vista de frente): col = cor (vermelho quente / azul frio) */
  ART.tap = function(col){
    return s("0 0 48 48", '<circle cx="24" cy="24" r="23" fill="'+col+'" fill-opacity=".14"/>'+
      '<g stroke="'+col+'" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">'+
        '<circle cx="24" cy="24" r="16.5" stroke-width="2"/>'+
        '<path transform="rotate(-15 24 24) translate(24 24) scale(.72) translate(-24 -24)" vector-effect="non-scaling-stroke" fill="'+col+'" fill-opacity=".22" d="M21.5 12A2.5 2.5 0 0 1 26.5 12Q29 19 36 21.5A2.5 2.5 0 0 1 36 26.5Q29 29 26.5 36A2.5 2.5 0 0 1 21.5 36Q19 29 12 26.5A2.5 2.5 0 0 1 12 21.5Q19 19 21.5 12Z"/>'+
        '<circle cx="24" cy="24" r="2.4"/></g>');
  };

  /* lixo: cesto de reciclagem e portinha do duto (col = cor) */
  ART.bin = function(col){
    return s("0 0 48 48", '<circle cx="24" cy="24" r="23" fill="'+col+'" fill-opacity=".16"/>'+
      '<g stroke="'+col+'" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">'+
        '<path d="M12 15h24M20 15v-3h8v3M15 15l2 23h14l2-23M21.5 21v11M26.5 21v11"/></g>');
  };
  ART.chute = function(col){
    return s("0 0 48 48", '<circle cx="24" cy="24" r="23" fill="'+col+'" fill-opacity=".16"/>'+
      '<g stroke="'+col+'" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">'+
        '<rect x="13" y="12" width="22" height="20" rx="3"/><path d="M13 18h22M28 24h3M24 35v5M21 37.5l3 3 3-3"/></g>');
  };

  /* sofá-cama visto de lado: os 4 passos para abrir */
  (function(){
    var bg='<rect x="2" y="2" width="92" height="60" rx="14" fill="#E9F8F3"/>';
    var back='<rect x="14" y="10" width="13" height="36" rx="4"/>', legs1='<path d="M19 46v5M64 46v5"/>', legs2='<path d="M19 46v5M84 46v5"/>';
    var baseIn='<rect x="27" y="38" width="41" height="8" rx="2"/>', baseOut='<rect x="27" y="38" width="61" height="8" rx="2"/>';
    var seat='<rect x="27" y="27" width="41" height="11" rx="3"/>';
    ART.sofa = [
      line("0 0 96 64", 2.6, back+baseIn+legs1, seat+'<rect x="28" y="13" width="11" height="14" rx="4"/><path d="M64 42h4"/>',
        '<path d="M73 42h15M83 37l5 5-5 5"/>', bg),
      line("0 0 96 64", 2.6, back+baseOut+legs2, seat+'<rect x="50" y="7" width="12" height="12" rx="4" transform="rotate(-18 56 13)"/>',
        '<path d="M34 23l9-9M37 14h6v6"/>', bg),
      line("0 0 96 64", 2.6, back+baseOut+legs2, '<rect x="27" y="30" width="31" height="8" rx="3"/><rect x="58" y="22" width="29" height="8" rx="3" transform="rotate(-38 58 30)"/>',
        '<path d="M64 8a24 24 0 0 1 22 20M81 25l5 4 3-6"/>', bg),
      line("0 0 96 64", 2.6, back+baseOut+legs2, '<rect x="27" y="30" width="61" height="8" rx="3"/><rect x="30" y="22" width="15" height="8" rx="4"/>',
        '<path d="M64 11h7l-7 8h7M76 5h5l-5 6h5"/>', bg)
    ];
  })();

  /* registro em cruz da pia (vista de frente), letra no centro (Q/F); seta de cima: abre girando para a direita; de baixo: fecha para a esquerda */
  ART.cross = function(col, letter, label, label2){
    var arms = "", a, x, y;
    for(var k=0;k<4;k++){ a=(20+k*90)*Math.PI/180; x=(32+13*Math.cos(a)).toFixed(1); y=(52+13*Math.sin(a)).toFixed(1);
      arms += '<path d="M32 52L'+x+' '+y+'"/>'; }
    return s("0 0 64 108", '<circle cx="32" cy="52" r="19" fill="'+col+'" fill-opacity=".14"/>'+
      '<text x="32" y="11" text-anchor="middle" font-size="10.5" font-weight="900" fill="'+col+'">'+label+'</text>'+
      '<g stroke="'+col+'" stroke-linecap="round" stroke-linejoin="round" fill="none">'+
        '<g stroke-width="4.2">'+arms+'</g>'+
        '<g class="anim-cw"><path stroke-width="3.2" d="M6.6 34.2A31 31 0 0 1 57.4 34.2"/><path stroke-width="3.2" d="M57.4 28.2 57.4 34.2 51.8 32.1"/></g>'+
        '<g class="anim-ccw" opacity=".7"><path stroke-width="3.2" d="M57.4 92A31 31 0 0 0 6.6 92"/><path stroke-width="3.2" d="M6.6 86 6.6 92 12.2 89.9"/></g></g>'+
      '<text x="32" y="105" text-anchor="middle" font-size="10.5" font-weight="900" fill="'+col+'" opacity=".8">'+label2+'</text>'+
      '<circle cx="32" cy="52" r="6" fill="#fff" stroke="'+col+'" stroke-width="1.8"/>'+
      '<text x="32" y="55.6" text-anchor="middle" font-family="Georgia,serif" font-size="10" font-weight="700" fill="'+col+'">'+letter+'</text>');
  };

  /* cooktop: botão visto de frente; m = "press" (apertar), "turn" (girar) ou "flame" (acendeu) */
  ART.knob = function(m, col){
    var g = '<circle cx="24" cy="29" r="10"/><path d="M24 29v-7"/>';
    if(m==="press") g += '<path d="M24 4v10M19.5 9.5 24 14l4.5-4.5"/>';
    if(m==="turn")  g += '<path d="M35 15A15 15 0 0 0 13 15"/><path d="M13 9.5V15h5.5"/>';
    if(m==="press") g = '<g class="anim-press">'+g+'</g>';
    if(m==="turn")  g = '<circle cx="24" cy="29" r="10"/><g class="anim-turn"><path d="M24 29v-7"/></g><path d="M35 15A15 15 0 0 0 13 15"/><path d="M13 9.5V15h5.5"/>';
    if(m==="flame") g = '<g class="anim-flame"><path d="M24 8c4 5 9 9 9 16a9 9 0 0 1-18 0c0-4 2-6 4-8 0 3 1 5 3 6 0-5 0-9 2-14Z"/></g><path d="M14 40h20"/>';
    return s("0 0 48 48", '<circle cx="24" cy="24" r="23" fill="'+col+'" fill-opacity=".14"/>'+
      '<g stroke="'+col+'" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none">'+g+'</g>');
  };

  /* botão liga/desliga como no controle Roku: redondo escuro com o símbolo vermelho (col muda a cor do símbolo) */
  ART.pwr = function(col){
    return '<svg class="pwr" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.5" fill="#1E1E24"/>'+
      '<path d="M12 6.2v5.6M8.1 8.4a5.4 5.4 0 1 0 7.8 0" fill="none" stroke="'+(col||"#E8463A")+'" stroke-width="2.3" stroke-linecap="round"/></svg>';
  };

  /* microfone do controle Roku (comando de voz) */
  ART.mic = function(){
    return '<svg class="pwr" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.5" fill="#1E1E24"/>'+
      '<g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="9.3" y="5" width="5.4" height="9" rx="2.7" fill="#fff"/>'+
      '<path d="M7 11.5a5 5 0 0 0 10 0M12 16.5v2.5"/></g></svg>';
  };

  ART.ic = {
    arrow:  ic('<path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5"/>'),
    pin:    ic('<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/>', '<circle cx="12" cy="10" r="2.3"/>'),
    clock:  ic('<circle cx="12" cy="12" r="8.5"/>', '<path d="M12 7.5V12l3 2"/>'),
    money:  ic('<rect x="3" y="6.5" width="18" height="11" rx="3"/>', '<circle cx="12" cy="12" r="2.5"/>'),
    bulb:   ic('<path d="M12 3.5a5.8 5.8 0 0 0-3.4 10.5c.6.5.9 1.1.9 1.9v.6h5v-.6c0-.8.3-1.4.9-1.9A5.8 5.8 0 0 0 12 3.5z"/>', '<path d="M10 20h4"/>'),
    route:  ic('<circle cx="6" cy="18" r="2.3"/><circle cx="18" cy="6" r="2.3"/>', '<path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>'),
    info:   ic('<circle cx="12" cy="12" r="8.5"/>', '<path d="M12 11v5M12 7.8h.01"/>'),
    warn:   ic('<path d="M10.3 4.4 3 17a2 2 0 0 0 1.7 3h14.6a2 2 0 0 0 1.7-3L13.7 4.4a2 2 0 0 0-3.4 0z"/>', '<path d="M12 9.5v4M12 16.8h.01"/>'),
    check:  ic('<circle cx="12" cy="12" r="8.5"/>', '<path d="M8.5 12.2l2.4 2.4 4.6-5"/>'),
    phone:  ic('<path d="M6.5 3.5h2.8l1.8 4.6-2.1 1.2a11.5 11.5 0 0 0 5.7 5.7l1.2-2.1 4.6 1.8v2.8a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"/>', '<path d="M15 3.5a5.5 5.5 0 0 1 5.5 5.5"/>'),
    star:   ic('<path d="M12 3.5l2.5 5.2 5.6.8-4 3.9 1 5.6-5.1-2.7L7 19l1-5.6-4-3.9 5.6-.8z"/>'),
    print:  ic('<path d="M6.5 17.5H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.5M6.5 9.5V4h11v5.5"/>', '<path d="M6.5 14h11v7h-11z"/>'),
    ext:    ic('<path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>', '<path d="M14 4h6v6M20 4l-8.5 8.5"/>'),
    up:     ic('<path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/>'),
    sun:    ic('<circle cx="12" cy="12" r="4"/>', '<path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M5.6 18.4l1.1-1.1M17.3 6.7l1.1-1.1"/>'),
    key:    ic('<circle cx="8" cy="8" r="4"/><path d="M11 11l8.5 8.5"/>', '<path d="M16.5 16.5l2-2M19 19l1.5-1.5"/>'),
    wifi:   ic('<path d="M2.5 9a15 15 0 0 1 19 0M5.5 12.6a10.5 10.5 0 0 1 13 0"/>', '<path d="M8.6 16.2a6 6 0 0 1 6.8 0M12 19.6h.01"/>'),
    rules:  ic('<rect x="5" y="5" width="14" height="16" rx="2.5"/><path d="M9 5V3.5h6V5"/>', '<path d="M8.5 11.5l1.5 1.5 3-3M8.5 17h7"/>'),
    bus:    ic('<rect x="5" y="3.5" width="14" height="14" rx="3.5"/><path d="M8.5 17.5l-1.5 3M15.5 17.5l1.5 3"/>', '<path d="M5 10.5h14M9 14h.01M15 14h.01"/>'),
    sight:  ic('<path d="M3 19.5h18M4.5 19.5c.5-4 2-6.5 4-6.5s3.5 2.5 4 6.5M11.5 19.5c.6-6.5 2.6-10.5 5-10.5s4 4 4.5 10.5"/>', '<path d="M3.5 6.5 15 9"/>'),
    food:   ic('<path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v5M11 3v5"/>', '<path d="M18 3c-1.6 1.8-2.2 4-2.2 7 0 1.9.9 3 2.2 3v8"/>'),
    med:    ic('<path d="M12 20.5S3.5 14.8 3.5 9a4.4 4.4 0 0 1 8.5-1.6A4.4 4.4 0 0 1 20.5 9c0 5.8-8.5 11.5-8.5 11.5z"/>', '<path d="M12 9.5v5M9.5 12h5"/>'),
    map:    ic('<path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5z"/>', '<path d="M9 4.5v13M15 6.5v13"/>'),
    beach:  ic('<path d="M3.5 11a8.5 8.5 0 0 1 17 0zM12 11v8"/>', '<path d="M3.5 20.5c1.5-1 3-1 4.5 0s3 1 4 0 3-1 4.5 0 3 1 4 0"/>'),
    tv:     ic('<rect x="3" y="5" width="18" height="12" rx="2.5"/>', '<path d="M9 21h6M12 17v4"/>'),
    remote: ic('<rect x="8" y="2.5" width="8" height="19" rx="3"/>', '<circle cx="12" cy="8.5" r="1.8"/><path d="M10.5 13.5h.01M13.5 13.5h.01M10.5 16.5h.01M13.5 16.5h.01"/>'),
    sofa:   ic('<path d="M5 10V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><path d="M3 11.5a1.5 1.5 0 0 1 3 0V13h12v-1.5a1.5 1.5 0 0 1 3 0V17H3z"/>', '<path d="M5.5 17v2M18.5 17v2"/>'),
    ac:      ic('<rect x="3" y="5" width="18" height="8" rx="2"/><path d="M6 10h12"/>', '<path d="M7.5 16.5 6.5 19M12 16.5V20M16.5 16.5l1 2.5"/>'),
    shower:  ic('<path d="M6 21V7a3 3 0 0 1 6 0v1"/><path d="M9 8h6l-1 3h-4z"/>', '<path d="M10 14v1M12.5 14v2M15 14v1M11 18v1M14 18v1"/>'),
    pot:     ic('<path d="M5 10h14v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M3 10h2M19 10h2"/>', '<path d="M9.5 7c0-1 1-1 1-2.5M13.5 7c0-1 1-1 1-2.5"/>'),
    flame:   ic('<path d="M12 3c2.5 3 6 5.5 6 10a6 6 0 0 1-12 0c0-2.5 1.2-4 2.5-5 0 2 .7 3.2 2 3.8C10.5 8.5 10.8 5.5 12 3z"/>', '<path d="M10 17a2 2 0 0 0 4 0"/>'),
    fridge:  ic('<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 10h12"/>', '<path d="M9 6v2M9 13v3"/>'),
    faucet:  ic('<path d="M4 12h9a4 4 0 0 1 4 4v1M4 9v6"/><path d="M8 9V6M5.5 6h5"/>', '<path d="M17 20.2v.3"/>'),
    laundry: ic('<path d="M3 6h18M4 6v14M20 6v14"/>', '<path d="M7 6v4.5l2 1 2-1V6M14 6v6h4V6"/>'),
    lift:    ic('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M12 3v18"/>', '<path d="M7.5 10 9 8l1.5 2M13.5 14l1.5 2 1.5-2"/>'),
    trash:   ic('<path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13"/>', '<path d="M10.5 11v6M13.5 11v6"/>'),
    window:  ic('<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M4 12h16"/>', '<path d="M12 3v9M12 15v3"/>'),
    people: ic('<circle cx="9" cy="8" r="3"/><path d="M3.5 19c0-3.2 2.4-5.5 5.5-5.5s5.5 2.3 5.5 5.5"/>', '<circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c3 .1 5 2.2 5 5.4"/>'),
    help:   ic('<circle cx="12" cy="12" r="8.5"/>', '<path d="M9.6 9.5a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2-2.4 3.6M12 16.8h.01"/>'),
    dryer:  ic('<path d="M4 9a5 5 0 0 1 5-5h6a3 3 0 0 1 0 6H9.5"/><path d="M8 13.5 9 20h3l-.5-6.5"/>', '<path d="M18.5 5.5 21 4.5M18.5 8.5 21 9.5M9 7h.01"/>'),
    blind:  ic('<path d="M3 4h18M5 4v11h14V4"/>', '<path d="M5 8h14M5 11.5h14M12 15v4"/><circle cx="12" cy="20" r="1"/>'),
    plant:  ic('<path d="M7 14h10l-1.5 7h-7z"/>', '<path d="M12 14V9M12 9c0-3 2-5 5.5-5 0 3.5-2 5-5.5 5zM12 11c0-2.5-1.7-4-4.5-4 0 2.7 1.7 4 4.5 4z"/>'),
    water:  ic('<path d="M12 3.5s6 6.4 6 10.6a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/>', '<path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>'),
    lock:   ic('<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>', '<path d="M12 14.5v2.5"/>'),
    door:   ic('<path d="M6 21V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21"/>', '<path d="M3.5 21h17M14.5 12.5h.01"/>'),
    globe:  ic('<circle cx="12" cy="12" r="8.5"/>', '<path d="M3.5 12h17M12 3.5c2.4 2.5 3.6 5.3 3.6 8.5s-1.2 6-3.6 8.5c-2.4-2.5-3.6-5.3-3.6-8.5S9.6 6 12 3.5z"/>'),
    music:  ic('<path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>', '<path d="M9 9.5l11-2"/>'),
    shop:   ic('<path d="M5.5 8h13l-1 12.5h-11z"/>', '<path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>'),
    touch:  ic('<path d="M9 11.5V5.5a1.5 1.5 0 0 1 3 0v5l4.2.8a2 2 0 0 1 1.6 2.2l-.6 4.5a2.5 2.5 0 0 1-2.5 2H11a2.5 2.5 0 0 1-2-1l-3-4a1.5 1.5 0 0 1 2.3-1.9L9 14"/>', '<path d="M5.5 5.5a5 5 0 0 1 9.5-1"/>'),
    bolt:   ic('<path d="M13.5 3 5.5 13.5h6L10.5 21l8-10.5h-6z"/>'),
    kiosk:  ic('<path d="M4 9l2-4.5h12L20 9zM6 9v11M18 9v11M4 20h16"/>', '<path d="M9 14h6"/>'),
    chat:   ic('<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V17h0A2.5 2.5 0 0 1 4 14.5z"/>', '<path d="M8.5 9.5h7M8.5 12.5h4.5"/>'),
    moon:   ic('<path d="M19.5 14.6A7.8 7.8 0 0 1 9.4 4.5a7.8 7.8 0 1 0 10.1 10.1z"/>', '<path d="M16 4.5v3M14.5 6h3"/>')
  };

  /* ================= FOLHAGENS DECORATIVAS ================= */
  /* costela-de-adão (Monstera deliciosa): folha em coração com recortes em cunha
     e furinhos junto à nervura. Os recortes saem por máscara, então a folha
     fica vazada sobre qualquer fundo (claro ou escuro).
     opt.cuts = recortes por lado · opt.holes = false para a folha jovem */
  var MST = 0;
  function monstera(opt){
    opt = opt || {};
    var cuts = opt.cuts == null ? 6 : opt.cuts, holes = opt.holes !== false;
    var id = "mst" + (++MST), k = "", v = "";
    [-1,1].forEach(function(sd){
      var n = cuts + (sd > 0 ? 1 : 0);                  /* lados assimétricos, como na planta */
      for(var i = 0; i < n; i++){
        var t = (i+0.5)/n, y = 30 + t*160 + (sd > 0 ? 6 : 0);
        var r = 10 + 10*Math.sin(Math.PI*t);            /* o recorte começa perto da nervura */
        var rise = 48 - 50*t;                           /* em cima as nervuras sobem; embaixo descem */
        var a = 3 + 7*t;                                /* abertura do recorte na borda */
        var x0 = 102 + sd*r, x1 = 102 + sd*120, y1 = y - rise;
        var cx = 102 + sd*60, cy = y - rise*0.35;
        k += '<path d="M'+x0+' '+y+'Q'+cx+' '+(cy-a*0.4)+' '+x1+' '+(y1-a)+'L'+x1+' '+(y1+a)+'Q'+cx+' '+(cy+a*0.4)+' '+x0+' '+y+'Z"/>';
        if(holes && i > 0 && i < n-1){
          var hx = (102 + sd*(r+10)).toFixed(1), hy = (y + 80/n).toFixed(1);
          k += '<ellipse cx="'+hx+'" cy="'+hy+'" rx="2.6" ry="5.5" transform="rotate('+(sd*(55-40*t)).toFixed(0)+' '+hx+' '+hy+')"/>';
        }
        v += '<path d="M'+(102+sd*2)+' '+(y+4)+'Q'+(102+sd*r*0.6)+' '+(y+1)+' '+x0+' '+y+'"/>';
      }
    });
    return s("0 0 200 220",
      '<defs><mask id="'+id+'" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="220">'+
        '<rect width="200" height="220" fill="#fff"/>'+
        '<g fill="#000" stroke="#000" stroke-width="1.5" stroke-linejoin="round">'+k+'</g></mask></defs>'+
      '<g mask="url(#'+id+')">'+
        '<path d="M100 196C76 216 14 206 6 146C-2 80 46 16 108 8C168 14 202 78 194 142C188 200 128 214 100 196Z" fill="'+M+'"/>'+
        '<g stroke="'+MD+'" stroke-linecap="round" opacity=".55">'+
          '<path d="M100 200C101 150 103 80 104 16" stroke-width="4.5"/><g stroke-width="2.2">'+v+'</g></g></g>'+
      '<path d="M100 200C99 206 97 212 94 218" stroke="'+MD+'" stroke-width="5" stroke-linecap="round"/>');
  }
  ART.monstera = monstera;
  ART.leaf1 = monstera();                              /* folha adulta */
  ART.leaf2 = monstera({cuts:4, holes:false});         /* folha jovem */

  /* ================= BANDEIRAS DOS IDIOMAS ================= */
  ART.flag = {
    pt: s("0 0 20 14",
      '<rect width="20" height="14" rx="2" fill="#2E9B44"/>'+
      '<path d="M10 2.2 17.4 7 10 11.8 2.6 7Z" fill="#F6D84C"/>'+
      '<circle cx="10" cy="7" r="2.7" fill="#2B49A3"/>'+
      '<path d="M7.6 6.6c1.7-.5 3.4 0 4.8 1.1" stroke="#fff" stroke-width=".7" fill="none"/>'),
    en: s("0 0 20 14",
      '<rect width="20" height="14" rx="2" fill="#B22234"/>'+
      '<g fill="#fff"><rect y="1.7" width="20" height="1.55"/><rect y="4.8" width="20" height="1.55"/>'+
      '<rect y="7.9" width="20" height="1.55"/><rect y="11" width="20" height="1.55"/></g>'+
      '<path d="M0 2a2 2 0 0 1 2-2h7v7.2H0Z" fill="#3C3B6E"/>'+
      '<g fill="#fff"><circle cx="1.8" cy="1.7" r=".6"/><circle cx="4.5" cy="1.7" r=".6"/><circle cx="7.2" cy="1.7" r=".6"/>'+
      '<circle cx="3.1" cy="3.6" r=".6"/><circle cx="5.8" cy="3.6" r=".6"/>'+
      '<circle cx="1.8" cy="5.5" r=".6"/><circle cx="4.5" cy="5.5" r=".6"/><circle cx="7.2" cy="5.5" r=".6"/></g>'),
    es: s("0 0 20 14",
      '<rect width="20" height="14" rx="2" fill="#C60B1E"/>'+
      '<rect y="3.5" width="20" height="7" fill="#FFC400"/>'+
      '<rect x="4.6" y="5.4" width="2.5" height="3.2" rx=".6" fill="#C60B1E" opacity=".85"/>')
  };

  window.ART = ART;
})();
