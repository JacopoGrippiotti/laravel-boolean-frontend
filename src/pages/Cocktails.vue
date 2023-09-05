<template>
    <div>
        aaaaaaaa
    </div>
</template>
<script>
import axios from 'axios';
import SingleCocktail from '../components/SingleCocktail.vue';

export default {
    name: 'Cocktails',

    components: {
        SingleCocktail
    },

    data(){
        return{
            cocktailsList: [],
            nextPageUrl: '',
            currentPageNo: '',
            prevPageUrl: '',
            apiUrl: 'http://127.0.0.1:8000/api/cocktails'
        }
    },

    methods: {
        getCocktails(apiUrl = this.apiUrl){
            axios.get(apiUrl).then((response)=>{
                console.log(response);
                this.cocktailsList = response.data.results.data;
                this.nextPageUrl = response.data.results.next_page_url;
                this.prevPageUrl = response.data.results.prev_page_url;
            })
            .catch(function(error){
                console.log(error);
            })
        },

        nextPage(){
            // alert('next page');
            this.getCocktails(this.nextPageUrl);
        },

        prevPage(){
            // alert('prev page');
            this.getCocktails(this.prevPageUrl);
        }
    },

    created(){
        this.getCocktails();
    }
}
</script>
<style lang="scss" scoped>
    @use '../style/general.scss' as*;
</style>