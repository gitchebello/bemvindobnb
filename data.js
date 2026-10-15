/* =========================================================
   1) CONFIGURAÇÃO — EDITE AQUI COM OS SEUS DADOS REAIS
   Os valores abaixo são EXEMPLOS. Troque pelos verdadeiros:
   nome do prédio, apartamento, Wi-Fi, senha, código do cofre
   e telefones da portaria. Tudo se atualiza nos 3 idiomas de uma vez.
   ========================================================= */
var CFG = {
  host:         "Auristela",
  /* contato com o anfitrião: só pelo chat do Airbnb (sem telefone no site) */
  airbnbMsg:    "https://www.airbnb.com/guest/messages",
  apt:          "Apartamento 412",
  aptShort:     "412",
  floor:        "4º",
  address:      "Rua Felipe de Oliveira, 4 — Copacabana, Rio de Janeiro / RJ",
  addressShort: "Rua Felipe de Oliveira, 4 — Copacabana",
  wifi:         "ape_copa",
  wifiPass:     "copacabana412",
  checkin:      "15:00",
  checkout:     "11:00",
  guests:       4,
  portaria:     "(21) 99217-9660",
  lat:          -22.96185,
  lng:          -43.17661,
  /* Fotos da galeria: salve suas imagens na pasta "fotos/" com estes
     nomes (ou ajuste a lista). As que não existirem são ignoradas. */
  photos: ["fotos/1.jpg","fotos/2.jpg","fotos/3.jpg","fotos/4.jpg","fotos/5.jpg","fotos/6.jpg","fotos/7.jpg","fotos/8.jpg"]
};

var MAPS = "https://www.google.com/maps/search/?api=1&query=";
var HOME_MAP = MAPS + encodeURIComponent("Rua Felipe de Oliveira, 4, Copacabana, Rio de Janeiro");
var HOME_DIR = "https://www.google.com/maps/dir/?api=1&destination=" +
               encodeURIComponent("Rua Felipe de Oliveira 4, Copacabana, Rio de Janeiro");

/* =========================================================
   2) DADOS IGUAIS NOS 3 IDIOMAS
   ========================================================= */
