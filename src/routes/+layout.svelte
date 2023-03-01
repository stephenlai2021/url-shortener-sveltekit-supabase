<script>
  import "../app.postcss";
  import AppBar from "$lib/components/AppBar.svelte";
  import Icon from "$lib/assets/images/favicon.ico";
  import { page } from "$app/stores";
  let user = true;

  const links = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/contact",
      title: "Contact",
    },
  ];

  const themes = [
    // "Set Theme 🎨",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  let selected;
  let theme = "";

  const selectTheme = () => {
    theme = selected;
    console.log("selected theme: ", theme);
    alert(`selected theme: ${theme}`);
  };
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Icon} />
  <title>QuickShort</title>
</svelte:head>

<div>
  <AppBar /> 
  <slot />
</div>
