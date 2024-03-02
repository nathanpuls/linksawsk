<script>
  import { onMount } from "svelte";
  import app from "../../firebase";
  import { getDatabase, ref, onValue } from "firebase/database";
  import { addHttpIfMissing } from "../../utils";
  import { stusername } from '$stores/username';

  import User from "$c/User.svelte";
  
  let username;
  let atusername;

  let linksData = [];

  onMount(() => {
    username = localStorage.getItem("username");
    const db = getDatabase(app);
    const userLinksRef = ref(db, `users/${username}/links`);
    atusername = `@${username}`;

    onValue(userLinksRef, (snapshot) => {
      const data = snapshot.val();
      linksData = data ? Object.entries(data) : [];
      // Sort the linksData array based on the timestamp property in descending order
      linksData.sort((a, b) => b[1].timestamp - a[1].timestamp);
    });
  });
</script>

<main>
  <h4><User/></h4>
  <h4>{atusername}</h4>
  <a href="/addlink"><button>Add link</button></a>
  {#if linksData.length > 0}
    <ul>
      {#each linksData as [linkKey, linkData]}
        <li>
          <a href={addHttpIfMissing(linkData.url)} target="_blank">
            {linkData.name}
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No links available</p>
  {/if}
</main>
