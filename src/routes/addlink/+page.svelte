<!-- AddLinkPage.svelte -->
<script>
      import { onMount } from 'svelte';
      import app from '../../firebase'; // Adjust the path accordingly
      import { getDatabase, ref, set } from 'firebase/database';
      import User from '../../components/User.svelte';
      
      
      let newName = '';
      let newUrl = '';
      let username;
      let stusername;

      onMount(() => {
    username = localStorage.getItem("username");
  });
    
      async function addItem() {
        const db = getDatabase(app);
        const userLinksRef = ref(db, `users/${username}/links/${newName}`); // Adjust the path accordingly
        console.log('Username:' + username);
        console.log('store username:' + stusername);
        
    
        await set(userLinksRef, {
          name: newName,
          url: newUrl,
        });
    
        // Clear the form fields
        newName = '';
        newUrl = '';
    
        // Optional: Redirect to a different page after adding the link
        // navigate('/some-other-page');
        //window.location.href = '/links';
        
      }
    </script>
    
    <main>
      
    
      <!-- Form to add a new link -->
      <label for="name">Name</label>
      <input bind:value={newName} type="text" id="name" autofocus>
    
      <label for="URL">URL</label>
      <input bind:value={newUrl} id="url">
    
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