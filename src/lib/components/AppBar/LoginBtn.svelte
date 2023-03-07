<script>
  import { t } from "$lib/i18n/translations";
</script>

<li class="btn-login">
  <a href="/login">
    <button>
      {$t("common.login")}
    </button>
  </a>
</li>

<style>
  @media (max-width: 837px) {
    .btn-login {
      display: none;
    }
  }
</style>
