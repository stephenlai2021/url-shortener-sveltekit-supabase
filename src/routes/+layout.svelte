<script>
  import "../app.css";
  import AppBar from '$lib/components/AppBar.svelte'
  import Icon from '$lib/assets/images/favicon.ico'
  // import ManifestJson from '$lib/assets/pwa/manifest.json'  
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Icon} />
  <!-- <link rel="manifest" type="application/json" href={ManifestJson} /> -->
  <title>QuickShort</title>
</svelte:head>

<div>
  <AppBar />
  <slot />
</div>