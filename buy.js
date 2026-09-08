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





let title_nav = document.createElement('h2')
title_nav.className = 'title_nav'
title_nav.textContent = 'Auto '
nav.appendChild(title_nav)

//title_nav.style.color = 'white'

let span_logo = document.createElement("span") 
span_logo.className = "span_logo"
span_logo.textContent = 'Car'
title_nav.appendChild(span_logo)


let div_logo = document.createElement('div')
div_logo.className = 'div_logo'
nav.appendChild(div_logo)

let img_logo = document.createElement('img')
img_logo.className = 'img_logo'
img_logo.src = 'lo12.png'
div_logo.appendChild(img_logo)









let home = document.createElement('div')
home.className = 'home'
document.body.append(home)

let div_text1 = document.createElement('div')
div_text1.className = 'div_text1'
home.appendChild(div_text1)

let title_home = document.createElement('h2')
title_home.textContent = 'Auto Car'
title_home.className = 'title_home'
div_text1.appendChild(title_home)

let p_home = document.createElement('p')
p_home.className = 'p_home'
//p_home.textContent = 'Explore our exclusive collection of luxury and performance vehicles from the world is top brands'
div_text1.appendChild(p_home)











let div_container = document.createElement('div')
div_container.className = 'div_container'
document.body.appendChild(div_container)




let hr0 = document.createElement('hr')
hr0.className = 'hr3'
div_container.appendChild(hr0)



let div_text = document.createElement('div')
div_text.className = 'div_text'
div_container.appendChild(div_text)

let title_about = document.createElement('h1')
title_about.className = 'title_about'
title_about.textContent = 'Payment Method'
div_text.appendChild(title_about)






let div_buy = document.createElement('div')
div_buy.className = 'div_buy'
div_container.appendChild(div_buy)


let img = document.createElement('img')
img.className = 'img'
img.src = 'card4.png'
div_buy.appendChild(img)



let div_data = document.createElement('div')
div_data.className = 'div_data'
div_container.appendChild(div_data)











let div_button = document.createElement('div')
div_button.className = 'div_button'
div_data.appendChild(div_button)

let button_card = document.createElement('button')
button_card.className = 'button_card '
button_card.textContent = 'Bank Card'
div_button.appendChild(button_card)

let img_card = document.createElement('img')
img_card.className = 'img_card'
img_card.src = 'card_btn.png'
button_card.appendChild(img_card)




let button_cash = document.createElement('button')
button_cash.className = 'button_cash'
button_cash.textContent = 'Vodafone Cash'
div_button.appendChild(button_cash)

let img_cash = document.createElement('img')
img_cash.className = 'img_cash'
img_cash.src = 'chip.png'
button_cash.appendChild(img_cash)



/*
let div_input = document.createElement('div')
div_input.className = 'div_input'
div_data.appendChild(div_input)
*/


let form = document.createElement('form')
form.className = 'form form_hidden'
div_data.appendChild(form)



let label_name = document.createElement('label')
label_name.className = 'label'
label_name.textContent = 'Name:'
form.appendChild(label_name)

let input_name = document.createElement('input')
input_name.className = 'input'
input_name.type = 'text'
input_name.placeholder = 'Entar your name'
form.appendChild(input_name)

let label_number = document.createElement('label')
label_number.className = 'label'
label_number.textContent = 'Number of Card:'
form.appendChild(label_number)



let div_icone = document.createElement('div')
div_icone.className = 'div_icone'
form.appendChild(div_icone)

let input_number = document.createElement('input')
input_number.className = 'input'
input_number.type = 'number'
input_number.placeholder = 'Entar your number'
div_icone.appendChild(input_number)


let img2_card = document.createElement('img')
img2_card.className = 'img2_card'
img2_card.src = 'card5.png'
div_icone.appendChild(img2_card)




let div_inputs = document.createElement('div')
div_inputs.className = 'div_inputs'
form.appendChild(div_inputs)






let div_MM = document.createElement('div')
div_MM.className = 'div_MM'
div_inputs.appendChild(div_MM)


