<script>
  import "../app.postcss";
  import AppBar from "$lib/components/AppBar.svelte";
  import Icon from "$lib/assets/images/favicon.ico"; 
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Icon} />
  <title>QuickShort</title>
</svelte:head>

<div>
  <AppBar /> 
  <slot />
</div>
