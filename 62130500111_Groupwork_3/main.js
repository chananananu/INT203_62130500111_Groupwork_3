const app = {
    data() {
        return {
            cats: [{image: 'image/01.jpg', ig: 'zjiasally (Fan Account)', like: false},
                    {image: 'image/02.jpg', ig: 'dear.mycats', like: false},
                    {image: 'image/03.jpg', ig: 'zuzu_and_nala', like: false}
            ]
        }
    },
    methods: {
        clickLike(index){
            this.cats[index].like = !this.cats[index].like         
        }
        // likeAmount() {
        //     return this.cats.filter(n => n.like).length;
        //}
    }
}

Vue.createApp(app).mount('#app');