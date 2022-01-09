for (var i = 0; i < document.images.length; i++) {
    let pikui = document.querySelectorAll('a[data-pikui] > img')[i]

    pikui.onclick = function() {
        let modal = document.createElement('div')
        modal.setAttribute('id', 'modal')

        let span = document.createElement('span')
        span.innerHTML = pikui.alt
        modal.append(span)
        let close = document.createElement('s')
        modal.append(close)

        let start = Date.now()
        let img = document.createElement('img')
        img.setAttribute('src', this.src)

        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            img.style.bottom = 0 + 'vmin';
            img.style.opacity = 1;
            if (timePassed < 2000) clearInterval(timer);
        });
        modal.prepend(img)

        document.body.prepend(modal)

        close.onclick = function() {
            modal.remove()
        }
    }
}