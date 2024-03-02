import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const css = {
  code: "textarea.svelte-cej6aa{height:300px !important;font-family:Poppins}textarea.svelte-cej6aa:focus{border-color:#318ce7}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <label for="name" data-svelte-h="svelte-bs9sy6">Name</label> <input type="text" id="name" autofocus> <label for="content" data-svelte-h="svelte-xqeh5o">Content</label> <textarea id="content" class="svelte-cej6aa"></textarea> <button onclick="addSnip()" data-svelte-h="svelte-1yfgeuh">Add</button>`;
});
export {
  Page as default
};
