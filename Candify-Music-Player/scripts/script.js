new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Jannu Na",
          artist: "KASYAP",
          cover: "../img/1.jpg",
          source: "../mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=2S24-y0Ij3Y&ab_channel=BLACKPINK",
          favorited: false
        },
        {
          name: "Humnava Mere",
          artist: "Jubin Nautiyal",
          cover: "../img/2.jpg",
          source: "../mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=IHNzOHi8sJs&ab_channel=BLACKPINK",
          favorited: true
        },

        {
          name: "Yeh Hassen Vadiyan Yeh Khula Aasman",
          artist: "A.R. Rahman",
          cover: "../img/3.jpg",
          source: "../mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=dyRsYk0LyA8&ab_channel=BLACKPINK",
          favorited: false
        },

        {
          name: "Dildara",
          artist: "Shafqat Amanat Ali",
          cover: "../img/4.jpg",
          source: "../mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=9pdj4iJD08s&ab_channel=BLACKPINK",
          favorited: false
        },
        {
          name: "Chogada",
          artist: "Darshan Raval",
          cover: "../img/5.jpg",
          source: "../mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=Amq-qlqbjYA&ab_channel=BLACKPINK",
          favorited: true
        },
        {
          name: "Hasi - Male Version",
          artist: "Ami Mishra",
          cover: "../img/6.jpg",
          source: "../mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=XsX3ATc3FbA&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Criminal",
          artist: "Akon",
          cover: "../img/7.jpg",
          source: "../mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=gdZLi9oWNZg&ab_channel=HYBELABELS",
          favorited: true
        },
        {
          name: "Surili Akhiyon Wale",
          artist: "Rahat Fateh Ali Khan",
          cover: "../img/8.jpg",
          source: "../mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=MBdVXkSdhwU&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Alone",
          artist: "Alan Walker",
          cover: "../img/9.jpeg",
          source: "../mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Lovely",
          artist: "Billie Eilish",
          cover: "../img/10.jpg",
          source: "../mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Bahre Naina",
          artist: "Nandini Srikar",
          cover: "../img/11.jpg",
          source: "../mp3/11.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Pehle Bhi Main",
          artist: "Raj Shekhar and Vishal Dadlani",
          cover: "../img/12.jpg",
          source: "../mp3/12.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Hua Main",
          artist: "Pritam Chakraborty",
          cover: "../img/13.jpg",
          source: "../mp3/13.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Matargasthi",
          artist: "Mohit Chauhan",
          cover: "../img/14.jpg",
          source: "../mp3/14.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Pal",
          artist: "Arijit Singh",
          cover: "../img/15.jpg",
          source: "../mp3/15.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Sunn Raha Hai",
          artist: "Ankit Tiwari",
          cover: "../img/16.jpg",
          source: "../mp3/16.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Darasal",
          artist: "Atif Aslam",
          cover: "../img/17.jpg",
          source: "../mp3/17.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Gazab Ka Hai Din",
          artist: "Jubin Nautiyal",
          cover: "../img/18.jpg",
          source: "../mp3/18.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Baarishein",
          artist: "Anuv Jain",
          cover: "../img/19.jpg",
          source: "../mp3/19.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Lokiverse 2.0",
          artist: "Anirudh Ravichander",
          cover: "../img/20.jpeg",
          source: "../mp3/20.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "I'm Scared",
          artist: "Anirudh Ravichander",
          cover: "../img/21.jpg",
          source: "../mp3/21.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Idhazhin Oraam",
          artist: "Anirudh Ravichander",
          cover: "../img/22.jpeg",
          source: "../mp3/22.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Not Ramaiya Vastavayya",
          artist: "Anirudh Ravichander",
          cover: "../img/23.jpg",
          source: "../mp3/23.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Wishes",
          artist: "Hasan Raheem",
          cover: "../img/24.jpg",
          source: "../mp3/24.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