let input_MM = document.createElement('input')
input_MM.className = 'input_MM'
input_MM.type = 'number'
input_MM.placeholder = 'MM/YY'
div_MM.appendChild(input_MM)







let div_date_ = document.createElement('div')
div_date_.className = 'div_date_'
div_inputs.appendChild(div_date_)

let label_date = document.createElement('label')
label_date.className = 'label_date'
label_date.textContent = 'Date'
div_date_.appendChild(label_date)

let input_date = document.createElement('input')
input_date.className = 'input_date'
input_date.type = ''
input_date.placeholder = ''
div_date_.appendChild(input_date)




let div_cvv = document.createElement('div')
div_cvv.className = 'div_cvv'
div_inputs.appendChild(div_cvv)


let label_cvv = document.createElement('label')
label_cvv.className = 'label_cvv'
label_cvv.textContent = 'CVV'
div_cvv.appendChild(label_cvv)

let input_cvv = document.createElement('input')
input_cvv.className = 'input_cvv'
input_cvv.type = 'password'
input_cvv.placeholder = ''
div_cvv.appendChild(input_cvv)




input_name.required = true;
input_number.required = true;
input_MM.required = true;
input_date.required = true;
input_cvv.required = true;





let button_buy = document.createElement('button')
button_buy.className = 'button_buy'
button_buy.textContent = 'Pay Now'
button_buy.type = 'submit'
form.appendChild(button_buy)



button_buy.addEventListener('mouseover', function(){
    button_buy.style.transform = 'translateY(-5px)'
    button_buy.style.boxShadow = '0 10px 20px black'
    button_buy.style.transition = '0.3s'
})
button_buy.addEventListener('mouseout', function(){
    button_buy.style.transform = 'translateY(0)'
    button_buy.style.boxShadow = 'none'
})



/*
button_cash.addEventListener('click' , function(){
    form.classList.add('form_hidden')
    button_cash.classList.add('active')
        document.body.style.height = '125vh'

})


button_card.addEventListener('click' , function(){
    form.classList.remove('form_hidden')
        button_cash.classList.remove('active')
            document.body.style.height = '125vh'


})



button_card.addEventListener('click' , function(){
    form2.classList.add('form_hidden')
    button_card.classList.add('active')
        document.body.style.height = '145vh'

})


button_cash.addEventListener('click' , function(){
    form2.classList.remove('form_hidden')
        button_card.classList.remove('active')
            document.body.style.height = '145vh'


})



*/

let form2 = document.createElement('form')
form2.className = 'form form_hidden '
div_data.appendChild(form2)


let label_num_cash = document.createElement('label')
label_num_cash.className = 'label'
label_num_cash.textContent = 'Number The Phone:'
form2.appendChild(label_num_cash)


let div_icone_cash = document.createElement('div')
div_icone_cash.className = 'div_icone'
form2.appendChild(div_icone_cash)



let input_num_cash = document.createElement('input')
input_num_cash.className = 'input'
input_num_cash.type = 'number'
input_num_cash.placeholder = 'Entar your Phone Number'
div_icone_cash.appendChild(input_num_cash)


let img2_cash = document.createElement('img')
img2_cash.className = 'img2_card'
img2_cash.src = 'cash.png'
div_icone_cash.appendChild(img2_cash)



let button_buy_cash = document.createElement('button')
button_buy_cash.className = 'button_buy'
button_buy_cash.textContent = 'Pay Now'
button_buy_cash.type = 'submit'
form2.appendChild(button_buy_cash)



input_num_cash.required = 'true'


button_buy_cash.addEventListener('mouseover', function(){
    button_buy_cash.style.transform = 'translateY(-5px)'
    button_buy_cash.style.boxShadow = '0 10px 20px black'
    button_buy_cash.style.transition = '0.3s'
})
button_buy_cash.addEventListener('mouseout', function(){
    button_buy_cash.style.transform = 'translateY(0)'
    button_buy_cash.style.boxShadow = 'none'
})







