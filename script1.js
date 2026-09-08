/*
let confettiScript = document.createElement('script')
confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js'
document.head.appendChild(confettiScript)
*/
document.body.style.overflowX = "hidden";
document.body.style.margin = "0";
//document.body.style.padding = "0";

//document.body.style.cssText = ' padding-left :10px' ;

document.documentElement.style.overflowY = "scroll";


let nav = document.createElement('nav') 
nav.className = "nav nav_home "

let logo = document.createElement("h1") 
logo.className = "logo logo_home "
logo.textContent = 'Auto '


let span_logo = document.createElement("span") 
span_logo.className = "span_logo span_home "
span_logo.textContent = 'Car'
logo.appendChild(span_logo)
 


//logo.appendChild(text_logo)
nav.appendChild(logo)
 
logo.style.cssText = '   ; color: black;  '


let div_logo = document.createElement('div')
div_logo.className = 'div_logo div_logo_home '
nav.appendChild(div_logo)

let img_logo = document.createElement('img')
img_logo.className = 'img_logo img_logo_home '
img_logo.src = 'lo12.png'
div_logo.appendChild(img_logo)










let list = document.createElement('ul')
list.className = "list"
nav.appendChild(list)

let li1 = document.createElement('li')
let li1_button = document.createElement('button')
li1_button.className = 'li_button'
li1_button.textContent = 'Home'
li1.appendChild(li1_button)

li1_button.addEventListener('click' , function(){
    home.scrollIntoView( { behavior : "smooth" } )
})


let li2 = document.createElement('li')
let li2_button = document.createElement('button')
li2_button.className = 'li_button'
li2_button.textContent = 'Product'
li2.appendChild(li2_button)

li2_button.addEventListener( 'click' , function(){
    div_child.scrollIntoView( {behavior:"smooth"} )
} )


let li3 = document.createElement('li')
let li3_button = document.createElement('button')
li3_button.className = 'li_button'
li3_button.textContent = 'About'
li3.appendChild(li3_button)

li3_button.addEventListener( 'click' , function(){
    div_about.scrollIntoView( {behavior:"smooth"} )
} )



let li4 = document.createElement('li')
let li4_button = document.createElement('button')
li4_button.className = 'li_button'
li4_button.textContent = 'Contact'
li4.appendChild(li4_button)


li4_button.addEventListener( 'click' , function(){
    div_contact.scrollIntoView( {behavior:"smooth"} )
} )


let li5 = document.createElement('li')
let hump = document.createElement('button')
let span1 = document.createElement('span')
let span2 = document.createElement('span')
let span3 = document.createElement('span')
hump.appendChild(span1)
hump.appendChild(span2)
hump.appendChild(span3)
li5.appendChild(hump)

hump.className = 'hump'
span1.className = 'span'
span2.className = 'span'
span3.className = 'span'




//hump.style.cssText = ' display: flex;  flex-direction: column;   background-color: #000000 ;   border: none;    padding-top:10px  ;   gap: 5px;   margin: auto;    cursor: pointer;   padding-bottom: 10px;padding-left: 15px; padding-right: 15px;    position: relative; top: 7px; '
let span_style = '    display: flex;    width: 20px;    height: 2px;      background:linear-gradient(90deg, #999999, #bbbbbb, #dfdfdf, #bbbbbb, #999999);'
span1.style.cssText = span_style
span2.style.cssText = span_style
span3.style.cssText = span_style

list.appendChild(li1) 
list.appendChild(li2) 
list.appendChild(li3) 
list.appendChild(li4) 
list.appendChild(li5)

document.body.appendChild(nav)
li1.className= 'li'
li2.className = 'li'
li3.className = 'li'
li4.className = 'li'

//nav.style.cssText = '     display: flex;  padding-top: 5px; justify-content: space-between; color: #A6800D ; background-color: black ; ' ;
//list.style.cssText = '  list-style: none ;  display: flex ; margin-left: auto ; padding-bottom:15px; font-size:20px ; padding-right:40px; '
 //li1.style.cssText = '   padding-left: 10px;  padding-right: 0px; margin-right: 25px; padding-top: 15px;   '
 //li2.style.cssText = '   padding-left: 10px;  padding-right: 0px; margin-right: 25px; padding-top: 15px;   '
 //li3.style.cssText = '   padding-left: 10px;  padding-right: 0px; margin-right: 25px; padding-top: 15px;   '
 //li4.style.cssText = '   padding-left: 10px;  padding-right: 0px; margin-right: 25px; padding-top: 15px;   ' 

li1.style.cursor = 'pointer'
li2.style.cursor = 'pointer'
li3.style.cursor = 'pointer'
li4.style.cursor = 'pointer'




li1_button.addEventListener( 'mouseover' , function(){
    li1_button.style.color= 'white'
} )
li1_button.addEventListener( 'mouseout' , function(){
    li1_button.style.color= ''
} )
li2_button.addEventListener('mouseover' , function(){
    li2_button.style.color='white'
})
li2_button.addEventListener('mouseout' ,function(){
    li2_button.style.color=''
})
li3_button.addEventListener('mouseover' , function(){
    li3_button.style.color='white'
})
li3_button.addEventListener('mouseout' ,function(){
    li3_button.style.color=''
})
li4_button.addEventListener('mouseover' , function(){
    li4_button.style.color='white'
})
li4_button.addEventListener('mouseout' ,function(){
    li4_button.style.color=''
})
hump.addEventListener('mouseover', function(){
    span1.style.backgroundColor = 'white'
    span2.style.backgroundColor = 'white'
    span3.style.backgroundColor = 'white'
})
hump.addEventListener('mouseout', function(){
    span1.style.backgroundColor = '#A6800D'
    span2.style.backgroundColor = '#A6800D'
    span3.style.backgroundColor = '#A6800D'
})






let mobileMenu = document.createElement('div')
mobileMenu.className = 'mobile-menu'

let m1 = document.createElement('a')
m1.textContent = 'Home'
let m2 = document.createElement('a')
m2.textContent = 'Product'
let m3 = document.createElement('a')
m3.textContent = 'About'
let m4 = document.createElement('a')
m4.textContent = 'Contact'

mobileMenu.appendChild(m1)
mobileMenu.appendChild(m2)
mobileMenu.appendChild(m3)
mobileMenu.appendChild(m4)

document.body.appendChild(mobileMenu)

mobileMenu.style.cssText = '   display: flex;  flex-direction: column;  position: fixed;  top: 0px;  right: 0;  height: 100vh;   background-color: black;   gap: 30px;  z-index: 999;  transform: translateX(100%);  transition: transform 0.3s ease;  '


