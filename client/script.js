Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    data() {
        return {
          slide: 0,
          sliding: null,
          socket: io('http://localhost:3000')
        }
      },
      methods: {
        onSlideStart(slide) {
          this.socket.emit('socket-slide', this.slide)
          //this.sliding = true
        },
        onSlideEnd(slide) {
          // this.sliding = false
        }
      },
      mounted() {
        this.socket.on('socket-slide-now', (slide) => {
          console.log('event accepted')
          // this.slide = slide
        })
      }
})