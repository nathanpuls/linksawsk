<script>
    console.log('Menu component is rendering!');

  import { base } from "$app/paths";
  import { onMount } from 'svelte';

onMount(() => {
  // Retrieve user data from sessionStorage
  const storedUserData = sessionStorage.getItem('currentUser');
  const user = storedUserData ? JSON.parse(storedUserData) : null;

  // Log the username
  const username = user ? user.displayName || 'No Display Name' : 'Not Logged In';
  console.log('Current user username:', username);
});


</script>

<!-- Your menu component content... -->



<a href="{base}/links" class="menu">Links</a>
<a href="{base}/snips" class="menu">Snips</a>
<a href="{base}/addlink" class="menu">Add link</a>
<!-- <a href="{base}/snps" class="menu"></a> -->