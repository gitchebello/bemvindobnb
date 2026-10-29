# Guia de Boas-vindas — Copacabana

Site-guia para os hóspedes do apartamento no Airbnb em Copacabana, Rio de Janeiro, em português, inglês e espanhol. Tem mapa do bairro, restaurantes e bares por perto, farmácia 24h, transporte, como usar a TV e os eletrodomésticos, regras da casa e um minijogo.

**No ar:** https://gitchebello.github.io/bemvindobnb/

## Rodar

Não há build. Abra o `index.html` no navegador ou sirva a pasta:

```bash
python3 -m http.server 8000    # http://localhost:8000
```

## Onde mexer

- `data.js`: o conteúdo do guia (lugares, dicas, regras).
- `lang-pt.js`, `lang-en.js`, `lang-es.js`: os textos de cada idioma.
- `art.js`: os ícones desenhados em SVG.
- `fotos/`: as fotos da casa (veja `fotos/LEIA-ME.txt`).
- `img/`: fotos do bairro, com os créditos em `img/CREDITOS.txt`.
- `ferramentas/mapa/`: gera o mapa a partir dos pinos em `pins.json`.
