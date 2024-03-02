import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "Nathan" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `  <h1 data-svelte-h="svelte-etk01z">About Us</h1> <p>Welcome to our about page, ${escape(name)}!</p> <button data-svelte-h="svelte-10mr0o4">Learn</button>`;
});
export {
  Page as default
};