let link_style = ' color: #A6800D; text-decoration: none; font-size: 18px; '
m1.style.cssText = link_style
m2.style.cssText = link_style
m3.style.cssText = link_style
m4.style.cssText = link_style


m1.style.cursor = 'pointer'
m2.style.cursor = 'pointer'
m3.style.cursor = 'pointer'
m4.style.cursor = 'pointer'




m1.addEventListener( 'click' , function(){
    home.scrollIntoView( { behavior: 'smooth' } )
} )

m2.addEventListener( 'click' , function(){
    div_child.scrollIntoView( { behavior: 'smooth' } )
} )
m3.addEventListener( 'click' , function(){
    div_about.scrollIntoView( { behavior: 'smooth' } )
} )
m4.addEventListener( 'click' , function(){
    div_contact.scrollIntoView( { behavior: 'smooth' } )
} )




m1.addEventListener( 'mouseover' , function(){
    m1.style.color= 'white'
} )
m1.addEventListener( 'mouseout' , function(){
    m1.style.color= '#A6800D'
} )
m2.addEventListener('mouseover' , function(){
    m2.style.color='white'
})
m2.addEventListener('mouseout' ,function(){
    m2.style.color='#A6800D'
})
m3.addEventListener('mouseover' , function(){
    m3.style.color='white'
})
m3.addEventListener('mouseout' ,function(){
    m3.style.color='#A6800D'
})
m4.addEventListener('mouseover' , function(){
    m4.style.color='white'
})
m4.addEventListener('mouseout' ,function(){
    m4.style.color='#A6800D'
})
let isOpen = false

hump.addEventListener('click', function(){
    if(isOpen){
        mobileMenu.style.transform = 'translateX(100%)'
        isOpen = false
    } else {
        mobileMenu.style.transform = 'translateX(0)'
        isOpen = true
    }
})


nav.style.zIndex= '1000'
//nav.style.position= 'relative'



let home = document.createElement('div')
home.className = 'home'
document.body.append(home)





let div_text = document.createElement('div')
div_text.className = 'div_text'
home.appendChild(div_text)

let title_home = document.createElement('h2')
title_home.textContent = 'Discover Your Dream Car'
title_home.className = 'title_home'
div_text.appendChild(title_home)

let p_home = document.createElement('p')
p_home.className = 'p_home'
p_home.textContent = 'Explore our exclusive collection of luxury and performance vehicles from the world is top brands'
div_text.appendChild(p_home)




















let div_container =  document.createElement('div') ;
div_container.className = "container" ;
document.body.append(div_container)
div_container.style.cssText = '  background:linear-gradient(90deg, #999999, #bbbbbb, #dfdfdf, #bbbbbb, #999999);     min-height: calc(100vh - 100px); margin: 0 ;box-sizing: border-box;  padding-bottom:0px;  ' ;
// 


let hr0 = document.createElement('hr')
hr0.className = 'hr3'
div_container.appendChild(hr0)



let Featured_div = document.createElement('div')
Featured_div.className = 'div_f'
div_container.appendChild(Featured_div)

let Featured_text = document.createElement('h2')
Featured_text.className = 'f_text'
Featured_text.textContent = 'premium Cars'
Featured_div.appendChild(Featured_text)




let div_con = document.createElement('div') ;
div_con.className = 'div_con'
div_container.appendChild(div_con)



let div_child = document.createElement('div') ;
div_con.appendChild(div_child)
div_child.style.cssText = ' padding-top: 20px; padding-bottom: 50px; padding-right:35px; flex-wrap:wrap ; width:100% ; row-gap:30px ; align-items: center ; width:100% ; display:flex ; justify-content: center ;'
//let card = ' flex-direction:column; background: white ; border-radius:5px;   display:flex ; align-items: center ; justify-content: flex-start; overflow: hidden; position: relative; '

div_child.className = 'div_child'



let add_product = function( img , title , aycon_1 , aycon_2 , aycon_3 , f1 ,f2 ,f3 , href , href2 ) {
let div_child1 = document.createElement('div') ;
//div_container.appendChild(div_child1)
div_child.appendChild(div_child1)
div_child1.className = 'card'

let card = ' flex-direction:column; background: white ; border-radius:5px;   display:flex ; align-items: center ; justify-content: flex-start; overflow: hidden; position: relative; '
div_child1.style.cssText = card


let img1 = document.createElement('img')
img1.className = 'img_style'
img1.src = img
div_child1.appendChild(img1)
img1.style.cssText = ' height: 45%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '


let title_product1 = document.createElement('div')
title_product1.className = 'title_product'
div_child1.appendChild(title_product1)

let title1 = document.createElement('h2')
title1.className = 'title'
title1.textContent = title
title_product1.appendChild(title1)



let about_product1 = document.createElement('div')
about_product1.className = 'about_product1'
div_child1.appendChild(about_product1)

let list1_product = document.createElement('ul')
list1_product.className = 'list_about_product'
about_product1.appendChild(list1_product)

let li1_product = document.createElement('li')
let aycon1 = document.createElement('img')
aycon1.className = 'aycons  aycon1'
aycon1.src = aycon_1
li1_product.appendChild(aycon1)

let p1_product1 = document.createElement('p')
p1_product1.className = 'p_product'
p1_product1.textContent = f1
li1_product.appendChild(p1_product1)


let li2_product = document.createElement('li')
let aycon2 = document.createElement('img')
aycon2.className = 'aycons aycon2'
aycon2.src = aycon_2
li2_product.appendChild(aycon2)
let p2_product1 = document.createElement('p')
p2_product1.className = 'p_product'
p2_product1.textContent = f2
li2_product.appendChild(p2_product1)

let li3_product = document.createElement('li')
let aycon3 = document.createElement('img')
aycon3.className = 'aycons aycon3'
aycon3.src = aycon_3
li3_product.appendChild(aycon3)
let p3_product1 = document.createElement('p')
p3_product1.className = 'p_product'
p3_product1.textContent = f3
li3_product.appendChild(p3_product1)


li1_product.className = 'li_product'
li2_product.className = 'li_product'
li3_product.className = 'li_product'

list1_product.appendChild(li1_product)
list1_product.appendChild(li2_product)
list1_product.appendChild(li3_product)


let div_button = document.createElement('div')
div_button.className = 'div_button'

let button_product1 = document.createElement('button')
button_product1.className = 'button_product1'
button_product1.textContent = 'View Details'
div_button.appendChild(button_product1)


button_product1.addEventListener('click' , function(){
    window.location.href = href
})














let button1 = document.createElement('button')
button1.className ='button_product2'
button1.textContent = 'Buy Now'
div_button.appendChild(button1)
div_child1.appendChild(div_button)
//button1.style.cssText = ' padding: 10px 30px; border: none; background-color: #000000; color: #A6800D; border-radius: 5px; cursor: pointer; font-size: 14px;'
//div_button.style.cssText = ' width: 100%; flex: 1; display: flex; align-items: center; justify-content: center; background-color: #C4C4C4; box-sizing: border-box;  '

button1.addEventListener('click' , function(){
    window.location.href = href2
})



div_child1.addEventListener('mouseover' , function(){
        div_child1.style.transform = 'translateY(-20px)'
        div_child1.style.boxShadow = '0 10px 20px black'
        div_child1.style.transition = '0.3s'

})
div_child1.addEventListener('mouseout' , function(){
        div_child1.style.transform = 'translateY(0)'
        div_child1.style.boxShadow = 'none'

})


button_product1.addEventListener('mouseover' , function(){
        button_product1.style.transform = 'translateY(-5px)'
        button_product1.style.boxShadow = '0 10px 20px black'
        button_product1.style.transition = '0.3s'

})
button_product1.addEventListener('mouseout' , function(){
        button_product1.style.transform = 'translateY(0)'
        button_product1.style.boxShadow = 'none'

})

button1.addEventListener('mouseover' , function(){
        button1.style.transform = 'translateY(-5px)'
        button1.style.boxShadow = '0 10px 20px black'
        button1.style.transition = '0.3s'

})
button1.addEventListener('mouseout' , function(){
        button1.style.transform = 'translateY(0)'
        button1.style.boxShadow = 'none'

})






}



