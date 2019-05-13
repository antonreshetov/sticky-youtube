function main () {
  this.els = {
    player: '',
    video: '',
    playbar: ''
  }
  this.styles = {
    videoDefault: '',
    playbarDefault: '',
  }

  function getElements () {
    this.els.player = document.querySelector('#player-theater-container')
    this.els.video = document.querySelector('.video-stream.html5-main-video')
    this.els.playbar = document.querySelector('.ytp-chrome-bottom')
  }

  function getDefaultStyles () {
    if (isElsReady()) {
      const video = window.getComputedStyle(this.els.video)
      const playbar = window.getComputedStyle(this.els.playbar)

      this.styles.videoDefault = `
        width: ${video.width};
        height: ${video.height};
        left: ${video.left};
        top: ${video.top};
      `
      this.styles.playbarDefault = `width: ${playbar.width};`
    }
  }

  function toggleSticky() {
    if (isElsReady()) {
      const scrollTop = window.pageYOffset
      const playerHeight = this.els.player.clientHeight

      if (scrollTop > playerHeight) {
        this.els.player.style = `
          position: fixed;
          width: 402px;
          height: 233px;
          min-height: auto;
          right: 20px;
          top: 65px;
          z-index: 1010;
          `
        this.els.video.style = 'height: 233px'
        this.els.playbar.style = 'width: 390px;'
      } else {
        this.els.player.removeAttribute('style')
        this.els.video.style = this.styles.videoDefault
        this.els.playbar.style = this.styles.playbarDefault
      }
    }
  }

  function isElsReady() {
    return this.els.player && this.els.video && this.els.playbar
  }

  function init () {
    getElements()
    getDefaultStyles()

    window.addEventListener('yt-navigate', () => {
      getElements()
      getDefaultStyles()
    })

    window.onscroll = function() {
      toggleSticky()
    }
  }

  init()
}

window.onload = function() {
  main()
}