export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-gh-pages/_app",
	assets: new Set([".nojekyll","global.css"]),
	mimeTypes: {".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.m76BOK99.js","app":"_app/immutable/entry/app.DlNQ6q0V.js","imports":["_app/immutable/entry/start.m76BOK99.js","_app/immutable/chunks/entry.ASthdH7_.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/paths.ssRXTp1V.js","_app/immutable/entry/app.DlNQ6q0V.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.xMdal0Dk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
