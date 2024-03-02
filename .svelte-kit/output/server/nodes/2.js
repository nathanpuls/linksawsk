

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Fz8Tj3oe.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.xMdal0Dk.js","_app/immutable/chunks/paths.ssRXTp1V.js"];
export const stylesheets = ["_app/immutable/assets/2.2oDQDFYZ.css"];
export const fonts = [];
