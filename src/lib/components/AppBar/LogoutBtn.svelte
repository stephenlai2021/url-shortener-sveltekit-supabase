<script>
  import { t } from "$lib/i18n/translations";
</script>

<li class="btn-logout">
  <a href="/">
    <button>
      {$t("common.logout")}
    </button>
  </a>
</li>

<style>
  @media (max-width: 837px) {
    .btn-logout {
      display: none;
    }
  }
</style>
