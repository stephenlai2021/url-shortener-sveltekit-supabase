<script>
  import LinkForm from '$lib/components/LinkForm.svelte'
  import LinkCard from '$lib/components/LinkCard.svelte'

  const loop = [
    {
      id: 1,
      shortKey: 'test',
      longUrl: 'https://google.com',
      total_clicks: 5,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 2,
      shortKey: 'test123',
      longUrl: 'https://facebook.com',
      total_clicks: 20,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 3,
      shortKey: 'abcDEF!',
      longUrl: 'https://vercel.com',
      total_clicks: 18,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 3,
      shortKey: 'abcDEF!',
      longUrl: 'https://vercel.com',
      total_clicks: 18,
      created_at: new Date().toLocaleDateString()
    },
    {
      id: 3,
      shortKey: 'abcDEF!',
      longUrl: 'https://vercel.com',
      total_clicks: 18,
      created_at: new Date().toLocaleDateString()
    },
  ]
</script>

<section class="pt-28 container mx-auto">
  <h1 class="text-2xl font-bold text-white">Dashboard</h1>
  <!-- <LinkForm @shorten="handleRefresh" /> -->
  <LinkForm />
  <div class="links-wrapper mt-10">
    {#each loop as item}
      <LinkCard link={item} />
    {/each}
  </div>  
</section>
