let nav = document.querySelector('.nav')
let btn_prev = document.querySelector('.btn_prev1')



btn_prev.addEventListener('click' , function(){
    history.back() ;
})

let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')


let imgs = [ 'a1.jpg' , 'a2.jpg' , 'a3.jpg' , 'p10.png']
let index = 0 ;

let btn_next = document.querySelector('.btn_next')

btn_next.addEventListener('click', function(){
    
    img1.src = imgs[index]
    if( imgs[index] === 'p10.png' ){
        img1.classList.remove('img1_small')
    } else {
        img1.classList.add('img1_small')
    }
    index++ ;
    if(index > imgs.length - 1){
    index = 0;  
}

})


let btn_prev2 = document.querySelector('.btn_prev')

btn_prev2.addEventListener('click', function(){

    index--;
    if(index < 0){
        index = imgs.length - 1;   
    }
    img1.src = imgs[index];

    if( imgs[index] === 'p10.png' ){
        img1.classList.remove('img1_small')
    } else {
        img1.classList.add('img1_small')
    }    
})














let footer = document.querySelector('.footer')






let list_footer = document.createElement('ul')
list_footer.className ='list_footer'
footer.appendChild(list_footer)

let li1_footer = document.createElement('li')
li1_footer.className= 'li_footer'
list_footer.appendChild(li1_footer)

let link1_footer = document.createElement('a')
link1_footer.className= 'link_footer'
link1_footer.href = 'https://www.facebook.com/profile.php?id=61567925104805'
link1_footer.target = '_blank';
li1_footer.appendChild(link1_footer)


let facebook = document.createElement('i')
facebook.className = 'fa-brands fa-facebook '
link1_footer.appendChild(facebook)


let li2_footer = document.createElement('li')
li2_footer.className= 'li_footer'
list_footer.appendChild(li2_footer)


let link2_footer = document.createElement('a')
link2_footer.className= 'link_footer'
link2_footer.href = 'https://www.instagram.com/abd_elrahmanyousry?igsh=MW1rczV6ZWI3N2Fpcw=='
link2_footer.target = '_blank';
li2_footer.appendChild(link2_footer)


let instagram = document.createElement('i')
instagram.className = 'fa-brands fa-instagram'
link2_footer.appendChild(instagram)



let li3_footer = document.createElement('li')
li3_footer.className= 'li_footer'
list_footer.appendChild(li3_footer)


let link3_footer = document.createElement('a')
link3_footer.className= 'link_footer'
link3_footer.href = 'https://wa.me/qr/6XILMR7K3LJAF1'
link3_footer.target = '_blank';
li3_footer.appendChild(link3_footer)



let whatsapp = document.createElement('i')
whatsapp.className = 'fa-brands fa-whatsapp '
link3_footer.appendChild(whatsapp)




let li4_footer = document.createElement('li')
li4_footer.className= 'li_footer'
list_footer.appendChild(li4_footer)



let link4_footer = document.createElement('a')
link4_footer.className= 'link_footer'
link4_footer.href = ''
link4_footer.target = '_blank';
li4_footer.appendChild(link4_footer)


let tiktok = document.createElement('i')
tiktok.className = 'fa-brands fa-tiktok '
link4_footer.appendChild(tiktok)


let li5_footer = document.createElement('li')
li5_footer.className= 'li_footer'
list_footer.appendChild(li5_footer)


let link5_footer = document.createElement('a')
link5_footer.className= 'link_footer'
link5_footer.href = 'https://www.linkedin.com/in/abdelrahman-yousry-5aa96235a?utm_source=share_via&utm_content=profile&utm_medium=member_android'
link5_footer.target = '_blank';
li5_footer.appendChild(link5_footer)


let linkedin = document.createElement('i')
linkedin.className = 'fa-brands fa-linkedin '
link5_footer.appendChild(linkedin)


let li6_footer = document.createElement('li')
li6_footer.className= 'li_footer'
list_footer.appendChild(li6_footer)


let link6_footer = document.createElement('a')
link6_footer.className= 'link_footer'
link6_footer.href = 'owner.html'
li6_footer.appendChild(link6_footer)


let owner = document.createElement('i')
owner.className = 'fa-solid fa-user-tie '
link6_footer.appendChild(owner)






let li7_footer = document.createElement('li')
li7_footer.className= 'li_footer'
list_footer.appendChild(li7_footer)




let link7_footer = document.createElement('a')
link7_footer.className= 'link_footer'
link7_footer.href = 'review.html'
li7_footer.appendChild(link7_footer)





let feedback = document.createElement('i')
feedback.className = 'fa-solid  fa-comment '
link7_footer.appendChild(feedback)

/*
let feedback2 = document.createElement('i')
feedback2.className = 'fa-solid  fa-star '
li7_footer.appendChild(feedback2)

*/


let li8_footer = document.createElement('li')
li8_footer.className= 'li_footer'
list_footer.appendChild(li8_footer)



let link8_footer = document.createElement('a')
link8_footer.className= 'link_footer'
link8_footer.href = 'https://maps.app.goo.gl/ZtSmrumjkGbvM8iY7'
link8_footer.target = '_blank'
li8_footer.appendChild(link8_footer)


let loc = document.createElement('i')
loc.className = 'fa-solid fa-location-dot '
link8_footer.appendChild(loc)


















