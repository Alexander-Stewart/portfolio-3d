AFRAME.registerComponent('sound-controller', {
  schema: {
    songs: {
      type: "array",
      default: []
    }
  },

  init: function () {
    // lets make sure we have the list of songs...
    console.log(this.data.songs[0]);
    console.log(this.el.components)

    this.currentSong = 0;
    this.playing = true;

    // first lets init the first song...
    this.el.setAttribute('sound', {
      autoplay: true,
      loop: true,
      volume: 0.75,
      src: "#" + this.data.songs[0]
    });

    var next = function(event) {
      console.log("playing next song...")
      this.currentSong = (this.currentSong + 1) % this.data.songs.length
      this.el.setAttribute('sound', 'src', "#" + this.data.songs[this.currentSong])
    }

    var prev = function(event) {
      console.log("playing prev song...")
      this.currentSong = (this.currentSong == 0) ? this.data.songs.length-1 : this.currentSong-1
      console.log(this.currentSong)
      this.el.setAttribute('sound', 'src', "#" + this.data.songs[this.currentSong])
    }

    var playPause = function(event) {
      this.playing = !this.playing;
      if(this.playing) {
        this.el.components.sound.playSound();
      } else {
        this.el.components.sound.pauseSound();
      }
    }

    this.el.addEventListener('next', next.bind(this))
    this.el.addEventListener('prev', prev.bind(this))
    this.el.addEventListener('playPause', playPause.bind(this))
  },

  update: function () {

  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});

// functions that will emit the sound-controller events...
window.next = function() {
  console.log("next button pressed...")
  var soundController = document.getElementById("sound-controller");
  soundController.emit('next');
}

window.prev = function() {
  console.log("prev button pressed...")
  var soundController = document.getElementById("sound-controller");
  soundController.emit('prev');
}

window.playPause = function() {
  console.log("play/pause button pressed...")
  var soundController = document.getElementById("sound-controller");
  soundController.emit('playPause');
}
