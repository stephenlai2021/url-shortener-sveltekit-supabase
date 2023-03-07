<script>
  import { page } from "$app/stores";
  import { widthLessthan680, widthLessthan480 } from '$lib/stores'
  import Logo from "$lib/components/AppBar/Logo.svelte";
  import MiddleMenu from "$lib/components/AppBar/MiddleMenu.svelte";
  import ThemeMenu from "$lib/components/Appbar/ThemeMenu.svelte";
  import LoginBtn from "$lib/components/Appbar/LoginBtn.svelte";
  import SettingBtn from "$lib/components/Appbar/SettingBtn.svelte";
  import LangMenu from "$lib/components/Appbar/LangMenu.svelte";
  import UserMenu from "$lib/components/Appbar/UserMenu.svelte";

  // let user = false;
</script>

<div
  class="px-8 py-2 bg-base-100 backdrop-blur-md  border-white/20 fixed top-0 left-0 right-0 z-50"  
  class:pr-5={$widthLessthan680}
  class:pl-4={$widthLessthan480}
>
  <nav class="py-1 flex justify-between items-center">
    <Logo />

    {#if $page.url.pathname !== "/dashboard"}
      <MiddleMenu />
    {/if}

    <ul class="flex items-center">
      <div class="side-menu">
        <ul class="menu menu-horizontal px-1 z-50 flex items-center">
          <ThemeMenu />
          <LangMenu />

          {#if $page.url.pathname === "/"}
            <LoginBtn />
          {/if}

          {#if $page.url.pathname === "/dashboard"}
            <UserMenu />
          {/if}
        </ul>
      </div>
    </ul>
  </nav>
</div>

<style>
  .side-menu {
    position: relative;
    right: -20px;
  }
</style>