var DATA = {

  /* pontos turísticos — il = ilustração, star = imperdível */
  attractions: [
    {id:"copa",     il:"copa", img:"img/forte.jpg", ll:[-22.9867,-43.1873],     star:1, name:"Praia de Copacabana e o Forte",            time:"8 min",      cost:"Praia grátis · Forte ≈ R$ 10", map:"Forte de Copacabana"},
    {id:"cristo",   il:"cristo", img:"img/cristo.jpg", ll:[-22.9519,-43.2105],   star:1, name:"Cristo Redentor (Corcovado)",              time:"60–80 min", cost:"≈ R$ 100 a 140",               map:"Cristo Redentor"},
    {id:"pao",      il:"pao", img:"img/pao.jpg", ll:[-22.9492,-43.1545],      star:1, name:"Pão de Açúcar (bondinho)",                 time:"20–40 min", cost:"≈ R$ 190",                     map:"Bondinho Pao de Acucar"},
    {id:"ipanema",  il:"ipanema", img:"img/ipanema.jpg", ll:[-22.9889,-43.1915],  star:1, name:"Ipanema e o pôr do sol no Arpoador",       time:"10–25 min", cost:"Grátis",                       map:"Pedra do Arpoador"},
    {id:"lagoa",    il:"lagoa", img:"img/lagoa.jpg", ll:[-22.9711,-43.2049],    star:0, name:"Lagoa Rodrigo de Freitas",                 time:"15–25 min", cost:"Grátis",                       map:"Lagoa Rodrigo de Freitas"},
    {id:"jb",       il:"jb", img:"img/jb.jpg", ll:[-22.9606,-43.2117],       star:0, name:"Jardim Botânico e Parque Lage",            time:"25–35 min", cost:"Jardim ≈ R$ 35 · Lage grátis", map:"Jardim Botanico do Rio de Janeiro"},
    {id:"centro",   il:"centro", img:"img/centro.jpg", ll:[-22.909,-43.1765],   star:0, name:"Centro histórico",                          time:"25–35 min", cost:"Grátis",                       map:"Theatro Municipal do Rio de Janeiro"},
    {id:"maua",     il:"maua", img:"img/maua.jpg", ll:[-22.8944,-43.1794],     star:0, name:"Museu do Amanhã e Praça Mauá",             time:"40–50 min", cost:"≈ R$ 30 a 150",                map:"Museu do Amanha"},
    {id:"lapa",     il:"lapa", img:"img/lapa.jpg", ll:[-22.9152,-43.1793],     star:0, name:"Escadaria Selarón e Arcos da Lapa",        time:"30–40 min", cost:"Grátis",                       map:"Escadaria Selaron"},
    {id:"santa",    il:"santa", img:"img/santa.jpg", ll:[-22.9208,-43.1871],    star:0, name:"Santa Teresa e o bondinho amarelo",        time:"45–60 min", cost:"Bonde ≈ R$ 20",                map:"Bonde de Santa Teresa"},
    {id:"maracana", il:"maracana", img:"img/maracana.jpg", ll:[-22.9121,-43.2302], star:0, name:"Estádio do Maracanã",                       time:"35–45 min", cost:"Visita ≈ R$ 90",               map:"Estadio do Maracana"},
    {id:"mirantes", il:"mirantes", img:"img/mirantes.jpg", ll:[-22.9459,-43.1957], star:0, name:"Mirante Dona Marta e Vista Chinesa",       time:"20–40 min", cost:"Grátis",                       map:"Mirante Dona Marta"},
    {id:"barra",    il:"barra", img:"img/barra.jpg?v=2", ll:[-23.041,-43.5059],    star:0, name:"Barra, Prainha e Grumari",                  time:"45–90 min", cost:"Grátis",                       map:"Prainha Rio de Janeiro"},
    {id:"niteroi",  il:"niteroi", img:"img/niteroi.jpg", ll:[-22.9077,-43.1257],  star:0, name:"Niterói e o museu MAC, de barca",          time:"50–70 min", cost:"Barca ≈ R$ 9",                 map:"Museu de Arte Contemporanea de Niteroi"},
    {id:"leme",     il:"copa", img:"img/leme.jpg?v=2", ll:[-22.9632,-43.1623],     star:0, name:"Forte do Leme (Forte Duque de Caxias)",   time:"15 min + trilha", cost:"R$ 10 · terça grátis",  map:"Forte Duque de Caxias, Leme"}
  ],

  /* meios de transporte */
  transport: [
    {id:"metro", il:"metro"},
    {id:"bus",   il:"bus"},
    {id:"app",   il:"app"},
    {id:"walk",  il:"walk"},
    {id:"vlt",   il:"vlt"},
    {id:"brt",   il:"brt"},
    {id:"taxi",  il:"taxi"},
    {id:"bike",  il:"bike"},
    {id:"scooter", il:"scooter"}
  ],

  /* 4 regras principais */
  mainrules: [
    {id:"smoke",  il:"nosmoke"},
    {id:"party",  il:"noparty"},
    {id:"quiet",  il:"quiet"},
    {id:"people", il:"people"},
    {id:"toilet", il:"toilet"},
    {id:"eco",    il:"ecotouch"}
  ],

  /* restaurantes: g = grupo, il = ilustração do grupo */
  restGroupsMeta: [
    {g:"copa",   il:"coco"},
    {g:"ipa",    il:"drink"},
    {g:"bota",   il:"beer"},
    {g:"gavea",  il:"drink"},
    {g:"centro", il:"coffee"},
    {g:"veg",    il:"leaf"}
  ],

  restaurants: [
    {id:"perola",      il:"wine", g:"copa",   name:"Adega Pérola",             addr:"Rua Siqueira Campos, 138",           price:"$$",   walk:"15 min a pé"},
    {id:"pavao",       il:"beer", g:"copa",   name:"Pavão Azul",               addr:"Rua Hilário de Gouveia, 71",         price:"$",    walk:"13 min a pé"},
    {id:"cervantes",   il:"sandwich", g:"copa",   name:"Cervantes",                addr:"Av. Prado Júnior, 335",              price:"$",    walk:"2 min a pé"},
    {id:"nema",        il:"bread", g:"copa",   name:"Nema",                     addr:"Av. Nossa Senhora de Copacabana, 22 — Leme", price:"$$", walk:"5 min a pé"},
    {id:"sorvetino",   il:"icecream", g:"copa",   name:"Sorvetiño",                addr:"Av. Prado Júnior, 330",              price:"$",    walk:"2 min a pé"},
    {id:"galeto",      il:"chicken", g:"copa",   name:"Galeto Sat's",             addr:"Rua Barata Ribeiro, 7",              price:"$",    walk:"2 min a pé"},
    {id:"bakers",      il:"croissant", g:"copa",   name:"Bakers",                   addr:"Rua Santa Clara, 86",                price:"$$",   walk:"20 min a pé"},
    {id:"cafeina",     il:"coffee", g:"copa",   name:"Cafeína",                  addr:"Rua Barata Ribeiro, 507",            price:"$",    walk:"10 min a pé"},
    {id:"colomboforte",il:"cake", g:"copa",   name:"Confeitaria Colombo (Forte)", addr:"Forte de Copacabana, Posto 6",    price:"$$",   walk:""},
    {id:"davi",        il:"shrimp", g:"copa",   name:"Bar do David",             addr:"Ladeira Ary Barroso — Leme",         price:"$$",   walk:""},
    {id:"joaquina",    il:"pot", g:"copa",   name:"Joaquina",                 addr:"Av. Atlântica, 974 — Leme",          price:"$$$",  walk:"10 min a pé"},
    {id:"palace",      il:"skewer", g:"copa",   name:"Churrascaria Palace",      addr:"Rua Rodolfo Dantas, 16",             price:"$$$",  walk:"15 min a pé"},
    {id:"mee",         il:"toast", g:"copa",   name:"Mee (Copacabana Palace)",  addr:"Av. Atlântica, 1702",                price:"$$$$", walk:""},

    {id:"garota",      il:"beer", g:"ipa",    name:"Garota de Ipanema",        addr:"Rua Vinícius de Moraes, 49",         price:"$$",   walk:""},
    {id:"zaza",        il:"drink", g:"ipa",    name:"Zazá Bistrô Tropical",     addr:"Rua Joana Angélica, 40",             price:"$$$",  walk:""},
    {id:"feijoada",    il:"pot", g:"ipa",    name:"Casa da Feijoada",         addr:"Rua Prudente de Moraes, 10",         price:"$$$",  walk:""},
    {id:"bibi",        il:"juice", g:"ipa",    name:"Bibi Sucos",               addr:"Av. Ataulfo de Paiva, 591",          price:"$",    walk:""},
    {id:"talho",       il:"bread", g:"ipa",    name:"Talho Capixaba",           addr:"Av. Ataulfo de Paiva, 1022",         price:"$$",   walk:""},
    {id:"baked",       il:"croissant", g:"ipa",    name:"Baked",                    addr:"Rua Visconde de Pirajá, 183",        price:"$",   walk:""},
    {id:"vero",        il:"icecream", g:"ipa",    name:"Vero Gelato",              addr:"Rua Visconde de Pirajá, 260",        price:"$",    walk:""},
    {id:"ct",          il:"toast", g:"ipa",    name:"CT Boucherie",             addr:"Rua Dias Ferreira, 636",             price:"$$$$", walk:""},

    {id:"pobreta",     il:"coco", g:"bota",   name:"Pobreta da Urca",          addr:"Início da orla da Urca, em frente ao Urca Grill", price:"$", walk:""},
    {id:"barurca",     il:"beer", g:"bota",   name:"Bar Urca",                 addr:"Rua Cândido Gaffrée, 205",           price:"$$",    walk:""},
    {id:"chanchada",   il:"beer", g:"bota",   name:"Chanchada",                addr:"Rua General Polidoro, 164 B",        price:"$$",   walk:""},
    {id:"botica",      il:"beer", g:"bota",   name:"Bar Botica",               addr:"Rua Fernandes Guimarães, 30",        price:"$$",   walk:""},
    {id:"macuna",      il:"music", g:"bota",   name:"Macuna",                   addr:"Rua Fernandes Guimarães, 66",        price:"$$",   walk:""},
    {id:"tremetreme",  il:"bottle", g:"bota",   name:"Treme Treme",              addr:"Rua Arnaldo Quintela, 31",           price:"$",    walk:""},
    {id:"slow",        il:"bread", g:"bota",   name:"The Slow Bakery",          addr:"Rua General Polidoro, 25",           price:"$$",   walk:""},
    {id:"lasai",       il:"toast", g:"bota",   name:"Lasai",                    addr:"Rua Conde de Irajá, 191",            price:"$$$$", walk:""},

    {id:"braseiro",    il:"skewer", g:"gavea",  name:"Braseiro da Gávea",        addr:"Praça Santos Dumont, 116 — Gávea",   price:"$$",   walk:""},
    {id:"brewteco",    il:"beer", g:"gavea",  name:"Brewteco Gávea",           addr:"Praça Santos Dumont, 106 — Gávea",   price:"$$",   walk:""},
    {id:"guimas",      il:"fish", g:"gavea",  name:"Guimas",                   addr:"Rua José Roberto Macedo Soares, 5 — Gávea", price:"$$$", walk:""},
    {id:"okioki",      il:"sushi", g:"gavea",  name:"Oki Oki",                  addr:"Rua Marquês de São Vicente, 61 — Gávea", price:"$$$", walk:""},
    {id:"braz",        il:"pizza", g:"gavea",  name:"Bráz Pizzaria",            addr:"Rua Maria Angélica, 129 — Jardim Botânico", price:"$$$", walk:""},
    {id:"camolese",    il:"wine", g:"gavea",  name:"Casa Camolese",            addr:"Rua Jardim Botânico, 983 — Jardim Botânico", price:"$$$", walk:""},
    {id:"katzsu",      il:"bowl", g:"gavea",  name:"Katz-Sū",                  addr:"Rua Von Martius, 325 — Jardim Botânico", price:"$$$", walk:""},
    {id:"absurda",     il:"cake", g:"gavea",  name:"Absurda Confeitaria",      addr:"Rua Pacheco Leão, 792 — Jardim Botânico", price:"$$", walk:""},
    {id:"oteque",      il:"toast", g:"bota",   name:"Oteque",                   addr:"Rua Conde de Irajá, 581",            price:"$$$$", walk:""},

    {id:"colombo",     il:"tea", g:"centro", name:"Confeitaria Colombo",      addr:"Rua Gonçalves Dias, 32",             price:"$$",   walk:""},
    {id:"barluiz",     il:"beer", g:"centro", name:"Bar Luiz",                 addr:"Rua da Carioca, 39",                 price:"$$",   walk:""},
    {id:"capela",      il:"pot", g:"centro", name:"Nova Capela",              addr:"Av. Mem de Sá, 96 — Lapa",           price:"$$",   walk:""},
    {id:"mineiro",     il:"pot", g:"centro", name:"Bar do Mineiro",           addr:"Rua Paschoal Carlos Magno, 99",      price:"$$",   walk:""},
    {id:"apraz",       il:"drink", g:"centro", name:"Aprazível",                addr:"Rua Aprazível, 62 — Santa Teresa",   price:"$$$",  walk:""},
    {id:"scenarium",   il:"music", g:"centro", name:"Rio Scenarium",            addr:"Rua do Lavradio, 20 — Lapa",         price:"$$",   walk:""},

    {id:"teva",        il:"leaf", g:"veg",    name:"Teva",                     addr:"Av. Henrique Dumont, 110 — Ipanema", price:"$$",   walk:""},
    {id:"veganvegan",  il:"leaf", g:"veg",    name:"Vegan Vegan",              addr:"Rua Hans Staden, 30 — Botafogo",     price:"$$",   walk:""}
  ],

  hospitals: [
    {id:"copastar", il:"hosp", name:"Hospital Copa Star",  addr:"Rua Figueiredo de Magalhães, 700 — Copacabana", tel:"(21) 3445-2800", dist:"≈ 1,3 km", map:"Hospital Copa Star, Rua Figueiredo de Magalhães 700, Copacabana", ll:[-22.9667,-43.1898]},
    {id:"copador",  il:"hosp", name:"Hospital Copa D'Or",  addr:"Rua Figueiredo de Magalhães, 875 — Copacabana", tel:"(21) 2545-3600", dist:"≈ 1,5 km", map:"Hospital Copa D'Or, Rua Figueiredo de Magalhães 875, Copacabana", ll:[-22.9655,-43.1904]},
    {id:"saolucas", il:"hosp", name:"Hospital São Lucas",  addr:"Travessa Frederico Pamplona, 32 — Copacabana",  tel:"(21) 2545-4000", dist:"≈ 2 km",   map:"Hospital São Lucas, Travessa Frederico Pamplona 32, Copacabana", ll:[-22.9722,-43.1928]}
  ],

  /* SUS: a unidade pública de emergência mais perto de casa */
  sus: {name:"UPA 24h Copacabana", addr:"Rua Siqueira Campos, 129 — Copacabana", tel:"(21) 2333-9287",
        dist:"≈ 1,2 km", map:"UPA Copacabana, Rua Siqueira Campos 129, Rio de Janeiro", ll:[-22.96684,-43.18681]},

  /* bar em frente ao apartamento */
  caju: {name:"Caju Gastrobar", addr:"Praça Demétrio Ribeiro, 97 — Copacabana", tel:"(21) 3264-3713",
         map:"Caju Gastrobar, Praça Demétrio Ribeiro 97, Copacabana", ll:[-22.9621,-43.1760], img:"img/feijoada.jpg"},

  pharmacies: [
    {id:"leme",     il:"pharma", name:"Farmácia do Leme (24 horas)", addr:"Av. Prado Júnior, 237 — Copacabana", map:"Farmácia do Leme, Av. Prado Júnior 237, Rio de Janeiro"},
    {id:"pacheco",  il:"pharma", name:"Drogaria Pacheco",  addr:"Av. N. Sra. de Copacabana e Rua Barata Ribeiro", map:"Drogaria Pacheco Copacabana"},
    {id:"drogasil", il:"pharma", name:"Drogasil",          addr:"Av. N. Sra. de Copacabana",                      map:"Drogasil Copacabana"},
    {id:"venancio", il:"pharma", name:"Drogaria Venancio", addr:"Rua Barata Ribeiro, 194 — Copacabana", map:"Drogaria Venancio, Rua Barata Ribeiro 194, Rio de Janeiro"}
  ],

  phones: [
    {id:"samu",  n:"192",  short:false},
    {id:"pm",    n:"190",  short:false},
    {id:"bomb",  n:"193",  short:false},
    {id:"civil", n:"197",  short:false},
    {id:"dc",    n:"199",  short:false},
    {id:"pref",  n:"1746", short:false},
    {id:"mulher",n:"180",  short:false},
    {id:"dh",    n:"100",  short:false},
    {id:"deat",  n:"(21) 2332-2924", short:true},
    {id:"denun", n:"(21) 2253-1177", short:true}
  ],

  /* ícone de cada seção (navegação e barra inferior do celular) */
  secIcons: {
    checkin:"key", wifi:"wifi", regras:"rules", transporte:"bus",
    passeios:"sight", comer:"food", dicas:"sun", saude:"med",
    mapa:"map", numeros:"phone", feedback:"star"
  },

  /* quiosques do calçadão — t = etiqueta (distância / onde) */
  kiosks: [
    {id:"mureta",  il:"kiosk", name:"Mureta do Leme",   t:"≈ 15 min",  map:"Quiosque Mureta do Leme, Rio de Janeiro"},
    {id:"ox",      il:"kiosk", name:"Espaço OX",        t:"≈ 10 min",  map:"Espaço OX Leme, Rio de Janeiro"},
    {id:"arrasta", il:"kiosk", name:"Arrastapé",        t:"Copacabana", map:"Quiosque Arrastapé Copacabana, Rio de Janeiro"},
    {id:"coisa",   il:"kiosk", name:"Coisa de Carioca", t:"Posto 4",   map:"Quiosque Coisa de Carioca Copacabana, Rio de Janeiro"}
  ],

  /* shoppings perto de casa */
  malls: [
    {id:"riosul",  il:"mall", name:"Shopping Rio Sul",           addr:"Rua Lauro Müller, 116 — Botafogo",       t:"≈ 1 km",   map:"Shopping Rio Sul, Rio de Janeiro"},
    {id:"cidcopa", il:"mall", name:"Shopping Cidade Copacabana", addr:"Rua Siqueira Campos, 143 — Copacabana",  t:"≈ 1,3 km", map:"Shopping Cidade Copacabana, Rio de Janeiro"},
    {id:"bps",     il:"mall", name:"Botafogo Praia Shopping",    addr:"Praia de Botafogo, 400 — Botafogo",      t:"≈ 3 km",   map:"Botafogo Praia Shopping, Rio de Janeiro"}
  ],

  /* supermercados perto de casa */
  markets: [
    {id:"horti",   il:"cart", name:"Hortifruti",               addr:"Av. Prado Júnior, 281 — Copacabana",          t:"≈ 150 m", map:"Hortifruti, Av. Prado Júnior 281, Rio de Janeiro"},
    {id:"pao",     il:"cart", name:"Pão de Açúcar",            addr:"Rua Ministro Viveiros de Castro, 38 — Copacabana", t:"≈ 200 m", map:"Pão de Açúcar, Rua Ministro Viveiros de Castro 38, Rio de Janeiro"},
    {id:"mundial", il:"cart", name:"Mundial",                  addr:"Rua Siqueira Campos, 69 — Copacabana",         t:"≈ 1,2 km", map:"Supermercados Mundial, Rua Siqueira Campos 69, Rio de Janeiro"},
    {id:"zonasul", il:"cart", name:"Zona Sul (24 horas)",      addr:"Av. Atlântica, 866 — Leme",                     t:"≈ 600 m", map:"Supermercado Zona Sul, Av. Atlântica 866, Rio de Janeiro"}
  ],

  /* consulados no Rio — o nome de cada país abre a busca no Google Maps */
  consulates: [
    {f:"🇩🇪", pt:"Alemanha",       en:"Germany",        es:"Alemania"},
    {f:"🇦🇴", pt:"Angola",         en:"Angola",         es:"Angola"},
    {f:"🇦🇷", pt:"Argentina",      en:"Argentina",      es:"Argentina"},
    {f:"🇦🇺", pt:"Austrália",      en:"Australia",      es:"Australia"},
    {f:"🇧🇴", pt:"Bolívia",        en:"Bolivia",        es:"Bolivia"},
    {f:"🇨🇦", pt:"Canadá",         en:"Canada",         es:"Canadá"},
    {f:"🇨🇱", pt:"Chile",          en:"Chile",          es:"Chile"},
    {f:"🇨🇳", pt:"China",          en:"China",          es:"China"},
    {f:"🇨🇴", pt:"Colômbia",       en:"Colombia",       es:"Colombia"},
    {f:"🇰🇷", pt:"Coreia do Sul",  en:"South Korea",    es:"Corea del Sur"},
    {f:"🇪🇨", pt:"Equador",        en:"Ecuador",        es:"Ecuador"},
    {f:"🇪🇸", pt:"Espanha",        en:"Spain",          es:"España"},
    {f:"🇺🇸", pt:"Estados Unidos", en:"United States",  es:"Estados Unidos"},
    {f:"🇫🇷", pt:"França",         en:"France",         es:"Francia"},
    {f:"🇮🇹", pt:"Itália",         en:"Italy",          es:"Italia"},
    {f:"🇯🇵", pt:"Japão",          en:"Japan",          es:"Japón"},
    {f:"🇲🇽", pt:"México",         en:"Mexico",         es:"México"},
    {f:"🇳🇱", pt:"Países Baixos",  en:"Netherlands",    es:"Países Bajos"},
    {f:"🇵🇾", pt:"Paraguai",       en:"Paraguay",       es:"Paraguay"},
    {f:"🇵🇪", pt:"Peru",           en:"Peru",           es:"Perú"},
    {f:"🇵🇹", pt:"Portugal",       en:"Portugal",       es:"Portugal"},
    {f:"🇬🇧", pt:"Reino Unido",    en:"United Kingdom", es:"Reino Unido"},
    {f:"🇷🇺", pt:"Rússia",         en:"Russia",         es:"Rusia"},
    {f:"🇨🇭", pt:"Suíça",          en:"Switzerland",    es:"Suiza"},
    {f:"🇺🇾", pt:"Uruguai",        en:"Uruguay",        es:"Uruguay"},
    {f:"🇻🇪", pt:"Venezuela",      en:"Venezuela",      es:"Venezuela"}
  ]
};
