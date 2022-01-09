for (let imgC = 0; imgC < 4; imgC++) {
    let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    let url = 'https://picsum.photos/id/' + random + '/1000'
    let dataPikui = document.createElement('a')
    dataPikui.setAttribute('data-pikui', imgC)
    let src = document.createElement('img')
    src.setAttribute('src', url)
    src.setAttribute('alt', 'Random Image #' + random)
    dataPikui.prepend(src)
    document.body.prepend(dataPikui)
}

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
            let timePassed = Date.now() - start
            img.style.transform = 'scale(1)'
            img.style.opacity = 1
            if (timePassed < 2000) clearInterval(timer)
        });
        modal.prepend(img)

        document.body.append(modal)

        function rm() {
            img.style.transform = 'scale(.75)'
            modal.style.opacity = 0
            modal.style.pointerEvents = 'none'
            setTimeout(() => modal.remove(), 1000);
        }
        close.onclick = rm

        window.onkeydown = function(e) {
            if (e.keyCode == 27) {
                rm()
            }
        };
    }
}