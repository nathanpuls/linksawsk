import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/database";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linksData = [];
  return `  <main><h1 data-svelte-h="svelte-yr0odg">Value of &quot;links&quot; from Firebase</h1> ${linksData.length > 0 ? `<ul>${each(linksData, ([key, value]) => {
    return `<li>${escape(key)}: ${escape(value)}</li>`;
  })}</ul>` : `<p data-svelte-h="svelte-kyi4lu">No data available</p>`}</main>`;
});
export {
  Page as default
};
