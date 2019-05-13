const PLAYER = document.querySelector('#player-theater-container')
const VIDEO = document.querySelector('.video-stream.html5-main-video')
const PLAY_BAR = document.querySelector('.ytp-chrome-bottom')

const VIDEO_STYLES = window.getComputedStyle(VIDEO)
const PLAY_BAR_STYLES = window.getComputedStyle(PLAY_BAR)

const VIDEO_DEFAULT_STYLES = `
  width: ${VIDEO_STYLES.width};
  height: ${VIDEO_STYLES.height};
  left: ${VIDEO_STYLES.left};
  top: ${VIDEO_STYLES.top};
`
const PLAY_BAR_DEFAULT_STYLES = ` width: ${PLAY_BAR_STYLES.width};`

function toggleSticky () {
  if (PLAYER) {
    const scrollTop = window.pageYOffset
    const elHeight = PLAYER.clientHeight

    if (scrollTop > elHeight) {
      PLAYER.style = `
        position: fixed;
        width: 402px;
        height: 233px;
        min-height: auto;
        right: 20px;
        top: 65px;
        z-index: 1010;
        `
      VIDEO.style = 'height: 233px'
      PLAY_BAR.style = 'width: 390px;'
    } else {
      PLAYER.removeAttribute('style')
      VIDEO.style = VIDEO_DEFAULT_STYLES
      PLAY_BAR.style = PLAY_BAR_DEFAULT_STYLES
    }
  }
}

window.onscroll = function() {
  toggleSticky()
}