let next = document.createElement('button')
next.className = 'next fa-solid fa-angle-right'
//next.textContent = '>'
div_con.appendChild(next)

let pre = document.createElement('button')
pre.className = 'pre fa-solid fa-angle-left'
//pre.textContent = '<'
div_con.appendChild(pre)


next.addEventListener('click', function () {

    if (div_child.scrollLeft + div_child.clientWidth >= div_child.scrollWidth - 10) {
        div_child.style.scrollBehavior ='auto'
        div_child.scrollLeft = 0;
        div_child.style.scrollBehavior ='smooth'
      

    } else {

        div_child.scrollLeft += 500;
        
    }

});

pre.addEventListener('click', function () {

    if (div_child.scrollLeft <= 0) {
        div_child.style.scrollBehavior ='auto'
        div_child.scrollLeft = div_child.scrollWidth;
        div_child.style.scrollBehavior ='smooth'

    } else {

        div_child.scrollLeft -= 500;

    }

});



next.addEventListener('mouseover', function(){
    next.style.background= 'white'
})


next.addEventListener('mouseout', function(){
    next.style.background = 'black'
})
pre.addEventListener('mouseover', function(){
    pre.style.background= 'white'
})


pre.addEventListener('mouseout', function(){
    pre.style.background = 'black'
})


