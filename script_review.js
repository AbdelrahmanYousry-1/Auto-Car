document.body.style.overflowX = "hidden";
document.body.style.margin = "0";





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




window.addEventListener('load' , function(){
    button_nav.classList.add('button_nav_show')
})





let title_nav = document.createElement('h2')
title_nav.className = 'title_nav'
title_nav.textContent = 'Auto '
nav.appendChild(title_nav)



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




window.addEventListener('load' , function(){
    title_nav.classList.add('title_nav_show')
})






/*

let home = document.createElement('div')
home.className = 'home'
document.body.append(home)

let div_text = document.createElement('div')
div_text.className = 'div_text'
home.appendChild(div_text)

let title_home = document.createElement('h2')
title_home.textContent = 'Auto Car'
title_home.className = 'title_home'
div_text.appendChild(title_home)

let p_home = document.createElement('p')
p_home.className = 'p_home'
//p_home.textContent = 'Explore our exclusive collection of luxury and performance vehicles from the world is top brands'
div_text.appendChild(p_home)

*/










let div_container = document.querySelector('.containr')







/*

let div_star = document.createElement('div')
div_star.className = 'div_star'
div_container.appendChild(div_star)

let img_star = document.createElement('img')
img_star.className = 'img_star'
img_star.src = 's.jpg'
div_star.appendChild(img_star)
*/









let div_tasks = document.createElement('div')
div_tasks.className = 'div_tasks  '
div_container.appendChild(div_tasks)

let h2_tasks = document.createElement('h2')
h2_tasks.className = 'h2_tasks'
h2_tasks.textContent = 'Customer Feedback'
div_tasks.appendChild(h2_tasks)


function checkTasks() {
    if (tasks.length === 0) {
        div_tasks.style.display = "none";
    } else {
        div_tasks.style.display = "block";
    }
}




let add_tasks = function(p_text)  {


let div_data = document.createElement('div')
div_data.className = 'div_data '
div_tasks.appendChild(div_data)


let text = document.createElement('p')
text.className = 'text'
text.textContent = p_text
div_data.appendChild(text)

let btn_del = document.createElement('button')
btn_del.className = 'btn_del'
btn_del.textContent = 'Delete'
div_data.appendChild(btn_del)


btn_del.addEventListener('click', function () {


    div_data.remove();

    let index = tasks.indexOf(p_text);

if (index !== -1) {
    tasks.splice(index, 1);
}

if (tasks.length === 0) {
    localStorage.removeItem("tasks");
} else {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

checkTasks();

});



}






let tasks = []
let saved = localStorage.getItem('tasks')

if(saved){
    tasks = JSON.parse(saved)

    for( let i = 0 ; i< tasks.length ; i++ ){
        add_tasks(tasks[i])

}}

checkTasks()






let submit = document.querySelector('.btn')

submit.addEventListener('click' , function(){

    let data = document.querySelector('.input_data')
    let d = data.value
    if( d.trim() === '' ){
        alert('please Write a review')
        return ;
    }
    data.textContent = d
    add_tasks(d)

    tasks.push(d)
    localStorage.setItem('tasks' , JSON.stringify(tasks))

checkTasks();
data.value = "";



} )

let form = document.querySelector('.form')

window.addEventListener('load' , function(){
    form.classList.add('form_show')
})























let footer = document.createElement('footer')
footer.className = 'footer'
document.body.appendChild(footer)

/*
let hr1 = document.createElement('hr')
hr1.className = 'hr3 '
footer.appendChild(hr1)
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
button1_footer.addEventListener('mouseover', function(){
    button1_footer.style.transform = 'translateY(-10px)'
    button1_footer.style.boxShadow = 'transparent'
    button1_footer.style.transition = '0.3s'
})
button1_footer.addEventListener('mouseout', function(){
    button1_footer.style.transform = 'translateY(0)'
    button1_footer.style.boxShadow = 'none'
})

button2_footer.addEventListener('mouseover', function(){
    button2_footer.style.transform = 'translateY(-10px)'
    button2_footer.style.boxShadow = 'transparent'
    button2_footer.style.transition = '0.3s'
})
button2_footer.addEventListener('mouseout', function(){
    button2_footer.style.transform = 'translateY(0)'
    button2_footer.style.boxShadow = 'none'
})

button3_footer.addEventListener('mouseover', function(){
    button3_footer.style.transform = 'translateY(-10px)'
    button3_footer.style.boxShadow = 'transparent'
    button3_footer.style.transition = '0.3s'
})
button3_footer.addEventListener('mouseout', function(){
    button3_footer.style.transform = 'translateY(0)'
    button3_footer.style.boxShadow = 'none'
})

button4_footer.addEventListener('mouseover', function(){
    button4_footer.style.transform = 'translateY(-10px)'
    button4_footer.style.boxShadow = 'transparent'
    button4_footer.style.transition = '0.3s'
})
button4_footer.addEventListener('mouseout', function(){
    button4_footer.style.transform = 'translateY(0)'
    button4_footer.style.boxShadow = 'none'
})

button5_footer.addEventListener('mouseover', function(){
    button5_footer.style.transform = 'translateY(-10px)'
    button5_footer.style.boxShadow = 'transparent'
    button5_footer.style.transition = '0.3s'
})
button5_footer.addEventListener('mouseout', function(){
    button5_footer.style.transform = 'translateY(0)'
    button5_footer.style.boxShadow = 'none'
})

button6_footer.addEventListener('mouseover', function(){
    button6_footer.style.transform = 'translateY(-10px)'
    button6_footer.style.boxShadow = 'transparent'
    button6_footer.style.transition = '0.3s'
})
button6_footer.addEventListener('mouseout', function(){
    button6_footer.style.transform = 'translateY(0)'
    button6_footer.style.boxShadow = 'none'
})

button7_footer.addEventListener('mouseover', function(){
    button7_footer.style.transform = 'translateY(-10px)'
    button7_footer.style.boxShadow = 'transparent'
    button7_footer.style.transition = '0.3s'
})
button7_footer.addEventListener('mouseout', function(){
    button7_footer.style.transform = 'translateY(0)'
    button7_footer.style.boxShadow = 'none'
})

button8_footer.addEventListener('mouseover', function(){
    button8_footer.style.transform = 'translateY(-10px)'
    button8_footer.style.boxShadow = 'transparent'
    button8_footer.style.transition = '0.3s'
})
button8_footer.addEventListener('mouseout', function(){
    button8_footer.style.transform = 'translateY(0)'
    button8_footer.style.boxShadow = 'none'
})
  

*/










window.addEventListener('load' , function(){
/*   if( window.innerWidth >= 481 && window.innerWidth <= 1441 ){
        return
    } */
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