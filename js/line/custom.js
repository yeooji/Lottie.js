var aniLoop;
var elem = document.getElementById('lottie');
var animData = {
    container: elem,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../data/line/data.json'
};

aniLoop = bodymovin.loadAnimation(animData);