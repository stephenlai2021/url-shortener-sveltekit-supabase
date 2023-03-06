<script>
  let btnSubmit = 'Login'
  let btnAuth = 'Dont have an account? Register'
  let loginForm = true

  const handleGithubLogin = async () => {
    alert("use login !");
  };

  const handleAuthSubmit = async () => {
    alert("submitted !");
  };

  const handleAuth = () => {
    loginForm = !loginForm

    if (loginForm) {
      btnSubmit = 'Login'
      btnAuth = 'Dont have an account? Register'
    } else {
      btnSubmit = 'Register'
      btnAuth = 'Already have an account? Login'
    }
  }
</script>

<div class="auth h-screen grid place-content-center">
  <div class="container mx-auto">
    <!-- {#if err && err.message}
      <div class="card-error mb-5 text-center">
        {err.message}
      </div>
    {/if} -->

    <div
      class="card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 w-[300px]"
    >
      <div class="text-center flex justify-center">
        <div class="p-4 border rounded-full border-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      </div>
      <form action="?/login" method="POST">
        <button
          class="btn w-full mt-5 btn-github"
          formaction="?/login&provider=github"
        >Continue with github</button>
      </form>

      <hr class="border border-white/10 my-5" />

      <form method="POST" action={loginForm ? `?/login` : `?/register`}>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@gmail.dev"
          />
        </div>
        <div class="form-group mt-2">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>        
        <button class="btn w-full my-5 text-sm btn-action" type="submit">
          {btnSubmit}
        </button>
      </form>
      <div class="text-center btn-action2">
        <button
          class="text-white/50"
          on:click={handleAuth}
        >{btnAuth}</button>        
      </div>
    </div>
  </div>
</div>

<style>
  .btn-github {
    width: 100%;
    margin-bottom: 10px;
  }

  .btn-action {
    margin-top: 30px;
    width: 100%;
  }

  .btn-action2 {
    /* margin-top: 10px; */
  }
</style>
