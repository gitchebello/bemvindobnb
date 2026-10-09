/* =========================================================
   ART — ilustrações e ícones desenhados em SVG
   Paleta: #008991 turquesa · #F6DA84 areia · #95E4C0 menta
   ========================================================= */
(function(){
  var T="#008991", TD="#00646E", TX="#00464F", S="#F6DA84", SD="#E2B450",
      M="#95E4C0", MD="#5CC79B", W="#FFFFFF";

  function s(vb, inner){ return '<svg viewBox="'+vb+'" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+inner+'</svg>'; }
  function pic(inner, bg){ return s("0 0 48 48", '<circle cx="24" cy="24" r="24" fill="'+(bg||"#E4F8EE")+'"/>'+inner); }

  var ART = { sec:{}, pic:{}, ic:{} };

  /* ---------------- HERO: praia de Copacabana ---------------- */
  ART.hero = s("0 0 420 250",
    '<defs>'+
      '<linearGradient id="hsky" x1="0" y1="0" x2="0" y2="1">'+
        '<stop offset="0" stop-color="#E9FAF3"/><stop offset="1" stop-color="#FFF6E2"/></linearGradient>'+
      '<clipPath id="hc"><rect width="420" height="250" rx="28"/></clipPath>'+
    '</defs>'+
    '<g clip-path="url(#hc)">'+
      '<rect width="420" height="250" fill="url(#hsky)"/>'+
      /* sol */
      '<circle cx="330" cy="52" r="42" fill="'+S+'" opacity=".3"/>'+
      '<circle cx="330" cy="52" r="25" fill="'+S+'"/>'+
      /* nuvens */
      '<g fill="'+W+'" opacity=".92">'+
        '<ellipse cx="86" cy="44" rx="28" ry="11"/><ellipse cx="104" cy="38" rx="18" ry="13"/>'+
        '<ellipse cx="228" cy="26" rx="21" ry="8"/><ellipse cx="240" cy="22" rx="13" ry="9"/>'+
      '</g>'+
      /* passarinhos */
      '<g stroke="'+TD+'" stroke-width="2" stroke-linecap="round" opacity=".5" fill="none">'+
        '<path d="M148 62q6-6 12 0"/><path d="M160 56q5-5 10 0"/></g>'+
      /* morros arredondados: Dois Irmãos */
      '<path d="M-10 156 C-4 116 16 90 40 90 C64 90 80 120 88 156 Z" fill="'+T+'" opacity=".5"/>'+
      '<path d="M50 156 C58 102 84 60 114 60 C144 60 162 108 170 156 Z" fill="'+T+'" opacity=".72"/>'+
      '<path d="M86 112 C94 80 103 66 114 66 C125 66 134 80 142 112 C132 96 123 90 114 90 C105 90 96 96 86 112 Z" fill="'+M+'" opacity=".5"/>'+
      /* Morro da Urca + Pão de Açúcar */
      '<path d="M228 156c0-27 17-42 34-42s32 15 32 42Z" fill="'+T+'" opacity=".6"/>'+
      '<path d="M274 156c0-48 25-74 50-74s50 26 50 74Z" fill="'+T+'"/>'+
      '<path d="M324 82c14 0 27 8 36 24-11-6-24-9-36-9s-25 3-36 9c9-16 22-24 36-24Z" fill="'+M+'" opacity=".45"/>'+
      /* bondinho */
      '<path d="M258 114 320 84" stroke="'+TX+'" stroke-width="1.6"/>'+
      '<path d="M286 100v5" stroke="'+TX+'" stroke-width="1.6"/>'+
      '<rect x="279" y="104" width="15" height="10" rx="3" fill="'+W+'" stroke="'+TX+'" stroke-width="1.6"/>'+
      /* mar */
      '<path d="M0 156h420v46H0Z" fill="'+T+'"/>'+
      '<path d="M0 156c56-7 92 8 142 1s84-9 138-2 84 7 140 1v-6H0Z" fill="'+M+'" opacity=".65"/>'+
      '<g stroke="'+W+'" stroke-width="3" stroke-linecap="round" opacity=".8" fill="none">'+
        '<path d="M36 176q10-7 20 0t20 0"/><path d="M164 188q10-7 20 0t20 0"/><path d="M296 174q10-7 20 0t20 0"/>'+
        '<path d="M108 194q9-6 18 0t18 0"/></g>'+
      /* areia */
      '<path d="M0 202c78-9 148 7 228 1 70-5 132 5 192-2v49H0Z" fill="'+S+'"/>'+
      '<path d="M0 202c78-9 148 7 228 1 70-5 132 5 192-2v8c-60 7-122-3-192 2-80 6-150-10-228-1Z" fill="'+W+'" opacity=".5"/>'+
      /* calçadão de Copacabana (padrão Burle Marx) */
      '<rect x="-4" y="216" width="430" height="28" fill="'+W+'"/>'+
      '<path d="M-35 230 Q0 212 35 230 T105 230 T175 230 T245 230 T315 230 T385 230 T455 230" '+
        'fill="none" stroke="'+TX+'" stroke-width="9"/>'+
      /* coqueiro */
      '<path d="M54 250c-3-28 1-45 10-56" stroke="'+TD+'" stroke-width="7" stroke-linecap="round"/>'+
      '<g fill="'+M+'">'+
        '<path d="M64 194c-16-11-29-7-35 3 12-4 24-4 35 0Z"/><path d="M64 194c16-11 29-7 35 3-12-4-24-4-35 0Z"/>'+
        '<path d="M64 194c-6-17-19-24-29-22 12 6 22 14 26 24Z"/><path d="M64 194c6-17 19-24 29-22-12 6-22 14-26 24Z"/></g>'+
      '<circle cx="64" cy="195" r="4.5" fill="'+S+'"/>'+
      /* guarda-sol */
      '<path d="M332 246v-38" stroke="'+TD+'" stroke-width="4" stroke-linecap="round"/>'+
      '<path d="M300 208a32 32 0 0 1 64 0Z" fill="'+W+'"/>'+
      '<path d="M332 176a32 32 0 0 1 22.6 9.4L332 208Z" fill="'+T+'"/>'+
      '<path d="M309.4 185.4A32 32 0 0 1 332 176v32Z" fill="'+S+'"/>'+
      /* cadeira */
      '<path d="M272 246l8-26h20l-4 26" fill="'+M+'" stroke="'+TD+'" stroke-width="2.4" stroke-linejoin="round"/>'+
    '</g>');

  /* ---------------- Marca (topo) ---------------- */
  ART.mark = s("0 0 48 48",
    '<rect width="48" height="48" rx="14" fill="'+T+'"/>'+
    '<circle cx="34" cy="15" r="6" fill="'+S+'"/>'+
    '<path d="M6 33c5-4 9 2 14-1s8-6 13-2 6 4 9 2v12H6Z" fill="'+M+'" opacity=".85"/>'+
    '<path d="M6 38q5-5 10 0t10 0 10 0 10 0" stroke="'+W+'" stroke-width="2.6" fill="none" stroke-linecap="round"/>');

  /* ================= ILUSTRAÇÕES DE SEÇÃO (120x96) ================= */

  ART.sec.checkin = s("0 0 120 96",
    '<circle cx="56" cy="48" r="40" fill="'+M+'" opacity=".35"/>'+
    '<path d="M32 88V36a20 20 0 0 1 40 0v52Z" fill="'+T+'"/>'+
    '<path d="M40 44a12 12 0 0 1 24 0v14H40Z" fill="'+W+'" opacity=".9"/>'+
    '<rect x="42" y="64" width="20" height="16" rx="4" fill="'+W+'" opacity=".55"/>'+
    '<circle cx="66" cy="66" r="3.4" fill="'+S+'"/>'+
    '<rect x="24" y="86" width="56" height="7" rx="3.5" fill="'+S+'"/>'+
    '<circle cx="92" cy="40" r="10" fill="none" stroke="'+TD+'" stroke-width="6"/>'+
    '<path d="M99 46l16 16" stroke="'+TD+'" stroke-width="6" stroke-linecap="round"/>'+
    '<path d="M107 54l5-5M112 59l5-5" stroke="'+TD+'" stroke-width="4.5" stroke-linecap="round"/>');

  ART.sec.wifi = s("0 0 120 96",
    '<circle cx="60" cy="50" r="40" fill="'+M+'" opacity=".32"/>'+
    '<g stroke="'+T+'" fill="none" stroke-linecap="round">'+
      '<path d="M28 50a44 44 0 0 1 64 0" stroke-width="7" opacity=".3"/>'+
      '<path d="M40 60a27 27 0 0 1 40 0" stroke-width="7" opacity=".6"/>'+
      '<path d="M51 70a12 12 0 0 1 18 0" stroke-width="7"/></g>'+
    '<rect x="30" y="74" width="60" height="18" rx="7" fill="'+T+'"/>'+
    '<circle cx="41" cy="83" r="3.2" fill="'+S+'"/><circle cx="52" cy="83" r="3.2" fill="'+M+'"/>'+
    '<rect x="66" y="80" width="16" height="6" rx="3" fill="'+W+'" opacity=".5"/>');

  ART.sec.regras = s("0 0 120 96",
    '<rect x="26" y="12" width="68" height="80" rx="12" fill="'+W+'" stroke="'+T+'" stroke-width="3.4"/>'+
    '<rect x="47" y="5" width="26" height="15" rx="6" fill="'+T+'"/>'+
    '<g>'+
      '<circle cx="43" cy="38" r="8" fill="'+M+'"/><path d="M39.5 38l2.8 2.8L47 36" stroke="'+TX+'" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<rect x="56" y="34" width="30" height="8" rx="4" fill="'+S+'"/></g>'+
    '<g>'+
      '<circle cx="43" cy="58" r="8" fill="'+M+'"/><path d="M39.5 58l2.8 2.8L47 56" stroke="'+TX+'" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<rect x="56" y="54" width="24" height="8" rx="4" fill="'+S+'" opacity=".7"/></g>'+
    '<g>'+
      '<circle cx="43" cy="78" r="8" fill="'+M+'"/><path d="M39.5 78l2.8 2.8L47 76" stroke="'+TX+'" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<rect x="56" y="74" width="28" height="8" rx="4" fill="'+S+'" opacity=".45"/></g>');

  ART.sec.transporte = s("0 0 120 96",
    '<circle cx="60" cy="46" r="40" fill="'+M+'" opacity=".3"/>'+
    '<rect x="32" y="14" width="56" height="62" rx="16" fill="'+T+'"/>'+
    '<rect x="40" y="24" width="40" height="22" rx="7" fill="'+W+'"/>'+
    '<rect x="40" y="54" width="15" height="9" rx="4" fill="'+S+'"/><rect x="65" y="54" width="15" height="9" rx="4" fill="'+S+'"/>'+
    '<path d="M42 76v8M78 76v8" stroke="'+TD+'" stroke-width="4" stroke-linecap="round"/>'+
    '<rect x="20" y="84" width="80" height="6" rx="3" fill="'+TD+'" opacity=".35"/>'+
    '<path d="M18 32h10M14 42h14" stroke="'+MD+'" stroke-width="4" stroke-linecap="round"/>');

  ART.sec.passeios = s("0 0 120 96",
    '<circle cx="86" cy="26" r="17" fill="'+S+'"/>'+
    '<path d="M2 90c22-32 42-42 58-42s38 12 58 42Z" fill="'+M+'"/>'+
    '<path d="M26 90c14-22 28-30 34-30s22 8 34 30Z" fill="'+T+'" opacity=".3"/>'+
    '<rect x="50" y="56" width="20" height="8" rx="3" fill="'+TX+'" opacity=".45"/>'+
    '<rect x="56.5" y="26" width="7" height="32" rx="3.5" fill="'+W+'" stroke="'+TX+'" stroke-width="2"/>'+
    '<rect x="38" y="31" width="44" height="7" rx="3.5" fill="'+W+'" stroke="'+TX+'" stroke-width="2"/>'+
    '<circle cx="60" cy="22" r="5.5" fill="'+W+'" stroke="'+TX+'" stroke-width="2"/>');

  ART.sec.comer = s("0 0 120 96",
    '<circle cx="54" cy="50" r="32" fill="'+W+'" stroke="'+T+'" stroke-width="3.4"/>'+
    '<circle cx="54" cy="50" r="20" fill="'+M+'" opacity=".55"/>'+
    '<circle cx="48" cy="45" r="5" fill="'+S+'"/><circle cx="60" cy="54" r="4" fill="'+T+'" opacity=".5"/>'+
    '<rect x="12" y="22" width="5" height="56" rx="2.5" fill="'+TD+'"/>'+
    '<path d="M14.5 22v14" stroke="'+TD+'" stroke-width="5" stroke-linecap="round"/>'+
    '<g><rect x="94" y="24" width="5" height="54" rx="2.5" fill="'+TD+'"/>'+
      '<path d="M89 22v12M96.5 22v12M104 22v12" stroke="'+TD+'" stroke-width="4" stroke-linecap="round"/></g>'+
    '<circle cx="96" cy="68" r="14" fill="'+T+'"/>'+
    '<path d="M96 54l12-12" stroke="'+S+'" stroke-width="5" stroke-linecap="round"/>'+
    '<ellipse cx="96" cy="56" rx="9" ry="3.4" fill="'+W+'" opacity=".7"/>');

  ART.sec.dicas = s("0 0 120 96",
    '<circle cx="96" cy="22" r="15" fill="'+S+'"/>'+
    '<path d="M42 88V42" stroke="'+TD+'" stroke-width="4.5" stroke-linecap="round"/>'+
    '<path d="M12 44a30 30 0 0 1 60 0Z" fill="'+W+'"/>'+
    '<path d="M42 14a30 30 0 0 1 21.2 8.8L42 44Z" fill="'+T+'"/>'+
    '<path d="M20.8 22.8A30 30 0 0 1 42 14v30Z" fill="'+S+'"/>'+
    '<path d="M66 88l10-28h22l-6 28" fill="'+M+'" stroke="'+TD+'" stroke-width="2.6" stroke-linejoin="round"/>'+
    '<path d="M6 90h108" stroke="'+S+'" stroke-width="7" stroke-linecap="round"/>');

  ART.sec.saude = s("0 0 120 96",
    '<path d="M8 40h16l5-12 8 26 6-14h11" stroke="'+MD+'" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<rect x="26" y="34" width="70" height="54" rx="12" fill="'+T+'"/>'+
    '<rect x="48" y="24" width="26" height="13" rx="5" fill="'+TD+'"/>'+
    '<rect x="55" y="46" width="12" height="32" rx="5" fill="'+W+'"/>'+
    '<rect x="45" y="56" width="32" height="12" rx="5" fill="'+W+'"/>'+
    '<circle cx="103" cy="30" r="12" fill="'+S+'"/>'+
    '<path d="M103 36c-5-4-8-6-8-9a4 4 0 0 1 8-1.6 4 4 0 0 1 8 1.6c0 3-3 5-8 9Z" fill="'+W+'"/>');

  ART.sec.mapa = s("0 0 120 96",
    '<path d="M12 26 42 14l32 12 30-12v58l-30 12-32-12-30 12Z" fill="'+S+'"/>'+
    '<path d="M42 14v58M74 26v58" stroke="'+W+'" stroke-width="3"/>'+
    '<path d="M12 26 42 14l32 12 30-12v58l-30 12-32-12-30 12Z" fill="none" stroke="'+TD+'" stroke-width="2.8" stroke-linejoin="round"/>'+
    '<path d="M26 68q14-20 30-10t28-24" stroke="'+MD+'" stroke-width="3.6" fill="none" stroke-dasharray="6 6" stroke-linecap="round"/>'+
    '<path d="M60 70s14-14 14-24a14 14 0 1 0-28 0c0 10 14 24 14 24Z" fill="'+T+'"/>'+
    '<circle cx="60" cy="46" r="5.5" fill="'+W+'"/>');

  ART.sec.numeros = s("0 0 120 96",
    '<circle cx="56" cy="52" r="38" fill="'+M+'" opacity=".33"/>'+
    '<rect x="66" y="10" width="42" height="30" rx="10" fill="'+S+'"/>'+
    '<path d="M76 40l-2 10 12-10Z" fill="'+S+'"/>'+
    '<circle cx="79" cy="25" r="2.8" fill="'+TX+'"/><circle cx="88" cy="25" r="2.8" fill="'+TX+'"/><circle cx="97" cy="25" r="2.8" fill="'+TX+'"/>'+
    '<path d="M34 26h13l6 15-8 6c4 9 11 16 20 20l6-8 15 6v13a9 9 0 0 1-10 9C50 84 26 60 25 36a9 9 0 0 1 9-10Z" fill="'+T+'"/>');

  ART.sec.feedback = s("0 0 120 96",
    '<rect x="10" y="18" width="100" height="50" rx="16" fill="'+W+'" stroke="'+T+'" stroke-width="3.4"/>'+
    '<path d="M32 68v14l16-14Z" fill="'+W+'" stroke="'+T+'" stroke-width="3.4" stroke-linejoin="round"/>'+
    '<rect x="30" y="66" width="20" height="5" fill="'+W+'"/>'+
    '<g fill="'+S+'" stroke="'+SD+'" stroke-width="1.6" stroke-linejoin="round">'+
      '<path d="M28 33l2.6 5.4 5.9.8-4.3 4.1 1 5.9L28 46.4 22.8 49.2l1-5.9-4.3-4.1 5.9-.8Z"/>'+
      '<path d="M46 33l2.6 5.4 5.9.8-4.3 4.1 1 5.9L46 46.4 40.8 49.2l1-5.9-4.3-4.1 5.9-.8Z"/>'+
      '<path d="M64 33l2.6 5.4 5.9.8-4.3 4.1 1 5.9L64 46.4 58.8 49.2l1-5.9-4.3-4.1 5.9-.8Z"/>'+
      '<path d="M82 33l2.6 5.4 5.9.8-4.3 4.1 1 5.9L82 46.4 76.8 49.2l1-5.9-4.3-4.1 5.9-.8Z"/></g>'+
    '<path d="M100 31l2.9 6 6.6.9-4.8 4.6 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6-4.8-4.6 6.6-.9Z" fill="'+M+'" stroke="'+MD+'" stroke-width="1.8" stroke-linejoin="round"/>');

  /* rodapé */
  ART.foot = s("0 0 120 96",
    '<circle cx="60" cy="34" r="24" fill="'+S+'"/>'+
    '<path d="M6 78c10-8 18 4 28-1s16-10 26-4 12 8 18 4l-2 19H6Z" fill="'+M+'"/>'+
    '<path d="M8 82q9-8 18 0t18 0 18 0 18 0 18 0" stroke="'+W+'" stroke-width="3.4" fill="none" stroke-linecap="round"/>'+
    '<path d="M60 58c-9-7-15-11-15-17a7.5 7.5 0 0 1 15-3 7.5 7.5 0 0 1 15 3c0 6-6 10-15 17Z" fill="'+T+'"/>');

  /* ================= PICTOGRAMAS (48x48) ================= */
  var P = ART.pic;

  /* --- pontos turísticos --- */
  P.copa = pic('<path d="M24 42V24" stroke="'+TD+'" stroke-width="3" stroke-linecap="round"/>'+
    '<path d="M9 24a15 15 0 0 1 30 0Z" fill="'+W+'"/>'+
    '<path d="M24 9a15 15 0 0 1 10.6 4.4L24 24Z" fill="'+T+'"/>'+
    '<path d="M13.4 13.4A15 15 0 0 1 24 9v15Z" fill="'+S+'"/>'+
    '<path d="M8 38q5-4 10 0t10 0 10 0" stroke="'+T+'" stroke-width="2.6" fill="none" stroke-linecap="round"/>');

  P.cristo = pic('<path d="M6 40c9-14 13-18 18-18s10 4 18 18Z" fill="'+M+'"/>'+
    '<rect x="22.6" y="10" width="2.8" height="16" rx="1.4" fill="'+TD+'"/>'+
    '<rect x="15" y="13" width="18" height="2.8" rx="1.4" fill="'+TD+'"/>'+
    '<circle cx="24" cy="8" r="2.6" fill="'+TD+'"/>', "#FDF2D6");

  P.pao = pic('<path d="M4 40c0-9 5-14 10-14s10 5 10 14Z" fill="'+T+'" opacity=".55"/>'+
    '<path d="M18 40c0-15 8-24 15-24s13 9 13 24Z" fill="'+T+'"/>'+
    '<path d="M6 17 36 8" stroke="'+TD+'" stroke-width="1.6"/>'+
    '<path d="M17 13v3" stroke="'+TD+'" stroke-width="1.6"/>'+
    '<rect x="12" y="15" width="11" height="7" rx="2.4" fill="'+W+'" stroke="'+TD+'" stroke-width="1.6"/>');

  P.ipanema = pic('<circle cx="35" cy="13" r="6.5" fill="'+S+'"/>'+
    '<path d="M4 40 16 17l11 23Z" fill="'+T+'"/><path d="M19 40 30 20l12 20Z" fill="'+T+'" opacity=".6"/>'+
    '<path d="M6 42q5-4 10 0t10 0 10 0" stroke="'+MD+'" stroke-width="2.4" fill="none" stroke-linecap="round"/>');

  P.lagoa = pic('<ellipse cx="24" cy="27" rx="18" ry="11" fill="'+T+'" opacity=".5"/>'+
    '<path d="M15 29h18l-4 6H19Z" fill="'+W+'" stroke="'+TD+'" stroke-width="1.4"/>'+
    '<path d="M24 29v-9l7 5Z" fill="'+S+'"/>'+
    '<path d="M9 14q4-3 8 0" stroke="'+MD+'" stroke-width="2.2" fill="none" stroke-linecap="round"/>');

  P.jb = pic('<path d="M24 42V26" stroke="'+TD+'" stroke-width="3.4" stroke-linecap="round"/>'+
    '<circle cx="24" cy="17" r="11" fill="'+M+'"/><circle cx="15" cy="23" r="7" fill="'+M+'"/><circle cx="33" cy="23" r="7" fill="'+M+'"/>'+
    '<circle cx="24" cy="16" r="4" fill="'+S+'" opacity=".8"/>', "#FDF2D6");

  P.centro = pic('<path d="M8 18 24 8l16 10Z" fill="'+T+'"/>'+
    '<rect x="9" y="18" width="30" height="3.4" rx="1.6" fill="'+T+'"/>'+
    '<rect x="13" y="22" width="4.5" height="14" fill="'+T+'" opacity=".75"/>'+
    '<rect x="21.8" y="22" width="4.5" height="14" fill="'+T+'" opacity=".75"/>'+
    '<rect x="30.5" y="22" width="4.5" height="14" fill="'+T+'" opacity=".75"/>'+
    '<rect x="8" y="36" width="32" height="4" rx="2" fill="'+TD+'"/>');

  P.maua = pic('<path d="M7 30 26 17l-2 8 17-11-4 16Z" fill="'+T+'"/>'+
    '<rect x="7" y="30" width="34" height="6" rx="3" fill="'+T+'" opacity=".45"/>'+
    '<path d="M8 40q5-3 10 0t10 0 10 0" stroke="'+MD+'" stroke-width="2.2" fill="none" stroke-linecap="round"/>');

  P.lapa = pic('<path d="M9 38h8v-6h8v-6h8v-6h8" stroke="'+T+'" stroke-width="4.4" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'+
    '<rect x="10" y="30" width="6" height="3" rx="1.5" fill="'+S+'"/>'+
    '<rect x="18" y="24" width="6" height="3" rx="1.5" fill="'+S+'"/>'+
    '<rect x="26" y="18" width="6" height="3" rx="1.5" fill="'+S+'"/>', "#FDF2D6");

  P.santa = pic('<path d="M24 13V7" stroke="'+TD+'" stroke-width="2.2" stroke-linecap="round"/>'+
    '<rect x="10" y="13" width="28" height="21" rx="5" fill="'+S+'" stroke="'+TD+'" stroke-width="1.8"/>'+
    '<rect x="14" y="18" width="8" height="7" rx="2" fill="'+W+'"/><rect x="26" y="18" width="8" height="7" rx="2" fill="'+W+'"/>'+
    '<circle cx="17" cy="37" r="3.4" fill="'+TD+'"/><circle cx="31" cy="37" r="3.4" fill="'+TD+'"/>');

  P.maracana = pic('<path d="M6 34a18 18 0 0 1 36 0" stroke="'+S+'" stroke-width="3.4" fill="none" stroke-linecap="round"/>'+
    '<circle cx="24" cy="25" r="11" fill="'+W+'" stroke="'+TD+'" stroke-width="2"/>'+
    '<path d="M24 19l5 3.6-1.9 5.9h-6.2L19 22.6Z" fill="'+TD+'"/>');

  P.mirantes = pic('<rect x="9" y="18" width="12" height="21" rx="6" fill="'+T+'"/>'+
    '<rect x="27" y="18" width="12" height="21" rx="6" fill="'+T+'"/>'+
    '<rect x="19" y="24" width="10" height="5" fill="'+T+'" opacity=".6"/>'+
    '<rect x="11" y="11" width="8" height="9" rx="2.5" fill="'+TD+'"/>'+
    '<rect x="29" y="11" width="8" height="9" rx="2.5" fill="'+TD+'"/>'+
    '<circle cx="15" cy="30" r="3" fill="'+M+'"/><circle cx="33" cy="30" r="3" fill="'+M+'"/>');

  P.barra = pic('<path d="M22 6c9 7 11 22 4 32-7-10-7-25-4-32Z" fill="'+S+'" stroke="'+TD+'" stroke-width="1.8"/>'+
    '<path d="M6 36q6-6 12 0t12 0 12 0" stroke="'+T+'" stroke-width="3.4" fill="none" stroke-linecap="round"/>');

  P.niteroi = pic('<path d="M8 29h32l-6 9H14Z" fill="'+W+'" stroke="'+TD+'" stroke-width="1.8" stroke-linejoin="round"/>'+
    '<rect x="16" y="18" width="16" height="11" rx="3" fill="'+T+'"/>'+
    '<path d="M24 18v-7" stroke="'+TD+'" stroke-width="2.2" stroke-linecap="round"/>'+
    '<path d="M6 41q5-3 10 0t10 0 10 0" stroke="'+MD+'" stroke-width="2.4" fill="none" stroke-linecap="round"/>');

  /* --- transporte --- */
  P.metro = pic('<rect x="12" y="8" width="24" height="27" rx="8" fill="'+T+'"/>'+
    '<rect x="16" y="13" width="16" height="10" rx="3.5" fill="'+W+'"/>'+
    '<rect x="16" y="26" width="6" height="4" rx="2" fill="'+S+'"/><rect x="26" y="26" width="6" height="4" rx="2" fill="'+S+'"/>'+
    '<path d="M17 35l-3 6M31 35l3 6" stroke="'+TD+'" stroke-width="2.6" stroke-linecap="round"/>');

  P.bus = pic('<rect x="7" y="11" width="34" height="23" rx="6" fill="'+T+'"/>'+
    '<rect x="11" y="15" width="12" height="9" rx="3" fill="'+W+'"/><rect x="26" y="15" width="11" height="9" rx="3" fill="'+W+'"/>'+
    '<circle cx="15" cy="37" r="4" fill="'+TD+'"/><circle cx="33" cy="37" r="4" fill="'+TD+'"/>'+
    '<rect x="11" y="27" width="26" height="3" rx="1.5" fill="'+S+'"/>');

  P.vlt = pic('<rect x="9" y="12" width="30" height="22" rx="6" fill="'+M+'" stroke="'+TD+'" stroke-width="1.8"/>'+
    '<rect x="13" y="17" width="9" height="8" rx="2.5" fill="'+W+'"/><rect x="26" y="17" width="9" height="8" rx="2.5" fill="'+W+'"/>'+
    '<path d="M24 12V6M18 6h12" stroke="'+TD+'" stroke-width="2.2" stroke-linecap="round"/>'+
    '<circle cx="16" cy="37" r="3.4" fill="'+TD+'"/><circle cx="32" cy="37" r="3.4" fill="'+TD+'"/>');

  P.brt = pic('<rect x="12" y="12" width="30" height="22" rx="6" fill="'+T+'"/>'+
    '<rect x="16" y="16" width="10" height="9" rx="3" fill="'+W+'"/><rect x="29" y="16" width="9" height="9" rx="3" fill="'+W+'"/>'+
    '<circle cx="20" cy="37" r="3.6" fill="'+TD+'"/><circle cx="35" cy="37" r="3.6" fill="'+TD+'"/>'+
    '<path d="M4 17h6M2 24h8M4 31h6" stroke="'+S+'" stroke-width="3" stroke-linecap="round"/>');

  P.app = pic('<path d="M11 27l4-10h18l4 10Z" fill="'+T+'"/>'+
    '<rect x="8" y="26" width="32" height="9" rx="4.5" fill="'+T+'"/>'+
    '<circle cx="15" cy="37" r="3.2" fill="'+TD+'"/><circle cx="33" cy="37" r="3.2" fill="'+TD+'"/>'+
    '<rect x="30" y="6" width="12" height="16" rx="3.5" fill="'+S+'" stroke="'+TD+'" stroke-width="1.6"/>'+
    '<circle cx="36" cy="18" r="1.4" fill="'+TD+'"/>');

  P.taxi = pic('<path d="M11 27l4-10h18l4 10Z" fill="'+S+'"/>'+
    '<rect x="8" y="26" width="32" height="9" rx="4.5" fill="'+S+'"/>'+
    '<rect x="19" y="9" width="11" height="7" rx="2.5" fill="'+TD+'"/>'+
    '<circle cx="15" cy="37" r="3.2" fill="'+TD+'"/><circle cx="33" cy="37" r="3.2" fill="'+TD+'"/>');

  P.bike = pic('<circle cx="13" cy="31" r="8.5" fill="none" stroke="'+T+'" stroke-width="3"/>'+
    '<circle cx="35" cy="31" r="8.5" fill="none" stroke="'+T+'" stroke-width="3"/>'+
    '<path d="M13 31l8-13h8l6 13M21 18h7" stroke="'+TD+'" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<circle cx="29" cy="12" r="3" fill="'+S+'"/>');

  P.walk = pic('<circle cx="26" cy="10" r="4.4" fill="'+TD+'"/>'+
    '<path d="M26 16l-5 9 5 5v11" stroke="'+T+'" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<path d="M26 30l7 4 2 7M21 25l-6 4" stroke="'+T+'" stroke-width="4" fill="none" stroke-linecap="round"/>'+
    '<path d="M8 42q5-3 10 0" stroke="'+S+'" stroke-width="2.6" fill="none" stroke-linecap="round"/>');

  /* --- comida --- */
  P.coco = pic('<circle cx="22" cy="28" r="14" fill="'+T+'"/>'+
    '<ellipse cx="22" cy="16" rx="9" ry="3.4" fill="'+W+'"/>'+
    '<path d="M24 14l14-8" stroke="'+S+'" stroke-width="4" stroke-linecap="round"/>'+
    '<circle cx="18" cy="26" r="2.4" fill="'+W+'" opacity=".55"/>');

  P.drink = pic('<path d="M11 12h26L24 28Z" fill="'+M+'" stroke="'+TD+'" stroke-width="2" stroke-linejoin="round"/>'+
    '<path d="M24 28v10" stroke="'+TD+'" stroke-width="2.6" stroke-linecap="round"/>'+
    '<path d="M17 40h14" stroke="'+TD+'" stroke-width="2.6" stroke-linecap="round"/>'+
    '<circle cx="33" cy="12" r="4" fill="'+S+'"/>');

  P.beer = pic('<rect x="12" y="14" width="20" height="26" rx="4" fill="'+S+'" stroke="'+TD+'" stroke-width="2"/>'+
    '<path d="M32 20h5a4 4 0 0 1 0 10h-5" fill="none" stroke="'+TD+'" stroke-width="2"/>'+
    '<path d="M12 20c3-6 17-6 20 0Z" fill="'+W+'"/>'+
    '<circle cx="18" cy="12" r="3.4" fill="'+W+'"/><circle cx="27" cy="10" r="2.8" fill="'+W+'"/>');

  P.coffee = pic('<path d="M12 18h22v12a11 11 0 0 1-22 0Z" fill="'+T+'"/>'+
    '<path d="M34 21h4a4.5 4.5 0 0 1 0 9h-4" fill="none" stroke="'+TD+'" stroke-width="2.2"/>'+
    '<path d="M9 42h30" stroke="'+TD+'" stroke-width="2.6" stroke-linecap="round"/>'+
    '<path d="M18 13c0-3 3-3 3-6M26 13c0-3 3-3 3-6" stroke="'+MD+'" stroke-width="2.2" fill="none" stroke-linecap="round"/>');

  P.leaf = pic('<path d="M36 10C18 10 10 20 10 30c0 4 2 7 2 7s16-2 22-10 2-17 2-17Z" fill="'+M+'" stroke="'+MD+'" stroke-width="2" stroke-linejoin="round"/>'+
    '<path d="M12 38C18 28 26 20 34 14" stroke="'+MD+'" stroke-width="2.2" stroke-linecap="round"/>');

  /* --- regras principais --- */
  P.nosmoke = pic('<rect x="10" y="26" width="24" height="7" rx="3.5" fill="'+T+'"/>'+
    '<rect x="35" y="26" width="4" height="7" rx="2" fill="'+S+'"/>'+
    '<path d="M28 24c0-4-4-4-4-8" stroke="'+MD+'" stroke-width="2.4" fill="none" stroke-linecap="round"/>'+
    '<circle cx="24" cy="24" r="19" fill="none" stroke="#C0392B" stroke-width="3.4" opacity=".85"/>'+
    '<path d="M11 37 37 11" stroke="#C0392B" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>', "#FDF2D6");

  P.noparty = pic('<path d="M14 34l8-20 14 6-14 20Z" fill="'+S+'" stroke="'+TD+'" stroke-width="1.8" stroke-linejoin="round"/>'+
    '<circle cx="34" cy="12" r="3" fill="'+M+'"/><circle cx="12" cy="16" r="2.4" fill="'+M+'"/>'+
    '<circle cx="24" cy="24" r="19" fill="none" stroke="#C0392B" stroke-width="3.4" opacity=".85"/>'+
    '<path d="M11 37 37 11" stroke="#C0392B" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>', "#FDF2D6");

  P.quiet = pic('<path d="M32 30a13 13 0 1 1-15-19 10 10 0 0 0 15 19Z" fill="'+T+'"/>'+
    '<circle cx="36" cy="14" r="2.6" fill="'+S+'"/><circle cx="30" cy="8" r="1.8" fill="'+S+'"/>'+
    '<path d="M8 38h7l-7 6h7" stroke="'+MD+'" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>');

  P.people = pic('<circle cx="16" cy="16" r="5.4" fill="'+T+'"/><circle cx="32" cy="16" r="5.4" fill="'+T+'"/>'+
    '<path d="M6 34c0-6 4.5-9 10-9s10 3 10 9Z" fill="'+T+'"/>'+
    '<path d="M22 34c0-6 4.5-9 10-9s10 3 10 9Z" fill="'+M+'"/>'+
    '<text x="24" y="45" font-size="9" font-weight="800" text-anchor="middle" fill="'+TD+'" font-family="system-ui,sans-serif">MAX 4</text>');

  /* marcador de "resumo" */
  P.sum = pic('<circle cx="24" cy="22" r="9" fill="'+S+'"/>'+
    '<path d="M24 7v3M24 34v3M9 22h3M36 22h3M13.4 11.4l2.2 2.2M32.4 30.4l2.2 2.2M13.4 32.6l2.2-2.2M32.4 13.6l2.2-2.2" stroke="'+SD+'" stroke-width="2.6" stroke-linecap="round"/>'+
    '<path d="M20 41q4-3 8 0" stroke="'+T+'" stroke-width="2.6" fill="none" stroke-linecap="round"/>', "#FFFFFF");

  /* saúde */
  P.hosp = pic('<rect x="9" y="14" width="30" height="26" rx="5" fill="'+T+'"/>'+
    '<rect x="21" y="20" width="6" height="16" rx="2.4" fill="'+W+'"/><rect x="16" y="25" width="16" height="6" rx="2.4" fill="'+W+'"/>'+
    '<path d="M14 14V9h20v5" fill="none" stroke="'+TD+'" stroke-width="2.4" stroke-linejoin="round"/>');
  P.pharma = pic('<rect x="10" y="15" width="28" height="24" rx="6" fill="'+M+'" stroke="'+MD+'" stroke-width="1.8"/>'+
    '<rect x="21.5" y="21" width="5" height="13" rx="2.2" fill="'+TD+'"/><rect x="17.5" y="25" width="13" height="5" rx="2.2" fill="'+TD+'"/>'+
    '<rect x="14" y="8" width="20" height="7" rx="3" fill="'+T+'"/>', "#FDF2D6");

  /* ================= ÍCONES DE LINHA ================= */
  function ic(d, w){ return s("0 0 24 24", '<g fill="none" stroke="currentColor" stroke-width="'+(w||1.9)+'" stroke-linecap="round" stroke-linejoin="round">'+d+'</g>'); }
  ART.ic = {
    arrow:  ic('<path d="M5 12h13M12 5.5l6.5 6.5-6.5 6.5"/>'),
    pin:    ic('<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
    clock:  ic('<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>'),
    money:  ic('<rect x="3" y="6" width="18" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/>'),
    bulb:   ic('<path d="M9.5 18h5M10 21h4"/><path d="M12 3a6 6 0 0 1 3.5 10.9c-.6.5-.9 1.2-.9 1.9v.2h-5.2v-.2c0-.7-.3-1.4-.9-1.9A6 6 0 0 1 12 3z"/>'),
    route:  ic('<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h2.5"/>'),
    info:   ic('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8h.01"/>'),
    warn:   ic('<path d="M10.3 3.9 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4.5M12 17.2h.01"/>'),
    check:  ic('<circle cx="12" cy="12" r="9"/><path d="M8.3 12.2l2.6 2.6 4.8-5.2"/>'),
    phone:  ic('<path d="M6.2 3h3l2 5-2.2 1.2a12.5 12.5 0 0 0 5.8 5.8L16 12.8l5 2v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.2 5.2 2 2 0 0 1 5.2 3h1z"/>'),
    star:   ic('<path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.7l6.1-.9z"/>'),
    print:  ic('<path d="M6.5 9V4h11v5"/><path d="M6.5 18H5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2h-1.5"/><path d="M6.5 14.5h11V21h-11z"/>'),
    ext:    ic('<path d="M14 4h6v6M20 4l-8.5 8.5"/><path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/>'),
    up:     ic('<path d="M12 19V5M5 12l7-7 7 7"/>', 2.2),
    sun:    ic('<circle cx="12" cy="12" r="4"/><path d="M12 3v1.6M12 19.4V21M3 12h1.6M19.4 12H21M5.6 5.6l1.2 1.2M17.2 17.2l1.2 1.2M5.6 18.4l1.2-1.2M17.2 6.8l1.2-1.2"/>'),
    key:    ic('<circle cx="8" cy="8" r="4"/><path d="M11 11l8 8M16.5 16.5l2-2M19 19l2-2"/>'),
    wifi:   ic('<path d="M2.5 9a15 15 0 0 1 19 0"/><path d="M5.5 12.6a10.5 10.5 0 0 1 13 0"/><path d="M8.6 16.2a6 6 0 0 1 6.8 0"/><path d="M12 19.6h.01"/>'),
    rules:  ic('<path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z"/><path d="M8 6H6.5A1.5 1.5 0 0 0 5 7.5v12A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 17.5 6H16"/><path d="M8.8 13.4l2 2 4.4-4.4"/>'),
    bus:    ic('<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10h14M9 17l-2 4M15 17l2 4M9 13.6h.01M15 13.6h.01"/>'),
    sight:  ic('<path d="M3 19h18M3 19l6-8 3.5 4.5L15 12l6 7"/><circle cx="17" cy="7" r="2"/>'),
    food:   ic('<path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v6M11 3v6"/><path d="M18 3c-1.6 1.8-2.2 4-2.2 7 0 1.9.9 3 2.2 3v8"/>'),
    med:    ic('<path d="M12 20.5S3.5 14.6 3.5 8.9A4.4 4.4 0 0 1 12 6.6a4.4 4.4 0 0 1 8.5 2.3c0 5.7-8.5 11.6-8.5 11.6z"/><path d="M12 8.6v5M9.5 11.1h5"/>'),
    map:    ic('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>'),
    beach:  ic('<path d="M12 21V9"/><path d="M4 9a8 8 0 0 1 16 0z"/><path d="M6 21h12"/>'),
    tv:     ic('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>'),
    remote: ic('<rect x="8" y="2.5" width="8" height="19" rx="3"/><circle cx="12" cy="8.5" r="2"/><path d="M10.5 13.5h.01M13.5 13.5h.01M10.5 16.5h.01M13.5 16.5h.01"/>'),
    water:  ic('<path d="M12 3.5s6 6.4 6 10.6a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>'),
    lock:   ic('<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><path d="M12 14.5v2.5"/>'),
    door:   ic('<path d="M5 21V4.5A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5V21"/><path d="M3 21h18M14.5 12.5h.01"/>'),
    globe:  ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 3.8 5.7 3.8 9s-1.2 6.3-3.8 9c-2.6-2.7-3.8-5.7-3.8-9S9.4 5.7 12 3z"/>'),
    music:  ic('<path d="M9 18V5.5l11-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>')
  };

  /* ================= FOLHAGENS DECORATIVAS ================= */
  /* folha de bananeira */
  ART.leaf1 = s("0 0 160 260",
    '<path d="M80 6 C146 58 148 192 80 254 C12 192 14 58 80 6 Z" fill="'+M+'"/>'+
    '<path d="M80 6 C146 58 148 192 80 254 C80 170 80 90 80 6 Z" fill="'+MD+'" opacity=".28"/>'+
    '<path d="M80 12 C80 92 80 172 80 248" stroke="'+MD+'" stroke-width="5" fill="none" stroke-linecap="round"/>'+
    '<g stroke="'+MD+'" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round">'+
      '<path d="M80 56 C104 64 122 80 132 100"/>'+
      '<path d="M80 104 C104 112 122 128 130 148"/>'+
      '<path d="M80 152 C102 160 116 174 124 192"/>'+
      '<path d="M80 56 C56 64 38 80 28 100"/>'+
      '<path d="M80 104 C56 112 38 128 30 148"/>'+
      '<path d="M80 152 C58 160 44 174 36 192"/>'+
    '</g>');

  /* palmeira-leque */
  ART.leaf2 = s("0 0 220 200",
    '<g stroke="'+T+'" stroke-linecap="round" fill="none">'+
      '<path d="M110 186 Q110 100 110 26" stroke-width="13"/>'+
      '<path d="M110 186 Q88 108 58 40" stroke-width="12"/>'+
      '<path d="M110 186 Q132 108 162 40" stroke-width="12"/>'+
      '<path d="M110 186 Q72 122 30 62" stroke-width="11"/>'+
      '<path d="M110 186 Q148 122 190 62" stroke-width="11"/>'+
      '<path d="M110 186 Q56 140 12 108" stroke-width="10"/>'+
      '<path d="M110 186 Q164 140 208 108" stroke-width="10"/>'+
    '</g>'+
    '<circle cx="110" cy="186" r="11" fill="'+TD+'"/>');

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
