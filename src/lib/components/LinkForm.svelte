 <script>
   let isLoading = false
 </script>
 
 <form method="POST" action="" class="mt-10 card flex flex-wrap sm:flex-nowrap justify-between items-middle gap-5">
    <div class="form-group w-full sm:w-6/12">
      <label for="long_url" class="text-white/30 text-xs mb-1 block">Long URL</label>
      <input
        for="long_url"
        type="text"
        name="long_url"
        placeholder="enter or paste long URL"
      />
      <!-- {#if errors.long_url}
        <span class="text-xs py-1 text-red-500">
          {errors.long_url}</span>
      {/if} -->
    </div>
    <div class="form-group w-full sm:w-4/12">
      <label for="key" class="text-white/30 text-xs mb-1 block">Short Key</label>
      <input
        for="key"
        type="text"
        name="key"
        placeholder="enter a key (optional)"
        required
        min="6"
      />
      <!-- {#if error.key}
        <span class="text-xs py-1 text-red-500">{errors.key}</span>
      {/if} -->
    </div>
    <div class="w-full sm:w-2/12 flex justify-end self-end">
      <button
        type="submit"
        class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 w-full hover:shadow-xl transition-all duration-200"
      >
        {#if isLoading}
          <svg
            class="animate-spin h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        {:else}
          Shorten
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        {/if}
      </button>
    </div>
  </form>