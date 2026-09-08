document.body.style.overflowX = "hidden";
document.body.style.margin = "0";
//document.documentElement.style.overflowY = "scroll";



let nav = document.createElement('nav')
nav.className = 'nav'
document.body.append(nav)


let button_nav = document.createElement('button')
button_nav.className = 'button_nav'
nav.appendChild(button_nav)

button_nav.onclick = function(){
    history.back() ;
}

let img_button = document.createElement('img')
img_button.className = 'img_button'
img_button.src = 'pre3.png'
button_nav.appendChild(img_button)





let div_logo = document.createElement('div')
div_logo.className = 'div_logo'
nav.appendChild(div_logo)

let img_logo = document.createElement('img')
img_logo.className = 'img_logo'
img_logo.src = 'lo12.png'
div_logo.appendChild(img_logo)




let title_nav = document.createElement('h2')
title_nav.className = 'title_nav'
//title_nav.textContent = 'owner the bussines'
nav.appendChild(title_nav)

//title_nav.style.color = 'white'











let home = document.createElement('div')
home.className = 'home'
document.body.append(home)

let div_text_home = document.createElement('div')
div_text_home.className = 'div_text_home'
home.appendChild(div_text_home)

let title_home = document.createElement('h2')
title_home.textContent = 'Auto Car'
title_home.className = 'title_home'
div_text_home.appendChild(title_home)

let p_home = document.createElement('p')
p_home.className = 'p_home'
//p_home.textContent = 'Explore our exclusive collection of luxury and performance vehicles from the world is top brands.'
div_text_home.appendChild(p_home)












let div_container = document.createElement('div')
div_container.className = 'div_container'
document.body.appendChild(div_container)

let div_about = document.createElement('div')
div_about.className = 'div_about'
div_container.appendChild(div_about)



let div_first = document.createElement('div')
div_first.className = 'div_first'
div_about.appendChild(div_first)


let me = document.createElement('img')
me.className = 'me'
me.src = 'me3.jpeg'
div_first.appendChild(me)


let div_tex = document.createElement('div')
div_tex.className = 'div_tex'
div_first.appendChild(div_tex)



let title_p1 = document.createElement('p')
title_p1.className = 'title_p'
title_p1.textContent = 'Founder & owner'
div_tex.appendChild(title_p1)

let title_me = document.createElement('h1')
title_me.className = 'title_me'
title_me.textContent = 'Eng.AbdElrahman Yousry'
div_tex.appendChild(title_me)



let title_p2 = document.createElement('p')
title_p2.className = 'title_p'
title_p2.textContent = 'Luxury car showroom — Port-said, Egypt'
div_tex.appendChild(title_p2)


/*
let img_f = document.createElement('img')
img_f.className = 'img_f'
img_f.src = 'q4.png'
div_first.appendChild(img_f)
*/



let hr = document.createElement('hr')
hr.className = 'hr'
div_container.appendChild(hr)






let div_tow = document.createElement('div')
div_tow.className = 'div_tow'
div_container.appendChild(div_tow)



let div_b = document.createElement('div')
div_b.className = 'div_b'
div_tow.appendChild(div_b)


let div_1= document.createElement('div')
div_1.className = 'div_1'
div_b.appendChild(div_1)


let h2_1 = document.createElement('h2')
h2_1.className = 'h2_1'
h2_1.textContent = '15'
div_1.appendChild(h2_1)


let p_1 = document.createElement('p')
p_1.className = 'p_1'
p_1.textContent = 'Branches'
div_1.appendChild(p_1)





let div_2= document.createElement('div')
div_2.className = 'div_2'
div_b.appendChild(div_2)


let h2_2 = document.createElement('h2')
h2_2.className = 'h2_2'
h2_2.textContent = '4000+'
div_2.appendChild(h2_2)


let p_2 = document.createElement('p')
p_2.className = 'p_2'
p_2.textContent = 'Cars sold'
div_2.appendChild(p_2)





let div_3= document.createElement('div')
div_3.className = 'div_3'
div_b.appendChild(div_3)


let h2_3 = document.createElement('h2')
h2_3.className = 'h2_3'
h2_3.textContent = '30+'
div_3.appendChild(h2_3)


let p_3 = document.createElement('p')
p_3.className = 'p_3'
p_3.textContent = 'Years of experience'
div_3.appendChild(p_3)



let div_c= document.createElement('div')
div_c.className = 'div_c'
div_tow.appendChild(div_c)


let img_b = document.createElement('img')
img_b.className = 'img_b'
img_b.src = 'q4.png'
div_c.appendChild(img_b)



