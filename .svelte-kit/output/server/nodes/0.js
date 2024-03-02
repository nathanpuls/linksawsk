import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ayt8NIGU.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.xMdal0Dk.js","_app/immutable/chunks/stores.J7CYPquB.js","_app/immutable/chunks/entry.ASthdH7_.js","_app/immutable/chunks/paths.ssRXTp1V.js"];
export const stylesheets = ["_app/immutable/assets/0.4TRDqc6r.css"];
export const fonts = [];
