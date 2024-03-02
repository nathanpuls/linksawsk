import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { b as base } from "../../chunks/paths.js";
const css = {
  code: "nav.svelte-h26n39{position:fixed;top:0;left:0;width:100%;display:flex;justify-content:space-between;align-items:center;height:80px;border-bottom:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 2px 5px rgba(0, 0, 0, 0.1)}a.svelte-h26n39{margin:20px}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageName = "" } = $$props;
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  $$result.css.add(css);
  return `<nav class="svelte-h26n39"><ul><nav class="svelte-h26n39"><a href="${escape(base, true) + "/"}" class="brand svelte-h26n39" data-svelte-h="svelte-gm1ytl">Linksaw</a> ${pageName == "" ? `` : `${pageName === "menu" ? `<a href="${escape(base, true) + "/profile"}" class="svelte-h26n39" data-svelte-h="svelte-1sxohj0">Profile</a>` : `<a href="${escape(base, true) + "/menu"}" class="svelte-h26n39" data-svelte-h="svelte-1ru6liq">Menu</a>`}`}</nav></ul> </nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageName = "" } = $$props;
  let { subPageName } = $$props;
  let { siteName = "Linksaw" } = $$props;
  let { singlePageName } = $$props;
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  if ($$props.subPageName === void 0 && $$bindings.subPageName && subPageName !== void 0)
    $$bindings.subPageName(subPageName);
  if ($$props.siteName === void 0 && $$bindings.siteName && siteName !== void 0)
    $$bindings.siteName(siteName);
  if ($$props.singlePageName === void 0 && $$bindings.singlePageName && singlePageName !== void 0)
    $$bindings.singlePageName(singlePageName);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}  ${pageName.includes("/") ? `<div class="center"><h1>${escape(subPageName)}</h1></div>` : `<div class="center"><h1>${escape(pageName)}</h1></div>`} <main class="column container">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
