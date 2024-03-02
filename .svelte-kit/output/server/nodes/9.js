

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/snips/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.i7xQAJuC.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.xMdal0Dk.js"];
export const stylesheets = [];
export const fonts = [];
