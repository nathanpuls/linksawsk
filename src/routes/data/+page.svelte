<!-- ExampleComponent.svelte -->
<script>
    import { onMount } from 'svelte';
    import app from '../../firebase'; // Adjust the path accordingly
    import { getDatabase, ref, onValue } from 'firebase/database';
  
    let linksData = [];
  
    onMount(() => {
      const db = getDatabase(app);
      const linksRef = ref(db, 'links');
  
      onValue(linksRef, (snapshot) => {
        const data = snapshot.val();
        linksData = data ? Object.entries(data) : [];
      });
    });
  </script>
  
  <main>
    <h1>Value of "links" from Firebase</h1>
    {#if linksData.length > 0}
      <ul>
        {#each linksData as [key, value]}
          <li>{key}: {value}</li>
        {/each}
      </ul>
    {:else}
      <p>No data available</p>
    {/if}
  </main>
  