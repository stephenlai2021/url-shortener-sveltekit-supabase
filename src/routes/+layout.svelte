<script>
  import "../app.postcss";
  import { onMount } from "svelte";
  import { widthLessthan680, widthLessthan560, widthLessthan480 } from "$lib/stores";
  import MenuBar from "$lib/components/AppBar/MenuBar.svelte";
  import Icon from "$lib/assets/images/favicon.ico";

  const handleRWD = () => {
    if (window.innerWidth <= 680) $widthLessthan680 = true;
    if (window.innerWidth > 680) $widthLessthan680 = false;

    if (window.innerWidth <= 560) $widthLessthan560 = true;
    if (window.innerWidth > 560) $widthLessthan560 = false;

    if (window.innerWidth <= 480) $widthLessthan480 = true;
    if (window.innerWidth > 480) $widthLessthan480 = false;
  };

  onMount(() => {
    window.addEventListener("resize", () => handleRWD());
  })
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Icon} />
  <title>QuickShort</title>
</svelte:head>

<div class="layout">
  <MenuBar />
  <div class="page">
    <slot />
  </div>
</div>

<style>
  .layout {
    max-width: 1450px;
    margin: auto;
  }

  .page {
    max-width: 900px;
    margin: auto;
  }
</style>
