import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${escape(base, true) + "/links"}" class="menu" data-svelte-h="svelte-16qhs0m">Links</a> <a href="${escape(base, true) + "/snips"}" class="menu" data-svelte-h="svelte-60pchi">Snips</a> <a href="${escape(base, true) + "/addlink"}" class="menu" data-svelte-h="svelte-pwuno4">Add link</a> `;
});
export {
  Page as default
};
