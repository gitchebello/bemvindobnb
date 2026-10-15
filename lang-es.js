/* ===================== ESPAÑOL ===================== */
var L = window.L || (window.L = {});

L.es = {
htmlLang:"es",

lbl:{
  how:"Cómo llegar", time:"Cuánto tarda", cost:"Cuánto cuesta", tip:"Consejo",
  map:"Ver en el mapa", tel:"Teléfono", dist:"Distancia desde aquí",
  copy:"Copiar", copied:"¡Copiado!", network:"Nombre de la red", pass:"Contraseña",
  more:"Ver más", openmaps:"Abrir en Google Maps", route:"Cómo llegar al piso",
  print:"Imprimir o guardar en PDF", must:"Imprescindible", sum:"En resumen", close:"Cerrar", open:"Abrir", shut:"Cerrar", travaAlt:"Traba de seguridad de la ventana", hot:"Caliente", cold:"Fría", left:"izquierda", right:"derecha",
  wifiTip:"Consejo: toca “Copiar” y pega la contraseña en tu móvil. No hace falta escribirla.",
  near:"Alrededores", city:"Toda la ciudad", mapAria:"Mapa interactivo de Río de Janeiro",
  toDark:"Cambiar al modo oscuro", toLight:"Cambiar al modo claro",
  dark:"Modo oscuro", light:"Modo claro"
},

hero:{
  photoAlt:"Playa de Copacabana desde lo alto", photoTag:"Playa de Copacabana · a 8 min de casa",
  kicker:"Guía de bienvenida",
  t1:"¡Bienvenido",
  t2:"a Río de Janeiro!",
  lead:"Esta guía lo explica todo de forma sencilla: horarios, contraseña del Wi-Fi, normas de la casa, cómo llegar a cada sitio, dónde comer y qué hacer si necesitas ayuda. Empieza por el menú de aquí abajo.",
  chips:[
    {ic:"clock", x:"Entrada desde las <b>"+CFG.checkin+"</b>"},
    {ic:"clock", x:"Salida hasta las <b>"+CFG.checkout+"</b>"},
    {ic:"beach", x:"Playa a <b>8 minutos</b> a pie"},
    {ic:"bus",   x:"Metro a <b>7 minutos</b> a pie"}
  ]
},

sos:{
  label:"¿Necesitas ayuda ahora?",
  b1:{n:"192", t:"Ambulancia<br>(emergencia médica)"},
  b2:{n:"190", t:"Policía<br>(emergencia)"},
  b3:{n:CFG.host, t:"Tu anfitriona. ¿Necesitas algo? Escríbele por el <strong>chat de Airbnb</strong>, en la propia plataforma."}
},

menu:{
  t:"Por dónde empezar",
  p:"Toca la tarjeta del tema que necesites. Cada una abre una explicación completa, con dibujos y paso a paso."
},

menuDesc:{
  checkin:"Cómo entrar en el piso y qué hacer al salir",
  wifi:"Wi-Fi, tele Roku, aire acondicionado, cocina y otros electrodomésticos",
  regras:"Cumplir las normas es esencial para una excelente estadía",
  saude:"Hospital, farmacia y teléfonos de emergencia",
  transporte:"Metro, autobuses y apps, explicados desde cero",
  passeios:"Cómo llegar a cada sitio saliendo de casa",
  comer:"Sitios buenos y baratos cerca, y clásicos de Río",
  feedback:"Una petición rápida al final de tu viaje"
},

foot:{
  t:"¡Que disfrutes mucho!",
  bio:"<strong>¿Quién es "+CFG.host+"?</strong> Le encanta viajar y ya hizo de eso su profesión: fue azafata de la nostálgica <strong>VARIG</strong>. Después se formó como profesora y terapeuta de <strong>Reiki</strong>. Hoy, además de trabajar en eso, ofrece una estadía excelente a los viajeros que quieren conocer, o volver a, la <strong>Ciudad Maravillosa</strong>.",
  p:"Esta guía la preparó <strong>"+CFG.host+"</strong> para que todo sea más fácil. ¿Alguna duda? Escríbeme por el chat de Airbnb, respondo rápido. Y si algo puede mejorar tu estancia, dímelo mientras estés aquí.",
  wa:"Hablar con el anfitrión"
},

restGroups:{
  copa:"A un paso de casa (Copacabana y Leme)",
  ipa:"Ipanema y Leblon",
  bota:"Botafogo y Urca",
  gavea:"Jardim Botânico y Gávea",
  centro:"Centro, Lapa y Santa Teresa",
  veg:"Vegetariano y vegano"
},

nav:{ home:"Inicio", tours:"Sitios", eat:"Comer", health:"Salud", phones:"Teléfonos" },

gallery:{
  t:"Un adelanto de la casa y del barrio",
  p:"Desliza hacia el lado para ver fotos del apartamento y de los alrededores."
},

quick:[
  {ic:"door",  k:"Tu apartamento", x:"<b>Apto "+CFG.aptShort+" · 4.º piso</b><br>Al salir del ascensor, queda a la <b>izquierda</b>."},
  {ic:"lock",  k:"Al llegar", x:"Puerta con <b>código</b>, sin llaves."},
  {ic:"water", k:"Agua para beber", x:"Solo la del <b>filtro</b> (natural, fría o helada)."},
  {ic:"beach", k:"¿Vuelves de la playa?", x:"Entra por la <b>entrada de atrás</b> del edificio: allí encontrarás una duchita para quitarte el exceso de arena."},
  {ic:"music", k:"Justo enfrente", x:"El <b>Caju</b>, bar con samba y feijoada, está al otro lado de la calle."}
],

tv:{
  roku:{k:"Mando Roku", h:"Un mando para todo", d:"La Smart TV <strong>se enciende y se apaga con el propio mando Roku</strong> (botón rojo ⏻). También sirve para elegir aplicaciones, películas y series."},
  photoAlt:"Control remoto de Roku con los botones numerados",
  keysT:"Los botones del mando Roku",
  keys:[
    ["⏻", "Encender / apagar", "El botón rojo en la parte de arriba del mando. Enciende y apaga la Smart TV. Al encenderla, aparece “sin señal” unos instantes hasta que sale la pantalla morada del Roku. Es normal.", "Encender"],
    ["←", "Volver (flechita)", "¡Muy útil! Vuelve a la pantalla anterior: sale de la película a la lista, cierra un menú o vuelve dentro de la aplicación. Púlsalo las veces que necesites.", "Volver"],
    ["⌂", "Casita (Inicio)", "Vuelve a la pantalla de inicio, donde están todas las aplicaciones.", "Inicio"],
    ["◀ ▲ ▼ ▶", "Flechas", "Te mueven por menús, aplicaciones y episodios.", "Flechas"],
    ["OK", "OK", "Abre o confirma lo que esté seleccionado.", "OK"],
    ["🎤", "Micrófono (voz)", "<strong>Mantén pulsado el botón</strong> y di el nombre de la aplicación que quieres usar, por ejemplo “Globoplay” o “YouTube”. Suéltalo al terminar de hablar y se abre sola.", "Voz"],
    ["▶❚❚", "Play / Pausa", "Pausa y reanuda el vídeo.", "Play"],
    ["＋ －", "Volumen y silencio", "Están en el <strong>lateral derecho</strong> del mando (mira la foto). En el botón largo: la parte de <strong>arriba</strong> (altavoz con ondas) <strong>sube</strong> y la de <strong>abajo baja</strong>. El botón aparte, justo debajo (altavoz con ×), es el <strong>silencio</strong>: quita y devuelve el sonido."]
  ],
  stepsT:"Paso a paso",
  steps:[
    "Enciende la tele con el <strong>botón rojo ⏻</strong> del mando Roku. Primero aparece el mensaje <strong>“sin señal”</strong>: <strong>no te preocupes, es normal</strong>. Espera unos instantes y el Roku se enciende solo, con una <strong>pantalla morada</strong>.",
    "Coge el <strong>mando del Roku</strong> y pulsa la <strong>casita ⌂</strong>. Aparece la pantalla de inicio con las aplicaciones.",
    "Con las <strong>flechas</strong>, elige Netflix, Prime Video, YouTube, Globoplay… y pulsa <strong>OK</strong>. O usa la voz: <strong>mantén pulsado el botón del micrófono 🎤</strong> y di el nombre de la aplicación.",
    "Para volver una pantalla, pulsa la <strong>flechita ←</strong> (arriba, al lado de la casita). Sale de la película a la lista, cierra menús y vuelve a donde estabas.",
    "<strong>Globoplay</strong> y <strong>Stremio</strong> (si sabes de lo que hablo ;) ) ya tienen la sesión iniciada y son de la casa: míralos cuanto quieras. En <strong>Globoplay</strong> puedes ver <strong>TV Globo en vivo</strong>. Los demás servicios de suscripción (Netflix, Prime Video, Disney+, etc.) <strong>corren por cuenta de cada huésped</strong>, con su propia cuenta.",
    "Para entrar en tu cuenta, elige “Iniciar sesión” en la aplicación. Muchas muestran un <strong>código o QR</strong>: ábrelo en el móvil y confirma, sin escribir la contraseña en la tele.",
    "Antes de irte, <strong>cierra sesión</strong> en cada aplicación (Globoplay y Stremio son de la casa, puedes dejarlos)."
  ],
  lost:"<strong>¿Te perdiste?</strong> Pulsa la <strong>casita ⌂</strong> del mando para volver al inicio y empezar de nuevo.",
  tip:"<strong>¿Pantalla negra?</strong> Pulsa <strong>⏻</strong> en el mando Roku apuntando a la tele. <strong>¿El mando no responde?</strong> Revisa las pilas o desenchufa la tele 10 segundos y vuelve a encenderla. Hay <strong>pilas de repuesto en el cajón debajo de la tele</strong>."
},

sus:{k:"SUS · público y gratuito", free:"Gratis", d:"La unidad de urgencias pública (SUS) más cercana. Atiende urgencias 24 horas, gratis, <strong>también a extranjeros</strong>. Lleva el pasaporte o un documento con foto."},

caju:{k:"Justo enfrente del edificio", badge:"Samba en vivo",
  d:"Cruzas la calle y ya estás. El Caju es un gastrobar con alma de bar carioca: mesitas en la acera frente a la placita, tapas, tragos y rueda de samba. Uno de los bares más queridos del barrio.",
  list:["<strong>Feijoada los sábados</strong>, con todos los acompañamientos.","Tapas desde unos R$ 20 y tragos desde R$ 10 (precios aproximados).","Ideal para empezar o terminar la noche sin necesidad de Uber."]},

kiosks:{
 mureta:"En el rincón del Leme, pegado a la piedra, con vista de toda la playa. Feijoada todos los días, desde la mañana hasta la madrugada, y música en vivo el fin de semana.",
 ox:"Dos quioscos uno al lado del otro en la playa del Leme: uno de comida oriental y otro de tapas, con tragos muy buenos.",
 arrasta:"Comida del nordeste brasileño de verdad, como el baião de dois, con forró y ambiente de fiesta en el paseo.",
 coisa:"Tapas bien cariocas, como brochetas con farofa, en un ambiente relajado a la altura del Posto 4."
},

markets:{
 horti:"Frutería, panadería y tienda de alimentación, a 2 minutos a pie. Ideal para fruta, verdura, pan recién hecho y lo básico del día a día.",
 pao:"Supermercado completo, a unos 3 minutos a pie, con todo lo necesario para abastecer la casa.",
 mundial:"El más barato de la zona. Está un poco más lejos, a unos 15 minutos a pie, cerca del metro Siqueira Campos, pero compensa para compras grandes. Cierra temprano los domingos.",
 zonasul:"El único abierto <strong>24 horas</strong> cerca de aquí, frente a la playa de Leme, a unos 8 minutos a pie. Te salva si llegas tarde o necesitas algo de madrugada."
},
malls:{
 riosul:"El centro comercial grande más cercano: tiendas, cine y patio de comidas. Está justo pasando el Túnel Novo — unos 15 minutos a pie o 5 en Uber.",
 cidcopa:"Galería tradicional del barrio, cerca del metro Siqueira Campos, con tiendas pequeñas y servicios del día a día.",
 bps:"Cine, tiendas y restaurantes en el último piso con vista a la Ensenada de Botafogo y al Pan de Azúcar. Unos 10 minutos en Uber."
},

cooktop:[
 ["1. Presiona", "la perilla del fuego"],
 ["2. Gira", "sin soltarla"],
 ["3. ¡Listo!", "aparece la llama"]
],

sofa:[
 ["Tira de la base", "Debajo del asiento, por delante, hay un <strong>asa</strong>. Tira de la base hacia fuera."],
 ["Quita los cojines", "Saca los cojines del sofá."],
 ["Despliega el colchón", "El asiento es el <strong>colchón doblado</strong>. Ábrelo y extiéndelo sobre la base que sacaste."],
 ["¡Listo!", "La cama está armada. Para cerrarla, haz los pasos al revés."]
],

trash:[
 ["blue",   "Cesto azul",     "Plástico y papel", "Ej.: botellas PET, envases, bolsas, cajas, periódico"],
 ["yellow", "Cesto amarillo", "Metal y vidrio",   "Ej.: latas, botellas y frascos de vidrio, papel de aluminio"],
 ["chute",  "Ducto de la escalera (puertita)", "Todo lo demás", "Ej.: restos de comida, servilletas, basura del baño"]
],

eco:{
 photoAlt:"Panel EcoTouch en la pared, junto a la puerta", photoCap:"Este es el EcoTouch: toca el botón ⏻",
 title:"Electricidad: el botón EcoTouch",
 steps:[
  ["door",  "Entra y cierra la puerta", "El EcoTouch solo funciona con la puerta del apartamento cerrada."],
  ["touch", "Toca el EcoTouch", "Un toque suave (como en la pantalla del móvil) en el panel de la pared, junto a la puerta, por dentro. Así puedes encender los aires acondicionados: el del salón (split) con el control remoto y el del cuarto con los botones del propio aparato."],
  ["bolt",  "Puerta cerrada, luz encendida", "Mientras estés en casa con la puerta cerrada, todo sigue funcionando."]
 ],
 list:[
  "El <strong>EcoTouch</strong> es un ahorrador de energía: un panel táctil en la pared del apartamento.",
  "Cuando sales y cierras la puerta, la electricidad de los aires acondicionados <strong>se apaga sola</strong>. Es normal.",
  "Al volver, <strong>cierra la puerta y toca el EcoTouch.</strong>",
  "Por eso no se puede dejar el aire encendido mientras paseas. Enciéndelo al llegar: en pocos minutos el ambiente se enfría."
 ]
},

sections:[

{id:"checkin", il:"checkin", t:"Entrada y salida", k:"Llegada, puerta con código y portería 24h", b:[
  {t:"sum", x:"Puedes llegar a <strong>cualquier hora</strong>. No hay llaves: la puerta del apartamento se abre con un <strong>código</strong>, que te envío por Airbnb antes de tu llegada."},
  {t:"kv", x:[
    ["pin",   "Dirección", CFG.address],
    ["door",  "Dónde es exactamente", "Apartamento "+CFG.aptShort+" · 4.º piso · a la izquierda del ascensor"],
    ["lock",  "Puerta", "Cerradura con código. Sin llaves."],
    ["clock", "Hora de entrada", "Desde las "+CFG.checkin],
    ["clock", "Hora de salida", "Hasta las "+CFG.checkout],
    ["people", "Cuántas personas", "Hasta "+CFG.guests+" huéspedes"],
    ["phone", "Portería", "24 horas · "+CFG.portaria]
  ]},
  {t:"h", x:"Cómo entrar, paso a paso"},
  {t:"ol", x:[
    "Llega al edificio en la <strong>Rua Felipe de Oliveira, 4</strong>, frente a la Praça Demétrio Ribeiro, con la <strong>entrada al lado del Aomori</strong>, un mercado oriental.",
    "El edificio tiene <strong>dos entradas</strong>. Con maletas, usa la <strong>de atrás</strong>. <strong>Al volver de la playa</strong>, también.",
    "Dile al portero que te alojas en el <strong>apartamento "+CFG.aptShort+"</strong> y rellena la ficha que te entregará. Si prefieres rellenarla antes, pídemela y te envío el documento.",
    "Sube en ascensor al <strong>4.º piso</strong>. Al salir del ascensor, el <strong>"+CFG.aptShort+"</strong> está a la <strong>izquierda</strong>.",
    "Marca el <strong>código</strong> en la cerradura (toca la <strong>parte de arriba</strong> y aparecerá el teclado). El código te llega por Airbnb antes de tu llegada.",
    "¡Al entrar, mándame un mensaje para que pueda acompañar tu llegada!"
  ]},
  {t:"h", x:"Electricidad: el botón EcoTouch"},
  {t:"eco"},
  {t:"h", x:"Antes de irte"},
  {t:"ul", x:[
    "Cierra las ventanas. Apaga el aire acondicionado, las luces y la tele.",
    "Cierra sesión en tus cuentas de la tele (Netflix, Prime, YouTube…) para que nadie las use después. Globoplay y Stremio son de la casa: déjalos con la sesión iniciada.",
    "Cierra la puerta y comprueba que quedó trancada.",
    "Mándame un mensaje avisando que te fuiste."
  ]}
]},

{id:"wifi", il:"wifi", t:"Wi-Fi y electrodomésticos", k:"Internet, tele, aire acondicionado, cocina y más", b:[
  {t:"sum", x:"Internet es gratis y sin límite. La red es <strong>"+CFG.wifi+"</strong>. Toca <strong>Copiar</strong> y pega la contraseña en tu móvil."},
  {t:"wifi"},
  {t:"note", k:"info", x:"<strong>¿Se cayó internet?</strong> El aparato de internet (router) está en el dormitorio. Desenchúfalo, espera 30 segundos y vuelve a enchufarlo. Casi siempre se arregla así."},
  {t:"h", x:"Televisión: Smart TV con Roku"},
  {t:"tv"},
  {t:"h", x:"Cómo usar las cosas de la casa"},
  {t:"kv", x:[
    ["sofa",  "Sofá cama", "El sofá del salón es un <strong>sofá cama</strong>. Para abrirlo:", "sofa"],
    ["bulb",  "Luz del salón", "¿Buscas el interruptor? Está <strong>detrás de la puerta</strong>."],
    ["window", "Ventanas: traba de seguridad", "Las ventanas tienen <strong>trabas de seguridad</strong> como la de la foto, en el lateral. Sujetan la ventana: <strong>siempre que abras una ventana, comprueba que la traba la esté sujetando</strong>. Sin la traba, <strong>la ventana puede caerse</strong>.", "trava"],
    ["blind", "Blackout", "<strong>Todas las ventanas tienen cortina blackout</strong>, que bloquea la luz de fuera. Ideal para dormir hasta tarde."],
    ["plant", "Plantas", "<strong>No hace falta regar las plantas</strong>: yo me encargo de ellas. Puedes dejarlas como están."],
    ["water", "Agua para beber", "Bebe <strong>solo el agua del filtro</strong>. Tiene 3 opciones, en este orden: <strong>natural, fría y helada</strong>."],
    ["ac", "Aire acondicionado", "<strong>Salón:</strong> aire split con control remoto, que está encima de la mesa del salón. Ponlo en modo <strong><em>Cool</em> (frío)</strong> a 23 °C: es el modo que más enfría y refresca el ambiente rápido. <strong>Cuarto:</strong> no tiene control remoto. Enciéndelo y ajústalo con los botones del propio aparato. Por favor, apaga los dos al salir.<span class='kvwarn'><strong>¿El aire no enciende?</strong> ¡Recuerda activar el EcoTouch! <button class='rule__more' type='button' data-pop='eco'>Cómo usar el EcoTouch →</button></span>"],
    ["shower", "Ducha", "El agua se calienta al momento. La ducha es <strong>a gas</strong>. El grifo de la <strong>izquierda es el caliente</strong>: ábrelo y regula con el frío (el de la derecha).", "taps"],
    ["dryer", "Secador de pelo", "Hay un <strong>secador de pelo</strong> en el baño, <strong>debajo del lavabo</strong>."],
    ["pot", "Cocina", "Hay <strong>placa de cocina (cooktop)</strong>, nevera, licuadora, microondas, freidora de aire, hervidor eléctrico (solo para calentar agua) y cafetera. El azúcar y la sal corren por cuenta de la casa.<br><br>Los <strong>utensilios</strong> están en el armario; los <strong>cubiertos</strong> y los <strong>paños de cocina</strong>, en los cajones. Son de la casa: úsalos libremente, pero <strong>no te los lleves</strong>."],
    ["flame", "Cooktop", "La placa (cooktop) está en la cocina. Para encender un fuego:", "cooktop"],
    ["fridge", "Minibar", "Además de la nevera de la cocina, hay un <strong>minibar (frigobar) en el cuarto</strong>."],
    ["faucet", "Fregadero", "El grifo tiene dos llaves: <strong>Q (caliente)</strong> a la izquierda y <strong>F (fría)</strong> a la derecha. Atención: funcionan <strong>al revés</strong> de lo habitual. Para <strong>abrir, gira hacia la derecha</strong>; para cerrar, hacia la izquierda.", "sink"],
    ["laundry", "Lavadero", "Hay <strong>pila para lavar</strong>, <strong>tendedero</strong> y <strong>escobas</strong> para que uses cuando quieras."],
    ["lift", "Ascensores", "Hay dos. Usa el de servicio para maletas, compras y al volver de la playa."],
    ["trash", "Basura", "Cierra la bolsa y llévala a la escalera. Sepárala así:", "trash"]
  ]}
]},

{id:"regras", il:"regras", t:"Normas de la casa", k:"Contamos contigo para cumplirlas 😊", b:[
  {t:"sum", x:"Pedimos que <strong>todas las normas de abajo se cumplan</strong>. Protegen el apartamento, el edificio y a los vecinos. ¡Gracias por tu colaboración!"},
  {t:"h", x:"Las normas principales"},
  {t:"rules4"},
  {t:"h", x:"Otros acuerdos"},
  {t:"ul", x:[
    "<strong>No se pueden traer visitas.</strong> El edificio no lo permite. Solo los huéspedes de la reserva pueden entrar al apartamento.",
    "<strong>No se admiten mascotas</strong>, ni siquiera pequeñas.",
    "<strong>Basura:</strong> cierra la bolsa y llévala a la escalera. En el pasillo hay dos cestos para los reciclables: <strong>azul</strong> (plástico y papel) y <strong>amarillo</strong> (metal y vidrio). El resto se tira por el ducto de basura de la escalera (una puertita).",
    "<strong>Las toallas de baño y de cara</strong> están encima de la cama. Úsalas solo en el apartamento: <strong>no las lleves a la playa</strong>.",
    "<strong>No te sientes con ropa mojada de playa</strong> en el sofá, la cama ni la hamaca.",
    "<strong>Cierra siempre la puerta con llave</strong>, incluso estando dentro, y no dejes ventanas abiertas al salir.",
    "<strong>No retires las mosquiteras de las ventanas.</strong> Hay muchos titíes (monitos llamados “micos”) en la zona y pueden entrar en el apartamento. Por seguridad, <strong>mantén las mosquiteras siempre en su sitio y no abras las ventanas para darles de comer</strong>, por muy simpáticos que parezcan.",
    "<strong>No está permitido</strong> ceder el piso a otra persona."
  ]}
]},

{id:"transporte", il:"transporte", t:"Cómo moverse", k:"Metro, autobuses y aplicaciones", b:[
  {t:"sum", x:"El <strong>metro</strong> es casi siempre la mejor opción. La estación <strong>Cardeal Arcoverde</strong> está a 7 minutos a pie. Para pagar, basta con <strong>acercar la tarjeta de tu banco</strong> al torno."},
  {t:"transport"},
  {t:"h", x:"Cómo pagar el billete"},
  {t:"ul", x:[
    "<strong>En metro y tranvía VLT:</strong> acerca tu tarjeta de crédito o débito directamente al torno. No hace falta comprar billete. Es lo más fácil si estás de paso.",
    "<strong>En autobús:</strong> se entra por la puerta delantera y se paga al conductor. Aceptan efectivo (lleva suelto) y, en muchos, también tarjeta contactless.",
    "<strong>¿Te quedas muchos días?</strong> Merece la pena comprar la tarjeta local, llamada <strong>Jaé</strong>, que se vende en quioscos y estaciones.",
    "<strong>En las apps (Uber y 99):</strong> instálalas y registra la tarjeta antes de viajar. El precio se ve antes de pedir el coche."
  ]},
  {t:"note", k:"info", x:"Los precios de arriba son de 2026 y pueden cambiar. Para comprobarlos: <a class=\"xlink\" href=\"https://metrorio.com.br\" target=\"_blank\" rel=\"noopener\">metrorio.com.br</a> (metro) y <a class=\"xlink\" href=\"https://vltcarioca.com.br\" target=\"_blank\" rel=\"noopener\">vltcarioca.com.br</a> (tranvía del Centro)."}
]},

{id:"passeios", il:"passeios", t:"Sitios y cómo llegar", k:"Todos los caminos salen de nuestra puerta", b:[
  {t:"photo", src:"img/vista.jpg"},
  {t:"sum", x:"Si tienes poco tiempo, haz tres cosas: <strong>Cristo Redentor</strong>, <strong>Pan de Azúcar</strong> y la <strong>puesta de sol en Arpoador</strong>. Los caminos de abajo empiezan aquí, en la puerta de casa."},
  {t:"attractions"},
  {t:"note", k:"warn", x:"<strong>El Cristo Redentor y el Pan de Azúcar suelen agotarse.</strong> Compra por internet con día y hora en <a class=\"xlink\" href=\"https://tremdocorcovado.rio\" target=\"_blank\" rel=\"noopener\">tremdocorcovado.rio</a> y <a class=\"xlink\" href=\"https://bondinho.com.br\" target=\"_blank\" rel=\"noopener\">bondinho.com.br</a>. Los precios y horarios cambian mucho: compruébalos antes de salir."}
]},

{id:"comer", il:"comer", t:"Dónde comer", k:"Del bar de esquina al restaurante con estrella", b:[
  {t:"sum", x:"Empieza por el <strong>Caju</strong>, justo enfrente de casa. A 2 minutos a pie está el <strong>Cervantes</strong>, y a unos 15 minutos la <strong>Adega Pérola</strong> y el <strong>Pavão Azul</strong>. Todos baratos y llenos de gente local."},
  {t:"caju"},
  {t:"restaurants"},
  {t:"note", k:"info", x:"<strong>Cómo funciona la cuenta en Brasil:</strong> normalmente añaden un 10% a 12% llamado “serviço” (servicio). Es opcional, pero casi todo el mundo lo paga. La tarjeta se acepta en casi todas partes. Lleva algo de efectivo solo para los quioscos y vendedores de la playa."}
]},

{id:"dicas", il:"dicas", t:"Consejos para disfrutar", k:"Playa, seguridad y vida de barrio", b:[
  {t:"photo", src:"img/rio.jpg"},
  {t:"sum", x:"Tres cosas para recordar: a la playa lleva poca cosa, en la calle usa el móvil con discreción y ponte protector solar aunque esté nublado."},
  {t:"h", x:"En la playa"},
  {t:"ul", x:[
    "La playa más cercana es la de Copacabana, en el <strong>Posto 2</strong>, al principio de Copacabana, cerca del Leme. Los “postos” son torres numeradas de socorristas que la gente usa como punto de encuentro.",
    "<strong>Los postos tienen baños</strong> y duchas para quitarte la sal. Se paga poco (el baño cuesta unos R$ 3,50) y es gratis para mayores de 65 años y personas con discapacidad. Lleva algo de suelto.",
    "Silla y sombrilla cuestan unos <strong>R$ 20 al día</strong>. Solo tienes que pedírselo al vendedor, que además te lleva bebida y aperitivos.",
    "En toda la orilla hay <strong>quioscos con comida</strong> frente a la playa: puedes comer, picar algo o tomarte una cerveza sin alejarte de la arena. Más abajo tienes algunas sugerencias.",
    "<strong>La bandera roja</strong> significa que el mar es peligroso. Respeta a los socorristas y no te bañes donde no hay nadie más.",
    "Lleva solo lo necesario: algo de dinero, el móvil y chanclas. Pasaporte, tarjetas y reloj mejor déjalos en el piso. <strong>Estate atento a tus cosas:</strong> en la playa hay muchos hurtos. No dejes el móvil ni el bolso solos en la toalla cuando entres al mar y, si vas solo, pide a alguien del puesto de la playa que les eche un ojo.",
    "Prueba al menos una vez: <strong>agua de coco</strong>, <strong>mate com limão</strong> (té helado con limón) y <strong>galleta Globo</strong>. Los clásicos de la arena.",
    "Por la arena pasan muchos <strong>vendedores ambulantes de comida</strong>, con cosas como gambas en brocheta, sándwiches y salados. No los recomiendo: no hay forma de saber si la comida se preparó con higiene, y pasa horas al calor. Mejor los quioscos o productos cerrados, como las galletas Globo.",
    "Ponte protector solar siempre, incluso con nubes. El sol de Río es más fuerte de lo que parece."
  ]},
  {t:"h", x:"Quioscos geniales en el paseo"},
  {t:"places", k:"kiosks"},
  {t:"note", k:"info", x:"Los quioscos del paseo aceptan tarjeta y Pix, y muchos abren hasta tarde. Puedes ir en chanclas y ropa de playa."},
  {t:"h", x:"Seguridad, sin dramas"},
  {t:"ul", x:[
    "Copacabana está muy concurrida y tranquila de día. De noche, elige las calles iluminadas (Av. Nossa Senhora de Copacabana y Rua Barata Ribeiro) y evita las calles vacías.",
    "No andes por la calle mirando el móvil. Úsalo dentro de tiendas, cafés o en el coche.",
    "Para sacar dinero, usa cajeros dentro de bancos o centros comerciales, y de día.",
    "En el metro y la playa llenos, lleva la mochila por delante."
  ]},
  {t:"h", x:"El día a día por aquí"},
  {t:"ul", x:[
    "<strong>Pix</strong> es la forma brasileña de pagar al instante con el móvil. Mucha gente acepta solo Pix o tarjeta, así que no te extrañe.",
    "Las casas de cambio están en la Av. Nossa Senhora de Copacabana. Nunca cambies dinero en la calle ni con desconocidos.",
    "Entre noviembre y marzo llueve fuerte de repente. Lleva un paraguas pequeño en el bolso."
  ]},
  {t:"h", x:"Centros comerciales cerca"},
  {t:"places", k:"malls"},
  {t:"h", x:"Supermercados cerca"},
  {t:"places", k:"markets"}
]},

{id:"saude", il:"saude", t:"Salud y emergencias", k:"Hospitales, SUS y farmacias en Copacabana", b:[
  {t:"sum", x:"<strong>Emergencia grave:</strong> llama al <strong>192</strong> y pide una ambulancia. Es gratuito. <strong>Atención pública (SUS, gratis):</strong> la más cercana es la <strong>UPA 24h de la Rua Siqueira Campos, 129</strong>. <strong>Privado:</strong> Copa Star, Copa D'Or o São Lucas, todos en Copacabana."},
  {t:"note", k:"warn", x:"El <strong>192</strong> (ambulancia) y el <strong>193</strong> (bomberos) son gratuitos, atienden 24 horas y funcionan desde cualquier teléfono — incluso un móvil extranjero sin saldo."},
  {t:"h", x:"Atención pública (SUS)"},
  {t:"sus"},
  {t:"h", x:"Hospitales privados en Copacabana"},
  {t:"hospitals"},
  {t:"h", x:"Farmacias cerca de casa"},
  {t:"pharmacies"},
  {t:"note", k:"info", x:"<strong>Cómo funcionan las farmacias en Brasil:</strong> muchos medicamentos se venden sin receta, y casi todas tienen un farmacéutico que puede orientarte, tomarte la presión y ponerte una inyección. Los antibióticos solo con receta médica."},
  {t:"ul", x:[
    "Si tienes <strong>seguro de viaje</strong>, llama a la central del seguro antes de ir al hospital. Te dicen adónde ir y evitas pagar de tu bolsillo.",
    "En el sistema público brasileño (el <strong>SUS</strong>), la atención de urgencia es gratuita, <strong>también para extranjeros</strong>. La unidad más cercana es la <strong>UPA 24h Copacabana</strong>, en la Rua Siqueira Campos, 129.",
    "Los hospitales privados cobran la consulta. Lleva la tarjeta del seguro y un documento.",
    "Antes de salir a pasear, guarda en el móvil el teléfono de tu seguro y el de tu consulado."
  ]}
]},

{id:"mapa", il:"mapa", t:"Mapa de Río", k:"Toca los pines para ver cada lugar", b:[
  {t:"sum", x:"Estás en <strong>Copacabana</strong>, al lado del Leme. La playa está a 8 minutos a pie y el metro Cardeal Arcoverde a 7. Usa los botones para ver los <strong>alrededores</strong> o <strong>toda la ciudad</strong>."},
  {t:"map"}
]},

{id:"numeros", il:"numeros", t:"Teléfonos útiles", k:"Guárdalos antes de salir", b:[
  {t:"sum", x:"<strong>190</strong> policía, <strong>192</strong> ambulancia y <strong>193</strong> bomberos. Toca el número para llamar directamente."},
  {t:"phones"},
  {t:"h", x:"Contactos de la casa"},
  {t:"kv", x:[
    ["chat", "Tu anfitrión", CFG.host+" — por el <a href='"+CFG.airbnbMsg+"' target='_blank' rel='noopener'>chat de Airbnb</a> (es lo más rápido)"],
    ["phone", "Portería del edificio", CFG.portaria+" — 24 horas"],
    ["pin",   "Dirección para darle al conductor", CFG.address],
    ["help", "Airbnb", "En la app: Perfil › Ayuda › Contáctanos"],
  ]},
  {t:"h", x:"Consulados en Río"},
  {t:"p", x:"Toca el nombre de tu país para abrir el consulado en Google Maps, con dirección y teléfono. La mayoría está en el Centro, en Botafogo o en Flamengo. Llama antes de ir: muchos solo atienden con cita previa."},
  {t:"consulates"}
]},

{id:"feedback", il:"feedback", t:"Tu valoración", k:"Una petición rápida, pero importante", b:[
  {t:"sum", x:"¡Al final del viaje, 2 minutos de valoración ayudan muchísimo!"},
  {t:"p", x:"Airbnb funciona como un intercambio. La valoración es muy importante: le permite al próximo huésped saber cómo fue tu estancia y me ayuda a mejorar cada vez más. ¡Quiero que te sientas como en casa!"},
  {t:"h", x:"La petición tiene dos partes"},
  {t:"ol", x:[
    "<strong>Durante la estancia:</strong> si falta algo o no funciona, escríbeme. Una bombilla fundida, la ducha, una duda.",
    "<strong>Al final:</strong> cuenta qué te gustó, qué usaste y qué faltó. Comentarios concretos como “la cama es genial”, “el Wi-Fi aguantó mis reuniones” o “la guía ayudó mucho” valen mucho más que un “todo bien”.",
    "<strong>Si puedes, añade una foto.</strong> Las fotos de huéspedes reales son lo que más ayuda a quien está eligiendo dónde alojarse."
  ]},
  {t:"note", k:"ok", x:"Tienes <strong>14 días después de la salida</strong> para valorar. Yo también te valoro a ti, y prometo ser justo y amable. Muchas gracias por elegir mi casa. ¡Vuelve pronto! 🇧🇷"}
]}

],

attr:{
 copa:{s:"Copacabana · 8 minutos a pie", how:"Sal del edificio y toma cualquier calle que baje hasta la Avenida Atlântica: en ocho minutos estás en la arena. El <strong>Fuerte de Copacabana</strong> está en el otro extremo de la playa. Puedes ir a pie por el paseo en 25 minutos o en el autobús 474. Los <strong>martes la entrada al Fuerte es gratis</strong>; los demás días cuesta R$ 10 (media R$ 5). Abre de martes a domingo, desde las 10:00.", tip:"Dentro del Fuerte está la <strong>Confeitaria Colombo</strong>, que es muy buena. Merece la pena desayunar allí. La vista abarca toda la playa y es uno de los planes más bonitos de Río."},
 cristo:{s:"Cosme Velho · tren del Corcovado", how:"Coge el metro en <strong>Cardeal Arcoverde</strong> (7 minutos a pie), Línea 1 sentido Uruguaiana, y bájate en <strong>Largo do Machado</strong> (unos 12 minutos). Desde allí, toma el autobús 583 o 584, o un Uber de 10 minutos, hasta la estación del tren en la Rua Cosme Velho, 513. El trencito sube la montaña en 20 minutos.<br><br><strong>Opción más fácil: la van oficial.</strong> Sale de la <strong>Praça do Lido</strong>, en la Av. Atlântica entre las calles Belfort Roxo y Ronald de Carvalho, a unos 10 minutos a pie de aquí. Funciona todos los días de 7:00 a 16:00. El billete cuesta R$ 132 (media entrada R$ 105) e incluye ida, vuelta y la entrada al Cristo. Cómpralo en <a class=\"xlink\" href=\"https://paineirascorcovado.com.br\" target=\"_blank\" rel=\"noopener\">paineirascorcovado.com.br</a>.", tip:"Compra la entrada por internet con día y hora. Ve al primer turno de la mañana o al final de la tarde: menos cola y menos nubes."},
 pao:{s:"Urca · teleférico", how:"Lo más práctico es un Uber directo, unos 15 a 20 minutos. En autobús, coge el 107, 511 o 512 en la Av. Nossa Senhora de Copacabana y bájate en la Av. Pasteur, 520. En metro, bájate en Botafogo y haz el resto en app.<br><br><strong>Opción económica: subir por el sendero.</strong> Junto a la estación del teleférico, en la Praia Vermelha, empieza la Pista Cláudio Coutinho, y de ella sale el sendero del Morro da Urca: de 40 minutos a 1 hora de subida. Llegar al Morro da Urca (la primera parada del teleférico) por el sendero es <strong>gratis</strong>. La puerta al final del sendero abre de 9:00 a 17:00. Arriba puedes bajar en teleférico (R$ 65, media R$ 32), seguir hasta el Pan de Azúcar y bajar en teleférico (R$ 140, media R$ 70) o volver a pie por el sendero sin pagar nada. Los billetes para quien sube por el sendero solo se venden en el tótem del Morro da Urca.", tip:"Sube al final de la tarde. Ves la puesta de sol desde arriba y la ciudad encendiéndose en la bajada. Lleva una chaqueta ligera, hace viento."},
 ipanema:{s:"Ipanema · a pie o en metro", how:"A pie por el paseo hasta Arpoador son 20 o 25 minutos de caminata preciosa, con el mar al lado todo el rato. En metro, coge la Línea 1 o 4 y bájate en <strong>Cantagalo</strong> o <strong>General Osório</strong>, a 2 o 3 estaciones de aquí.", tip:"Cada tarde la gente sube a la Piedra de Arpoador y aplaude cuando se pone el sol. Llega unos 40 minutos antes para coger buen sitio."},
 lagoa:{s:"Lagoa · 15 minutos", how:"En metro hasta General Osório y luego 15 minutos a pie por la Rua Farme de Amoedo. En Uber son 10 o 15 minutos directos.", tip:"Alquila un hidropedal, haz la vuelta de 7,5 km por el carril bici o para en un quiosco por la noche para escuchar música en vivo junto a la laguna iluminada."},
 jb:{s:"Jardim Botânico · zona sur", how:"En Uber, 15 o 20 minutos. En transporte público, metro Línea 4 hasta <strong>Jardim de Alah</strong> y luego 15 minutos a pie o un autobús. El Parque Lage está a 10 minutos del Jardín Botánico, en Rua Jardim Botânico, 414.", tip:"El Parque Lage es gratis y tiene un café en el patio de un caserón, con el Cristo asomando al fondo. Puedes ver los dos en una misma mañana."},
 centro:{s:"Centro · metro Cinelândia o Carioca", how:"Metro Línea 1 desde Cardeal Arcoverde hasta <strong>Cinelândia</strong> o <strong>Carioca</strong>, directo, en unos 20 minutos. Saliendo de la estación todo queda a pie: Theatro Municipal, Biblioteca Nacional, Confeitaria Colombo y el Real Gabinete Portugués de Lectura.", tip:"Ve entre semana. El Centro está animado de lunes a viernes y se vacía el sábado y el domingo."},
 maua:{s:"Praça Mauá · metro y tranvía VLT", how:"Metro hasta Carioca o Cinelândia y luego el <strong>VLT</strong> (un tranvía moderno) hasta la Parada dos Museus / Praça Mauá. En total, 40 o 50 minutos.", tip:"El Museo del Mañana es gratis los martes. Al lado están el museo MAR y el mural gigante “Etnias”, del artista Kobra."},
 lapa:{s:"Lapa · metro Cinelândia", how:"Metro Línea 1 hasta <strong>Cinelândia</strong> y 10 minutos a pie hasta los Arcos de Lapa. La Escalera de Selarón está justo detrás, en la Rua Joaquim Silva.", tip:"Visita la escalera por la mañana: buena luz para fotos y sin multitudes. De noche, Lapa se transforma, con samba y bares, sobre todo viernes y sábado."},
 santa:{s:"Santa Teresa · tranvía amarillo", how:"Metro hasta <strong>Carioca</strong> y camina hasta la estación del tranvía, en la Rua Lélio Gama. El tranvía amarillo cruza los arcos y sube hasta el Largo dos Guimarães en 20 minutos.", tip:"Come en el Bar do Mineiro y baja a pie por la Rua Almirante Alexandrino, parando en los talleres de artistas y los miradores del camino."},
 maracana:{s:"Maracanã · metro", how:"En Cardeal Arcoverde, coge la <strong>Línea 1 sentido Uruguaiana</strong>. En <strong>Botafogo</strong> o en <strong>Central</strong>, cambia a un tren de la <strong>Línea 2 sentido Pavuna</strong> y bájate en la estación Maracanã. Unos 40 minutos, y la salida da casi dentro del estadio.", tip:"Aunque no haya partido, la visita guiada al estadio merece la pena. En día de partido, ve en metro: aparcar allí es imposible."},
 mirantes:{s:"Alto da Boa Vista y Botafogo", how:"Solo se puede llegar en coche o app. El <strong>Mirante Dona Marta</strong> está a 20 minutos y la <strong>Vista Chinesa</strong> a 30 o 40. Merece la pena hacer los dos en el mismo trayecto, pidiéndole al conductor que espere.", tip:"El Mirante Dona Marta tiene la vista más bonita del Pan de Azúcar y es totalmente gratis. Ve al final de la tarde."},
 barra:{s:"Zona oeste · playas salvajes", how:"Metro Línea 4 hasta <strong>Jardim Oceânico</strong> (45 minutos) y luego el BRT hacia Barra y Recreio. A Prainha y Grumari solo en coche o Uber, de 60 a 90 minutos.", tip:"Prainha y Grumari son las playas más bonitas de la ciudad: mar fuerte, selva alrededor y ni un solo edificio en el paisaje."},
 niteroi:{s:"Niterói · travesía en barco", how:"Metro hasta <strong>Carioca</strong>, 10 minutos a pie hasta la Praça XV y barco a Niterói: 15 minutos de travesía. Desde la terminal, un autobús o Uber te lleva al museo MAC, diseñado por Oscar Niemeyer.", tip:"El barco al final de la tarde, con el Pan de Azúcar a un lado y el Cristo al otro, es el paseo más barato y más bonito de Río."},
 leme:{s:"Leme · subida corta hasta el fuerte", how:"Ve a pie hasta el final de la playa de Leme (unos 15 minutos), en la <strong>Praça Almirante Júlio de Noronha</strong>, junto al Posto 1. La entrada es el portón del Ejército: pagas la entrada en la garita y subes a pie por una cuesta pavimentada y arbolada de 800 metros, unos 20 a 30 minutos de subida. Abre de <strong>martes a domingo, de 9:30 a 16:00</strong> (cierra los lunes). La entrada cuesta R$ 10 (media R$ 5) y los <strong>martes es gratis</strong>. Solo efectivo o Pix, no aceptan tarjeta.", tip:"Desde arriba ves toda la playa de Copacabana a un lado y el Pan de Azúcar al otro. Ve temprano, cuando hace más fresco, y lleva agua y zapatillas cómodas."}
},

trans:{
 metro:{h:"Metro", tag:"≈ R$ 7,90", d:"Lo más rápido, limpio y seguro. Las estaciones más cercanas son <strong>Cardeal Arcoverde</strong> (7 min a pie) y Siqueira Campos (15 min). Funciona de 5:00 a medianoche; los domingos, de 7:00 a 23:00."},
 bus:{h:"Autobús", tag:"≈ R$ 4,70", d:"Va donde el metro no llega. Entra por la puerta delantera y estira el brazo en la parada para que el autobús pare — si no haces la señal, pasa de largo."},
 app:{h:"Uber y 99", tag:"", d:"Funcionan muy bien en Río y suelen ser baratos. De noche, mejor la app que el autobús. Comprueba la matrícula del coche antes de subir."},
 walk:{h:"A pie", tag:"gratis", d:"De Copacabana a Arpoador son 25 minutos por el paseo, siempre junto al mar. Es uno de los mejores planes de la ciudad y no cuesta nada."},
 vlt:{h:"VLT (tranvía del Centro)", tag:"≈ R$ 4,30", d:"Un tranvía moderno que une la Praça Mauá, la Cinelândia, el aeropuerto Santos Dumont y la estación Central. Lo mejor para moverse por el Centro histórico."},
 brt:{h:"BRT", tag:"≈ R$ 4,70", d:"Autobús exprés con carril propio que va a la zona sudoeste (Barra y Recreio). Se coge en la estación Jardim Oceânico, final de la Línea 4 del metro."},
 taxi:{h:"Taxi", tag:"por taxímetro", d:"Los amarillos son los oficiales. Comprueba que el taxímetro esté encendido. La “bandeira 1” es la tarifa de día laborable; la “bandeira 2” es más cara, de noche y los domingos."},
 bike:{h:"Bicicleta pública", tag:"desde R$ 7,90", d:"Son las bicicletas naranjas de Itaú (Bike Itaú), con estaciones por toda la ciudad: Copacabana, Ipanema, Leblon, Jardim Botânico, etc. El alquiler funciona todo por la app Tembici: el viaje suelto cuesta R$ 7,90 (hasta 15 minutos) y el pase de 48 horas, R$ 32,90. El carril bici del paseo es precioso."},
 scooter:{h:"Patinete eléctrico", tag:"R$ 2 + R$ 0,80/min", d:"Los patinetes de Whoosh están repartidos por Copacabana, Ipanema y Leblon. El alquiler funciona todo por la app Whoosh: R$ 2 para desbloquear y unos R$ 0,80 por minuto. Deja el patinete solo en los puntos de aparcamiento que indica la app. Sinceramente, no lo recomiendo mucho: sale caro (15 minutos ya son unos R$ 14). La bicicleta suele compensar más."}
},

mainrules:{
 smoke:{h:"No fumar en el Airbnb", d:"Incluye el cigarrillo electrónico."},
 party:{h:"Sin fiestas", d:"El edificio es residencial y la administración es estricta."},
 quiet:{h:"Silencio de 22:00 a 7:00", d:"Fuera de ese horario, música y conversación a volumen normal. Las paredes no son gruesas."},
 people:{h:"Máximo "+CFG.guests+" personas", d:"El número de personas de la reserva es el número que puede dormir aquí. <strong>El edificio no permite visitas.</strong>"},
 toilet:{h:"En el inodoro, solo papel higiénico", d:"Nada de pañales, toallas higiénicas, toallitas húmedas, hisopos u otros objetos: tapan las tuberías. Tíralos a la basura."},
 eco:{h:"Usa el EcoTouch", d:"Al entrar, cierra la puerta y toca el panel de la pared para encender los aires acondicionados.", more:"Cómo usar el EcoTouch"}
},

rest:{
 perola:"Barra histórica con decenas de conservas y aceitunas rellenas. Señalas lo que quieres y comes de pie, con vino verde bien frío. Siempre lleno.",
 pavao:"Bar de esquina premiado, con mesitas en la acera. La croqueta de yuca con gambas es la mejor de Copacabana.",
 cervantes:"El bocadillo de pernil con piña se ha convertido en un símbolo de Río. Abierto hasta la madrugada.",
 nema:"Panadería de masa madre muy buena, muy cerca de casa, al principio de Leme. Ideal para el desayuno: panes, dulces y tartas.",
 sorvetino:"Heladería artesanal de helado soft, muy cerca del apartamento, y muy buena. Los sabores cambian cada semana, con creaciones diferentes como tostada con mantequilla y Sucrilhos (copos de maíz azucarados), además de los clásicos. El cucurucho mantecoso lo hacen allí mismo.",
 galeto:"Pollo a la brasa, arroz con brócoli y cerveza bien fría desde 1962. Sencillo, barato y siempre bueno.",
 bakers:"Panadería y pastelería para el desayuno: panes, cruasanes y tartas hechos allí mismo.",
 cafeina:"Café bien hecho, bocadillos y tartas. Buen sitio para trabajar por la mañana con Wi-Fi.",
 colomboforte:"La pastelería más antigua de Río, dentro del Fuerte de Copacabana, con toda la playa delante.",
 davi:"Feijoada de marisco con vistas desde lo alto de Leme. Ve a comer y reserva.",
 joaquina:"Cocina brasileña tradicional con un toque moderno, frente a la playa de Leme. Pide el Petisco do Coronel (carne seca con yuca frita) y prueba los cócteles con ingredientes brasileños, como cachaça de jambu y cupuaçu.",
 palace:"Rodizio de carnes: los camareros pasan mesa por mesa ofreciendo cortes hasta que dices basta. Funciona desde 1951.",
 mee:"Cocina asiática con estrella Michelin dentro del hotel Copacabana Palace. Para una noche especial.",
 garota:"El bar donde Tom Jobim y Vinícius escribieron “La Chica de Ipanema”. Turístico, sí, pero la cerveza es buena.",
 zaza:"Comida casera con toques asiáticos en una casita de colores. Pide mesa en la planta de arriba.",
 feijoada:"Feijoada completa todos los días de la semana, con todos los acompañamientos y caipiriña.",
 bibi:"Zumos de fruta, açaí y bocadillos. Parada obligatoria al volver de la playa.",
 talho:"El mejor desayuno contundente de Leblon: panes, quesos y bocadillos.",
 baked:"Panadería y horno en Ipanema, abierta de 6:30 a 22:00. Buena para el desayuno o un tentempié: panes de masa madre, dulces y salados hechos allí.",
 vero:"Helado italiano de verdad, hecho allí, con frutas brasileñas.",
 ct:"Restaurante del chef Claude Troisgros, especializado en carnes y clásicos franceses.",
 pobreta:"La <strong>mureta</strong> es el murito bajo que recorre la orilla de la Urca, junto a la bahía de Guanabara. El plan carioca es comprar una cerveza en un bar o a un vendedor ambulante y sentarse en ella a ver la puesta de sol. La <strong>Pobreta</strong> (juego de palabras entre “pobre” y “mureta”) se ganó el apodo por los precios: el Bar Urca, más adelante, es caro, y aquí todo sale mucho más barato. Es el tramo del inicio de la orilla, lo primero que aparece cuando llegas a la Urca. Hay algunos bares, como el Urca Grill, y ambulantes, pero la gente se queda sentada en el murito. La cerveza cuesta menos, hay más espacio y la puesta de sol, con vista al Cristo y a la marina, es de las más bonitas de la ciudad.",
 barurca:"Siguiendo por la orilla, frente al Bar Urca, está la <strong>Mureta da Urca</strong> propiamente dicha: el tramo más famoso y tradicional. Pero el Bar Urca es caro, y por eso mucha gente prefiere la Pobreta. Pides en la barra (las empanadas y los buñuelos de bacalao son clásicos), coges la cerveza y te sientas en el murito junto al agua. Río puro.",
 chanchada:"El bar de moda en Botafogo. A todo el mundo le encanta, y hasta Dua Lipa y Rosalía han pasado por allí. Pide las batidas (cócteles brasileños) y los petiscos para compartir. No acepta reservas, así que llega temprano.",
 botica:"Un clásico de Botafogo. Caña muy bien tirada, cócteles con cachaça y una carta que cambia cada semana, en un local con encanto lleno de discos, libros y muebles antiguos.",
 macuna:"Bar animado de tres plantas, con pista de baile, terraza en la azotea y mesas en la acera. Música en vivo, con noche de jazz los jueves.",
 tremetreme:"Otro clásico, en la Rua Arnaldo Quintela: uno de los bares más baratos y llenos de Botafogo, con cerveza fría y gente en la acera hasta la madrugada.",
 slow:"Panadería artesanal famosa por sus panes de masa madre, cafés bien hechos y uno de los mejores brunch de Río el fin de semana.",
 lasai:"Alta cocina con huerto propio e ingredientes brasileños. Una de las mejores mesas del país.",
 braseiro:"Un clásico del Baixo Gávea, siempre lleno. Pide la picanha en lonchas a la brasa o el galeto (pollito asado). Raciones generosas y caña bien tirada.",
 brewteco:"En la misma plaza que el Braseiro, con más de 30 grifos de cerveza artesanal, tapas y pizza. Bueno para empezar o terminar la noche en el Baixo Gávea.",
 guimas:"Bistró carioca con más de 40 años, en el corazón de Gávea. Famoso por sus pastelitos crujientes y sus platos de bacalao.",
 okioki:"Japonés contemporáneo en Gávea, con sushis creativos y platos calientes. Uno de los favoritos del barrio para comida japonesa.",
 braz:"Una de las pizzerías más famosas de Río, de masa fina y horno de leña. Un gran plan después de visitar el Jardín Botánico.",
 camolese:"Cocina mediterránea con toque carioca, frente al Jockey Club y con vista al Cristo. Buena opción para comer después del Jardín Botánico.",
 katzsu:"Bar de tapas asiáticas, del mismo chef del Chanchada (Bruno Katz), con platos inspirados en Japón, Corea y Tailandia. Muy concurrido, así que conviene llegar temprano.",
 absurda:"La pastelería de moda, frente al Jardín Botánico, en una casona de 120 años. Clásicos brasileños en versión cuidada: quindim de maracuyá, flan de leche condensada y la famosa tarta de zanahoria. Parada ideal después de visitar el Jardín.",
 oteque:"Dos estrellas Michelin. Menú degustación de marisco en una casa discreta de Botafogo.",
 colombo:"Pastelería de 1894, con espejos belgas y vidrieras. Ve al té de la tarde en el salón de arriba.",
 barluiz:"Desde 1887, comida alemana y la mejor cerveza negra de barril del Centro.",
 capela:"Cabrito asado en horno de leña, en Lapa, hasta la madrugada.",
 mineiro:"Feijoada, croquetas de feijoada y una pared entera de cachaças, en el corazón de Santa Teresa.",
 apraz:"Comida brasileña en un jardín con vistas a la Bahía de Guanabara. Reserva y ve al final de la tarde.",
 scenarium:"Caserón de tres plantas en Lapa, con samba en vivo y antigüedades por todas partes.",
 teva:"Comida vegetariana moderna, creativa y sabrosa como para gustar incluso a quien come carne.",
 veganvegan:"Pionero de la comida vegana en Río: platos caseros y orgánicos, con un menú del día que cambia a diario."
},

hosp:{
 copastar:"Hospital privado de alto nivel de la Rede D'Or, con urgencias 24 horas.",
 copador:"Hospital privado grande, con urgencias 24 horas y UCI. Unos 5 minutos en taxi desde aquí.",
 saolucas:"Hospital privado tradicional de Copacabana, con urgencias 24 horas."
},

farm:{
 leme:"La farmacia más cercana, a unos 2 minutos a pie, y <strong>abierta 24 horas</strong>. La primera opción para cualquier urgencia, a cualquier hora.",
 pacheco:"Cadena con varias tiendas en esas dos calles. Algunas abren 24 horas.",
 drogasil:"Tiendas en la avenida principal del barrio, con farmacéutico de guardia que también pone inyecciones.",
 venancio:"Farmacia junto al metro Cardeal Arcoverde, a unos 7 minutos a pie de casa."
},

tel:{
 samu:{l:"Ambulancia (SAMU)", d:"Emergencia médica · gratuito"},
 pm:{l:"Policía Militar", d:"Emergencia policial · gratuito"},
 bomb:{l:"Bomberos", d:"Incendio, rescate y ahogamiento"},
 civil:{l:"Policía Civil", d:"Para poner una denuncia"},
 dc:{l:"Defensa Civil", d:"Inundaciones y deslizamientos"},
 pref:{l:"Ayuntamiento (1746)", d:"Servicios de la ciudad de Río"},
 mulher:{l:"Atención a la Mujer", d:"Violencia contra la mujer"},
 dh:{l:"Línea 100", d:"Derechos humanos"},
 deat:{l:"Policía del Turista", d:"Av. Afrânio de Melo Franco, 159, Leblon · 24 h"},
 denun:{l:"Denuncia anónima", d:"Denuncias anónimas"}
},

mapLegend:["Estás aquí","Restaurantes y bares","Supermercados","Farmacias","Hospitales y UPA","Metro","Paseos"]
};