add_product( '0.jpg' , 'Range Rover Sport' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product1.html' , 'Buy.html' )
add_product( '0202.jpg' , 'Mercedes-Benz S-Class' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic', 'product2.html', 'Buy.html' )
add_product( '3.jpg' , 'Porsche 911 Turbo' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product3.html', 'Buy.html')
add_product( '44.jpg' , 'Tesla Model S Plaid' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product4.html', 'Buy.html')
add_product( '5.jpg' , 'Porsche Taycan Turbo S' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product5.html', 'Buy.html')
add_product( '6.jpg' , 'BMW M8 Competition' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic', 'product6.html' , 'Buy.html')
add_product( '7.jpg' , 'Audi R8 V10 Plus' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic', 'product7.html' , 'Buy.html')
add_product( '88.jpg' , 'Bentley Continental GT' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product8.html', 'Buy.html')
add_product( '9.jpg' , 'Lamborghini Urus' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product9.html', 'Buy.html')
add_product( '10101010.jpg' , 'Ferrari Roma' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product10.html', 'Buy.html')
add_product( '1111.jpg' , 'Rolls Royce Ghost' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic', 'product11.html' , 'Buy.html')
add_product( '12.jpg' , 'McLaren 720S' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product12.html', 'Buy.html', 'Buy.html')
add_product( '1313.jpg' , 'Tesla Model X Plaid' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product13.html', 'Buy.html')
add_product( '14141414.jpg' , 'Aston Martin DB11' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic', 'product14.html' , 'Buy.html')
add_product( '15.jpg' , 'Porsche 911 GT3' , 'xxx.png' , 'yyy.png' , 'zzz.png' ,'463 HP' , 'Hybrid' , 'Automatic' , 'product15.html', 'Buy.html')





let hr1 = document.createElement('hr')
hr1.className = 'hr3'
div_con.appendChild(hr1)


/*
let cards = document.querySelectorAll(".card");

let observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold: 0.2
});

cards.forEach(function(card){
    observer.observe(card);
});
*/


let con_about = document.createElement('div')
con_about.className = 'con_about'
div_container.appendChild(con_about)



let div_about = document.createElement('div')
div_about.className = 'div_about'
con_about.appendChild(div_about)


let sec_text = document.createElement('div')
sec_text.className = 'sec_text'
div_about.appendChild(sec_text)

let g_text = document.createElement('div')
g_text.className = 'g_text'
sec_text.appendChild(g_text)

let title_about = document.createElement('h2')
title_about.className = 'title_about'
title_about.textContent = 'About AutoElite'
g_text.appendChild(title_about)

let p_about = document.createElement('p')
p_about.className = 'p_about'
p_about.textContent = 'For over 15 years, AutoElite has been the premier destination for luxury and performance vehicles. Our showroom features an exclusive collection of the world is finest automobiles We pride ourselves on offering exceptional customer service, transparent pricing, and a curated selection of vehicles that meet the highest standards of quality and performance. '
g_text.appendChild(p_about)



let list_about = document.createElement('ul')
list_about.className ='list_about'
g_text.appendChild(list_about)

let li1_about = document.createElement('li')
list_about.appendChild(li1_about)

let t_li = document.createElement('h2')
t_li.className = 't_li t1_li'
t_li.textContent = ''
li1_about.appendChild(t_li)

let p_li = document.createElement('p')
p_li.className = 'p_li'
p_li.textContent = ''
li1_about.appendChild(p_li)



let li2_about = document.createElement('li')
list_about.appendChild(li2_about)

let t2_li = document.createElement('h2')
t2_li.className = 't_li t2_li'
t2_li.textContent = ''
li2_about.appendChild(t2_li)

let p2_li = document.createElement('p')
p2_li.className = 'p_li'
p2_li.textContent = ''
li2_about.appendChild(p2_li)



let li3_about = document.createElement('li')
list_about.appendChild(li3_about)

let t3_li = document.createElement('h2')
t3_li.className = 't_li t3_li '
t3_li.textContent = ''
li3_about.appendChild(t3_li)

let p3_li = document.createElement('p')
p3_li.className = 'p_li'
p3_li.textContent = ''
li3_about.appendChild(p3_li)




let sec_img = document.createElement('div')
sec_img.className = 'sec_img'
div_about.appendChild(sec_img)


let img_about = document.createElement('video')
img_about.className = 'img_about'
/*if(window.innerWidth <= 1441){
img_about.src = 'p13.png'
} else {*/
    img_about.src = 'v15.mp4'
//}
    img_about.autoplay = true;
    img_about.muted = true;
    img_about.loop = true;
    img_about.playsInline = true;

sec_img.appendChild(img_about)











let hr2 = document.createElement('hr')
hr2.className = 'hr3'
con_about.appendChild(hr2)

//hr2.style.background = ' linear-gradient(90deg, #000000, #000000, #fffffe, #000000, #000000)'










// contact

let con_contact = document.createElement('div')
con_contact.className = 'con_contact'
div_container.appendChild(con_contact)



let div_contact = document.createElement('div')
div_contact.className = 'div_contact'
con_contact.appendChild(div_contact)


let sec_contact = document.createElement('div')
sec_contact.className = 'sec_contact'
div_contact.appendChild(sec_contact)


let div1 = document.createElement('div')
div1.className = 'divs_contact'
sec_contact.appendChild(div1)

let div_img1 = document.createElement('img')
div_img1.className = 'img_contact'
div_img1.src = 'location2.png'
div1.appendChild(div_img1)

let div_text1_contact = document.createElement('div')
div_text1_contact.className = 'div_text_contact' 
div1.appendChild(div_text1_contact)

let title1_contact = document.createElement('h2')
title1_contact.className = 'title_contact'
title1_contact.textContent = 'Visit Our Showroom'
div_text1_contact.appendChild(title1_contact)

let p1_contact = document.createElement('p')
p1_contact.className = 'p_contact'
p1_contact.textContent = 'port-said'
div_text1_contact.appendChild(p1_contact)




let div2 = document.createElement('div')
div2.className = 'divs_contact'
sec_contact.appendChild(div2)

let div_img2 = document.createElement('img')
div_img2.className = 'img_contact'
div_img2.src = 'call.png'
div2.appendChild(div_img2)

let div_text2_contact = document.createElement('div')
div_text2_contact.className = 'div_text_contact' 
div2.appendChild(div_text2_contact)

let title2_contact = document.createElement('h2')
title2_contact.className = 'title_contact'
title2_contact.textContent = 'Call Us'
div_text2_contact.appendChild(title2_contact)

let p2_contact = document.createElement('p')
p2_contact.className = 'p_contact'
p2_contact.textContent = '01061537137'
div_text2_contact.appendChild(p2_contact)





let div3 = document.createElement('div')
div3.className = 'divs_contact'
sec_contact.appendChild(div3)



let div_img3 = document.createElement('img')
div_img3.className = 'img_contact'
div_img3.src = 'email.png'
div3.appendChild(div_img3)

let div_text3_contact = document.createElement('div')
div_text3_contact.className = 'div_text_contact' 
div3.appendChild(div_text3_contact)

let title3_contact = document.createElement('h2')
title3_contact.className = 'title_contact'
title3_contact.textContent = 'Email Us'
div_text3_contact.appendChild(title3_contact)

let p3_contact = document.createElement('p')
p3_contact.className = 'p_contact'
p3_contact.textContent = 'abdelrahmanyousry@gmail.com'
div_text3_contact.appendChild(p3_contact)





let line = document.createElement('div');
line.className = 'line_contact';
div_contact.appendChild(line);







let sec_owner = document.createElement('div')
sec_owner.className = 'sec_owner'
div_contact.appendChild(sec_owner)




let div_img_owner = document.createElement('div')
div_img_owner.className = 'div_img_owner'
sec_owner.appendChild(div_img_owner)


let img_contact_ = document.createElement('img')
img_contact_.className = 'img_contact_'
img_contact_.src = 'cont2.png'
div_img_owner.appendChild(img_contact_)









let hr3 = document.createElement('hr')
hr3.className = 'hr3'
con_contact.appendChild(hr3)











let div_frame = document.createElement('div')
div_frame.className = 'div_frame'
div_container.appendChild(div_frame)




let frame = document.createElement('iframe')
frame.className='frame'
frame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54581.63552216!2d32.243969718818384!3d31.23867148181035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c3e939e6b99%3A0x4cae04550f7d4cb3!2sPort%20Said%2C%20Port%20Fouad%20City%2C%20Port%20Said%20Governorate!5e0!3m2!1sen!2seg!4v1786819161764!5m2!1sen!2seg" 
//frame.width = '600'
//frame.height = '400'
frame.loading = 'lazy';
frame.allowFullscreen = true;
frame.referrerPolicy = 'strict-origin-when-cross-origin';
div_frame.appendChild(frame)




/*
let title_owner = document.createElement('h2')
title_owner.className = 'title_owner'
title_owner.textContent = 'Owner The Business'
sec_owner.appendChild(title_owner)



let div1_owner = document.createElement('div')
div1_owner.className = 'divs_owner'
sec_owner.appendChild(div1_owner)



let div_img1_owner = document.createElement('img')
div_img1_owner.className = 'img_owner'
div_img1_owner.src = 'messenger.png'
div1_owner.appendChild(div_img1_owner)

let div_text1_owner = document.createElement('div')
div_text1_owner.className = 'div_text_owner' 
div1_owner.appendChild(div_text1_owner)

let title1_owner = document.createElement('h2')
title1_owner.className = 'title_owner'
title1_owner.textContent = 'Facebook'
div_text1_owner.appendChild(title1_owner)

let p1_owner = document.createElement('p')
p1_owner.className = 'p_owner'
p1_owner.textContent = 'abdelrahmanyousry@gmail.com'
div_text1_owner.appendChild(p1_owner)





let div2_owner = document.createElement('div')
div2_owner.className = 'divs_owner'
sec_owner.appendChild(div2_owner)



let div_img2_owner = document.createElement('img')
div_img2_owner.className = 'img_owner'
div_img2_owner.src = 'instagram.png'
div2_owner.appendChild(div_img2_owner)

let div_text2_owner = document.createElement('div')
div_text2_owner.className = 'div_text_owner' 
div2_owner.appendChild(div_text2_owner)

let title2_owner = document.createElement('h2')
title2_owner.className = 'title_owner'
title2_owner.textContent = 'instagram'
div_text2_owner.appendChild(title2_owner)

let p2_owner = document.createElement('p')
p2_owner.className = 'p_owner'
p2_owner.textContent = 'abdelrahmanyousry@gmail.com'
div_text2_owner.appendChild(p2_owner)





let div3_owner = document.createElement('div')
div3_owner.className = 'divs_owner'
sec_owner.appendChild(div3_owner)



let div_img3_owner = document.createElement('img')
div_img3_owner.className = 'img_owner'
div_img3_owner.src = 'whatsapp.png'
div3_owner.appendChild(div_img3_owner)

let div_text3_owner = document.createElement('div')
div_text3_owner.className = 'div_text_owner' 
div3_owner.appendChild(div_text3_owner)

let title3_owner = document.createElement('h2')
title3_owner.className = 'title_owner'
title3_owner.textContent = 'whatsapp'
div_text3_owner.appendChild(title3_owner)

let p3_owner = document.createElement('p')
p3_owner.className = 'p_owner'
p3_owner.textContent = 'abdelrahmanyousry@gmail.com'
div_text3_owner.appendChild(p3_owner)

*/









/*
let group1 = document.createElement('div')
group1.className = 'groups'
about_product1.appendChild(group1)

let span1_product1_p1 = document.createElement('span')
span1_product1_p1.className = 'p_product'
let p01_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p01_product1.textContent = '3.0L Turbo Engine'
span1_product1_p1.appendChild(p01_product1)
group1.appendChild(span1_product1_p1)

let span2_product1_p1 = document.createElement('span')
span2_product1_p1.className = 'p_product'
let p02_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p02_product1.textContent = '400 Horsepower'
span2_product1_p1.appendChild(p02_product1)
group1.appendChild(span2_product1_p1)



let span3_product1_p1 = document.createElement('span')
span3_product1_p1.className = 'p_product'
let p03_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p03_product1.textContent = '400 Horsepower'
span3_product1_p1.appendChild(p03_product1)
group1.appendChild(span3_product1_p1)





let group2 = document.createElement('div')
group2.className = 'groups'
about_product1.appendChild(group2)


let span4_product1_p1 = document.createElement('span')
span4_product1_p1.className = 'p_product box '
let p4_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p4_product1.textContent = '12" Smart Display'
span4_product1_p1.appendChild(p4_product1)
group2.appendChild(span4_product1_p1)

let span5_product1_p1 = document.createElement('span')
span5_product1_p1.className = 'p_product box '
let p5_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p5_product1.textContent = '400 Horsepower'
span5_product1_p1.appendChild(p5_product1)
group2.appendChild(span5_product1_p1)



let span6_product1_p1 = document.createElement('span')
span6_product1_p1.className = 'p_product box '
let p6_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p6_product1.textContent = '400 Horsepower'
span6_product1_p1.appendChild(p6_product1)
group2.appendChild(span6_product1_p1)









let group3 = document.createElement('div')
group3.className = 'groups'
about_product1.appendChild(group3)


let span7_product1_p1 = document.createElement('span')
span7_product1_p1.className = 'p_product box '
let p7_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p7_product1.textContent = 'Smart Parking Assist'
span7_product1_p1.appendChild(p7_product1)
group3.appendChild(span7_product1_p1)

let span8_product1_p1 = document.createElement('span')
span8_product1_p1.className = 'p_product box '
let p8_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p8_product1.textContent = 'Auto Emergency Braking'
span8_product1_p1.appendChild(p8_product1)
group3.appendChild(span8_product1_p1)



let span9_product1_p1 = document.createElement('span')
span9_product1_p1.className = 'p_product box '
let p9_product1 = document.createElement('p')
//p1_product1.className ='p_product'
p9_product1.textContent = 'Adaptive LED Lights'
span9_product1_p1.appendChild(p9_product1)
group3.appendChild(span9_product1_p1)



*/














/*

let div_child2 = document.createElement('div') ;
div_container.appendChild(div_child2)

let h2 = document.createElement('h2')
let h2_text = document.createTextNode('2')
h2.appendChild(h2_text)
div_child2.appendChild(h2)

div_child.appendChild(div_child2)

let div_child3 = document.createElement('div') ;
div_container.appendChild(div_child3)

let h3 = document.createElement('h2')
let h3_text = document.createTextNode('3')
h3.appendChild(h3_text)
div_child3.appendChild(h3)
div_child.appendChild(div_child3)







let p2 = document.createElement('p')
let p2_text = document.createTextNode('Product')
p2.appendChild(p2_text)
div_child2.appendChild(p2)
h2.style.margin = '0px' ;
p2.style.margin = '0px' ;

let p3 = document.createElement('p')
let p3_text = document.createTextNode('Product')
p3.appendChild(p3_text)
div_child3.appendChild(p3)
h3.style.margin = '0px' ;
p3.style.margin = '0px' ;




let div_child4 = document.createElement('div') ;
div_container.appendChild(div_child4)
let h4 = document.createElement('h2')
let h4_text = document.createTextNode('4')
h4.appendChild(h4_text)
div_child4.appendChild(h4)
div_child.appendChild(div_child4)
let p4 = document.createElement('p')
let p4_text = document.createTextNode('Product')
p4.appendChild(p4_text)
div_child4.appendChild(p4)
div_child4.style.cssText = card
h4.style.margin = '0px' ;
p4.style.margin = '0px' ;



let div_child5 = document.createElement('div') ;
div_container.appendChild(div_child5)
let h5 = document.createElement('h2')
let h5_text = document.createTextNode('5')
h5.appendChild(h5_text)
div_child5.appendChild(h5)
div_child.appendChild(div_child5)
let p5 = document.createElement('p')
let p5_text = document.createTextNode('Product')
p5.appendChild(p5_text)
div_child5.appendChild(p5)
div_child5.style.cssText = card
h5.style.margin = '0px' ;
p5.style.margin = '0px' ;

let div_child6 = document.createElement('div') ;
div_container.appendChild(div_child6)
let h6 = document.createElement('h2')
let h6_text = document.createTextNode('6')
h6.appendChild(h6_text)
div_child6.appendChild(h6)
div_child.appendChild(div_child6)
let p6 = document.createElement('p')
let p6_text = document.createTextNode('Product')
p6.appendChild(p6_text)
div_child6.appendChild(p6)
div_child6.style.cssText = card
h6.style.margin = '0px' ;
p6.style.margin = '0px' ;

let div_child7 = document.createElement('div') ;
div_container.appendChild(div_child7)
let h7 = document.createElement('h2')
let h7_text = document.createTextNode('7')
h7.appendChild(h7_text)
div_child7.appendChild(h7)
div_child.appendChild(div_child7)
let p7 = document.createElement('p')
let p7_text = document.createTextNode('Product')
p7.appendChild(p7_text)
div_child7.appendChild(p7)
div_child7.style.cssText = card
h7.style.margin = '0px' ;
p7.style.margin = '0px' ;

let div_child8 = document.createElement('div');
div_container.appendChild(div_child8);

let h8 = document.createElement('h2');
let h8_text = document.createTextNode('8');
h8.appendChild(h8_text);
div_child8.appendChild(h8);

div_child.appendChild(div_child8);

let p8 = document.createElement('p');
let p8_text = document.createTextNode('Product');
p8.appendChild(p8_text);
div_child8.appendChild(p8);

div_child8.style.cssText = card;

h8.style.margin = '0px';
p8.style.margin = '0px';

let div_child9 = document.createElement('div');
div_container.appendChild(div_child9);

let h9 = document.createElement('h2');
let h9_text = document.createTextNode('9');
h9.appendChild(h9_text);
div_child9.appendChild(h9);

div_child.appendChild(div_child9);

let p9 = document.createElement('p');
let p9_text = document.createTextNode('Product');
p9.appendChild(p9_text);
div_child9.appendChild(p9);

div_child9.style.cssText = card;

h9.style.margin = '0px';
p9.style.margin = '0px';


let div_child10 = document.createElement('div');
div_container.appendChild(div_child10);

let h10 = document.createElement('h2');
let h10_text = document.createTextNode('10');
h10.appendChild(h10_text);
div_child10.appendChild(h10);

div_child.appendChild(div_child10);

let p10 = document.createElement('p');
let p10_text = document.createTextNode('Product');
p10.appendChild(p10_text);
div_child10.appendChild(p10);

div_child10.style.cssText = card;

h10.style.margin = '0px';
p10.style.margin = '0px';

let div_child11 = document.createElement('div');
div_container.appendChild(div_child11);

let h11 = document.createElement('h2');
let h11_text = document.createTextNode('11');
h11.appendChild(h11_text);
div_child11.appendChild(h11);

div_child.appendChild(div_child11);

let p11 = document.createElement('p');
let p11_text = document.createTextNode('Product');
p11.appendChild(p11_text);
div_child11.appendChild(p11);

div_child11.style.cssText = card;

h11.style.margin = '0px';
p11.style.margin = '0px';

let div_child12 = document.createElement('div');
div_container.appendChild(div_child12);

let h12 = document.createElement('h2');
let h12_text = document.createTextNode('12');
h12.appendChild(h12_text);
div_child12.appendChild(h12);

div_child.appendChild(div_child12);

let p12 = document.createElement('p');
let p12_text = document.createTextNode('Product');
p12.appendChild(p12_text);
div_child12.appendChild(p12);

div_child12.style.cssText = card;

h12.style.margin = '0px';
p12.style.margin = '0px';

let div_child13 = document.createElement('div');
div_container.appendChild(div_child13);

let h13 = document.createElement('h2');
let h13_text = document.createTextNode('13');
h13.appendChild(h13_text);
div_child13.appendChild(h13);

div_child.appendChild(div_child13);

let p13 = document.createElement('p');
let p13_text = document.createTextNode('Product');
p13.appendChild(p13_text);
div_child13.appendChild(p13);

div_child13.style.cssText = card;

h13.style.margin = '0px';
p13.style.margin = '0px';

let div_child14 = document.createElement('div');
div_container.appendChild(div_child14);

let h14 = document.createElement('h2');
let h14_text = document.createTextNode('14');
h14.appendChild(h14_text);
div_child14.appendChild(h14);

div_child.appendChild(div_child14);

let p14 = document.createElement('p');
let p14_text = document.createTextNode('Product');
p14.appendChild(p14_text);
div_child14.appendChild(p14);

div_child14.style.cssText = card;

h14.style.margin = '0px';
p14.style.margin = '0px';


let div_child15 = document.createElement('div');
div_container.appendChild(div_child15);

let h15 = document.createElement('h2');
let h15_text = document.createTextNode('15');
h15.appendChild(h15_text);
div_child15.appendChild(h15);

div_child.appendChild(div_child15);

let p15 = document.createElement('p');
let p15_text = document.createTextNode('Product');
p15.appendChild(p15_text);
div_child15.appendChild(p15);

div_child15.style.cssText = card;

h15.style.margin = '0px';
p15.style.margin = '0px';



div_child1.style.cssText = card
div_child2.style.cssText = card
div_child3.style.cssText = card
div_child1.className = 'card'
div_child2.className = 'card'
div_child3.className = 'card'
div_child4.className = 'card'
div_child5.className = 'card'
div_child6.className = 'card'
div_child7.className = 'card'
div_child8.className = 'card'
div_child9.className = 'card'
div_child10.className = 'card'
div_child11.className = 'card'
div_child12.className = 'card'
div_child13.className = 'card'
div_child14.className = 'card'
div_child15.className = 'card'

*/


let footer = document.createElement('footer')
footer.className = 'footer'
document.body.appendChild(footer)





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

//footer.style.cssText = '  text-align:center ;   color: #999999 ; background-color: black;  '






















/*

let list_footer = document.createElement('ul')
list_footer.className ='list_footer'
footer.appendChild(list_footer)

let li1_footer = document.createElement('li')
li1_footer.className= 'li_footer'
list_footer.appendChild(li1_footer)

let button1_footer = document.createElement('button')
button1_footer.className = 'button_footer'
li1_footer.appendChild(button1_footer)


let aycon1_footer = document.createElement('img')
aycon1_footer.className = 'img_footer'
aycon1_footer.src = 'f.png'
button1_footer.appendChild(aycon1_footer)


button1_footer.addEventListener('click' , function(){
    window.open('https://www.facebook.com/profile.php?id=61567925104805' , '_blank')
})


let li2_footer = document.createElement('li')
li2_footer.className = 'li_footer'
list_footer.appendChild(li2_footer)

let button2_footer = document.createElement('button')
button2_footer.className = 'button_footer'
li2_footer.appendChild(button2_footer)


let aycon2_footer = document.createElement('img')
aycon2_footer.className = 'img_footer'
aycon2_footer.src = 'ins.png'
button2_footer.appendChild(aycon2_footer)

button2_footer.addEventListener('click' , function(){
    window.open('https://www.instagram.com/abd_elrahmanyousry?igsh=MW1rczV6ZWI3N2Fpcw==' , '_blank')
})



let li3_footer = document.createElement('li')
li3_footer.className = 'li_footer'
list_footer.appendChild(li3_footer)

let button3_footer = document.createElement('button')
button3_footer.className = 'button_footer'
li3_footer.appendChild(button3_footer)


let aycon3_footer = document.createElement('img')
aycon3_footer.className = 'img_footer'
aycon3_footer.src = 'w.png'
button3_footer.appendChild(aycon3_footer)

button3_footer.addEventListener('click' , function(){
    window.open('https://wa.me/qr/6XILMR7K3LJAF1' , '_blank')
})





let li4_footer = document.createElement('li')
li4_footer.className = 'li_footer'
list_footer.appendChild(li4_footer)

let button4_footer = document.createElement('button')
button4_footer.className = 'button_footer'
li4_footer.appendChild(button4_footer)


let aycon4_footer = document.createElement('img')
aycon4_footer.className = 'img_footer'
aycon4_footer.src = 'owner.png'
button4_footer.appendChild(aycon4_footer)


button4_footer.addEventListener('click' , function(){
    window.location.href = 'owner.html'
})



let li5_footer = document.createElement('li')
li5_footer.className = 'li_footer'
list_footer.appendChild(li5_footer)

let button5_footer = document.createElement('button')
button5_footer.className = 'button_footer'
li5_footer.appendChild(button5_footer)


let aycon5_footer = document.createElement('img')
aycon5_footer.className = 'img_footer'
aycon5_footer.src = 't.png'
button5_footer.appendChild(aycon5_footer)







let li6_footer = document.createElement('li')
li6_footer.className = 'li_footer'
list_footer.appendChild(li6_footer)

let button6_footer = document.createElement('button')
button6_footer.className = 'button_footer'
li6_footer.appendChild(button6_footer)


let aycon6_footer = document.createElement('img')
aycon6_footer.className = 'img_footer'
aycon6_footer.src = 'pl.png'
button6_footer.appendChild(aycon6_footer)



let li7_footer = document.createElement('li')
li7_footer.className = 'li_footer'
list_footer.appendChild(li7_footer)

let button7_footer = document.createElement('button')
button7_footer.className = 'button_footer'
li7_footer.appendChild(button7_footer)


let aycon7_footer = document.createElement('img')
aycon7_footer.className = 'img_footer'
aycon7_footer.src = 'location2.png'
button7_footer.appendChild(aycon7_footer)


button7_footer.addEventListener('click' , function(){
    window.open('https://maps.app.goo.gl/yJuqCePrjKYRF2SD6' , '_blank')
})




let li8_footer = document.createElement('li')
li8_footer.className = 'li_footer'
list_footer.appendChild(li8_footer)

let button8_footer = document.createElement('button')
button8_footer.className = 'button_footer'
li8_footer.appendChild(button8_footer)


let aycon8_footer = document.createElement('img')
aycon8_footer.className = 'img_footer'
aycon8_footer.src = 'comment.png'
button8_footer.appendChild(aycon8_footer)


button8_footer.addEventListener('click' , function(){
    window.open('review.html' , '_self')
})





let h3_footer = document.createElement('h3')
h3_footer.className = 'h3_footer'
h3_footer.textContent ='© 2026 Auto Car All rights reserved | Designed by Eng.AbdElrahman Yousry'
footer.appendChild(h3_footer)

//footer.style.cssText = '  text-align:center ;   color: #999999 ; background-color: black;  '


*/




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

let board = document.createElement('div')
board.style.cssText = '  display: none;  position: fixed;  top: 0;  left: 0;  width: 100%;  height: 100%;  background-color: rgba(0,0,0,0.6);  z-index: 1001;  justify-content: center;  align-items: center; '
document.body.appendChild(board)

let modal = document.createElement('div')
modal.style.cssText = '  background-color: white;  width: 300px;  padding: 30px;  border-radius: 10px;  text-align: center;  position: relative; '
board.appendChild(modal)

let modal_text = document.createElement('p')
modal_text.textContent = ' Loading..... '
modal.appendChild(modal_text)


board.style.display = 'flex'

setTimeout(function(){
    board.style.display = 'none'
}, 5000)

let num_second = 5 ;
let div_counter = document.createElement('div')
div_counter.style.cssText = ' color: black ; font-size: 18px ; font-weight: bold ; margin-left: 10px ; '
div_counter.textContent = num_second ;
modal.appendChild(div_counter)

let interval = setInterval( function(){
    num_second-- ;
    div_counter.textContent = num_second 
    if(num_second <=0){
        clearInterval(interval)
    }
}, 1000 )

*/



/*

let toti = document.createElement('div')
toti.style.cssText = '  display: none;  position: fixed;  top: 0;  left: 0;  width: 100%;  height: 100%;  background-color: rgba(0,0,0,0.6);  z-index: 1001;  justify-content: center;  align-items: center; '
document.body.appendChild(toti)

let modal2 = document.createElement('div')
modal2.style.cssText = ' line-height:1.6;  background-color: white;  width: 400px;  padding: 30px;  border-radius: 10px;  text-align: center;  position: relative; '
toti.appendChild(modal2)

let modal2_title = document.createElement('h3')
modal2_title.textContent = 'Dear Dr.Tarneem'
modal2_title.style.cssText = ' margin: 0 0 15px 0; '
modal2.appendChild(modal2_title)

let modal2_text = document.createElement('p')
modal2_text.textContent = 'I sincerely apologize for my mistake and for any inconvenience or misunderstanding I may have caused. I truly respect you, and it was never my intention to upset or offend you. I take full responsibility for what happened, and I genuinely regret it. I hope you can forgive me and give me the opportunity to learn from this experience. Your understanding would mean a lot to me. Thank you for your time, and I am truly sorry once again.' 
modal2.appendChild(modal2_text)



let closeBtn = document.createElement('button')
closeBtn.textContent = 'X'
closeBtn.style.cssText = '  position: absolute;  top: 10px;  right: 10px;  border: none;  background: none;  font-size: 18px;  cursor: pointer; '
modal2.appendChild(closeBtn)

closeBtn.addEventListener('click', function(){
    toti.style.display = 'none'
    videoOverlay.style.display = 'flex'
})



setTimeout(function(){
    toti.style.display = 'flex'

}, 3000)

*/

/*

let videoOverlay = document.createElement('div')
videoOverlay.style.cssText = '  display: none;  position: fixed;  top: 0;  left: 0;  width: 100%;  height: 100%;  background-color: rgba(0,0,0,0.6);  z-index: 1001;  justify-content: center;  align-items: center; '
document.body.appendChild(videoOverlay)

let videoModal = document.createElement('div')
videoModal.style.cssText = '  background-color: white;  width: 500px;  padding: 20px;  border-radius: 10px;  text-align: center;  position: relative; '
videoOverlay.appendChild(videoModal)

let video = document.createElement('video')
video.src = 'video.mp4'
video.controls = true
video.style.cssText = '  width: 100%;  max-height: 80vh;  border-radius: 8px; '
videoModal.appendChild(video)

let closeBtn2 = document.createElement('button')
closeBtn2.textContent = 'X'
closeBtn2.style.cssText = '  position: absolute;  top: 10px;  right: 10px;  border: none;  background: none;  font-size: 18px;  cursor: pointer; '
videoModal.appendChild(closeBtn2)

closeBtn2.addEventListener('click', function(){
    videoOverlay.style.display = 'none'
    video.pause()
    imageOverlay.style.display = 'flex'
    song.play()
})



let imageOverlay = document.createElement('div')
imageOverlay.style.cssText = '  display: none;  position: fixed;  top: 0;  left: 0;  width: 100%;  height: 100%;  background-color: rgba(0,0,0,0.6);  z-index: 1001;  justify-content: center;  align-items: center; '
document.body.appendChild(imageOverlay)

let imageModal = document.createElement('div')
imageModal.style.cssText = '  background-color: white;  width: 400px;  padding: 20px;  border-radius: 10px;  text-align: center;  position: relative; '
imageOverlay.appendChild(imageModal)



let img = document.createElement('h1')
img.textContent = 'DR . Tarneem'
img.style.cssText = '  color: black;  font-size: 32px;  padding: 40px 0; '
imageModal.appendChild(img)

let celebrationInterval

function startCelebration() {
    var duration = 30 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    celebrationInterval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(celebrationInterval);
      }

      var particleCount = 50 * (timeLeft / duration);

      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);
}



let confettiBtn = document.createElement('button')
confettiBtn.textContent = '🎉'
confettiBtn.style.cssText = '  position: absolute;  bottom: 20px;  right: 20px;  width: 50px;  height: 50px;  border-radius: 50%;  border: none;  background-color: black;  font-size: 22px;  cursor: pointer;  z-index: 10;  box-shadow: 0 0 15px 5px rgba(100,150,255,0.6);  animation: glow 1.5s infinite alternate; '
imageModal.appendChild(confettiBtn)

let glowStyle = document.createElement('style')
glowStyle.textContent = `
@keyframes glow {
  from { box-shadow: 0 0 10px 3px rgba(100,150,255,0.5); }
  to { box-shadow: 0 0 25px 8px rgba(100,150,255,0.9); }
}
`
document.head.appendChild(glowStyle)

confettiBtn.addEventListener('click', function(){
    startCelebration()
})

let closeBtn3 = document.createElement('button')
closeBtn3.textContent = 'X'
closeBtn3.style.cssText = '  position: absolute;  top: 10px;  right: 10px;  border: none;  background: none;  font-size: 18px;  cursor: pointer; '
imageModal.appendChild(closeBtn3)

let song = document.createElement('audio')
song.src = 'sound.mp3'
song.loop = true

closeBtn3.addEventListener('click', function(){
    imageOverlay.style.display = 'none'
    song.pause()
    clearInterval(celebrationInterval)
})

*/

// div_container.style.cssText += ' overflow-x: auto ; '









/*
let img2 = document.createElement('img')
img2.className = 'img_style'
img2.src = 'a.jpg'
div_child2.appendChild(img2)
img2.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img3 = document.createElement('img')
img3.className = 'img_style'
img3.src = 'a.jpg'
div_child3.appendChild(img3)
img3.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img4 = document.createElement('img')
img4.className = 'img_style'
img4.src = 'a.jpg'
div_child4.appendChild(img4)
img4.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img5 = document.createElement('img')
img5.className = 'img_style'
img5.src = 'a.jpg'
div_child5.appendChild(img5)
img5.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img6 = document.createElement('img')
img6.className = 'img_style'
img6.src = 'a.jpg'
div_child6.appendChild(img6)
img6.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img7 = document.createElement('img')
img7.className = 'img_style'
img7.src = 'a.jpg'
div_child7.appendChild(img7)
img7.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img8 = document.createElement('img')
img8.className = 'img_style'
img8.src = 'a.jpg'
div_child8.appendChild(img8)
img8.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img9 = document.createElement('img')
img9.className = 'img_style'
img9.src = 'a.jpg'
div_child9.appendChild(img9)
img9.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img10 = document.createElement('img')
img10.className = 'img_style'
img10.src = 'a.jpg'
div_child10.appendChild(img10)
img10.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img11 = document.createElement('img')
img11.className = 'img_style'
img11.src = 'a.jpg'
div_child11.appendChild(img11)
img11.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img12 = document.createElement('img')
img12.className = 'img_style'
img12.src = 'a.jpg'
div_child12.appendChild(img12)
img12.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img13 = document.createElement('img')
img13.className = 'img_style'
img13.src = 'a.jpg'
div_child13.appendChild(img13)
img13.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

let img14 = document.createElement('img')
img14.className = 'img_style'
img14.src = 'a.jpg'
div_child14.appendChild(img14)
img14.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '


let img15 = document.createElement('img')
img15.className = 'img_style'
img15.src = 'a.jpg'
div_child15.appendChild(img15)
img15.style.cssText = ' height: 50%; width: 100% ; object-fit: cover; display:flex ; border-radius: 5px 5px 0 0;  '

*/

feedback.addEventListener('click', function(){
    window.open('review.html' , '_self') 
})


/*
if( window.innerWidth >= 1441 ){

window.addEventListener('load' , function(){

    
    if( window.innerWidth >= 481 && window.innerWidth <= 576 ){
        return
    }

    list.classList.add('list_hide')
    logo.remove()
    div_logo.style.cssText = '    margin-left: 47%;'
    nav.style.background = ' linear-gradient(90deg, transparent, transparent, #fffffe, transparent, transparent)  '
})







let lastScrollY = window.scrollY;




window.addEventListener('scroll' , function(){

    if( window.innerWidth >= 481 && window.innerWidth <= 576 ){
        return
    }
    let currentScrollY = window.scrollY;

if (currentScrollY > lastScrollY && currentScrollY > 100) {
    nav.style.top = '-100px';
} else {
    nav.style.top = '0';
}



    if( window.scrollY >= 500 ) { 
    list.classList.remove('list_hide')
    nav.insertBefore(logo, div_logo)
    div_logo.style.cssText = '    margin-left: 5px;'
    nav.style.background = ' linear-gradient(90deg, #fffffe, #353535, #000000, #000000, #000000)  ' 
 } else{
    list.classList.add('list_hide')
    logo.remove()
    div_logo.style.cssText = '    margin-left: 47%;'
        nav.style.background = ' linear-gradient(90deg, transparent, transparent, #fffffe, transparent, transparent)  '

 }
lastScrollY = currentScrollY;
})

}*/




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


let fixed = document.querySelector('.fixed')

window.addEventListener('scroll' , function(){
    let scrolly = window.scrollY ;

    if( scrolly >= 200 ){
        fixed.style.opacity = '1'
        fixed.style.transition = 'opacity 0.3s ease';
    }   else{
        fixed.style.opacity = '0'
       
    }


})