let div_three = document.createElement('div')
div_three.className = 'div_three'
div_container.appendChild(div_three)


let p_4 = document.createElement('p')
p_4.className = 'p_4'
p_4.textContent = 'Specialized in selling and evaluating luxury and used cars, with years of extensive experience in the Egyptian market, committed to transparency and quality in every deal. Built a trusted reputation through honest pricing, thorough vehicle inspections, and personalized service tailored to each client is needs. Passionate about connecting customers with their ideal car, whether it is a first-time purchase or a premium upgrade, while maintaining long-term relationships built on trust and reliability.'
div_three.appendChild(p_4)




let hr2 = document.createElement('hr')
hr2.className = 'hr2'
div_container.appendChild(hr2)





let div_con = document.createElement('div')
div_con.className = 'div_con'
div_container.appendChild(div_con)








let div_four = document.createElement('div')
div_four.className = 'div_four'
div_con.appendChild(div_four)




let div_t_1= document.createElement('div')
div_t_1.className = 'div_t_1'
div_four.appendChild(div_t_1)


let phone = document.createElement('i')
phone.className = 'fa-solid fa-phone'
div_t_1.appendChild(phone)


let phone_num = document.createElement('h2')
phone_num.className = 'phone_num'
phone_num.textContent = '01061537137'
div_t_1.appendChild(phone_num)



let div_t_2= document.createElement('div')
div_t_2.className = 'div_t_1'
div_four.appendChild(div_t_2)


let email = document.createElement('i')
email.className = 'fa-solid fa-envelope'
div_t_2.appendChild(email)


let email_text = document.createElement('h2')
email_text.className = 'email_text'
email_text.textContent = 'abdelrahmanyousry113@gmail.com'
div_t_2.appendChild(email_text)



let div_t_3= document.createElement('div')
div_t_3.className = 'div_t_1'
div_four.appendChild(div_t_3)


let addres = document.createElement('i')
addres.className = 'fa-solid fa-map-location-dot'
div_t_3.appendChild(addres)


let adress_text = document.createElement('h2')
adress_text.className = 'adress_text'
adress_text.textContent = 'Port-said'
div_t_3.appendChild(adress_text)





let div_five = document.createElement('div')
div_five.className = 'div_five'
div_con.appendChild(div_five)





let frame = document.createElement('iframe')
frame.className='frame'
frame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22943.54602961357!2d32.276793755240334!3d31.260091032213463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c3e939e6b99%3A0x4cae04550f7d4cb3!2sPort%20Said%2C%20Port%20Fouad%20City%2C%20Port%20Said%20Governorate!5e0!3m2!1sen!2seg!4v1788023156942!5m2!1sen!2seg"
//frame.height = '400'
frame.loading = 'lazy';
frame.allowFullscreen = true;
frame.referrerPolicy = 'strict-origin-when-cross-origin';
div_five.appendChild(frame)





/*


let div_text = document.createElement('div')
div_text.className = 'div_text'
div_about.appendChild(div_text)

let title_about = document.createElement('h1')
title_about.className = 'title_about'
title_about.textContent = 'Eng.AbdElrahman'
div_text.appendChild(title_about)


let p_about = document.createElement('p')
p_about.className = 'p_about'
p_about.textContent = `Abdelrahman is a successful businessman and a student at the Faculty of Computers and Information, Suez Canal University. He is also the founder and owner of a major car business called Auto Car.`
div_text.appendChild(p_about)



let div_img = document.createElement('div')
div_img.className = 'div_img'
div_about.appendChild(div_img)


let img = document.createElement('img')
img.className = 'img'
img.src = 'me.png'
div_img.appendChild(img)


window.addEventListener("load", function () {
    img.classList.add("show");
});

*/




let footer = document.createElement('footer')
footer.className = 'footer'
document.body.appendChild(footer)


/*
let hr3 = document.createElement('hr')
hr3.className = 'hr3 '
footer.appendChild(hr3)
*/
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
















window.addEventListener('load' , function(){
    title_nav.classList.add('title_nav_show')
})
window.addEventListener('load' , function(){
    button_nav.classList.add('button_nav_show')
})
window.addEventListener('load' , function(){
    div_text.classList.add('div_text_show')
})






























let lastScrollY = window.scrollY;




window.addEventListener('scroll' , function(){

   /* if( window.innerWidth >= 481 && window.innerWidth <= 576 ){
        return
    }   */
    let currentScrollY = window.scrollY;

if (currentScrollY > lastScrollY && currentScrollY > 100) {
    nav.style.top = '-100px';
} else {
    nav.style.top = '0';
} 
lastScrollY = currentScrollY;
})