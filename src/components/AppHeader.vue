<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" v-for="link in links">
                        <router-link :to="{name: link.route}">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name:'AppHeader',

    data(){
        return{
            links : [
                {
                    route: 'cocktails',
                    name: 'Cocktails'
                },
                {
                    route: 'aboutUs',
                    name: 'AboutUs'
                },
                {
                    route: 'contacts',
                    name: 'Contact'
                }
            ]
        }
    },
    
}
</script>
<style lang="scss">
    
</style>