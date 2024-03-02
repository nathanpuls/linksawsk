<script>
  import { onMount } from "svelte";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import firebaseApp from "../firebase";
  import {username} from '$stores/username';

  const auth = getAuth(firebaseApp);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      const email = user.email;

const atlessUsername = email.split('@')[0];

const username = `@${atlessUsername}`;

console.log(username);




      // Store user data in sessionStorage
      sessionStorage.setItem("currentUser", JSON.stringify(user));

    

      // Navigate to /menu using window.location
      window.location.href = "/menu";

      // Log after navigation
      console.log("Navigated to /menu");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  onMount(() => {
    // Load the Google Sign-In API script if needed
  });
</script>

<button on:click={handleLogin}>Sign in with Google</button>
