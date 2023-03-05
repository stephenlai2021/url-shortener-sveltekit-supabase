<script>
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { t, locale } from "$lib/i18n/translations";
  import logo from "$lib/assets/images/logo-192x192.png";
  import userAvatar from "$lib/assets/images/sister.png";
  import IconLang from "$lib/components/IconLang.svelte";
  import IconSetting from "$lib/components/IconSetting.svelte";

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
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "pastel",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
  ];

  const langs = ["English", "日本語", "簡體中文", "繁體中文"];

  const userMenu = ["Jeniffer Huang", "Logout"];

  const submitUpdateTheme = ({ action }) => {
    const theme = action.searchParams.get("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };
</script>

<div
  class="bg-base-100 backdrop-blur-md border-b border-white/20 fixed top-0 left-0 right-0 z-50"
>
  <nav class="container mx-auto py-1 flex justify-between items-center">
    <a
      href="/"
      data-sveltekit-reload
      class="navbar-brand text-2xl font-bold logo"
    >
      <img class="logo-image" src={logo} alt="" width="30" />
      <!-- <span class="title">QuickShort</span> -->
      <span class="title">{$t("common.logo")}</span>
    </a>

    <ul class="flex items-center">
      <!-- {#each links as link}
        <li class="mr-6 text-">
          <a href={`${link.url}`}>{link.title}</a>
        </li>
      {/each} -->

      <!-- {#if user && $page.url.pathname !== "/dashboard"}
        <li class="mr-6">
          <a href="/dashboard" class="btn">Dashboard</a>
        </li>
      {/if} -->

      {#if !user}
        <li>
          <a href="/signin">Signin</a>
        </li>
      {/if}

      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 z-50 flex items-center">
          <li class="icon-setting">
            <button>
              <IconSetting width="24px" height="24px" />
            </button>
          </li>
          <li class="theme-wrapper">
            <button>
              <span class="">🎨{$t("common.theme")}</span>
            </button>
            <ul class="p-2 bg-base-100 w- max-h-96 overflow-y-scroll">
              <form method="POST" use:enhance={submitUpdateTheme}>
                {#each themes as theme}
                  <li>
                    <button
                      formaction="/?/setTheme&theme={theme}&redirectTo={$page
                        .url.pathname}"
                    >
                      {#if theme === "dark"}{$t("common.dark")}{/if}
                      {#if theme === "cupcake"}{$t("common.cupcake")}{/if}
                      {#if theme === "bumblebee"}{$t("common.bumblebee")}{/if}
                      {#if theme === "emerald"}{$t("common.emerald")}{/if}
                      {#if theme === "synthwave"}{$t("common.synthwave")}{/if}
                      {#if theme === "retro"}{$t("common.retro")}{/if}
                      {#if theme === "cyberpunk"}{$t("common.cyberpunk")}{/if}
                      {#if theme === "valentine"}{$t("common.valentine")}{/if}
                      {#if theme === "halloween"}{$t("common.halloween")}{/if}
                      {#if theme === "garden"}{$t("common.garden")}{/if}
                      {#if theme === "forest"}{$t("common.forest")}{/if}
                      {#if theme === "pastel"}{$t("common.pastel")}{/if}
                      {#if theme === "wireframe"}{$t("common.wireframe")}{/if}
                      {#if theme === "black"}{$t("common.black")}{/if}
                      {#if theme === "luxury"}{$t("common.luxury")}{/if}
                      {#if theme === "dracula"}{$t("common.dracula")}{/if}
                      {#if theme === "autumn"}{$t("common.autumn")}{/if}
                      {#if theme === "business"}{$t("common.business")}{/if}
                      {#if theme === "acid"}{$t("common.acid")}{/if}
                      {#if theme === "lemonade"}{$t("common.lemonade")}{/if}
                      {#if theme === "night"}{$t("common.night")}{/if}
                    </button>
                  </li>
                {/each}
              </form>
            </ul>
          </li>

          <li class="icon-lang-wrapper">
            <button>
              <span class="py-2 px-2">
                <IconLang />
              </span>
            </button>
            <ul class="p-1 bg-base-100 w- max-h-96 overflow-y-scroll">
              {#each langs as lang}
                {#if lang === "English"}
                  <li>
                    <button on:click={() => ($locale = "en")}>{lang}</button>
                  </li>
                {/if}
                {#if lang === "繁體中文"}
                  <li>
                    <button on:click={() => ($locale = "zh-TW")}>{lang}</button>
                  </li>
                {/if}
                {#if lang === "日本語"}
                  <li>
                    <button on:click={() => ($locale = "ja")}>{lang}</button>
                  </li>
                {/if}
              {/each}
            </ul>
          </li>

          <li class="user-avatar-wrapper">
            <button>
              <span>
                <img
                  src={userAvatar}
                  alt=""
                  width="35"
                  height="35"
                  class="user-avatar"
                />
              </span>
            </button>
            <ul class="p-1 bg-base-100 w- max-h-96 overflow-y-scroll">
              {#each userMenu as menu}
                <li>
                  <button>{menu}</button>
                </li>
              {/each}
            </ul>
          </li>
        </ul>
      </div>
    </ul>
  </nav>
</div>

<style>
  .icon-setting {
    display: none;
  }

  .logo {
    display: flex;
  }

  .container {
    /* border: 1px solid white; */
    /* position: relative;
    left: -15px; */
    /* right: -15px; */
  }

  .icon-lang-wrapper {
    cursor: pointer;
  }

  .user-avatar-wrapper {
    cursor: pointer;
    /* position: relative;
    right: -15px; */
    /* margin-left: 10px; */
  }

  .user-avatar {
    border-radius: 50%;
  }

  .title {
    margin-left: 10px;
  }
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

  @media (max-width: 540px) {
    .theme-wrapper,
    .icon-lang-wrapper {
      display: none;
    }

    .icon-setting {
      display: block;
    }
  }

  @media (max-width: 400px) {
    .title {
      margin-left: 0;
    }
    
    .logo-image {
      display: none;
    }
  }
</style>
