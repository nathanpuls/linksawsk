import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const css = {
  code: "button.svelte-6vv0kq{width:50%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-9zwj0j">Shortcuts</h1> <p data-svelte-h="svelte-qj64m4">Custom shortlinks based on your Google username</p> <p data-svelte-h="svelte-1mq7tdd">Plus other shortcut tools to make life easier</p> <button class="svelte-6vv0kq" data-svelte-h="svelte-55knxw">Login with Google</button> <a href="${escape(base, true) + "/links"}" class="menu" data-svelte-h="svelte-16qhs0m">Links</a> <a href="${escape(base, true) + "/snips"}" class="menu" data-svelte-h="svelte-60pchi">Snips</a>`;
});
export {
  Page as default
};
