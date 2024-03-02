<script>
  import { onMount } from 'svelte';
  import app from '../../firebase';
  import { getDatabase, ref, set, serverTimestamp } from 'firebase/database';
  import User from '../../components/User.svelte';

  let newName = '';
  let newUrl = '';
  let username;

  onMount(() => {
    username = localStorage.getItem("username");
  });

  async function addItem() {
    if (!newName.trim() || !newUrl.trim()) {
      // Check if either the name or URL is blank or contains only whitespace
      console.log('Name and URL cannot be blank.');
      return;
    }

    const db = getDatabase(app);
    const userLinksRef = ref(db, `users/${username}/links/${newName}`);

    try {
      await set(userLinksRef, {
        name: newName,
        url: newUrl,
        timestamp: serverTimestamp(),
      });

      // Clear the form fields
      newName = '';
      newUrl = '';

      // Redirect to the links page
      window.location.href = '/links';
    } catch (error) {
      console.error('Error adding link:', error);
    }
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      // Submit the form when Enter key is pressed
      addItem();
    }
  }
</script>

<main>
  <!-- Form to add a new link -->
  <label for="name">Name</label>
  <input bind:value={newName} type="text" id="name" autofocus on:keypress={handleKeyPress}>

  <label for="URL">URL</label>
  <input bind:value={newUrl} id="url" on:keypress={handleKeyPress}>

  <button on:click={addItem}>Add</button>
</main>

<style>
  textarea {
    height: 300px !important;
    font-family: Poppins;
  }

  textarea:focus {
    border-color: #318ce7;
  }
</style>

<User/>
