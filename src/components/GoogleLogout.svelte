<script>
    import { onMount } from 'svelte';
    import { getAuth, signOut } from 'firebase/auth';
    import firebaseApp from '../firebase';
  
    const auth = getAuth(firebaseApp);
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
  
        // Clear user data from sessionStorage
        sessionStorage.removeItem('currentUser');
  
        // Redirect to the home page
        window.location.href = '/';
      } catch (error) {
        console.error('Logout error:', error);
      }
    };
  
    onMount(() => {
      // Load necessary scripts or perform other setup if needed
    });
  </script>
  
  <button on:click={handleLogout}>Logout</button>
  