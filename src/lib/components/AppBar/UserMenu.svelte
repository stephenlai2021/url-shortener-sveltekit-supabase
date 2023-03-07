<script>
  import userAvatar from "$lib/assets/images/sister.png";

  const userMenu = ["Jeniffer Huang", "Logout"];
</script>

<li class="user-avatar-wrapper cursor-pointer">
  <button>
    <span>
      <img src={userAvatar} alt="" width="35" height="35" class="user-avatar rounded-full" />
    </span>
  </button>
  <ul class="dropdown-menu absolute right-0 p-1 bg-base-100 border">
    <!-- {#each userMenu as menu} -->
    <!-- <li>
                    <button class="name-menu">
                      {menu}
                    </button>
                  </li> -->
    <!-- {/each} -->
    <li>
      <button>
        <a href="/">Logout</a>
      </button>
    </li>
  </ul>
</li>