button_card.addEventListener('click' , function(){
    form.classList.toggle('form_hidden')
    button_card.classList.toggle('active')
    document.body.classList.toggle('body-height');
    document.body.classList.remove('body-height2');
   
    form2.classList.add('form_hidden')
    button_cash.classList.remove('active')
 
})


button_cash.addEventListener('click' , function(){
    form2.classList.toggle('form_hidden')
        button_cash.classList.toggle('active')
    document.body.classList.toggle('body-height2');
        document.body.classList.remove('body-height');

    form.classList.add('form_hidden')
    button_card.classList.remove('active')


})



button_card.addEventListener('mouseover', function(){
    button_card.style.transform = 'translateY(-10px)'
    button_card.style.boxShadow = '0 10px 20px white'
    button_card.style.transition = '0.3s'
})
button_card.addEventListener('mouseout', function(){
    button_card.style.transform = 'translateY(0)'
    button_card.style.boxShadow = 'none'
})


button_cash.addEventListener('mouseover', function(){
    button_cash.style.transform = 'translateY(-10px)'
    button_cash.style.boxShadow = '0 10px 20px white'
    button_cash.style.transition = '0.3s'
})
button_cash.addEventListener('mouseout', function(){
    button_cash.style.transform = 'translateY(0)'
    button_cash.style.boxShadow = 'none'
})

/*

button_card.addEventListener('click', function(){

        if(button_card.classList.contains('active')){
        button_card.style.transform = 'translateY(-10px)'
        button_card.style.boxShadow = 'none'
    }
})
button_card.addEventListener('click', function(){
        if(!button_card.classList.contains('active')){
        button_card.style.transform = 'translateY(-10px)'
        button_card.style.boxShadow = 'none'
    }
})

*/




/*
button_cash.addEventListener('dblclick' , function(){
    form2.classList.add('form_hidden')
})

*/









/*
let div_text = document.createElement('div')
div_text.className = 'div_text'
div_about.appendChild(div_text)

let title_about = document.createElement('h1')
title_about.className = 'title_about'
title_about.textContent = 'Range Rover Sport'
div_text.appendChild(title_about)


let p_about = document.createElement('p')
p_about.className = 'p_about'
p_about.textContent = `the Range Rover Sport is a premium luxury SUV that perfectly blends powerful performance, sophisticated design, and cutting-edge technology into one exceptional vehicle. Designed for drivers who demand both comfort and capability, the Range Rover Sport delivers an exhilarating driving experience on every journey`
div_text.appendChild(p_about)


*/

window.addEventListener('load' , function(){
    title_nav.classList.add('title_nav_show')
})
window.addEventListener('load' , function(){
    button_nav.classList.add('button_nav_show')
})

window.addEventListener('load' , function(){
    img.classList.add('img_show')
})

window.addEventListener('load' , function(){
    div_data.classList.add('data_show')
})

window.addEventListener('load' , function(){
    title_about.classList.add('title_show')
})































let footer = document.createElement('footer')
footer.className = 'footer'
document.body.appendChild(footer)



let hr1 = document.createElement('hr')
hr1.className = 'hr3 '
footer.appendChild(hr1)



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
link6_footer.target = '_blank'

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


















/*

window.addEventListener('load' , function(){

   
    if( window.innerWidth >= 481 && window.innerWidth <= 576 ){
        return
    }

    list.classList.add('list_hide')
    logo.remove()
    div_logo.style.cssText = '    margin-left: 47%;'
    nav.style.background = ' linear-gradient(90deg, transparent, transparent, #fffffe, transparent, transparent)  '
})
*/

window.addEventListener('load' , function(){
   if( window.innerWidth >= 481 && window.innerWidth <= 1441 ){
  // div_logo.style.cssText = '    margin-left: 40%;'
    } 
    title_nav.remove()
   div_logo.style.cssText = '    margin-left: 47%;'
    nav.style.background = ' linear-gradient(90deg, transparent, transparent, #ffffff, transparent, transparent)  '
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
