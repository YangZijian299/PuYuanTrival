const WIDTH = 640
const mobileAdapter = () => {
let scale = screen.width/WIDTH
let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale},user-scalable=no`
let meta = document.querySelector('meta[name=viewport]')
if(!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    document.head.appendChild(meta)
} 
meta.setAttribute('content', content)
}
mobileAdapter()
window.onorientationchange = mobileAdapter
