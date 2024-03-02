<!-- Page1.svelte -->
<script>
    import { username } from '$stores/username';
  
    // Function to update the variable in the store
    
      username.set("New Value");
  </script>
  
  
  <p>@{$username}</p>
  

  