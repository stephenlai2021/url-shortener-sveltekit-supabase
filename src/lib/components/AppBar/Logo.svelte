<script>
  import { t, locale } from "$lib/i18n/translations";
  import { widthLessthan560, widthLessthan480 } from "$lib/stores";
  import logo from "$lib/assets/images/logo-192x192.png";
</script>

<a href="/" data-sveltekit-reload class="logo navbar-brand text-2xl font-bold">
  <img class="logo-image" src={logo} alt="" width="28" height="28" />
  <span
    class="title"
    style:display={$widthLessthan560 && $locale === "ja"
      ? "none"
      : $widthLessthan480 && $locale !== "ja"
      ? "none"
      : "block"}>{$t("common.logo")}
  </span>
</a>

<style>
  .logo {
    display: flex;
    position: relative;
    /* border: 1px solid; */
  }

  .title {
    margin-left: 10px;
    width: 192px;
  }

  @media (max-width: 680px) {
    .logo {
      left: -13px;
    }
  }

  /* @media (max-width: 560px) {
    .title {
      display: none;
    }
  } */

  @media (max-width: 480px) {
    .title {
      margin-left: 0;
      width: auto;
      display: none;
    }
  }
</style>
