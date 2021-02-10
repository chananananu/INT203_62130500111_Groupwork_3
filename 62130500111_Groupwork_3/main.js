const app = {
    data() {
        return {
            cats: [{image: 'image/01.jpg', profile: 'image/01.jpg', ig: 'zjiasally', like: false},
                    {image: 'image/02.jpg', profile: 'image/02.jpg', ig: 'dear.mycats', like: false},
                    {image: 'image/03.jpg', profile: 'image/03.jpg', ig: 'zuzu_and_nala', like: false}
            ],
            
        }
    },
    methods: {
        clickLike(index){
            this.cats[index].like = !this.cats[index].like;      
        }
    },
    computed: {
        countPhoto() {
            return this.cats.length
        }
    }
}

Vue.createApp(app).mount('#app');