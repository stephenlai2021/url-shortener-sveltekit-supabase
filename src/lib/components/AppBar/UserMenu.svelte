<script>
  import userAvatar from "$lib/assets/images/sister.png";

  const userMenu = ["Jeniffer Huang", "Logout"];
</script>

<li class="user-avatar-wrapper">
  <button>
    <span>
      <img src={userAvatar} alt="" width="35" height="35" class="user-avatar" />
    </span>
  </button>
  <ul class="dropdown-menu p-1 bg-base-100 border">
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

<style>
  .dropdown-menu {
    position: absolute;
    right: 0;
  }

  .user-avatar-wrapper {
    cursor: pointer;
  }

  .user-avatar {
    border-radius: 50%;
  }

   /* @media (max-width: 680px) {
     .user-avatar-wrapper  {
       right: -10px;
     }
   } */
</style>
