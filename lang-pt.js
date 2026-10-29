/* ===================== PORTUGUÊS ===================== */
var L = window.L || (window.L = {});

L.pt = {
htmlLang:"pt-BR",

lbl:{
  how:"Como chegar", time:"Quanto tempo leva", cost:"Quanto custa", tip:"Dica",
  map:"Ver no mapa", tel:"Telefone", dist:"Distância daqui",
  copy:"Copiar", copied:"Copiado!", network:"Nome da rede", pass:"Senha",
  more:"Ver mais", openmaps:"Abrir no Google Maps", route:"Como chegar até aqui",
  print:"Imprimir ou salvar em PDF", must:"Imperdível", sum:"Resumo", close:"Fechar", open:"Abrir", shut:"Fechar", travaAlt:"Trava de segurança da janela", hot:"Quente", cold:"Fria", left:"esquerda", right:"direita",
  wifiTip:"Dica: toque em “Copiar” e cole na tela do seu celular. Não precisa digitar.",
  near:"Arredores", city:"Cidade toda", mapAria:"Mapa interativo do Rio de Janeiro",
  toDark:"Mudar para o modo escuro", toLight:"Mudar para o modo claro",
  dark:"Modo escuro", light:"Modo claro"
},

hero:{
  photoAlt:"Praia de Copacabana vista do alto", photoTag:"Praia de Copacabana · a 8 min de casa",
  kicker:"Guia de boas-vindas",
  t1:"Seja bem-vindo",
  t2:"ao Rio de Janeiro!",
  lead:"Este guia explica tudo de forma simples: horários, senha do Wi-Fi, regras da casa, como chegar aos passeios, onde comer e o que fazer se precisar de ajuda. Comece pelo menu logo abaixo.",
  chips:[
    {ic:"clock", x:"Entrada a partir das <b>"+CFG.checkin+"</b>"},
    {ic:"clock", x:"Saída até <b>"+CFG.checkout+"</b>"},
    {ic:"beach", x:"Praia a <b>8 minutos</b> a pé"},
    {ic:"bus",   x:"Metrô a <b>7 minutos</b> a pé"}
  ]
},

sos:{
  label:"Precisa de ajuda agora?",
  b1:{n:"192", t:"Ambulância<br>(emergência médica)"},
  b2:{n:"190", t:"Polícia<br>(emergência)"},
  b3:{n:CFG.host, t:"Sua anfitriã. Precisa de algo? Fale com ela pelo <strong>chat do Airbnb</strong>, na própria plataforma."}
},

menu:{
  t:"Por onde começar",
  p:"Toque no card do assunto que você quer. Cada um leva a uma explicação completa, com desenhos e passo a passo."
},

menuDesc:{
  checkin:"Como entrar no apartamento e o que fazer na saída",
  wifi:"Wi-Fi, TV Roku, ar condicionado, cozinha e outros eletrodomésticos",
  regras:"Cumprir as regras é essencial para uma ótima estadia",
  saude:"Hospital, farmácia e telefones de emergência",
  transporte:"Metrô, ônibus e aplicativos, explicados do zero",
  passeios:"Como ir a cada ponto turístico saindo daqui",
  comer:"Lugares bons e baratos perto, e clássicos do Rio",
  feedback:"Um pedido rápido no fim da sua viagem"
},

foot:{
  t:"Boa estadia!",
  bio:"<strong>Quem é a "+CFG.host+"?</strong> Ela ama viajar e já fez disso profissão: foi aeromoça da nostálgica <strong>VARIG</strong>. Depois se formou professora e terapeuta de <strong>Reiki</strong>. Hoje, além de atuar na área, proporciona uma ótima estadia para novos viajantes que querem conhecer, ou voltar, para a <strong>Cidade Maravilhosa</strong>.",
  p:"Este guia foi feito por <strong>"+CFG.host+"</strong> para deixar tudo mais fácil. Ficou com dúvida? Me chame pelo chat do Airbnb — respondo rápido. E se alguma coisa puder melhorar a sua estadia, me avise enquanto você ainda estiver aqui.",
  wa:"Falar com o anfitrião"
},

restGroups:{
  copa:"Pertinho de casa (Copacabana e Leme)",
  ipa:"Ipanema e Leblon",
  bota:"Botafogo e Urca",
  gavea:"Jardim Botânico e Gávea",
  centro:"Centro, Lapa e Santa Teresa",
  veg:"Vegetariano e vegano"
},

nav:{ home:"Início", tours:"Passeios", eat:"Comer", health:"Saúde", phones:"Telefones" },

gallery:{
  t:"Um gostinho da casa e do bairro",
  p:"Deslize para o lado para ver as fotos do apartamento e dos arredores."
},

quick:[
  {ic:"door",  k:"Seu apartamento", x:"<b>AP "+CFG.aptShort+" · "+CFG.floor+" andar</b><br>Saindo do elevador, fica à <b>esquerda</b>."},
  {ic:"lock",  k:"Chegando", x:"Porta com <b>senha</b>, sem chaves."},
  {ic:"bolt",  k:"Energia 110V", x:"Todas as tomadas da casa são <b>110V</b>. Confira seus aparelhos antes de ligar."},
  {ic:"water", k:"Água de beber", x:"Só a do <b>filtro</b> (normal, fria ou gelada)."},
  {ic:"beach", k:"Voltando da praia?", x:"Entre pela <b>entrada dos fundos</b> do prédio, você encontrará uma duchinha para retirar o excesso de areia."},
  {ic:"music", k:"Bem em frente", x:"O <b>Caju</b>, bar com samba e feijoada, fica do outro lado da rua."}
],

tv:{
  roku:{k:"Controle Roku", h:"Um controle para tudo", d:"A Smart TV <strong>liga e desliga pelo próprio controle Roku</strong> (botão vermelho ⏻). Ele também serve para escolher aplicativos, filmes e séries."},
  photoAlt:"Controle remoto do Roku com os botões numerados",
  keysT:"Os botões do controle Roku",
  keys:[
    ["⏻", "Liga / desliga", "O botão vermelho no alto do controle. Liga e desliga a Smart TV. Ao ligar, aparece “sem sinal” por alguns instantes até surgir a tela roxa do Roku. É normal.", "Ligar"],
    ["←", "Voltar (setinha)", "Muito útil! Volta para a tela anterior: sai do filme para a lista, fecha um menu ou volta para dentro do aplicativo. Aperte quantas vezes precisar.", "Voltar"],
    ["⌂", "Casinha (Home)", "Volta para a tela inicial, onde ficam todos os aplicativos.", "Início"],
    ["◀ ▲ ▼ ▶", "Setas", "Andam pelos menus, aplicativos e episódios.", "Setas"],
    ["OK", "OK", "Abre ou confirma o que estiver selecionado.", "OK"],
    ["🎤", "Microfone (voz)", "<strong>Segure o botão</strong> e fale o nome do aplicativo que você quer usar, por exemplo “Globoplay” ou “YouTube”. Solte quando terminar de falar e ele abre sozinho.", "Voz"],
    ["▶❚❚", "Play / Pausa", "Pausa e continua o vídeo.", "Play"],
    ["＋ －", "Volume e mudo", "Ficam na <strong>lateral direita</strong> do controle (veja a foto). No botão comprido: a parte de <strong>cima</strong> (alto-falante com ondas) <strong>aumenta</strong> e a de <strong>baixo diminui</strong>. O botão separado, logo abaixo (alto-falante com ×), é o <strong>mudo</strong>: tira e volta o som."]
  ],
  stepsT:"Passo a passo para assistir",
  steps:[
    "Ligue a TV com o <strong>botão vermelho ⏻</strong> do controle Roku. Primeiro aparece a mensagem <strong>“sem sinal”</strong>: <strong>não se preocupe, é normal</strong>. Aguarde alguns instantes que o Roku liga sozinho e aparece uma <strong>tela roxa</strong>.",
    "Pegue o <strong>controle do Roku</strong> e aperte a <strong>casinha ⌂</strong>. Aparece a tela inicial com os aplicativos.",
    "Com as <strong>setas</strong>, escolha Netflix, Prime Video, YouTube, Globoplay… e aperte <strong>OK</strong>. Ou use a voz: <strong>segure o botão do microfone 🎤</strong> e fale o nome do aplicativo.",
    "Para voltar uma tela, aperte a <strong>setinha ←</strong> (no alto, ao lado da casinha). Ela sai do filme para a lista, fecha menus e volta para onde você estava.",
    "O <strong>Globoplay</strong> já está logado e é da casa: pode assistir à vontade. É no <strong>Globoplay</strong> que dá para ver a <strong>Globo ao vivo</strong>. Os outros serviços por assinatura (Netflix, Prime Video, Disney+ etc.) <strong>são por conta de cada hóspede</strong>, com a sua própria conta.",
    "Para entrar na sua conta, escolha “Entrar” no aplicativo. Muitos mostram um <strong>código ou QR code</strong>: abra no celular e confirme, sem precisar digitar senha na TV.",
    "Antes de ir embora, <strong>saia das suas contas</strong> em cada aplicativo (o Globoplay é da casa, pode deixar)."
  ],
  lost:"<strong>Se perdeu?</strong> Aperte a <strong>casinha ⌂</strong> do controle para voltar ao início e recomeçar.",
  tip:"<strong>Tela preta?</strong> Aperte o <strong>⏻</strong> do controle Roku apontando para a TV. <strong>O controle não responde?</strong> Confira as pilhas ou tire a TV da tomada por 10 segundos e ligue de novo. Tem <strong>pilhas extras na gaveta embaixo da TV</strong>."
},

sus:{k:"SUS · público e gratuito", free:"Gratuito", d:"A unidade de emergência do SUS mais perto de casa. Atende urgências 24 horas, de graça, <strong>inclusive estrangeiros</strong>. Leve passaporte ou documento com foto."},

caju:{k:"Bem em frente ao prédio", badge:"Samba ao vivo",
  d:"Atravessou a rua, chegou. O Caju é um gastrobar com alma de boteco carioca: mesinhas na calçada de frente para a pracinha, petiscos, drinks e roda de samba. É um dos bares mais queridos do bairro.",
  list:["<strong>Feijoada aos sábados</strong>, com todos os acompanhamentos.","Petiscos a partir de uns R$ 20 e drinks a partir de R$ 10 (valores aproximados).","Ótimo para começar ou terminar a noite sem precisar de Uber."]},

kiosks:{
 mureta:"No cantinho do Leme, colado na pedra, com vista da orla inteira. Tem feijoada todos os dias, de manhã até de madrugada, e música ao vivo no fim de semana.",
 ox:"Dois quiosques lado a lado na Praia do Leme: um de comida oriental e outro de petiscos, com drinks caprichados.",
 arrasta:"Comida nordestina de verdade, como baião de dois, com forró e clima de festa no calçadão.",
 coisa:"Petiscos bem cariocas, como espetinho com farofa, num clima descontraído na altura do Posto 4."
},

markets:{
 horti:"Hortifrúti, padaria e mercearia, a 2 minutos a pé. Ótimo para frutas, verduras, pão fresquinho e o básico do dia a dia.",
 pao:"Supermercado completo, a uns 3 minutos a pé, com de tudo para abastecer a casa.",
 mundial:"O mais barato da região. Fica um pouco mais longe, uns 15 minutos a pé, perto do metrô Siqueira Campos, mas compensa para compras maiores. Fecha mais cedo aos domingos.",
 zonasul:"O único aberto <strong>24 horas</strong> aqui perto, de frente para a praia do Leme, uns 8 minutos a pé. Salva quando você chega tarde ou precisa de algo de madrugada."
},
malls:{
 riosul:"O shopping grande mais perto: lojas, cinema e praça de alimentação. Fica logo depois do Túnel Novo — uns 15 minutos a pé ou 5 de Uber.",
 cidcopa:"Galeria tradicional do bairro, perto do metrô Siqueira Campos, com lojinhas e serviços do dia a dia.",
 bps:"Cinema, lojas e restaurantes no último andar com vista para a Enseada de Botafogo e o Pão de Açúcar. Uns 10 minutos de Uber."
},

cooktop:[
 ["1. Aperte", "o botão da boca"],
 ["2. Gire", "sem soltar o botão"],
 ["3. Acendeu!", "a chama aparece"]
],

sofa:[
 ["Puxe a base", "Embaixo do assento, na frente, tem uma <strong>alça</strong>. Puxe a base para fora."],
 ["Retire as almofadas", "Tire as almofadas de cima do sofá."],
 ["Desdobre o colchão", "O assento é o <strong>colchão dobrado</strong>. Abra e deite sobre a base que você puxou."],
 ["Pronto!", "A cama está montada. Para fechar, faça o caminho de volta."]
],

trash:[
 ["blue",   "Cesto azul",    "Plástico e papel",  "Ex.: garrafa PET, embalagens, sacolas, caixas, jornal"],
 ["yellow", "Cesto amarelo", "Metal e vidro",     "Ex.: latinhas, garrafas e potes de vidro, papel-alumínio"],
 ["chute",  "Duto da escada (portinha)", "Todo o resto", "Ex.: restos de comida, guardanapos, lixo do banheiro"]
],

eco:{
 photoAlt:"Painel EcoTouch na parede, ao lado da porta", photoCap:"Este é o EcoTouch: toque no botão ⏻",
 title:"Energia: o botão EcoTouch",
 steps:[
  ["door",  "Entre e feche a porta", "O EcoTouch só funciona com a porta do apartamento fechada."],
  ["touch", "Toque no EcoTouch", "Um toque leve (como na tela do celular) no painel da parede, ao lado da porta, do lado de dentro. Isso habilita ligar os ares condicionados: o da sala (split) pelo controle remoto e o do quarto pelo botão no próprio aparelho."],
  ["bolt",  "Porta fechada, energia ligada", "Enquanto você estiver em casa com a porta fechada, fica tudo funcionando."]
 ],
 list:[
  "O <strong>EcoTouch</strong> é um economizador de energia: um painel de toque na parede do apartamento.",
  "Quando você sai e fecha a porta, a energia dos ares condicionados <strong>desliga sozinha</strong>. É normal.",
  "Ao retornar, <strong>feche a porta e toque no EcoTouch.</strong>",
  "Por isso não dá para deixar o ar ligado enquanto você passeia. Ligue ao chegar: em poucos minutos o ambiente esfria."
 ]
},

sections:[

/* ---------------- 1. CHECK-IN ---------------- */
{id:"checkin", il:"checkin", t:"Entrada e saída", k:"Chegada, porta com senha e portaria 24h", b:[
  {t:"sum", x:"Você pode chegar a <strong>qualquer hora</strong>. Não tem chave: a porta do apartamento abre com <strong>senha</strong>, que eu envio pelo Airbnb antes da sua chegada."},
  {t:"kv", x:[
    ["pin",   "Endereço", CFG.address],
    ["door",  "Onde é", CFG.apt+" · "+CFG.floor+" andar · à esquerda do elevador"],
    ["lock",  "Porta", "Fechadura com senha. Sem chaves."],
    ["clock", "Horário de entrada", "A partir das "+CFG.checkin],
    ["clock", "Horário de saída", "Até as "+CFG.checkout],
    ["people", "Quantas pessoas", "Até "+CFG.guests+" hóspedes"],
    ["phone", "Portaria", "24 horas · "+CFG.portaria]
  ]},
  {t:"h", x:"Como entrar, passo a passo"},
  {t:"ol", x:[
    "Chegue ao prédio na <strong>Rua Felipe de Oliveira, 4</strong>, em frente à Praça Demétrio Ribeiro, com <strong>entrada ao lado do Aomori</strong>, um mercado oriental.",
    "O prédio tem <strong>duas entradas</strong>. Com malas, use a <strong>dos fundos</strong>. <strong>Voltando da praia</strong> também.",
    "Diga ao porteiro que você é hóspede do <strong>apartamento "+CFG.aptShort+"</strong> e preencha a ficha que ele lhe entregará. Se preferir preencher antes, é só me pedir que eu te envio o documento.",
    "Suba de elevador até o <strong>"+CFG.floor+" andar</strong>. Saindo do elevador, o <strong>"+CFG.aptShort+"</strong> fica à <strong>esquerda</strong>.",
    "Digite a <strong>senha</strong> na fechadura (toque na <strong>parte de cima</strong> dela e o teclado vai aparecer). A senha chega pelo Airbnb antes da sua chegada.",
    "Ao entrar, me mande uma mensagem para que eu acompanhe sua chegada!"
  ]},
  {t:"h", x:"Energia: o botão EcoTouch"},
  {t:"eco"},
  {t:"h", x:"O que fazer antes de ir embora"},
  {t:"ul", x:[
    "Feche as janelas. Desligue o ar condicionado, as luzes e a TV.",
    "Saia das suas contas na TV (Netflix, Prime, YouTube…), para ninguém usar depois. O Globoplay é da casa: pode deixar logado.",
    "Feche a porta e confira se ela trancou.",
    "Me mande uma mensagem avisando que saiu."
  ]}
]},

/* ---------------- 2. WI-FI ---------------- */
{id:"wifi", il:"wifi", t:"Wi-Fi e eletrodomésticos", k:"Internet, TV, ar condicionado, cozinha e mais", b:[
  {t:"sum", x:"A internet é gratuita e sem limite. A rede é <strong>"+CFG.wifi+"</strong>. Toque em <strong>Copiar</strong> e cole a senha no seu celular."},
  {t:"wifi"},
  {t:"note", k:"info", x:"<strong>A internet caiu?</strong> O aparelho da internet (roteador) fica no quarto. Tire da tomada, espere 30 segundos e ligue de novo. Isso resolve quase sempre."},
  {t:"h", x:"Televisão: Smart TV com Roku"},
  {t:"tv"},
  {t:"h", x:"Como usar as coisas da casa"},
  {t:"kv", x:[
    ["sofa",  "Sofá-cama", "O sofá da sala é um <strong>sofá-cama</strong>. Para abrir:", "sofa"],
    ["bolt",  "Energia: 110V", "<strong>A energia da casa inteira é 110V</strong>, em todas as tomadas. Antes de ligar secador, chapinha, barbeador ou carregador trazido de fora, confira na etiqueta se ele aceita 110V (bivolt ou “100–240V” funciona). Aparelho só 220V liga fraco ou não liga."],
    ["bulb",  "Luz da sala", "Procurando o interruptor? Ele fica <strong>atrás da porta</strong>."],
    ["window", "Janelas: trava de segurança", "As janelas têm <strong>travas de segurança</strong> como esta da foto, na lateral. Elas seguram a janela: <strong>sempre que abrir uma janela, confira se a trava está segurando</strong>. Sem a trava, <strong>a janela pode cair</strong>.", "trava"],
    ["blind", "Blackout", "<strong>Todas as janelas têm cortina blackout</strong>, que bloqueia a luz de fora. Ótimo para dormir até mais tarde."],
    ["plant", "Plantas", "<strong>Não precisa regar as plantas</strong>: eu cuido delas. Pode deixar como estão."],
    ["water", "Água de beber", "Beba <strong>só a água do filtro</strong>. Ele tem 3 opções, nesta ordem: <strong>normal, fria e gelada</strong>."],
    ["ac", "Ar condicionado", "<strong>Sala:</strong> ar split com controle remoto, que fica em cima da mesa da sala. Deixe no modo <strong><em>Cool</em> (frio)</strong> em 23 °C: é o modo que mais gela e deixa o ambiente fresquinho rápido. <strong>Quarto:</strong> não tem controle remoto. Ligue e ajuste pelos botões no próprio aparelho. Por favor, desligue os dois quando sair de casa.<span class='kvwarn'><strong>O ar não liga?</strong> Lembre de ligar o EcoTouch! <button class='rule__more' type='button' data-pop='eco'>Como usar o EcoTouch →</button></span>"],
    ["shower", "Chuveiro", "A água esquenta na hora. O chuveiro é <strong>a gás</strong>. A torneira da <strong>esquerda é a quente</strong>: abra e tempere com a fria (da direita).", "taps"],
    ["dryer", "Secador de cabelo", "Tem um <strong>secador de cabelo</strong> no banheiro, <strong>embaixo da pia</strong>."],
    ["pot", "Cozinha", "Tem <strong>cooktop</strong>, geladeira, liquidificador, forno de micro-ondas, air fryer, chaleira elétrica (só para aquecer água) e cafeteira. Açúcar e sal são por conta da casa.<br><br>Os <strong>utensílios</strong> ficam no armário; os <strong>talheres</strong> e os <strong>panos de prato</strong>, nas gavetas. Tudo isso é da casa: use à vontade, mas <strong>não leve com você</strong>."],
    ["flame", "Cooktop", "O cooktop fica na cozinha. Para acender uma boca:", "cooktop"],
    ["fridge", "Frigobar", "Além da geladeira da cozinha, tem um <strong>frigobar no quarto</strong>."],
    ["laundry", "Área de serviço", "Tem <strong>tanque</strong>, <strong>varal</strong> e <strong>vassouras</strong> para você usar à vontade."],
    ["lift", "Elevadores", "São dois. Use o de serviço para malas, compras e na volta da praia."],
    ["trash", "Lixo", "Feche o saco e leve até a escada. Separe assim:", "trash"]
  ]}
]},

/* ---------------- 3. REGRAS ---------------- */
{id:"regras", il:"regras", t:"Regras da casa", k:"Contamos com você para cumpri-las 😊", b:[
  {t:"sum", x:"Pedimos que <strong>todas as regras abaixo sejam cumpridas</strong>. Elas protegem o apartamento, o prédio e os vizinhos. Obrigado pela colaboração!"},
  {t:"h", x:"As regras principais"},
  {t:"rules4"},
  {t:"h", x:"Outros combinados"},
  {t:"ul", x:[
    "<strong>Não pode trazer visitas.</strong> O prédio não permite. Só os hóspedes da reserva podem entrar no apartamento.",
    "<strong>Não pode trazer animais</strong>, nem pequenos.",
    "<strong>Lixo:</strong> feche o saco e leve até a escada. No corredor tem dois cestos para os recicláveis: <strong>azul</strong> (plástico e papel) e <strong>amarelo</strong> (metal e vidro). O restante é jogado no duto de recolhimento da escada (uma portinha).",
    "<strong>As toalhas de banho e de rosto</strong> estão em cima da cama. Use somente no apartamento: <strong>não leve para a praia</strong>.",
    "<strong>Não sente com roupa molhada de praia</strong> no sofá, na cama e na rede.",
    "<strong>Tranque sempre a porta</strong>, mesmo estando dentro de casa, e não deixe janela aberta ao sair.",
    "<strong>Não remova as telas das janelas.</strong> Há muitos micos (pequenos macacos) na região e eles podem entrar no apartamento. Por segurança, <strong>mantenha as telas sempre no lugar e não abra as janelas para alimentá-los</strong>, por mais simpáticos que pareçam.",
    "<strong>Não é permitido</strong> passar o apartamento para outra pessoa."
  ]}
]},

/* ---------------- 4. TRANSPORTE ---------------- */
{id:"transporte", il:"transporte", t:"Como se locomover", k:"Metrô, ônibus e aplicativos", b:[
  {t:"sum", x:"O <strong>metrô</strong> é a melhor opção quase sempre. A estação <strong>Cardeal Arcoverde</strong> fica a 7 minutos a pé daqui. Para pagar, basta <strong>encostar o cartão do seu banco</strong> na catraca."},
  {t:"transport"},
  {t:"h", x:"Como pagar a passagem"},
  {t:"ul", x:[
    "<strong>No metrô e no bondinho VLT:</strong> encoste o seu cartão de crédito ou débito direto na catraca (aquela portinha giratória). Não precisa comprar bilhete. É o jeito mais fácil para quem está só de passagem.",
    "<strong>No ônibus:</strong> você entra pela porta da frente e paga ao motorista. Aceita dinheiro (leve trocado) e, em muitos ônibus, também cartão por aproximação.",
    "<strong>Se for ficar muitos dias:</strong> vale comprar o cartão local, chamado <strong>Jaé</strong>, vendido em bancas de jornal e nas estações.",
    "<strong>Nos aplicativos (Uber e 99):</strong> deixe o app instalado e o cartão cadastrado antes de viajar. O preço aparece antes de você pedir o carro."
  ]},
  {t:"note", k:"info", x:"Os preços acima são de 2026 e podem mudar. Para conferir: <a class=\"xlink\" href=\"https://metrorio.com.br\" target=\"_blank\" rel=\"noopener\">metrorio.com.br</a> (metrô) e <a class=\"xlink\" href=\"https://vltcarioca.com.br\" target=\"_blank\" rel=\"noopener\">vltcarioca.com.br</a> (bondinho do Centro)."}
]},

/* ---------------- 5. PASSEIOS ---------------- */
{id:"passeios", il:"passeios", t:"Passeios e como chegar", k:"Todos os caminhos saem da nossa porta", b:[
  {t:"photo", src:"img/vista.jpg"},
  {t:"sum", x:"Se você tiver pouco tempo, faça três coisas: <strong>Cristo Redentor</strong>, <strong>Pão de Açúcar</strong> e o <strong>pôr do sol no Arpoador</strong>. Os caminhos abaixo começam aqui na porta de casa."},
  {t:"attractions"},
  {t:"note", k:"warn", x:"<strong>Cristo Redentor e Pão de Açúcar costumam esgotar.</strong> Compre pela internet com dia e hora marcados, nos sites <a class=\"xlink\" href=\"https://tremdocorcovado.rio\" target=\"_blank\" rel=\"noopener\">tremdocorcovado.rio</a> e <a class=\"xlink\" href=\"https://bondinho.com.br\" target=\"_blank\" rel=\"noopener\">bondinho.com.br</a>. Preços e horários mudam bastante — confira antes de sair."}
]},

/* ---------------- 6. COMER ---------------- */
{id:"comer", il:"comer", t:"Onde comer", k:"Do bar de esquina ao restaurante estrelado", b:[
  {t:"sum", x:"Comece pelo <strong>Caju</strong>, bem em frente de casa. A 2 minutos a pé tem o <strong>Cervantes</strong>, e a uns 15 minutos a <strong>Adega Pérola</strong> e o <strong>Pavão Azul</strong>. Todos baratos e cheios de gente da cidade."},
  {t:"caju"},
  {t:"restaurants"},
  {t:"note", k:"info", x:"<strong>Como funciona a conta no Brasil:</strong> normalmente vem uma taxa de 10% a 12% chamada “serviço”. Ela é opcional, mas quase todo mundo paga. Cartão é aceito em quase todo lugar. Leve algum dinheiro em espécie só para os quiosques e vendedores da praia."}
]},

/* ---------------- 7. DICAS ---------------- */
{id:"dicas", il:"dicas", t:"Dicas para aproveitar", k:"Praia, segurança e vida de bairro", b:[
  {t:"photo", src:"img/rio.jpg"},
  {t:"sum", x:"Três coisas para lembrar: na praia leve pouca coisa, na rua use o celular com discrição e passe protetor solar mesmo em dia nublado."},
  {t:"h", x:"Na praia"},
  {t:"ul", x:[
    "A praia mais perto daqui é a de Copacabana, no <strong>Posto 2</strong>, no começo de Copacabana, perto do Leme. Os “postos” são torres numeradas que servem de referência para você marcar encontro.",
    "<strong>Os postos têm banheiro</strong> e ducha para tirar o sal. O uso é pago, mas barato (o banheiro custa cerca de R$ 3,50), e é grátis para maiores de 65 anos e pessoas com deficiência. Leve uns trocados.",
    "Cadeira e guarda-sol custam cerca de <strong>R$ 20 o dia</strong>. É só pedir ao vendedor da barraca, que também traz bebida e petisco até você.",
    "Em toda a orla tem <strong>quiosques com comida</strong> de frente para a praia: dá para almoçar, petiscar ou tomar uma cerveja sem ir longe da areia. Logo abaixo tem algumas sugestões.",
    "<strong>Bandeira vermelha</strong> quer dizer que o mar está perigoso. Respeite os salva-vidas e não entre onde não tem mais ninguém.",
    "Leve só o necessário: um pouco de dinheiro, o celular e chinelo. Passaporte, cartões e relógio ficam melhor no apartamento. <strong>Fique atento às suas coisas:</strong> tem muito furto na praia. Não deixe celular e bolsa sozinhos na canga quando for ao mar e, se estiver sozinho, peça para alguém da barraca dar uma olhada.",
    "Experimente pelo menos uma vez: <strong>água de coco</strong>, <strong>mate com limão</strong> e <strong>biscoito Globo</strong>. São os clássicos da areia.",
    "Na areia passam muitos <strong>vendedores ambulantes de comida</strong>, como camarão no espeto, sanduíche natural e salgados. Eu não recomendo: não dá para saber se a comida foi bem preparada e higienizada, e ela fica horas no calor. Prefira os quiosques ou produtos fechados, como o biscoito Globo.",
    "Passe protetor solar sempre, mesmo com nuvem. O sol do Rio é mais forte do que parece."
  ]},
  {t:"h", x:"Quiosques legais no calçadão"},
  {t:"places", k:"kiosks"},
  {t:"note", k:"info", x:"Os quiosques do calçadão aceitam cartão e Pix, e muitos ficam abertos até tarde. Dá para chegar de chinelo e roupa de praia."},
  {t:"h", x:"Segurança, sem drama"},
  {t:"ul", x:[
    "Copacabana é cheia de gente e tranquila durante o dia. À noite, prefira as ruas iluminadas (Av. Nossa Senhora de Copacabana e Rua Barata Ribeiro) e evite ruas vazias.",
    "Não ande na rua olhando o celular. Use dentro de lojas, cafés ou no carro.",
    "Para sacar dinheiro, use caixas eletrônicos dentro de bancos ou shoppings, e de dia.",
    "Em metrô e praia cheios, use a mochila na frente do corpo."
  ]},
  {t:"h", x:"O dia a dia por aqui"},
  {t:"ul", x:[
    "<strong>Pix</strong> é o jeito brasileiro de pagar pelo celular, na hora. Muita gente aceita só Pix ou cartão, então não estranhe.",
    "Casas de câmbio ficam na Av. Nossa Senhora de Copacabana. Nunca troque dinheiro na rua ou com desconhecidos.",
    "Entre novembro e março chove forte de repente. Leve um guarda-chuva pequeno na bolsa."
  ]},
  {t:"h", x:"Shoppings perto de casa"},
  {t:"places", k:"malls"},
  {t:"h", x:"Supermercados perto de casa"},
  {t:"places", k:"markets"}
]},

/* ---------------- 8. SAÚDE ---------------- */
{id:"saude", il:"saude", t:"Saúde e emergências", k:"Hospitais, SUS e farmácias em Copacabana", b:[
  {t:"sum", x:"<strong>Emergência grave:</strong> ligue <strong>192</strong> e peça ambulância. É gratuito. <strong>Pelo SUS</strong> (público e grátis), o mais perto é a <strong>UPA 24h da Rua Siqueira Campos, 129</strong>. <strong>Particular:</strong> Copa Star, Copa D'Or ou São Lucas, todos em Copacabana."},
  {t:"note", k:"warn", x:"O <strong>192</strong> (ambulância) e o <strong>193</strong> (bombeiros) são gratuitos, atendem 24 horas e funcionam de qualquer telefone — até de celular estrangeiro sem crédito."},
  {t:"h", x:"Atendimento público (SUS)"},
  {t:"sus"},
  {t:"h", x:"Hospitais particulares em Copacabana"},
  {t:"hospitals"},
  {t:"h", x:"Farmácias perto de casa"},
  {t:"pharmacies"},
  {t:"note", k:"info", x:"<strong>Como funciona a farmácia no Brasil:</strong> muitos remédios são vendidos sem receita, e quase toda farmácia tem um farmacêutico que pode orientar, medir a pressão e aplicar injeção. Antibiótico só com receita médica."},
  {t:"ul", x:[
    "Se você tem <strong>seguro de viagem</strong>, ligue para a central do seguro antes de ir ao hospital. Eles dizem para onde ir e evitam que você pague do próprio bolso.",
    "No sistema público brasileiro (o <strong>SUS</strong>), o atendimento de emergência é gratuito, <strong>inclusive para estrangeiros</strong>. A unidade mais perto é a <strong>UPA 24h Copacabana</strong>, na Rua Siqueira Campos, 129.",
    "Os hospitais particulares cobram a consulta. Leve o cartão do seguro e um documento.",
    "Antes de sair para passear, salve no celular o telefone do seu seguro e o do consulado do seu país."
  ]}
]},

/* ---------------- 9. MAPA ---------------- */
{id:"mapa", il:"mapa", t:"Mapa do Rio", k:"Toque nos pinos para ver cada lugar", b:[
  {t:"sum", x:"Você está em <strong>Copacabana</strong>, pertinho do Leme. A praia fica a 8 minutos a pé e o metrô Cardeal Arcoverde a 7. Use os botões para ver os <strong>arredores</strong> ou a <strong>cidade toda</strong>."},
  {t:"map"}
]},

/* ---------------- 10. NÚMEROS ---------------- */
{id:"numeros", il:"numeros", t:"Telefones úteis", k:"Salve no celular antes de sair", b:[
  {t:"sum", x:"<strong>190</strong> polícia, <strong>192</strong> ambulância e <strong>193</strong> bombeiros. Toque no número para ligar direto."},
  {t:"phones"},
  {t:"h", x:"Contatos da casa"},
  {t:"kv", x:[
    ["chat", "Seu anfitrião", CFG.host+" — pelo <a href='"+CFG.airbnbMsg+"' target='_blank' rel='noopener'>chat do Airbnb</a> (é o jeito mais rápido)"],
    ["phone", "Portaria do prédio", CFG.portaria+" — 24 horas"],
    ["pin",   "Endereço para dar ao motorista", CFG.address],
    ["help", "Airbnb", "No aplicativo: Perfil › Ajuda › Fale conosco"],
  ]},
  {t:"h", x:"Consulados no Rio"},
  {t:"p", x:"Toque no nome do seu país para abrir o consulado no Google Maps, com endereço e telefone. A maioria fica no Centro, em Botafogo ou no Flamengo. Ligue antes de ir: muitos só atendem com hora marcada."},
  {t:"consulates"}
]},

/* ---------------- 11. FEEDBACK ---------------- */
{id:"feedback", il:"feedback", t:"Sua avaliação", k:"Um pedido rápido, mas importante", b:[
  {t:"sum", x:"No fim da viagem, 2 minutos de avaliação ajudam demais!"},
  {t:"p", x:"O Airbnb funciona como uma troca. A avaliação é muito importante: ela faz o próximo hóspede saber como foi a sua estadia e me ajuda a melhorar cada vez mais. Quero que você se sinta em casa!"},
  {t:"h", x:"O pedido tem duas partes"},
  {t:"ol", x:[
    "<strong>Durante a estadia:</strong> se faltar alguma coisa ou algo não funcionar, me mande mensagem. Lâmpada queimada, chuveiro, dúvida.",
    "<strong>No fim:</strong> conte o que você gostou, o que usou e o que faltou. Comentários específicos como “a cama é ótima”, “o Wi-Fi aguentou minhas reuniões” ou “o guia ajudou muito” valem bem mais do que um “tudo ok”.",
    "<strong>Se puder, coloque uma foto.</strong> Foto de hóspede de verdade é o que mais ajuda quem está escolhendo onde ficar."
  ]},
  {t:"note", k:"ok", x:"Você tem <strong>14 dias depois da saída</strong> para avaliar. Eu também avalio você, e prometo ser justo e gentil. Muito obrigado por escolher a minha casa. Volte sempre! 🇧🇷"}
]}

],

/* ---------------- textos por item ---------------- */
attr:{
 copa:{s:"Copacabana · 8 minutos a pé", how:"Saia do prédio e siga por qualquer rua que desce até a Avenida Atlântica: em 8 minutos você está na areia. O <strong>Forte de Copacabana</strong> fica no outro extremo da praia. Dá para ir a pé pelo calçadão em 25 minutos ou de ônibus 474. Às <strong>terças-feiras a entrada no Forte é de graça</strong>; nos outros dias custa R$ 10 (meia R$ 5). Abre de terça a domingo, a partir das 10h.", tip:"Dentro do Forte fica a <strong>Confeitaria Colombo</strong>, que é muito boa. Vale tomar café da manhã lá. A vista pega a praia inteira e é um dos programas mais bonitos do Rio."},
 cristo:{s:"Cosme Velho · trem do Corcovado", how:"Pegue o metrô na estação <strong>Cardeal Arcoverde</strong> (7 minutos a pé), Linha 1, sentido Uruguaiana, e desça em <strong>Largo do Machado</strong> (uns 12 minutos). De lá, pegue o ônibus 583 ou 584, ou um Uber de 10 minutos, até a estação do trem na Rua Cosme Velho, 513. O trenzinho sobe a montanha em 20 minutos.<br><br><strong>Opção mais fácil: a van oficial.</strong> Ela sai da <strong>Praça do Lido</strong>, na Av. Atlântica entre as ruas Belfort Roxo e Ronald de Carvalho, a uns 10 minutos a pé daqui. Funciona todos os dias, das 7h às 16h. O bilhete custa R$ 132 (meia-entrada R$ 105) e já inclui ida, volta e a entrada no Cristo. Compre no site <a class=\"xlink\" href=\"https://paineirascorcovado.com.br\" target=\"_blank\" rel=\"noopener\">paineirascorcovado.com.br</a>.", tip:"Compre o ingresso pela internet com dia e hora marcados. Vá no primeiro horário da manhã ou no fim da tarde: pega menos fila e menos nuvem."},
 pao:{s:"Urca · bondinho", how:"O mais prático é ir de Uber direto, uns 15 a 20 minutos. De ônibus, pegue o 107, 511 ou 512 na Av. Nossa Senhora de Copacabana e desça na Av. Pasteur, 520. De metrô, desça em Botafogo e faça o resto de aplicativo.<br><br><strong>Opção econômica: subir pela trilha.</strong> Ao lado da estação do bondinho, na Praia Vermelha, começa a Pista Cláudio Coutinho, e dela sai a trilha do Morro da Urca: de 40 minutos a 1 hora de subida. Chegar ao Morro da Urca (a primeira parada do bondinho) pela trilha é <strong>de graça</strong>. O portão no fim da trilha abre das 9h às 17h. Lá em cima, você pode descer de bondinho (R$ 65, meia R$ 32), seguir até o Pão de Açúcar e descer de bondinho (R$ 140, meia R$ 70) ou voltar a pé pela trilha, sem pagar nada. Os bilhetes para quem sobe pela trilha só são vendidos no totem do Morro da Urca.", tip:"Suba no fim da tarde. Você vê o pôr do sol lá de cima e a cidade acendendo as luzes na descida. Leve um casaco leve, venta."},
 ipanema:{s:"Ipanema · a pé ou de metrô", how:"A pé pelo calçadão até o Arpoador são 20 a 25 minutos de caminhada linda, sempre com o mar do lado. De metrô, pegue a Linha 1 ou 4 e desça em <strong>Cantagalo</strong> ou <strong>General Osório</strong>, a 2 ou 3 estações daqui.", tip:"Todo fim de tarde a galera sobe na Pedra do Arpoador e bate palma quando o sol se põe. Chegue uns 40 minutos antes para pegar um bom lugar."},
 lagoa:{s:"Lagoa · 15 minutos", how:"De metrô até General Osório e mais 15 minutos a pé pela Rua Farme de Amoedo. De Uber, são 10 a 15 minutos direto.", tip:"Alugue um pedalinho, faça a volta de 7,5 km na ciclovia ou pare num quiosque à noite para ouvir música ao vivo com a lagoa iluminada."},
 jb:{s:"Jardim Botânico · Zona Sul", how:"De Uber, 15 a 20 minutos. De transporte público, pegue o metrô Linha 4 até <strong>Jardim de Alah</strong> e caminhe mais 15 minutos ou pegue um ônibus. O Parque Lage fica a 10 minutos do Jardim Botânico, na Rua Jardim Botânico, 414.", tip:"O Parque Lage é de graça e tem um café no pátio de um casarão, com o Cristo aparecendo no fundo. Dá para ver os dois na mesma manhã."},
 centro:{s:"Centro · metrô Cinelândia ou Carioca", how:"Metrô Linha 1 na estação Cardeal Arcoverde até <strong>Cinelândia</strong> ou <strong>Carioca</strong>, direto, em uns 20 minutos. Saindo da estação, tudo é a pé: Theatro Municipal, Biblioteca Nacional, Confeitaria Colombo e o Real Gabinete Português de Leitura.", tip:"Vá em dia de semana. O Centro é animado de segunda a sexta e fica vazio no sábado e domingo."},
 maua:{s:"Praça Mauá · metrô e bondinho VLT", how:"Metrô até Carioca ou Cinelândia e depois o <strong>VLT</strong> (um bondinho moderno) até a Parada dos Museus / Praça Mauá. No total, 40 a 50 minutos.", tip:"O Museu do Amanhã é de graça às terças-feiras. Do lado ficam o museu MAR e o mural gigante “Etnias”, do artista Kobra."},
 lapa:{s:"Lapa · metrô Cinelândia", how:"Metrô Linha 1 até <strong>Cinelândia</strong> e 10 minutos a pé até os Arcos da Lapa. A Escadaria Selarón fica logo atrás, na Rua Joaquim Silva.", tip:"Visite a escadaria de manhã: luz boa para fotos e sem multidão. À noite, a Lapa vira outra coisa, com samba e bares, principalmente sexta e sábado."},
 santa:{s:"Santa Teresa · bondinho amarelo", how:"Metrô até <strong>Carioca</strong> e caminhe até a estação do bonde, na Rua Lélio Gama. O bondinho amarelo cruza os Arcos e sobe até o Largo dos Guimarães em 20 minutos.", tip:"Almoce no Bar do Mineiro e volte a pé pela Rua Almirante Alexandrino, parando nos ateliês de artistas e nos mirantes do caminho."},
 maracana:{s:"Maracanã · metrô", how:"Na estação Cardeal Arcoverde, pegue a <strong>Linha 1, sentido Uruguaiana</strong>. Em <strong>Botafogo</strong> ou na <strong>Central</strong>, troque para um trem da <strong>Linha 2, sentido Pavuna</strong>, e desça na estação Maracanã. São uns 40 minutos, e a saída da estação dá quase dentro do estádio.", tip:"Mesmo sem jogo, a visita guiada ao estádio vale. Em dia de jogo, vá de metrô: estacionar por lá é impossível."},
 mirantes:{s:"Alto da Boa Vista e Botafogo", how:"Só dá para ir de carro ou aplicativo. O <strong>Mirante Dona Marta</strong> fica a 20 minutos, e a <strong>Vista Chinesa</strong> a 30 ou 40. Vale fazer os dois na mesma corrida, pedindo ao motorista para esperar.", tip:"O Mirante Dona Marta tem a vista mais bonita do Pão de Açúcar e é totalmente de graça. Vá no fim da tarde."},
 barra:{s:"Zona Oeste · praias selvagens", how:"Metrô Linha 4 até <strong>Jardim Oceânico</strong> (45 minutos) e depois o BRT para a Barra e o Recreio. Para Prainha e Grumari só de carro ou Uber, de 60 a 90 minutos.", tip:"Prainha e Grumari são as praias mais bonitas da cidade: mar forte, mata em volta e nenhum prédio na paisagem."},
 niteroi:{s:"Niterói · travessia de barca", how:"Metrô até <strong>Carioca</strong>, 10 minutos a pé até a Praça XV e barca para Niterói: 15 minutos de travessia. Do terminal, um ônibus ou Uber leva ao museu MAC, projetado por Oscar Niemeyer.", tip:"A barca no fim da tarde, com o Pão de Açúcar de um lado e o Cristo do outro, é o passeio mais barato e mais bonito do Rio."},
 leme:{s:"Leme · trilha curta até o forte", how:"Vá a pé até o fim da praia do Leme (uns 15 minutos), na <strong>Praça Almirante Júlio de Noronha</strong>, ao lado do Posto 1. A entrada é o portão do Exército: você paga o ingresso na guarita e sobe a pé por uma ladeira calçada e arborizada de 800 metros, uns 20 a 30 minutos de subida. Abre de <strong>terça a domingo, das 9h30 às 16h</strong> (fecha às segundas). O ingresso custa R$ 10 (meia R$ 5) e às <strong>terças é de graça</strong>. Pagamento só em dinheiro ou Pix, não aceita cartão.", tip:"Lá de cima você vê a praia de Copacabana inteira de um lado e o Pão de Açúcar do outro. Vá cedo, quando está mais fresco, e leve água e um tênis confortável."}
},

trans:{
 metro:{h:"Metrô", tag:"≈ R$ 7,90", d:"O mais rápido, limpo e seguro. As estações perto daqui são <strong>Cardeal Arcoverde</strong> (7 min a pé) e Siqueira Campos (15 min). Funciona das 5h à meia-noite; aos domingos, das 7h às 23h."},
 bus:{h:"Ônibus", tag:"≈ R$ 4,70", d:"Vai aonde o metrô não chega. Entre pela porta da frente e estenda o braço no ponto para o ônibus parar — se você não fizer sinal, ele passa direto."},
 app:{h:"Uber e 99", tag:"", d:"Funcionam muito bem no Rio e costumam ser baratos. À noite, prefira o aplicativo ao ônibus. Confira a placa do carro antes de entrar."},
 walk:{h:"A pé", tag:"grátis", d:"De Copacabana até o Arpoador são 25 minutos pelo calçadão, sempre à beira-mar. É um dos melhores passeios da cidade e não custa nada."},
 vlt:{h:"VLT (bondinho do Centro)", tag:"≈ R$ 4,30", d:"Um bonde moderno que liga a Praça Mauá, a Cinelândia, o aeroporto Santos Dumont e a estação Central. É o melhor jeito de circular pelo Centro histórico."},
 brt:{h:"BRT", tag:"≈ R$ 4,70", d:"Ônibus expresso, com faixa só dele, que vai para a Zona Sudoeste (Barra e Recreio). Pegue na estação Jardim Oceânico, no fim da Linha 4 do metrô."},
 taxi:{h:"Táxi", tag:"pelo taxímetro", d:"Os amarelos são os oficiais. Confira se o taxímetro está ligado. “Bandeira 1” é o preço de dia útil; “bandeira 2” é mais caro, à noite e aos domingos."},
 bike:{h:"Bicicleta pública", tag:"a partir de R$ 7,90", d:"São as bicicletas laranjas do Itaú (Bike Itaú), com estações espalhadas por toda a cidade: Copacabana, Ipanema, Leblon, Jardim Botânico etc. O aluguel funciona todo pelo aplicativo Tembici: a viagem avulsa custa R$ 7,90 (até 15 minutos) e o passe de 48 horas, R$ 32,90. A ciclovia da praia é linda."},
 scooter:{h:"Patinete elétrico", tag:"R$ 2 + R$ 0,80/min", d:"Os patinetes da Whoosh ficam espalhados por Copacabana, Ipanema e Leblon. O aluguel funciona todo pelo aplicativo Whoosh: R$ 2 para desbloquear e cerca de R$ 0,80 por minuto. Deixe o patinete só nos pontos de estacionamento indicados no app. Sinceramente, não recomendo muito: sai caro (15 minutos já dão uns R$ 14). A bicicleta costuma compensar mais."}
},

mainrules:{
 smoke:{h:"Não fumar no Airbnb", d:"Isso inclui cigarro eletrônico."},
 party:{h:"Sem festas", d:"O prédio é residencial e a administração é rígida."},
 quiet:{h:"Silêncio das 22h às 7h", d:"Fora desse horário, música e conversa em volume normal. As paredes não são grossas."},
 people:{h:"No máximo "+CFG.guests+" pessoas", d:"O número de pessoas da reserva é o número que pode dormir aqui. <strong>O prédio não permite visitas.</strong>"},
 toilet:{h:"Vaso sanitário: só papel higiênico", d:"Nada de fraldas, absorventes, lenços umedecidos, cotonetes ou outros objetos: eles entopem o encanamento. Jogue no lixo."},
 eco:{h:"Use o EcoTouch", d:"Ao entrar, feche a porta e toque no painel da parede para ligar os ares condicionados.", more:"Como usar o EcoTouch"}
},

rest:{
 perola:"Balcão histórico com dezenas de conservas e azeitonas recheadas. Você aponta o que quer e come em pé, com vinho verde gelado. Sempre cheio.",
 pavao:"Bar de esquina premiado, com mesinhas na calçada. O bolinho de aipim com camarão é o melhor de Copacabana.",
 cervantes:"O sanduíche de pernil com abacaxi virou símbolo do Rio. Fica aberto até de madrugada.",
 nema:"Padaria de fermentação natural muito boa, pertinho de casa, no comecinho do Leme. Ótima para o café da manhã: pães, doces e bolos.",
 sorvetino:"Sorveteria artesanal de casquinha soft, pertinho do apartamento, e muito boa. Os sabores mudam toda semana, com criações diferentes como torrada com manteiga e Sucrilhos, além dos clássicos. A casquinha amanteigada é feita lá mesmo.",
 galeto:"Frango na brasa, arroz de brócolis e chope gelado desde 1962. Simples, barato e sempre bom.",
 bakers:"Padaria e confeitaria para o café da manhã: pães, croissants e bolos feitos ali.",
 cafeina:"Café bem tirado, sanduíches e bolos. Bom lugar para trabalhar de manhã com Wi-Fi.",
 colomboforte:"A confeitaria mais antiga do Rio dentro do Forte de Copacabana, com a praia inteira na sua frente.",
 davi:"Feijoada de frutos do mar com vista do alto do Leme. Vá no almoço e reserve.",
 joaquina:"Cozinha brasileira tradicional com toque moderno, de frente para a praia do Leme. Peça o Petisco do Coronel (carne-seca com aipim frito) e experimente os drinks com ingredientes brasileiros, como cachaça de jambu e cupuaçu.",
 palace:"Rodízio de carnes: os garçons passam de mesa em mesa oferecendo cortes até você dizer basta. Funciona desde 1951.",
 mee:"Cozinha asiática com estrela Michelin dentro do hotel Copacabana Palace. Para uma noite especial.",
 garota:"O bar onde Tom Jobim e Vinícius escreveram “Garota de Ipanema”. Turístico, sim, mas o chope é bom.",
 zaza:"Comida caseira com toques asiáticos numa casinha colorida. Peça mesa no andar de cima.",
 feijoada:"Feijoada completa todos os dias da semana, com todos os acompanhamentos e caipirinha.",
 bibi:"Sucos de fruta, açaí e sanduíches. Parada obrigatória na volta da praia.",
 talho:"O melhor café da manhã reforçado do Leblon: pães, queijos e sanduíches.",
 baked:"Padaria e forneria em Ipanema, aberta das 6h30 às 22h. Bom para o café da manhã ou um lanche: pães de fermentação natural, doces e salgados feitos ali.",
 vero:"Sorvete italiano de verdade, feito ali, com frutas brasileiras.",
 ct:"Restaurante do chef Claude Troisgros, especializado em carnes e clássicos franceses.",
 pobreta:"A <strong>mureta</strong> é o murinho baixo que acompanha a orla da Urca, à beira da baía de Guanabara. O programa carioca é comprar uma cerveja num bar ou ambulante e sentar nela para ver o pôr do sol. A <strong>Pobreta</strong> (mistura de “pobre” com “mureta”) ganhou esse apelido por causa do preço: o Bar Urca, mais adiante, é caro, e aqui tudo sai bem mais barato. É o trecho do início da orla, a primeira coisa que aparece quando você chega à Urca. Tem alguns bares, como o Urca Grill, e ambulantes, mas o pessoal fica mesmo é sentado na muretinha. A cerveja custa menos, há mais espaço e o pôr do sol, com vista para o Cristo e a marina, é um dos mais bonitos da cidade.",
 barurca:"Seguindo pela orla, em frente ao Bar Urca, fica a <strong>Mureta da Urca</strong> propriamente dita, o trecho mais famoso e tradicional. Só que o Bar Urca é caro, e por isso muita gente prefere a Pobreta. Você pede no balcão (a empada e o bolinho de bacalhau são clássicos), pega a cerveja e senta na mureta à beira da água. Puro Rio.",
 chanchada:"O boteco do momento em Botafogo. Todo mundo ama, e até a Dua Lipa e a Rosalía já passaram por lá. Peça as batidas e os petiscos para dividir. Não aceita reserva, então chegue cedo.",
 botica:"Um dos clássicos de Botafogo. Chope muito bem tirado, drinks com cachaça e um cardápio que muda toda semana, num salão charmoso com discos, livros e móveis antigos.",
 macuna:"Bar animado de três andares, com pista de dança, terraço no alto e mesinhas na calçada. Tem música ao vivo, com noite de jazz às quintas.",
 tremetreme:"Outro clássico, na Rua Arnaldo Quintela: um dos bares mais baratos e mais cheios de Botafogo, com cerveja gelada e gente na calçada até de madrugada.",
 slow:"Padaria artesanal famosa pelos pães de fermentação natural, cafés caprichados e um dos melhores brunches do Rio no fim de semana.",
 lasai:"Alta gastronomia com horta própria e ingredientes brasileiros. Uma das melhores mesas do país.",
 braseiro:"Clássico do Baixo Gávea, sempre cheio. Peça a picanha fatiada na brasa ou o galeto. Porções generosas e chope bem tirado.",
 brewteco:"Na mesma praça do Braseiro, com mais de 30 torneiras de cerveja artesanal, petiscos e pizza. Bom para começar ou terminar a noite no Baixo Gávea.",
 guimas:"Bistrô carioca com mais de 40 anos, no coração da Gávea. Famoso pelos pasteizinhos crocantes e pelos pratos de bacalhau.",
 okioki:"Japonês contemporâneo na Gávea, com sushis criativos e pratos quentes. Um dos favoritos do bairro para comida japonesa.",
 braz:"Uma das pizzarias mais famosas do Rio, de massa fina e forno a lenha. Ótimo programa depois do passeio no Jardim Botânico.",
 camolese:"Cozinha mediterrânea com jeito carioca, de frente para o Jockey Club e com vista para o Cristo. Bom para almoçar depois do Jardim Botânico.",
 katzsu:"Bar de petiscos asiáticos, do mesmo chef do Chanchada (Bruno Katz), com pratos inspirados no Japão, na Coreia e na Tailândia. Disputado, então vale chegar cedo.",
 absurda:"Confeitaria do momento, de frente para o Jardim Botânico, num casarão de 120 anos. Clássicos brasileiros em versão caprichada: quindim de maracujá, pudim de leite e o famoso bolo de cenoura. Ótima parada depois do passeio no Jardim.",
 oteque:"Duas estrelas Michelin. Menu de degustação de frutos do mar numa casa discreta de Botafogo.",
 colombo:"Confeitaria de 1894, com espelhos belgas e vitrais. Vá para o chá da tarde no salão de cima.",
 barluiz:"Desde 1887, comida alemã e o melhor chope escuro do Centro.",
 capela:"Cabrito assado no forno a lenha, na Lapa, até de madrugada.",
 mineiro:"Feijoada, bolinho de feijoada e uma parede inteira de cachaças, no coração de Santa Teresa.",
 apraz:"Comida brasileira num jardim com vista para a Baía de Guanabara. Reserve e vá no fim da tarde.",
 scenarium:"Casarão de três andares na Lapa, com samba ao vivo e antiguidades por toda parte.",
 teva:"Comida vegetariana moderna, criativa e saborosa o bastante para agradar até quem come carne.",
 veganvegan:"Pioneiro da comida vegana no Rio: pratos caseiros e orgânicos, com um cardápio do dia que muda diariamente."
},

hosp:{
 copastar:"Hospital particular de alto padrão da Rede D'Or, com emergência 24 horas.",
 copador:"Hospital particular grande, com pronto-socorro 24 horas e UTI. Uns 5 minutos de táxi daqui.",
 saolucas:"Hospital particular tradicional de Copacabana, com emergência 24 horas."
},

farm:{
 leme:"A farmácia mais perto, a uns 2 minutos a pé, e <strong>aberta 24 horas</strong>. É a primeira opção para qualquer emergência, a qualquer hora.",
 pacheco:"Rede com várias lojas nessas duas ruas. Algumas ficam abertas 24 horas.",
 drogasil:"Lojas na avenida principal do bairro, com farmacêutico de plantão que também aplica injeção.",
 venancio:"Drogaria pertinho do metrô Cardeal Arcoverde, a uns 7 minutos a pé de casa."
},

tel:{
 samu:{l:"Ambulância (SAMU)", d:"Emergência médica · gratuito"},
 pm:{l:"Polícia Militar", d:"Emergência policial · gratuito"},
 bomb:{l:"Bombeiros", d:"Incêndio, resgate e afogamento"},
 civil:{l:"Polícia Civil", d:"Para registrar uma ocorrência"},
 dc:{l:"Defesa Civil", d:"Alagamento e deslizamento"},
 pref:{l:"Prefeitura (1746)", d:"Serviços da cidade do Rio"},
 mulher:{l:"Central da Mulher", d:"Violência contra a mulher"},
 dh:{l:"Disque 100", d:"Direitos humanos"},
 deat:{l:"Delegacia do Turista", d:"Av. Afrânio de Melo Franco, 159, Leblon · 24 h"},
 denun:{l:"Disque Denúncia", d:"Denúncia anônima"}
},

mapLegend:["Você está aqui","Restaurantes e bares","Supermercados","Farmácias","Hospitais e UPA","Metrô","Passeios"]
};
