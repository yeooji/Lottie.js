var anim;
var elem = document.getElementById('bodymovin');
var animData = {
    container: elem,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
        progressiveLoad:false
    },
    path: '../data/scroll/illust-about.json'
};

anim = bodymovin.loadAnimation(animData);

//스크롤 대비 현재 스크롤을 알아내서 전체의 몇 %를 스크롤 했는지 체크한다.
function lottieScroll() {
    //1. 스크롤이란 값을 통해서 전체중 현재 몇%의 스크롤을 했는지 알아내고
    let scrollPercent = Math.round(document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100);
    
    //2. 내가 구하려는 값을 구해보고
    console.log('스크롤' + scrollPercent + '%');

    //anim.goToAndStop(scrollPercent, true);

    //90프레임인데 100이니까 수치를 변환시켜줘야 함
    console.log('현재 프레임 : ' + anim.currentRawFrame);
    console.log('토탈 프레임 : ' + anim.totalFrames);

    //3. goToAndStop 메소드를 이용하여 수치를..
    anim.goToAndStop((scrollPercent/100) * anim.totalFrames, true);
}

// 윈도우 스크롤 이벤트를 추가하여 그안에 함수를 실행시켜준다.
window.addEventListener('scroll', function() {
    lottieScroll();
});


/* jquery ver */
// $(document).ready(function(){
// 	var anim;
//     var elem = document.getElementById('bodymovin');
//     var animData = {
//         container: elem,
//         renderer: 'svg',
//         loop: false,
//         autoplay: false,
//         rendererSettings: {
//             progressiveLoad:false
//         },
//         path: '../data/illust-about.json'
//     };

//     anim = bodymovin.loadAnimation(animData);

//     function lottieScroll(){
//         // 스크롤 % 계산하기
//         var scrollPercent = $(window).scrollTop() / ($(document).height() - $(window).height()) * 100;
//         console.log(scrollPercent);

//         // % 반올림
//         scrollPercentRounded = Math.round(scrollPercent);
//         console.log('스크롤 : '+ scrollPercentRounded + '%');

//          // 현재 프레임 
//          console.log('현재 프레임 : '+ anim.currentRawFrame);

//          // 토탈 프레임 - 에펙에서 출력한 ex 120
//          console.log('토탈 프레임 : '+ anim.totalFrames);


//         // 제대로 되는지 체크            
//         anim.goToAndStop( (scrollPercentRounded / 100) * anim.totalFrames, true);
//     }


//     $(window).scroll(function() {
//         lottieScroll();
//     });


// });
