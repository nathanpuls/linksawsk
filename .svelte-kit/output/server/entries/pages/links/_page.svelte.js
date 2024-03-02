import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/database";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linksData = [];
  return `  <main><h4 data-svelte-h="svelte-1xs78sw">Links from Firebase for User Natepuls</h4> ${linksData.length > 0 ? `<ul>${each(linksData, ([linkKey, linkData]) => {
    return `<li><a${add_attribute("href", linkData.url, 0)}>${escape(linkData.name)}</a> </li>`;
  })}</ul>` : `<p data-svelte-h="svelte-1t2d3xn">No links available</p>`}</main>`;
});
export {
  Page as default
};
