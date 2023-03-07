<script>
  import { locale } from "$lib/i18n/translations";
  import IconLang from "$lib/components/IconLang.svelte";

  const langs = ["English", "日本語", "簡體中文", "繁體中文"];
</script>

<li class="icon-lang-wrapper">
  <button class="btn-lang">
    <span class="py- px-2">
      <IconLang />
    </span>
  </button>
  <ul class="dropdown-menu p-1 bg-base-100 border">
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

<style>
  .dropdown-menu {
    position: absolute;
    right: 0;
  }

  .icon-lang-wrapper {
    position: relative;
    cursor: pointer;
  }
</style>
