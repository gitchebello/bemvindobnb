/* ===================== ENGLISH ===================== */
var L = window.L || (window.L = {});

L.en = {
htmlLang:"en",

lbl:{
  how:"How to get there", time:"How long it takes", cost:"How much it costs", tip:"Tip",
  map:"See on map", tel:"Phone", dist:"Distance from here",
  copy:"Copy", copied:"Copied!", network:"Network name", pass:"Password",
  more:"See more", openmaps:"Open in Google Maps", route:"Directions to the flat",
  print:"Print or save as PDF", must:"Must see", sum:"In short", close:"Close", open:"Open", shut:"Close", travaAlt:"Window safety latch", hot:"Hot", cold:"Cold", left:"left", right:"right",
  wifiTip:"Tip: tap “Copy” and paste it on your phone. No need to type it out.",
  near:"Nearby", city:"Whole city", mapAria:"Interactive map of Rio de Janeiro",
  toDark:"Switch to dark mode", toLight:"Switch to light mode",
  dark:"Dark mode", light:"Light mode"
},

hero:{
  photoAlt:"Copacabana beach from above", photoTag:"Copacabana Beach · 8 min from the flat",
  kicker:"Welcome guide",
  t1:"Welcome",
  t2:"to Rio de Janeiro!",
  lead:"This guide explains everything in plain language: times, the Wi-Fi password, house rules, how to reach each sight, where to eat and what to do if you need help. Start with the menu just below.",
  chips:[
    {ic:"clock", x:"Check-in from <b>"+CFG.checkin+"</b>"},
    {ic:"clock", x:"Check-out by <b>"+CFG.checkout+"</b>"},
    {ic:"beach", x:"Beach <b>8 minutes</b> on foot"},
    {ic:"bus",   x:"Metro <b>7 minutes</b> on foot"}
  ]
},

sos:{
  label:"Need help right now?",
  b1:{n:"192", t:"Ambulance<br>(medical emergency)"},
  b2:{n:"190", t:"Police<br>(emergency)"},
  b3:{n:CFG.host, t:"Your host. Need anything? Contact her through <strong>Airbnb messages</strong>, on the platform itself."}
},

menu:{
  t:"Where to start",
  p:"Tap the card for whatever you need. Each one opens a full explanation, with drawings and step-by-step instructions."
},

menuDesc:{
  checkin:"How to get into the flat and what to do when you leave",
  wifi:"Wi-Fi, Roku TV, air conditioning, kitchen and other appliances",
  regras:"Following the rules is essential for a great stay",
  saude:"Hospital, pharmacy and emergency numbers",
  transporte:"Metro, buses and apps, explained from scratch",
  passeios:"How to reach each sight starting from our door",
  comer:"Good, cheap places nearby plus Rio classics",
  feedback:"A quick request at the end of your trip"
},

foot:{
  t:"Have a wonderful stay!",
  bio:"<strong>Who is "+CFG.host+"?</strong> She loves to travel and once made it her job: she was a flight attendant for the legendary <strong>VARIG</strong>. She later trained as a teacher and <strong>Reiki</strong> therapist. Today, besides working in that field, she offers a great stay to travellers who want to discover, or return to, the <strong>Marvellous City</strong>.",
  p:"This guide was put together by <strong>"+CFG.host+"</strong> to make everything easier. Any questions? Message me through Airbnb — I reply fast. And if anything could make your stay better, tell me while you are still here.",
  wa:"Message your host"
},

restGroups:{
  copa:"Right around the corner (Copacabana & Leme)",
  ipa:"Ipanema & Leblon",
  bota:"Botafogo & Urca",
  gavea:"Jardim Botânico & Gávea",
  centro:"Downtown, Lapa & Santa Teresa",
  veg:"Vegetarian & vegan"
},

nav:{ home:"Home", tours:"Sights", eat:"Eat", health:"Health", phones:"Numbers" },

gallery:{
  t:"A taste of the flat and the neighbourhood",
  p:"Swipe sideways to see photos of the apartment and the area around it."
},

quick:[
  {ic:"door",  k:"Your flat", x:"<b>Flat "+CFG.aptShort+" · 4th floor</b><br>Coming out of the lift, it is on the <b>left</b>."},
  {ic:"lock",  k:"Arriving", x:"<b>Keypad</b> door, no keys."},
  {ic:"water", k:"Drinking water", x:"Only from the <b>filter</b> (room temperature, cool or ice-cold)."},
  {ic:"beach", k:"Back from the beach?", x:"Use the building's <b>back entrance</b> — there is a small shower there to rinse off the sand."},
  {ic:"music", k:"Right opposite", x:"<b>Caju</b>, a bar with samba and feijoada, is just across the street."}
],

tv:{
  roku:{k:"Roku remote", h:"One remote for everything", d:"The Smart TV <strong>turns on and off with the Roku remote itself</strong> (red ⏻ button). It is also what you use to pick apps, films and series."},
  photoAlt:"Roku remote with the buttons numbered",
  keysT:"The Roku remote buttons",
  keys:[
    ["⏻", "On / off", "The red button at the top of the remote. Turns the Smart TV on and off. After switching on, “no signal” shows for a few moments until the purple Roku screen appears. That's normal.", "Power"],
    ["←", "Back (little arrow)", "Very handy! Takes you to the previous screen: from a film back to the list, closes a menu or goes back inside the app. Press it as many times as you need.", "Back"],
    ["⌂", "Home", "Takes you back to the home screen, where all the apps are.", "Home"],
    ["◀ ▲ ▼ ▶", "Arrows", "Move around menus, apps and episodes.", "Arrows"],
    ["OK", "OK", "Opens or confirms whatever is highlighted.", "OK"],
    ["🎤", "Microphone (voice)", "<strong>Hold the button</strong> and say the name of the app you want, for example “Globoplay” or “YouTube”. Let go when you finish speaking and it opens by itself.", "Voice"],
    ["▶❚❚", "Play / Pause", "Pauses and resumes the video.", "Play"],
    ["＋ －", "Volume and mute", "On the <strong>right side</strong> of the remote (see the photo). On the long button: the <strong>top</strong> part (speaker with waves) <strong>turns it up</strong> and the <strong>bottom turns it down</strong>. The separate button just below (speaker with ×) is <strong>mute</strong>: turns the sound off and on."]
  ],
  stepsT:"Step by step",
  steps:[
    "Turn the TV on with the <strong>red ⏻ button</strong> on the Roku remote. At first you will see a <strong>“no signal”</strong> message: <strong>don't worry, that's normal</strong>. Wait a few moments and the Roku starts by itself, showing a <strong>purple screen</strong>.",
    "Pick up the <strong>Roku remote</strong> and press <strong>Home ⌂</strong>. The home screen with the apps appears.",
    "Use the <strong>arrows</strong> to choose Netflix, Prime Video, YouTube, Globoplay… and press <strong>OK</strong>. Or use your voice: <strong>hold the microphone button 🎤</strong> and say the name of the app.",
    "To go back one screen, press the <strong>little arrow ←</strong> (at the top, next to home). It takes you from a film back to the list, closes menus and returns to where you were.",
    "<strong>Globoplay</strong> and <strong>Stremio</strong> (if you know what I mean ;) ) are already signed in and belong to the flat: watch as much as you like. <strong>Globoplay</strong> is where you can watch <strong>TV Globo live</strong>. Other subscription services (Netflix, Prime Video, Disney+ etc.) <strong>are up to each guest</strong>, using your own account.",
    "To sign in, choose “Sign in” in the app. Many show a <strong>code or QR code</strong>: open it on your phone and confirm — no need to type a password on the TV.",
    "Before you leave, <strong>sign out of your accounts</strong> in each app (Globoplay and Stremio belong to the flat, leave them)."
  ],
  lost:"<strong>Lost?</strong> Press the <strong>home ⌂</strong> button on the remote to go back to the start.",
  tip:"<strong>Black screen?</strong> Press <strong>⏻</strong> on the Roku remote, pointing it at the TV. <strong>Remote not responding?</strong> Check the batteries, or unplug the TV for 10 seconds and switch it on again. There are <strong>spare batteries in the drawer under the TV</strong>."
},

sus:{k:"SUS · public and free", free:"Free", d:"The nearest public (SUS) emergency unit. It treats urgent cases 24 hours a day, free of charge, <strong>foreigners included</strong>. Bring your passport or photo ID."},

caju:{k:"Right opposite the building", badge:"Live samba",
  d:"Cross the street and you're there. Caju is a gastrobar with the soul of a classic Rio boteco: tables on the pavement facing the little square, snacks, drinks and samba circles. One of the best-loved bars in the neighbourhood.",
  list:["<strong>Feijoada on Saturdays</strong>, with all the trimmings.","Snacks from about R$ 20 and drinks from R$ 10 (approximate prices).","Great for starting or ending the night without needing an Uber."]},

kiosks:{
 mureta:"Tucked into the Leme end, right against the rock, with a view of the whole beach. Feijoada every day, from morning until late, and live music at weekends.",
 ox:"Two kiosks side by side on Leme beach: one serving Asian food, the other snacks, both with great drinks.",
 arrasta:"Proper north-eastern Brazilian food, like baião de dois, with forró music and a party feel on the promenade.",
 coisa:"Classic Rio bar snacks, like skewers with farofa, in a laid-back spot near Posto 4."
},

markets:{
 horti:"Fruit and veg, bakery and grocery, 2 minutes on foot. Great for fruit, vegetables, fresh bread and everyday basics.",
 pao:"Full-size supermarket, about 3 minutes on foot, with everything you need to stock the flat.",
 mundial:"The cheapest in the area. It is a bit further, about 15 minutes on foot, near Siqueira Campos metro, but worth it for a bigger shop. Closes early on Sundays.",
 zonasul:"The only one nearby open <strong>24 hours</strong>, facing Leme beach, about 8 minutes on foot. A lifesaver if you arrive late or need something in the middle of the night."
},
malls:{
 riosul:"The nearest big mall: shops, cinema and food court. It is just past the Túnel Novo tunnel — about 15 minutes on foot or 5 by Uber.",
 cidcopa:"A long-standing neighbourhood arcade near Siqueira Campos metro, with small shops and everyday services.",
 bps:"Cinema, shops and top-floor restaurants overlooking Botafogo Bay and Sugarloaf Mountain. About 10 minutes by Uber."
},

cooktop:[
 ["1. Press", "the burner knob"],
 ["2. Turn", "while holding it in"],
 ["3. Lit!", "the flame comes on"]
],

sofa:[
 ["Pull out the base", "Under the seat, at the front, there is a <strong>handle</strong>. Pull the base out."],
 ["Remove the cushions", "Take the cushions off the sofa."],
 ["Unfold the mattress", "The seat is the <strong>folded mattress</strong>. Unfold it onto the base you pulled out."],
 ["Done!", "The bed is ready. To close it, just do the steps in reverse."]
],

trash:[
 ["blue",   "Blue bin",   "Plastic and paper", "E.g. plastic bottles, packaging, bags, boxes, newspaper"],
 ["yellow", "Yellow bin", "Metal and glass",   "E.g. cans, glass bottles and jars, aluminium foil"],
 ["chute",  "Stairwell chute (small door)", "Everything else", "E.g. food scraps, napkins, bathroom rubbish"]
],

eco:{
 photoAlt:"EcoTouch panel on the wall, next to the door", photoCap:"This is the EcoTouch: tap the ⏻ button",
 title:"Power: the EcoTouch button",
 steps:[
  ["door",  "Come in and close the door", "EcoTouch only works with the flat's front door closed."],
  ["touch", "Tap the EcoTouch", "A light tap (like on a phone screen) on the wall panel, next to the door on the inside. This lets you switch on the air conditioners: the living room one (split unit) with the remote, and the bedroom one with the buttons on the unit itself."],
  ["bolt",  "Door closed, power on", "While you are home with the door closed, everything keeps working."]
 ],
 list:[
  "<strong>EcoTouch</strong> is an energy saver: a touch panel on the wall of the flat.",
  "When you go out and close the door, the power to the air conditioners <strong>switches off by itself</strong>. That is normal.",
  "When you get back, <strong>close the door and tap the EcoTouch.</strong>",
  "This means you can't leave the air conditioning on while you're out. Switch it on when you get back — the place cools down in a few minutes."
 ]
},

sections:[

{id:"checkin", il:"checkin", t:"Check-in & check-out", k:"Arrival, keypad door and 24h front desk", b:[
  {t:"sum", x:"You can arrive at <strong>any time</strong>. There are no keys: the flat door opens with a <strong>code</strong>, which I send you on Airbnb before you arrive."},
  {t:"kv", x:[
    ["pin",   "Address", CFG.address],
    ["door",  "Where exactly", "Flat "+CFG.aptShort+" · 4th floor · left of the lift"],
    ["lock",  "Door", "Keypad lock. No keys."],
    ["clock", "Check-in", "From "+CFG.checkin],
    ["clock", "Check-out", "By "+CFG.checkout],
    ["people", "How many people", "Up to "+CFG.guests+" guests"],
    ["phone", "Front desk", "24 hours · "+CFG.portaria]
  ]},
  {t:"h", x:"Getting in, step by step"},
  {t:"ol", x:[
    "Arrive at the building at <strong>Rua Felipe de Oliveira, 4</strong>, facing Praça Demétrio Ribeiro, with the <strong>entrance next to Aomori</strong>, an Asian grocery store.",
    "The building has <strong>two entrances</strong>. With luggage, use the <strong>back one</strong>. Same when <strong>coming back from the beach</strong>.",
    "Tell the doorman you are staying in <strong>flat "+CFG.aptShort+"</strong> and fill in the form they will give you. If you would rather fill it in beforehand, just ask me and I will send you the document.",
    "Take the lift to the <strong>4th floor</strong>. Coming out of the lift, flat <strong>"+CFG.aptShort+"</strong> is on the <strong>left</strong>.",
    "Enter the <strong>code</strong> on the lock (tap the <strong>top part</strong> of it and the keypad will light up). The code reaches you on Airbnb before you arrive.",
    "Once you are in, send me a message so I can follow your arrival!"
  ]},
  {t:"h", x:"Power: the EcoTouch button"},
  {t:"eco"},
  {t:"h", x:"Before you leave"},
  {t:"ul", x:[
    "Close the windows. Switch off the air conditioning, the lights and the TV.",
    "Sign out of your TV accounts (Netflix, Prime, YouTube…) so no one else can use them. Globoplay and Stremio belong to the flat: leave them signed in.",
    "Close the door and check that it has locked.",
    "Send me a message to say you have left."
  ]}
]},

{id:"wifi", il:"wifi", t:"Wi-Fi & appliances", k:"Internet, TV, air conditioning, kitchen and more", b:[
  {t:"sum", x:"The internet is free and unlimited. The network is <strong>"+CFG.wifi+"</strong>. Tap <strong>Copy</strong> and paste the password on your phone."},
  {t:"wifi"},
  {t:"note", k:"info", x:"<strong>Internet down?</strong> The internet box (router) is in the bedroom. Unplug it, wait 30 seconds and plug it back in. That fixes it almost every time."},
  {t:"h", x:"Television: Smart TV with Roku"},
  {t:"tv"},
  {t:"h", x:"How things work"},
  {t:"kv", x:[
    ["sofa",  "Sofa bed", "The living room sofa is a <strong>sofa bed</strong>. To open it:", "sofa"],
    ["bulb",  "Living room light", "Looking for the switch? It is <strong>behind the door</strong>."],
    ["window", "Windows: safety latch", "The windows have <strong>safety latches</strong> like the one in the photo, on the side. They hold the window: <strong>whenever you open a window, check that the latch is holding it</strong>. Without the latch, <strong>the window can fall</strong>.", "trava"],
    ["blind", "Blackout", "<strong>Every window has a blackout curtain</strong> that blocks the light from outside. Great for sleeping in."],
    ["plant", "Plants", "<strong>No need to water the plants</strong>: I take care of them. Just leave them as they are."],
    ["water", "Drinking water", "Drink <strong>only from the water filter</strong>. It has 3 options, in this order: <strong>room temperature, cool and ice-cold</strong>."],
    ["ac", "Air conditioning", "<strong>Living room:</strong> split unit with a remote control, which is on the living room table. Use <strong><em>Cool</em> mode</strong> at 23 °C: it is the best setting for cooling the room down quickly. <strong>Bedroom:</strong> no remote. Switch it on and adjust it with the buttons on the unit itself. Please switch both off when you go out.<span class='kvwarn'><strong>AC won't turn on?</strong> Remember to switch on the EcoTouch! <button class='rule__more' type='button' data-pop='eco'>How to use the EcoTouch →</button></span>"],
    ["shower", "Shower", "The water heats up instantly. The shower runs on <strong>gas</strong>. The <strong>left tap is hot</strong>: open it and adjust with the cold one (on the right).", "taps"],
    ["dryer", "Hair dryer", "There is a <strong>hair dryer</strong> in the bathroom, <strong>under the sink</strong>."],
    ["pot", "Kitchen", "There is a <strong>cooktop</strong>, fridge, blender, microwave, air fryer, electric kettle (only for boiling water) and coffee maker. Sugar and salt are on the house.<br><br>The <strong>utensils</strong> are in the cupboard; the <strong>cutlery</strong> and <strong>tea towels</strong> are in the drawers. They belong to the flat: use them freely, but <strong>please do not take them with you</strong>."],
    ["flame", "Cooktop", "The cooktop is in the kitchen. To light a burner:", "cooktop"],
    ["fridge", "Mini fridge", "Besides the kitchen fridge, there is a <strong>mini fridge in the bedroom</strong>."],
    ["faucet", "Kitchen sink", "The tap has two handles: <strong>Q (hot)</strong> on the left and <strong>F (cold)</strong> on the right. Heads up: they work <strong>the other way round</strong>. To <strong>open, turn to the right</strong>; to close, turn to the left.", "sink"],
    ["laundry", "Utility area", "There is a <strong>laundry sink</strong>, a <strong>clothes line</strong> and <strong>brooms</strong> for you to use."],
    ["lift", "Lifts", "There are two. Use the service lift for luggage, groceries and when coming back from the beach."],
    ["trash", "Rubbish", "Tie the bag and take it to the stairwell. Sort it like this:", "trash"]
  ]}
]},

{id:"regras", il:"regras", t:"House rules", k:"We count on you to follow them 😊", b:[
  {t:"sum", x:"Please make sure <strong>all the rules below are followed</strong>. They protect the flat, the building and the neighbours. Thank you for your cooperation!"},
  {t:"h", x:"The main rules"},
  {t:"rules4"},
  {t:"h", x:"A few other things"},
  {t:"ul", x:[
    "<strong>No visitors.</strong> The building does not allow them. Only the guests on the booking may enter the flat.",
    "<strong>No pets</strong>, not even small ones.",
    "<strong>Rubbish:</strong> tie the bag and take it to the stairwell. In the hallway there are two recycling bins: <strong>blue</strong> (plastic and paper) and <strong>yellow</strong> (metal and glass). Everything else goes down the rubbish chute in the stairwell (a small door).",
    "<strong>The bath and face towels</strong> are on the bed. Please use them only in the flat: <strong>do not take them to the beach</strong>.",
    "<strong>Don't sit in wet beachwear</strong> on the sofa, the bed or the hammock.",
    "<strong>Always lock the door</strong>, even while you are inside, and don't leave windows open when you go out.",
    "<strong>Do not remove the window screens.</strong> There are many marmosets (small monkeys called “micos”) in the area and they can get into the flat. For safety, <strong>keep the screens in place at all times and do not open the windows to feed them</strong>, however charming they may seem.",
    "<strong>Not allowed:</strong> passing the flat on to someone else."
  ]}
]},

{id:"transporte", il:"transporte", t:"Getting around", k:"Metro, buses and apps", b:[
  {t:"sum", x:"The <strong>metro</strong> is almost always the best option. <strong>Cardeal Arcoverde</strong> station is a 7-minute walk from here. To pay, just <strong>tap your bank card</strong> at the gate."},
  {t:"transport"},
  {t:"h", x:"How to pay for your ride"},
  {t:"ul", x:[
    "<strong>Metro and VLT tram:</strong> tap your credit or debit card straight on the gate. No ticket needed. This is the easiest option if you are only passing through.",
    "<strong>Buses:</strong> board at the front door and pay the driver. They take cash (bring small notes) and, on many buses, contactless cards too.",
    "<strong>Staying many days?</strong> It is worth buying the local card, called <strong>Jaé</strong>, sold at newsstands and stations.",
    "<strong>Apps (Uber and 99):</strong> install the app and add your card before you travel. The price is shown before you request the car."
  ]},
  {t:"note", k:"info", x:"The prices above are from 2026 and may change. To check: <a class=\"xlink\" href=\"https://metrorio.com.br\" target=\"_blank\" rel=\"noopener\">metrorio.com.br</a> (metro) and <a class=\"xlink\" href=\"https://vltcarioca.com.br\" target=\"_blank\" rel=\"noopener\">vltcarioca.com.br</a> (downtown tram)."}
]},

{id:"passeios", il:"passeios", t:"Sights & how to get there", k:"Every route starts at our front door", b:[
  {t:"photo", src:"img/vista.jpg"},
  {t:"sum", x:"If you are short on time, do three things: <strong>Christ the Redeemer</strong>, <strong>Sugarloaf Mountain</strong> and <strong>sunset at Arpoador</strong>. All the routes below start here at the flat."},
  {t:"attractions"},
  {t:"note", k:"warn", x:"<strong>Christ the Redeemer and Sugarloaf usually sell out.</strong> Buy timed tickets online at <a class=\"xlink\" href=\"https://tremdocorcovado.rio\" target=\"_blank\" rel=\"noopener\">tremdocorcovado.rio</a> and <a class=\"xlink\" href=\"https://bondinho.com.br\" target=\"_blank\" rel=\"noopener\">bondinho.com.br</a>. Prices and opening hours change a lot — check before heading out."}
]},

{id:"comer", il:"comer", t:"Where to eat", k:"From corner bars to Michelin stars", b:[
  {t:"sum", x:"Start with <strong>Caju</strong>, right opposite the flat. Two minutes away on foot is <strong>Cervantes</strong>, and about 15 minutes away are <strong>Adega Pérola</strong> and <strong>Pavão Azul</strong>. All cheap and full of locals."},
  {t:"caju"},
  {t:"restaurants"},
  {t:"note", k:"info", x:"<strong>How the bill works in Brazil:</strong> a 10% to 12% charge called “serviço” (service) is normally added. It is optional, but nearly everyone pays it. Cards are accepted almost everywhere. Carry a little cash just for beach kiosks and vendors."}
]},

{id:"dicas", il:"dicas", t:"Tips to enjoy it more", k:"Beach, safety and neighbourhood life", b:[
  {t:"photo", src:"img/rio.jpg"},
  {t:"sum", x:"Three things to remember: take little to the beach, use your phone discreetly on the street, and wear sunscreen even on a cloudy day."},
  {t:"h", x:"At the beach"},
  {t:"ul", x:[
    "The nearest stretch of beach is Copacabana at <strong>Posto 2</strong>, at the Leme end of Copacabana. The “postos” are numbered lifeguard towers people use as meeting points.",
    "<strong>The postos have toilets</strong> and showers to rinse off the salt. They charge a small fee (around R$ 3.50 for the toilet), free for over-65s and people with disabilities. Bring some small change.",
    "A chair and umbrella cost around <strong>R$ 20 for the day</strong>. Just ask the vendor, who will also bring drinks and snacks to you.",
    "All along the seafront there are <strong>kiosks serving food</strong> facing the beach: you can have lunch, a snack or a beer without straying far from the sand. A few suggestions below.",
    "<strong>A red flag</strong> means the sea is dangerous. Respect the lifeguards and never swim where nobody else is.",
    "Take only what you need: a little cash, your phone and flip-flops. Passport, cards and watch are better left in the flat. <strong>Keep an eye on your things:</strong> theft is very common on the beach. Don't leave your phone or bag alone on your towel when you go in the sea and, if you are on your own, ask someone at the beach stall to keep an eye on them.",
    "Try at least once: <strong>coconut water</strong>, <strong>mate com limão</strong> (iced tea with lemon) and a <strong>Globo biscuit</strong>. Beach classics.",
    "Lots of <strong>food vendors</strong> walk along the sand selling things like grilled prawns on a skewer, sandwiches and savoury snacks. I don't recommend them: there is no way to know whether the food was properly prepared and kept clean, and it sits in the heat for hours. Stick to the kiosks or sealed products, like Globo biscuits.",
    "Always wear sunscreen, even under clouds. The Rio sun is stronger than it looks."
  ]},
  {t:"h", x:"Great kiosks on the promenade"},
  {t:"places", k:"kiosks"},
  {t:"note", k:"info", x:"The beach kiosks take cards and Pix, and many stay open late. Flip-flops and beachwear are fine."},
  {t:"h", x:"Staying safe, without the drama"},
  {t:"ul", x:[
    "Copacabana is busy and relaxed during the day. At night, stick to the well-lit streets (Av. Nossa Senhora de Copacabana and Rua Barata Ribeiro) and avoid empty streets.",
    "Don't walk down the street staring at your phone. Use it inside shops, cafés or in the car.",
    "To withdraw cash, use ATMs inside banks or shopping centres, during the day.",
    "On a crowded metro or beach, wear your backpack on your front."
  ]},
  {t:"h", x:"Everyday life here"},
  {t:"ul", x:[
    "<strong>Pix</strong> is the Brazilian way of paying instantly by phone. Many places take only Pix or cards, so don't be surprised.",
    "Exchange bureaux are on Av. Nossa Senhora de Copacabana. Never change money on the street or with strangers.",
    "Between November and March it rains hard out of nowhere. Keep a small umbrella in your bag."
  ]},
  {t:"h", x:"Shopping malls nearby"},
  {t:"places", k:"malls"},
  {t:"h", x:"Supermarkets near the flat"},
  {t:"places", k:"markets"}
]},

{id:"saude", il:"saude", t:"Health & emergencies", k:"Hospitals, public care and pharmacies in Copacabana", b:[
  {t:"sum", x:"<strong>Serious emergency:</strong> call <strong>192</strong> and ask for an ambulance. It is free. <strong>Public care (SUS, free):</strong> the nearest is the <strong>UPA 24h at Rua Siqueira Campos, 129</strong>. <strong>Private:</strong> Copa Star, Copa D'Or or São Lucas, all in Copacabana."},
  {t:"note", k:"warn", x:"<strong>192</strong> (ambulance) and <strong>193</strong> (fire brigade) are free, answer 24 hours and work from any phone — even a foreign mobile with no credit."},
  {t:"h", x:"Public care (SUS)"},
  {t:"sus"},
  {t:"h", x:"Private hospitals in Copacabana"},
  {t:"hospitals"},
  {t:"h", x:"Pharmacies near the flat"},
  {t:"pharmacies"},
  {t:"note", k:"info", x:"<strong>How pharmacies work in Brazil:</strong> many medicines are sold without a prescription, and almost every pharmacy has a pharmacist who can advise you, check your blood pressure and give injections. Antibiotics need a doctor's prescription."},
  {t:"ul", x:[
    "If you have <strong>travel insurance</strong>, call their helpline before going to hospital. They tell you where to go and save you paying out of pocket.",
    "In Brazil's public health system (the <strong>SUS</strong>), emergency care is free, <strong>foreigners included</strong>. The nearest unit is <strong>UPA 24h Copacabana</strong>, at Rua Siqueira Campos, 129.",
    "Private hospitals charge for consultations. Bring your insurance card and ID.",
    "Before heading out, save your insurer's number and your consulate's number on your phone."
  ]}
]},

{id:"mapa", il:"mapa", t:"Map of Rio", k:"Tap the pins to see each place", b:[
  {t:"sum", x:"You are in <strong>Copacabana</strong>, right by Leme. The beach is an 8-minute walk and Cardeal Arcoverde metro is 7 minutes. Use the buttons to see what's <strong>nearby</strong> or the <strong>whole city</strong>."},
  {t:"map"}
]},

{id:"numeros", il:"numeros", t:"Useful numbers", k:"Save them before you go out", b:[
  {t:"sum", x:"<strong>190</strong> police, <strong>192</strong> ambulance and <strong>193</strong> fire brigade. Tap a number to call it straight away."},
  {t:"phones"},
  {t:"h", x:"House contacts"},
  {t:"kv", x:[
    ["chat", "Your host", CFG.host+" — via <a href='"+CFG.airbnbMsg+"' target='_blank' rel='noopener'>Airbnb messages</a> (the fastest way)"],
    ["phone", "Building front desk", CFG.portaria+" — 24 hours"],
    ["pin",   "Address to give your driver", CFG.address],
    ["help", "Airbnb", "In the app: Profile › Help › Contact us"],
  ]},
  {t:"h", x:"Consulates in Rio"},
  {t:"p", x:"Tap your country's name to open its consulate in Google Maps, with address and phone. Most are downtown, in Botafogo or in Flamengo. Call before you go: many only see people by appointment."},
  {t:"consulates"}
]},

{id:"feedback", il:"feedback", t:"Your review", k:"A quick but important request", b:[
  {t:"sum", x:"At the end of your trip, 2 minutes of review help enormously!"},
  {t:"p", x:"Airbnb works as an exchange. Reviews really matter: they let the next guest know what your stay was like and help me keep getting better. I want you to feel at home!"},
  {t:"h", x:"The request has two parts"},
  {t:"ol", x:[
    "<strong>During your stay:</strong> if something is missing or not working, message me. A blown bulb, the shower, a question.",
    "<strong>At the end:</strong> say what you enjoyed, what you used and what was missing. Specific comments like “the bed is great”, “the Wi-Fi handled my calls” or “the guide really helped” are worth far more than “all fine”.",
    "<strong>If you can, add a photo.</strong> Photos from real guests are what help most when someone is choosing where to stay."
  ]},
  {t:"note", k:"ok", x:"You have <strong>14 days after check-out</strong> to leave a review. I review you too, and I promise to be fair and kind. Thank you very much for choosing my home. Come back soon! 🇧🇷"}
]}

],

attr:{
 copa:{s:"Copacabana · 8 minutes on foot", how:"Leave the building and take any street heading down to Avenida Atlântica: eight minutes later you are on the sand. The <strong>Copacabana Fort</strong> is at the far end of the beach. Walk there along the promenade in 25 minutes, or take bus 474. On <strong>Tuesdays entry to the fort is free</strong>; on other days it costs R$ 10 (R$ 5 concession). Open Tuesday to Sunday, from 10 am.", tip:"Inside the fort is <strong>Confeitaria Colombo</strong>, which is really good. Breakfast there is well worth it. The view takes in the whole beach and it is one of the loveliest things to do in Rio."},
 cristo:{s:"Cosme Velho · Corcovado train", how:"Take the metro at <strong>Cardeal Arcoverde</strong> (7 minutes on foot), Line 1 towards Uruguaiana, and get off at <strong>Largo do Machado</strong> (about 12 minutes). From there, take bus 583 or 584, or a 10-minute Uber, to the train station at Rua Cosme Velho, 513. The little train climbs the mountain in 20 minutes.<br><br><strong>Easier option: the official van.</strong> It leaves from <strong>Praça do Lido</strong>, on Av. Atlântica between Rua Belfort Roxo and Rua Ronald de Carvalho, about 10 minutes on foot from here. It runs daily from 7 am to 4 pm. Tickets cost R$ 132 (R$ 105 concession) and include the round trip and entry to Christ the Redeemer. Buy them at <a class=\"xlink\" href=\"https://paineirascorcovado.com.br\" target=\"_blank\" rel=\"noopener\">paineirascorcovado.com.br</a>.", tip:"Buy a timed ticket online. Go for the first slot of the morning or late afternoon: shorter queues and fewer clouds."},
 pao:{s:"Urca · cable car", how:"The easiest way is a direct Uber, about 15 to 20 minutes. By bus, take the 107, 511 or 512 on Av. Nossa Senhora de Copacabana and get off at Av. Pasteur, 520. By metro, get off at Botafogo and do the rest by app.<br><br><strong>Budget option: hike up.</strong> Next to the cable car station at Praia Vermelha starts the Pista Cláudio Coutinho path, and from it the Morro da Urca trail: 40 minutes to 1 hour uphill. Reaching Morro da Urca (the cable car's first stop) on foot is <strong>free</strong>. The gate at the end of the trail is open from 9 am to 5 pm. At the top you can ride the cable car down (R$ 65, R$ 32 concession), carry on to Sugarloaf and ride down from there (R$ 140, R$ 70 concession), or walk back down the trail for free. Tickets for hikers are sold only at the kiosk on Morro da Urca.", tip:"Go up in late afternoon. You catch the sunset from the top and the city lighting up on the way down. Take a light jacket — it gets windy."},
 ipanema:{s:"Ipanema · on foot or by metro", how:"Walking the promenade to Arpoador takes 20 to 25 beautiful minutes, with the sea beside you the whole way. By metro, take Line 1 or 4 and get off at <strong>Cantagalo</strong> or <strong>General Osório</strong>, 2 or 3 stops from here.", tip:"Every evening people climb Arpoador rock and applaud as the sun goes down. Get there about 40 minutes early for a good spot."},
 lagoa:{s:"Lagoa · 15 minutes", how:"Metro to General Osório and then a 15-minute walk up Rua Farme de Amoedo. By Uber it is 10 to 15 minutes door to door.", tip:"Rent a pedal boat, do the 7.5 km loop on the cycle path, or stop at a kiosk in the evening for live music beside the floodlit lagoon."},
 jb:{s:"Jardim Botânico · south side", how:"By Uber, 15 to 20 minutes. By public transport, take metro Line 4 to <strong>Jardim de Alah</strong> and walk another 15 minutes or hop on a bus. Parque Lage is 10 minutes from the Botanical Garden, at Rua Jardim Botânico, 414.", tip:"Parque Lage is free and has a café in the courtyard of an old mansion, with Christ the Redeemer framed behind it. You can do both in one morning."},
 centro:{s:"Downtown · metro Cinelândia or Carioca", how:"Metro Line 1 from Cardeal Arcoverde to <strong>Cinelândia</strong> or <strong>Carioca</strong>, direct, in about 20 minutes. From the station everything is walkable: Theatro Municipal, the National Library, Confeitaria Colombo and the Royal Portuguese Reading Room.", tip:"Go on a weekday. Downtown is lively Monday to Friday and empties out at the weekend."},
 maua:{s:"Praça Mauá · metro and VLT tram", how:"Metro to Carioca or Cinelândia, then the <strong>VLT</strong> (a modern tram) to Parada dos Museus / Praça Mauá. 40 to 50 minutes in total.", tip:"The Museum of Tomorrow is free on Tuesdays. Next door are the MAR museum and Kobra's giant “Etnias” mural."},
 lapa:{s:"Lapa · metro Cinelândia", how:"Metro Line 1 to <strong>Cinelândia</strong>, then a 10-minute walk to the Lapa Arches. The Selarón Steps are just behind, on Rua Joaquim Silva.", tip:"Visit the steps in the morning: good light for photos and no crowds. At night Lapa becomes something else entirely, with samba and bars, mainly Friday and Saturday."},
 santa:{s:"Santa Teresa · yellow tram", how:"Metro to <strong>Carioca</strong>, then walk to the tram station on Rua Lélio Gama. The yellow tram crosses the arches and climbs to Largo dos Guimarães in 20 minutes.", tip:"Have lunch at Bar do Mineiro and walk back down Rua Almirante Alexandrino, stopping at the artists' studios and viewpoints along the way."},
 maracana:{s:"Maracanã · metro", how:"At Cardeal Arcoverde, take <strong>Line 1 towards Uruguaiana</strong>. At <strong>Botafogo</strong> or <strong>Central</strong>, change to a <strong>Line 2 train towards Pavuna</strong> and get off at Maracanã station. About 40 minutes, and the station exit is practically inside the stadium.", tip:"Even without a match, the guided stadium tour is worth it. On match days take the metro — parking there is impossible."},
 mirantes:{s:"Alto da Boa Vista & Botafogo", how:"You can only get there by car or app. <strong>Mirante Dona Marta</strong> is 20 minutes away, <strong>Vista Chinesa</strong> 30 to 40. It is worth doing both in one trip, asking the driver to wait.", tip:"Mirante Dona Marta has the best view of Sugarloaf and is completely free. Go late in the afternoon."},
 barra:{s:"West side · wild beaches", how:"Metro Line 4 to <strong>Jardim Oceânico</strong> (45 minutes), then the BRT bus to Barra and Recreio. Prainha and Grumari are car or Uber only, 60 to 90 minutes.", tip:"Prainha and Grumari are the most beautiful beaches in the city: strong surf, forest all around and not a single tower block."},
 niteroi:{s:"Niterói · ferry crossing", how:"Metro to <strong>Carioca</strong>, a 10-minute walk to Praça XV and a ferry to Niterói: a 15-minute crossing. From the terminal, a bus or Uber takes you to the MAC museum, designed by Oscar Niemeyer.", tip:"The late-afternoon ferry, with Sugarloaf on one side and Christ on the other, is the cheapest and most beautiful ride in Rio."},
 leme:{s:"Leme · short hike up to the fort", how:"Walk to the far end of Leme beach (about 15 minutes), at <strong>Praça Almirante Júlio de Noronha</strong>, next to lifeguard Post 1. The entrance is the Army gate: pay at the guardhouse and walk up a paved, shady 800-metre slope, about 20 to 30 minutes uphill. Open <strong>Tuesday to Sunday, 9:30 am to 4 pm</strong> (closed Mondays). Tickets cost R$ 10 (R$ 5 concession) and on <strong>Tuesdays entry is free</strong>. Cash or Pix only, no cards.", tip:"From the top you see the whole of Copacabana beach on one side and Sugarloaf on the other. Go early while it is cooler, and bring water and comfortable trainers."}
},

trans:{
 metro:{h:"Metro", tag:"≈ R$ 7.90", d:"The fastest, cleanest and safest option. The nearest stations are <strong>Cardeal Arcoverde</strong> (7 min walk) and Siqueira Campos (15 min). Runs from 5 am to midnight; on Sundays, 7 am to 11 pm."},
 bus:{h:"Buses", tag:"≈ R$ 4.70", d:"They go where the metro doesn't. Board at the front door and hold your arm out at the stop so the bus stops — if you don't signal, it drives straight past."},
 app:{h:"Uber & 99", tag:"", d:"Both work very well in Rio and are usually cheap. At night, prefer an app over the bus. Check the car's number plate before getting in."},
 walk:{h:"On foot", tag:"free", d:"Copacabana to Arpoador is a 25-minute walk along the promenade, right by the sea. It is one of the best things to do in the city and costs nothing."},
 vlt:{h:"VLT (downtown tram)", tag:"≈ R$ 4.30", d:"A modern tram linking Praça Mauá, Cinelândia, Santos Dumont airport and Central station. The best way to move around the historic centre."},
 brt:{h:"BRT", tag:"≈ R$ 4.70", d:"An express bus with its own dedicated lane, running to the southwest side (Barra and Recreio). Catch it at Jardim Oceânico, the last stop on metro Line 4."},
 taxi:{h:"Taxis", tag:"metered", d:"The yellow ones are the official taxis. Check the meter is running. “Bandeira 1” is the weekday rate; “bandeira 2” is dearer, at night and on Sundays."},
 bike:{h:"Public bikes", tag:"from R$ 7.90", d:"The orange Itaú bikes (Bike Itaú), with docking stations all over the city: Copacabana, Ipanema, Leblon, Jardim Botânico and more. Rental works entirely through the Tembici app: a single ride costs R$ 7.90 (up to 15 minutes) and a 48-hour pass R$ 32.90. The seafront cycle path is gorgeous."},
 scooter:{h:"Electric scooters", tag:"R$ 2 + R$ 0.80/min", d:"Whoosh scooters are dotted around Copacabana, Ipanema and Leblon. Rental works entirely through the Whoosh app: R$ 2 to unlock and about R$ 0.80 per minute. Only leave the scooter at the parking spots shown in the app. Honestly, I don't really recommend it: it adds up fast (15 minutes already comes to about R$ 14). The bikes are usually better value."}
},

mainrules:{
 smoke:{h:"No smoking in the Airbnb", d:"That includes e-cigarettes."},
 party:{h:"No parties", d:"This is a residential building and the management is strict."},
 quiet:{h:"Quiet from 10 pm to 7 am", d:"Outside those hours, music and conversation at normal volume. The walls are not thick."},
 people:{h:"Maximum "+CFG.guests+" people", d:"The number of people on the booking is the number who can sleep here. <strong>The building does not allow visitors.</strong>"},
 toilet:{h:"Only toilet paper in the toilet", d:"No nappies, pads, wet wipes, cotton buds or other objects: they block the pipes. Put them in the bin."},
 eco:{h:"Use the EcoTouch", d:"When you come in, close the door and tap the wall panel to turn on the air conditioners.", more:"How to use the EcoTouch"}
},

rest:{
 perola:"A historic counter with dozens of pickles and stuffed olives. You point at what you want and eat standing up with a chilled vinho verde. Always packed.",
 pavao:"An award-winning corner bar with little tables on the pavement. The cassava-and-prawn croquettes are the best in Copacabana.",
 cervantes:"The roast pork and pineapple sandwich has become a Rio symbol. Open into the early hours.",
 nema:"A really good sourdough bakery very close to the flat, at the start of Leme. Great for breakfast: bread, pastries and cakes.",
 sorvetino:"Craft soft-serve ice cream shop just round the corner from the flat, and really good. Flavours change every week, with unusual ones like buttered toast and Sucrilhos (frosted flakes) alongside the classics. The buttery cone is made in-house.",
 galeto:"Charcoal-grilled chicken, broccoli rice and cold draught beer since 1962. Simple, cheap and always good.",
 bakers:"Bakery and patisserie for breakfast: breads, croissants and cakes made on site.",
 cafeina:"Properly made coffee, sandwiches and cakes. A good spot to work in the morning with Wi-Fi.",
 colomboforte:"Rio's oldest patisserie, inside Copacabana Fort, with the whole beach in front of you.",
 davi:"Seafood feijoada with a view from the hillside in Leme. Go for lunch and book first.",
 joaquina:"Traditional Brazilian cooking with a modern touch, facing Leme beach. Order the Petisco do Coronel (dried beef with fried cassava) and try the cocktails made with Brazilian ingredients such as jambu cachaça and cupuaçu.",
 palace:"All-you-can-eat grill: waiters go table to table offering cuts until you say stop. Running since 1951.",
 mee:"Michelin-starred Asian cooking inside the Copacabana Palace hotel. For a special night.",
 garota:"The bar where Tom Jobim and Vinícius wrote “The Girl from Ipanema”. Touristy, yes, but the beer is good.",
 zaza:"Home cooking with Asian touches in a colourful little house. Ask for a table upstairs.",
 feijoada:"The full feijoada every day of the week, with all the trimmings and a caipirinha.",
 bibi:"Fruit juices, açaí and sandwiches. A compulsory stop on the way back from the beach.",
 talho:"The best big breakfast in Leblon: breads, cheeses and sandwiches.",
 baked:"Bakery and wood-oven café in Ipanema, open 6:30 am to 10 pm. Good for breakfast or a snack: sourdough bread, pastries and savoury bakes made on site.",
 vero:"Proper Italian gelato, made on the spot, with Brazilian fruit.",
 ct:"Chef Claude Troisgros's restaurant, specialising in meat and French classics.",
 pobreta:"The <strong>mureta</strong> is the low wall running along the Urca waterfront, right on Guanabara Bay. The classic Rio thing to do is buy a beer from a bar or street vendor and sit on it to watch the sunset. The <strong>Pobreta</strong> (a pun mixing “pobre”, poor, with “mureta”) got its nickname from the prices: Bar Urca, further along, is expensive, while here everything is much cheaper. It is the stretch at the start of the waterfront, the first thing you reach when you get to Urca. There are a few bars, like Urca Grill, and vendors, but people really just sit on the little wall. Beer costs less, there is more room, and the sunset, looking out at Christ the Redeemer and the marina, is one of the most beautiful in the city.",
 barurca:"Further along the waterfront, in front of Bar Urca, is the <strong>Mureta da Urca</strong> proper: the most famous and traditional stretch. But Bar Urca is expensive, which is why many people prefer the Pobreta. You order at the counter (the empadas and salt cod fritters are classics), grab a beer and sit on the wall by the water. Pure Rio.",
 chanchada:"Botafogo's bar of the moment. Everyone loves it, and even Dua Lipa and Rosalía have been. Order the batidas (Brazilian fruit cocktails) and petiscos to share. No reservations, so get there early.",
 botica:"A Botafogo classic. Very well-poured draught beer, cachaça cocktails and a menu that changes every week, in a charming room full of records, books and old furniture.",
 macuna:"Lively three-storey bar with a dance floor, a rooftop terrace and tables on the pavement. Live music, with a jazz night on Thursdays.",
 tremetreme:"Another classic, on Rua Arnaldo Quintela: one of the cheapest and busiest bars in Botafogo, with cold beer and people spilling onto the pavement until the small hours.",
 slow:"An artisan bakery famous for its sourdough bread, carefully made coffee and one of Rio's best weekend brunches.",
 lasai:"Fine dining with its own kitchen garden and Brazilian ingredients. One of the best tables in the country.",
 braseiro:"A Baixo Gávea classic, always packed. Order the sliced chargrilled picanha or the galeto (spit-roast chicken). Generous portions and well-poured draught beer.",
 brewteco:"On the same square as Braseiro, with more than 30 craft beer taps, bar snacks and pizza. Good for starting or ending a night in Baixo Gávea.",
 guimas:"A Rio bistro going for over 40 years, in the heart of Gávea. Famous for its crispy little pastéis and its salt cod dishes.",
 okioki:"Contemporary Japanese in Gávea, with creative sushi and hot dishes. One of the neighbourhood favourites for Japanese food.",
 braz:"One of Rio's most famous pizzerias: thin crust and a wood-fired oven. A great plan after a visit to the Botanical Garden.",
 camolese:"Mediterranean cooking with a Rio twist, overlooking the Jockey Club with a view of Christ the Redeemer. Good for lunch after the Botanical Garden.",
 katzsu:"Asian small-plates bar from the same chef as Chanchada (Bruno Katz), with dishes inspired by Japan, Korea and Thailand. Very popular, so it is worth getting there early.",
 absurda:"The patisserie of the moment, facing the Botanical Garden in a 120-year-old house. Refined takes on Brazilian classics: passion fruit quindim, condensed milk pudding and the famous carrot cake. A great stop after visiting the garden.",
 oteque:"Two Michelin stars. A seafood tasting menu in a discreet Botafogo townhouse.",
 colombo:"A patisserie from 1894, with Belgian mirrors and stained glass. Go for afternoon tea in the upstairs salon.",
 barluiz:"German food and the best dark draught beer downtown, since 1887.",
 capela:"Kid goat roasted in a wood-fired oven, in Lapa, until the early hours.",
 mineiro:"Feijoada, feijoada croquettes and a whole wall of cachaça, in the heart of Santa Teresa.",
 apraz:"Brazilian food in a garden overlooking Guanabara Bay. Book and go late afternoon.",
 scenarium:"A three-storey townhouse in Lapa, with live samba and antiques everywhere you look.",
 teva:"Modern vegetarian food, creative and tasty enough to please even meat-eaters.",
 veganvegan:"A pioneer of vegan food in Rio: home-style organic dishes and a set menu that changes every day."
},

hosp:{
 copastar:"High-end private hospital from the Rede D'Or group, with a 24-hour emergency department.",
 copador:"Large private hospital with a 24-hour A&E and ICU. About 5 minutes by taxi from here.",
 saolucas:"Long-established private hospital in Copacabana, with a 24-hour emergency department."
},

farm:{
 leme:"The closest pharmacy, about 2 minutes on foot, and <strong>open 24 hours</strong>. Your first stop for anything urgent, at any time of day or night.",
 pacheco:"A chain with several branches on these two streets. Some stay open 24 hours.",
 drogasil:"Branches on the neighbourhood's main avenue, with a pharmacist on duty who can also give injections.",
 venancio:"A pharmacy right by Cardeal Arcoverde metro station, about 7 minutes on foot from the flat."
},

tel:{
 samu:{l:"Ambulance (SAMU)", d:"Medical emergency · free"},
 pm:{l:"Military Police", d:"Police emergency · free"},
 bomb:{l:"Fire brigade", d:"Fire, rescue and drowning"},
 civil:{l:"Civil Police", d:"To file a police report"},
 dc:{l:"Civil Defence", d:"Flooding and landslides"},
 pref:{l:"City hotline (1746)", d:"Rio city council services"},
 mulher:{l:"Women's helpline", d:"Violence against women"},
 dh:{l:"Hotline 100", d:"Human rights"},
 deat:{l:"Tourist Police", d:"Av. Afrânio de Melo Franco 159, Leblon · 24 h"},
 denun:{l:"Anonymous crime line", d:"Anonymous tip-offs"}
},

mapLegend:["You are here","Restaurants & bars","Supermarkets","Pharmacies","Hospitals & UPA","Metro","Sights"]
};
