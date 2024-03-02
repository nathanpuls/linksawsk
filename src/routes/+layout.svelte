<script>
  import Nav from "../components/Nav.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  export let pageName = "";
  export let subPageName;
  export let siteName = "Linksaw";

  export let singlePageName;

  function updateTitle() {
    if (!pageName.includes("/") && pageName.length < 1) {
      document.title = "Linksaw";
    } else if (pageName.split('/').length <= 1) {
      document.title = `${siteName} | ${pageName}`;
    } else {
      document.title = `${siteName} | ${subPageName}`;
    }
  }

  onMount(() => {
    // Subscribe to changes in the $page store
    const unsubscribe = page.subscribe((value) => {
      pageName = value.route.id || "";

      pageName = pageName.slice(1);
      singlePageName = pageName.charAt(0).toUpperCase();
      pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

      // Split the string by '/'
      const [firstPart, secondPart] = pageName.split("/");

      // Remove the last letter from the first part
      const modifiedFirstPart = firstPart.slice(0, -1);

      // Create the final result by combining the modified first part and the second part
      let result = `${secondPart} ${modifiedFirstPart}`.toLowerCase();

      // Capitalize each word in the result string
      const capitalizedString = result.replace(/\b\w/g, (match) =>
        match.toUpperCase()
      );

      // Log the result
      console.log(capitalizedString);
      subPageName = capitalizedString;

      updateTitle();
    });

    // Unsubscribe when the component is destroyed
    return () => {
      unsubscribe();
    };
  });
  
</script>

<Nav></Nav>

<!-- <div class="center"><h1>{pageName}</h1></div> -->

{#if pageName.includes("/")}
  <div class="center"><h1>{subPageName}</h1></div>
{:else}
  <div class="center"><h1>{pageName}</h1></div>
{/if}

<main class="column container">
  <slot />
</main>
