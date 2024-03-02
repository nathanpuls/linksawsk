<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { base } from "$app/paths";

export let pageName = '';
export let handleReload;

onMount(() => {
  // Subscribe to changes in the $page store
  const unsubscribe = page.subscribe((value) => {
    pageName = value.route.id || '';
    pageName = pageName.slice(1)
    // pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    
  });

  // Unsubscribe when the component is destroyed
  return () => {
    unsubscribe();
  };
});

handleReload = () => {
	
    window.location.href = `${base}/profile`;
  };


</script>
<nav>
	<ul>
		<nav>
			<a href="{base}/" class="brand">Linksaw</a>
		  
			{#if pageName == ''}
			  <!-- Render nothing here -->
			{:else if pageName === 'menu'}
			  <!-- <a href="{base}/profile">Profile</a> -->
			  <a on:click={handleReload}>Profile</a>

			{:else}
			  <a href="{base}/menu">Menu</a>
			{/if}
		  </nav>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
		z-index: 1000;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	a {
		margin: 20px;
	}

  


</style>
