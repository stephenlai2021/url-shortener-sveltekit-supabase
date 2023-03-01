<script>
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
    "Set Theme 🎨",
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
</script>

<div
  class="backdrop-blur-md border-b border-white/20 fixed top-0 left-0 right-0 z-50"
>
  <nav class="container mx-auto py-4 flex justify-between items-center">
    <a
      href="/"
      data-sveltekit-reload
      class="navbar-brand text-2xl font-bold text-white"
    >
      QuickShort
    </a>

    <ul class="flex items-center">
      <!-- {#each links as link}
        <li class="mr-6 text-">
          <a href={`${link.url}`}>{link.title}</a>
        </li>
      {/each} -->

      {#if user && $page.url.pathname !== "/dashboard"}
        <li class="mr-6 text-">
          <a href="/dashboard" class="btn">Dashboard</a>
        </li>
      {/if}

      {#if !user}
        <li>
          <a href="/signin">Signin</a>
        </li>
      {/if}

      <div class="flex-none">
        <select class="bg-black select select-primary w-full max-w-xs">
          {#each themes as theme}
            <option value={theme} class="my-5">{theme}</option>
          {/each}
        </select>
      </div>
    </ul>
  </nav>
</div>

<style>
  .btn-switch {
    /* border: 1px solid; */
  }
</style>
