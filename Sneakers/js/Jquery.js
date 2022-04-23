$(function(){
    $('.slide').slick({
        infinite: true,
        centerMode: true, //要素を中央寄せ
        centerPadding: '10%', //両サイドの見えている部分のサイズ
        swipe: true,
        arrows: false,
        slidesToShow: 3,

        responsive: [
            {
              breakpoint: 601, 
              settings: {
              slidesToShow: 1,
                },
            },
        ],
    });

    $('.humberger-btn').click(function(){
        $('.humberger-line').toggleClass('active');
        $('.back').toggleClass('active');
    });

    $('.cancel').click(function(){
        $('.humberger-line').toggleClass('active');
        $('.back').toggleClass('active');
        $('.main-nav').toggleClass('open-menu');
    });
});