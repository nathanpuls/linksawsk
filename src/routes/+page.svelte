<script>
  import { base } from "$app/paths";
  

  import GoogleLogin from '../components/GoogleLogin.svelte';


</script>

<h1>Shortcuts</h1>
<p>Custom shortlinks based on your Google username</p>

    <p>Plus other shortcut tools to make life easier</p>
    <GoogleLogin />



<a href="{base}/links" class="menu">Links</a>
<a href="{base}/snips" class="menu">Snips</a>

<style>
    button {
        width: 50%;
    }
</style>