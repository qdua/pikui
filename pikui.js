for (var i = 0; i < document.images.length; i++) {
    let pikui = document.querySelectorAll('a[data-pikui] > img')[i]

    pikui.onclick = function() {
        let modal = document.createElement('div')
        modal.setAttribute('id', 'modal')
        let img = document.createElement('img')
        img.setAttribute('src', this.src)
        modal.prepend(img)
        let span = document.createElement('span')
        span.innerHTML = pikui.alt
        modal.append(span)
        let close = document.createElement('s')
        modal.append(close)
        document.body.prepend(modal)

        close.onclick = function() {
            modal.remove()
        }
    }
}