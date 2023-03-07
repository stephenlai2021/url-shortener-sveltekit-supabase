<script>
  import IconSetting from "$lib/components/IconSetting.svelte";
</script>

<li class="icon-setting">
  <button>
    <IconSetting width="24px" height="24px" />
  </button>
</li>

<style>
  .icon-setting {
    display: none;
  }

  @media (max-width: 540px) {
    .icon-setting {
      display: block;
    }
  }
</style>
