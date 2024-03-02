

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/snips/add/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.HVB8bfVS.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.xMdal0Dk.js"];
export const stylesheets = ["_app/immutable/assets/10.AbE_SMul.css"];
export const fonts = [];
