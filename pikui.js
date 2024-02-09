// Picsum Photos
for (let imgC = 0; imgC < 4; imgC++) {
    let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    let url = `https://picsum.photos/id/${random}/1000`;
    let dataPikui = document.createElement('a');
    dataPikui.setAttribute('data-pikui', imgC);
    let src = document.createElement('img');
    src.setAttribute('src', url);
    src.setAttribute('alt', `Random Image #${random}`);
    src.setAttribute('class','rounded-xl shadow-2xl shadow-pink-600/50');
    dataPikui.prepend(src);
    document.body.prepend(dataPikui);
}


for (let i = 0; i < document.images.length; i++) {
    let link = document.querySelectorAll('a[data-pikui]')[i];

    function stoplink(el) {
        el.preventDefault();
    }

    link.addEventListener('click', stoplink, false);

    let pikui = document.querySelectorAll('a[data-pikui] > img')[i];

    pikui.onclick = function () {
        let modal = document.createElement('div');
        modal.setAttribute('id', 'pikui');
        modal.classList.add('bg-black/80', 'text-pink-500', 'fixed', 'flex', 'items-center', 'h-screen', 'transition-all', 'justify-center', 'w-screen', 'z-50', 'p-10');

        let span = document.createElement('span');
        span.innerHTML = pikui.alt;
        span.classList.add('text-sm', 'absolute', 'bottom-2', 'left-0', 'right-0', 'text-center');

        let close = document.createElement('span');
        close.classList.add('text-6xl', 'cursor-pointer', 'absolute', 'right-5', 'top-5');
        close.innerHTML = '×';

        let img = document.createElement('img');
        img.setAttribute('src', this.src);
        img.classList.add('h-90vmin', 'opacity-0', 'scale-5', 'transition-all', 'rounded-xl');

        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            img.style.transform = 'scale(.75)';
            img.style.opacity = 1;
            if (timePassed < 2000) clearInterval(timer);
        });

        modal.prepend(img);
        modal.append(span, close);
        document.body.append(modal);

        function rm() {
            img.style.transform = 'scale(.5)';
            modal.style.opacity = 0;
            modal.style.pointerEvents = 'none';
            setTimeout(() => modal.remove(), 1000);
        }

        close.onclick = rm;

        window.onkeydown = function (e) {
            if (e.keyCode == 27) {
                rm();
            }
        };
        modal.onclick = function (e) {
            if (e.target === modal) {
                rm();
            }
        };
    }
}
