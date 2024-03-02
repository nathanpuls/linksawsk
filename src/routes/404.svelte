<!-- src/routes/404.svelte -->

<script>
    export let status = 404;
    export let error;
    
  import { base } from "$app/paths";
</script>


<a href="{base}/about">About</a>

  
  <main>
    <h1>{status}</h1>
    <p>{error ? `Error: ${error.message}` : 'Page not found'}</p>
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 2em;
    }
  
    h1 {
      font-size: 2em;
      color: #ff0000;
    }
  </style>
  