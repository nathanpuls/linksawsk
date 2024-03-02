<script>
      import { base } from "$app/paths";
  import { onMount } from 'svelte';
  import GoogleLogout from '$c/GoogleLogout.svelte';
//   import {username} from '../../stores/username';

  


  export let displayName;
  export let photo;
  export let email;
  export let username;
  
  
  

onMount(() => {
  // Retrieve user data from sessionStorage
  const storedUserData = sessionStorage.getItem('currentUser');
  const user = storedUserData ? JSON.parse(storedUserData) : null;

  console.log(user);
  

  // Log the username
  
  displayName = user ? user.displayName || 'No Display Name' : 'Not Logged In';
  photo = user ? user.photoURL || 'No photo' : 'Not Logged In';
  email = user ? user.email || 'No email' : 'Not Logged In';
  username = user.email ? user.email.split('@')[0] : 'No username';
  
//   image = user.
});
</script>

<main>
    {#if displayName}
    <div class="imageName">
        <img src="{photo}" alt="profile pic" width="50rem" height="50rem">
        
        <h5>{displayName}</h5>
    </div>
    <h5>@{username}</h5>
    <h5>{email}</h5>
    <!-- <button on:click={handleLogin}>Sign in with Google</button> -->
    <br>
    <GoogleLogout />
    
    
    
    {/if}
</main>

<style>
    img {
        border-radius: 50%;
        margin-right: .5rem;
    }
    .imageName {
        display: flex;
    align-items: center;
    
    }
    h5 {
        margin: 0;
    }
</style>