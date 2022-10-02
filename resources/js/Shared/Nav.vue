<template>
    <nav class="ml-6">
        <ul class="flex list-none space-x-4 list-inside">
            <li>
                <NavLink  href="/"  :active="$page.component === 'Home'">
                    Home
                </NavLink>
            </li>
              <li>
                <NavLink  href="/users"  :active="$page.component === 'User'">
                    Users
                </NavLink>
            </li>
              <li>
                <NavLink  href="/setting"  :active="$page.component === 'Setting'">
                    Settings
                </NavLink>
            </li>
        </ul>
    </nav>
</template>
<script>

import NavLink from "./NavLink.vue"
export default{
    components:{
        NavLink
    }
}
</script>
