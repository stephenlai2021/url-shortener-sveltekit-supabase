<script>
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";

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

  const submitUpdateTheme = ({ action }) => {
    const theme = action.searchParams.get("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };
</script>

<div class="bg-neutral backdrop-blur-md border-b border-white/20 fixed top-0 left-0 right-0 z-50">
  <nav class="container mx-auto py-1 flex justify-between items-center">
    <a
      href="/"
      data-sveltekit-reload
      class="navbar-brand text-2xl font-bold btn"
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
        <li class="mr-6">
          <a href="/dashboard" class="btn">Dashboard</a>
        </li>
      {/if}

      {#if !user}
        <li>
          <a href="/signin">Signin</a>
        </li>
      {/if}

      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 z-50">
          <li>
            <button>
              <span class="btn">Set Theme 🎨</span>
            </button>
            <ul class="p-2 bg-base-100 w-full max-h-96 overflow-y-scroll">
              <form method="POST" use:enhance={submitUpdateTheme}>
                {#each themes as theme}
                  <li>
                    <button
                      formaction="/?/setTheme&theme={theme}&redirectTo={$page
                        .url.pathname}">{theme}</button
                    >
                  </li>
                {/each}
              </form>
            </ul>
          </li>
        </ul>
      </div>
    </ul>
  </nav>
</div>

<style>
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
