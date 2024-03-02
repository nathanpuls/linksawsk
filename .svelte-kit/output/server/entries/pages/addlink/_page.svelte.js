import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/database";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newName = "";
  let newUrl = "";
  return `  <main> <label for="name" data-svelte-h="svelte-bs9sy6">Name</label> <input type="text" id="name" autofocus${add_attribute("value", newName, 0)}> <label for="URL" data-svelte-h="svelte-8q15uc">URL</label> <input id="url"${add_attribute("value", newUrl, 0)}> <button data-svelte-h="svelte-12ksf09">Add</button> </main>`;
});
export {
  Page as default
};
