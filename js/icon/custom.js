let aniClick = document.querySelectorAll('.ani-click');
let aniLoop = document.querySelectorAll('.ani-loop');
let aniHover = document.querySelectorAll('.ani-hover');
let aniReverseHover = document.querySelectorAll('.ani-reverse-hover');
let aniSlow = document.querySelectorAll('.ani-slow');
let aniReverseSlow = document.querySelectorAll('.ani-reverse-slow');

// 클릭시 애니메이션 실행
Array.prototype.forEach.call(aniClick, icon => {
    var anim = bodymovin.loadAnimation({
        container: icon,
        path: `../data/icon/${icon.dataset.file}.json`,
        renderer: 'svg',
       loop: false,
       autoplay: false
    });
    icon.addEventListener('click', () => {
        anim.play();
    });
});

// 기본 loop 애니메이션 재생
Array.prototype.forEach.call(aniLoop, icon => {
    var anim = bodymovin.loadAnimation({
        container: icon,
        path: `../data/icon/${icon.dataset.file}.json`,
        renderer: 'svg',
       loop: true,
       autoplay: true
    });
});

// 마우스 오버시 애니메이션 재생
Array.prototype.forEach.call(aniHover, icon => {
    var anim = bodymovin.loadAnimation({
        container: icon,
        path: `../data/icon/${icon.dataset.file}.json`,
        renderer: 'svg',
       loop: false,
       autoplay: false
    });
    icon.addEventListener('mouseenter', () => {
        anim.play();
        anim.setDirection(1);
    });
    icon.addEventListener('mouseleave', () => {
        anim.play();
        anim.setDirection(-1);
    });
});

// 마우스 오버시 반대로 애니메이션 재생
Array.prototype.forEach.call(aniReverseHover, icon => {
    var anim = bodymovin.loadAnimation({
        container: icon,
        path: `../data/icon/${icon.dataset.file}.json`,
        renderer: 'svg',
       loop: false,
       autoplay: true
    });
    icon.addEventListener('mouseenter', () => {
        anim.play();
        anim.setDirection(-1);
    });
    icon.addEventListener('mouseleave', () => {
        anim.play();
        anim.setDirection(1);
    });
});

// 마우스 오버시 천천히 애니메이션 재생
Array.prototype.forEach.call(aniSlow, icon => {
    var anim = bodymovin.loadAnimation({
        container: icon,
        path: `../data/icon/${icon.dataset.file}.json`,
        renderer: 'svg',
       loop: false,
       autoplay: false
    });
    icon.addEventListener('mouseenter', () => {
        anim.play();
        anim.setDirection(1);
        anim.setSpeed(0.2); // 1이 100%일때 20%의 속도로 재생
    });
    icon.addEventListener('mouseleave', () => {
        anim.play();
        anim.setDirection(-1);
        anim.setSpeed(1);
    });
});

// 마우스 오버시 반대로 천천히 애니메이션 재생
Array.prototype.forEach.call(aniReverseSlow, icon => {
    var anim = bodymovin.loadAnimation({
        container: icon,
        path: `../data/icon/${icon.dataset.file}.json`,
        renderer: 'svg',
       loop: false,
       autoplay: true
    });
    icon.addEventListener('mouseenter', () => {
        anim.play();
        anim.setDirection(-1);
        anim.setSpeed(0.5);
    });
    icon.addEventListener('mouseleave', () => {
        anim.play();
        anim.setDirection(1);
        anim.setSpeed(1);
    });
});