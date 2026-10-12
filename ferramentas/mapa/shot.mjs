// screenshot via DevTools: espera document.title === "ready" (mapa carregado)
import {spawn} from "node:child_process"; import fs from "node:fs";
const [,, H, url, out] = process.argv;
const ch = spawn(H, ["--no-sandbox","--hide-scrollbars","--use-angle=swiftshader","--enable-unsafe-swiftshader",
  "--remote-debugging-port=9333","--window-size=1400,1066","--force-device-scale-factor=1.42857","about:blank"], {stdio:"ignore"});
const sleep = ms => new Promise(r => setTimeout(r, ms));
let tabs; for(let i=0;i<40;i++){ try{ tabs = await (await fetch("http://127.0.0.1:9333/json")).json(); break; }catch(e){ await sleep(250); } }
const ws = new WebSocket(tabs.find(t=>t.type==="page").webSocketDebuggerUrl); await new Promise(r=>ws.onopen=r);
let id=0; const pend={}; ws.onmessage = e => { const m=JSON.parse(e.data); if(pend[m.id]){ pend[m.id](m.result); delete pend[m.id]; } };
const send = (method, params={}) => new Promise(r => { pend[++id]=r; ws.send(JSON.stringify({id, method, params})); });
await send("Page.enable"); await send("Page.navigate", {url});
let ok=false; for(let i=0;i<120;i++){ await sleep(500);
  const r = await send("Runtime.evaluate", {expression:"document.title"}); if(r.result.value==="ready"){ ok=true; break; } }
await sleep(800);
const shot = await send("Page.captureScreenshot", {format:"png"});
fs.writeFileSync(out, Buffer.from(shot.data, "base64")); console.log(out, ok ? "ok" : "TIMEOUT");
ch.kill(); process.exit(0);
