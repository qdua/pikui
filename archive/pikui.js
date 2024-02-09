//Picsum Photos
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
//

let head = document.getElementsByTagName('head')[0]
let style = document.createElement('style')
style.setAttribute('type', 'text/css')
let rules = {
    '#pikui': 'background:#202020bb;bottom:0;display:grid;height:100vh;place-items:center;position:fixed;transition: .2s linear;width:100vw;z-index: 100000;',
    '#pikui s': 'color:#000;cursor:pointer;font: normal 4vmin/1 sans-serif;position:absolute;right:4vw;text-decoration:none;text-shadow: 0 1vmin 2vmin #828282;top:4vh;',
    '#pikui s::after': 'content: "×";',
    '#pikui img': 'bottom:1vmin;max-width:80vmin;opacity: 0;transform:scale(.75);transition: .2s linear;',
    '#pikui span': 'bottom:2vh;position:absolute;text-align:center;'
};
head.appendChild(style)
let sheet = style.sheet
for (let rule in rules) {
    sheet.insertRule(`${rule} {${rules[rule]}}`, 0)
}

for (var i = 0; i < document.images.length; i++) {
    let link = document.querySelectorAll('a[data-pikui]')[i]

    function stoplink(el) { el.preventDefault() }
    link.addEventListener('click', stoplink, false)

    let pikui = document.querySelectorAll('a[data-pikui] > img')[i]

    pikui.onclick = function() {
        let modal = document.createElement('div')
        modal.setAttribute('id', 'pikui')

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