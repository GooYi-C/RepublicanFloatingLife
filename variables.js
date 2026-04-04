// Auto-generated loader — do not edit
const _cdn='https://testingcf.jsdelivr.net/gh/GooYi-C/RepublicanFloatingLife@main';
try{const r=await fetch(_cdn+'/version.txt',{cache:'no-store'});
const v=r.ok?(await r.text()).trim():'';
await import(_cdn+'/variables_impl.js'+(v?'?_v='+v:''));
}catch(e){console.warn('[loader] version check failed, loading default');
await import(_cdn+'/variables_impl.js');}
