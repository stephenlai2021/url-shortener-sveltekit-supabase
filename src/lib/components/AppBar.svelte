<script>
  let user = true

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
</script>

<div
  class="backdrop-blur-md border-b border-white/20 fixed top-0 left-0 right-0"
>
  <nav class="container mx-auto py-4 flex justify-between items-center">
    <a
      href="/"
      data-sveltekit-reload
      class="navbar-brand text-2xl font-bold text-white"
    >
      Shrty Sveltekit
    </a>

    <ul class="flex items-center">
      {#each links as link}
        <li class="mr-6 text-">
          <a href={`${link.url}`}>{link.title}</a>
        </li>
      {/each}

      {#if user}
        <li class="mr-6 text-">
          <a href="/dashboard" class="btn">Dashboard</a>
        </li>
      {:else}
        <li>
          <a href="/signin">Signin</a>
        </li>
      {/if}
    </ul>
  </nav>
</div>
