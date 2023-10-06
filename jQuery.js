$(function(){
    let inWrap = $('.inner-wrapper')
    $('.prev').on('click',function(){
        inWrap.animate({left: '0%'},1000,function(){
            inWrap.css('left','-100%')
            $('.slide').first().before($('.slide').last())
        })
    })

    $('.next').on('click',function(){
        inWrap.animate({left: '-200%'},1000,function(){
            inWrap.css('left','-100%')
            $('.slide').last().after($('.slide').first())
        })
    })
})
