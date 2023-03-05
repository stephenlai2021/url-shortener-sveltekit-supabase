<script>
  import "../app.postcss";
  import AppBar from "$lib/components/AppBar.svelte";
  import Icon from "$lib/assets/images/favicon.ico";
  import { page } from "$app/stores";
  import { invalidateAll } from "$app/navigation";
  import { supabaseClient } from "$lib/supabase/config";
  import { onMount } from "svelte";

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      console.log("Auth state change detected");
      invalidateAll();
    });
    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Icon} />
  <title>QuickShort</title>
</svelte:head>

<div>
  <AppBar /> 
  <slot />
</div>
