<!-- User.svelte -->

<script >
    import { onMount } from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import firebaseApp from '../firebase';
    import { storeusername } from '../stores/test';

    const auth = getAuth(firebaseApp);
    export let username;
    export let atusername;

    


  
    onMount(() => {
      // Check if a user is already authenticated
      console.log('Before setting:', $storeusername);

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          username = user.email;
       username = username.split('@')[0];
       username = username.replace(/\./g, '');
       storeusername.set(username);
       localStorage.setItem('username', username);
       



       atusername = `@${username}`;
        } else {
          username = 'Not logged in';
        }
      });
      console.log('After setting:', $storeusername);
      return () => {
        // Unsubscribe to avoid memory leaks
        unsubscribe();
        
      };
      

    });

 
  </script>
  