let h3_footer = document.createElement('h3')
h3_footer.className = 'h3_footer'
h3_footer.textContent ='© 2026 Auto Car All rights reserved | Designed by Eng.AbdElrahman Yousry'
footer.appendChild(h3_footer)






facebook.addEventListener('mouseover', function(){
    facebook.style.transform = 'translateY(-10px)'
    facebook.style.boxShadow = 'transparent'
    facebook.style.transition = '0.3s'
    facebook.style.color = '#1877F2'
})
facebook.addEventListener('mouseout', function(){
    facebook.style.transform = 'translateY(0)'
    facebook.style.boxShadow = 'none'
    facebook.style.color = '#999999'

})

instagram.addEventListener('mouseover', function(){
    instagram.style.transform = 'translateY(-10px)'
    instagram.style.boxShadow = 'transparent'
    instagram.style.transition = '0.3s'
    instagram.style.color = '#E1306C'

})
instagram.addEventListener('mouseout', function(){
    instagram.style.transform = 'translateY(0)'
    instagram.style.boxShadow = 'none'
    instagram.style.color = '#999999'

})

whatsapp.addEventListener('mouseover', function(){
    whatsapp.style.transform = 'translateY(-10px)'
    whatsapp.style.boxShadow = 'transparent'
    whatsapp.style.transition = '0.3s'
    whatsapp.style.color = '#25D366'

})
whatsapp.addEventListener('mouseout', function(){
    whatsapp.style.transform = 'translateY(0)'
    whatsapp.style.boxShadow = 'none'
    whatsapp.style.color = '#999999'

})

tiktok.addEventListener('mouseover', function(){
    tiktok.style.transform = 'translateY(-10px)'
    tiktok.style.boxShadow = 'transparent'
    tiktok.style.transition = '0.3s'
    tiktok.style.color = '#FE2C55'

})
tiktok.addEventListener('mouseout', function(){
    tiktok.style.transform = 'translateY(0)'
    tiktok.style.boxShadow = 'none'
    tiktok.style.color = '#999999'

})

linkedin.addEventListener('mouseover', function(){
    linkedin.style.transform = 'translateY(-10px)'
    linkedin.style.boxShadow = 'transparent'
    linkedin.style.transition = '0.3s'
    linkedin.style.color = '#0A66C2'

})
linkedin.addEventListener('mouseout', function(){
    linkedin.style.transform = 'translateY(0)'
    linkedin.style.boxShadow = 'none'
    linkedin.style.color = '#999999'

})

owner.addEventListener('mouseover', function(){
    owner.style.transform = 'translateY(-10px)'
    owner.style.boxShadow = 'transparent'
    owner.style.transition = '0.3s'
    owner.style.color = '#495057'

})
owner.addEventListener('mouseout', function(){
    owner.style.transform = 'translateY(0)'
    owner.style.boxShadow = 'none'
    owner.style.color = '#999999'

})

feedback.addEventListener('mouseover', function(){
    feedback.style.transform = 'translateY(-10px)'
    feedback.style.boxShadow = 'transparent'
    feedback.style.transition = '0.3s'
    feedback.style.color = '#0D6EFD'

})
feedback.addEventListener('mouseout', function(){
    feedback.style.transform = 'translateY(0)'
    feedback.style.boxShadow = 'none'
    feedback.style.color = '#999999'

})

loc.addEventListener('mouseover', function(){
    loc.style.transform = 'translateY(-10px)'
    loc.style.boxShadow = 'transparent'
    loc.style.transition = '0.3s'
    loc.style.color = '#EA4335'

})
loc.addEventListener('mouseout', function(){
    loc.style.transform = 'translateY(0)'
    loc.style.boxShadow = 'none'
    loc.style.color = '#999999'

})






















let btn_video = document.querySelector('.btn')  // الزرار بتاع View Video
let video_modal = document.querySelector('.video_modal')
let close_video = document.querySelector('.close_video')
let video_player = document.querySelector('.video_player')

btn_video.addEventListener('click', function(){
    video_modal.style.display = 'flex'
})

close_video.addEventListener('click', function(){
    video_modal.style.display = 'none'
    video_player.pause()  // يوقف الفيديو لما تقفل
})

video_modal.addEventListener('click', function(e){
    if( e.target === video_modal ){   // لو دست برة الفيديو نفسه
        video_modal.style.display = 'none'
        video_player.pause()
    }
})
























let btn_360 = document.querySelectorAll('.btn')[1]   // زرار الواتساب
let view360_modal = document.querySelector('.view360_modal')
let close_360 = document.querySelector('.close_360')

btn_360.addEventListener('click', function(){
    view360_modal.style.display = 'flex'
})

close_360.addEventListener('click', function(){
    view360_modal.style.display = 'none'
})

view360_modal.addEventListener('click', function(e){
    if( e.target === view360_modal ){
        view360_modal.style.display = 'none'
    }
})












let lastScrollY = window.scrollY;




window.addEventListener('scroll' , function(){


    let currentScrollY = window.scrollY;

if (currentScrollY > lastScrollY && currentScrollY > 100) {
    nav.style.top = '-100px';
} else {
    nav.style.top = '0';
} 
lastScrollY = currentScrollY;
})