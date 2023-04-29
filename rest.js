

import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
        console.log(uuidv4())
const pizzaBtn =document.getElementById("pizza")
const hamburgerBtn =document.getElementById("hamburger")
const beerBtn =document.getElementById("beer")
const yourOrder = document.getElementById("your-order")
const yourFood = document.getElementById("your-food")
const youra = document.getElementById("youra")
const total = document.getElementById("total")
const remover = document.getElementById("remove")
const listToggle = document.getElementById("list-toggle")
const completeOrder = document.getElementById("complete-order")
const shekveta= document.getElementById("shekveta")
const form = document.getElementById("form")
const payit = document.getElementById("pay")
const nameInput = document.getElementById("name-input")
const cardInput = document.getElementById("card-input")
const cvvInput =document.getElementById("cvv-input")
const close = document.getElementById("close")
const foodContainer = document.getElementById("food-container")

let asd = true
let showTrue = true
// hamburgerBtn.addEventListener("click", function(){
//     yours.classList.toggle("none")
// function render(){
//     yourFood.innerHTML = `<p> total price ${totalprice} </p>`
// }    
// })


function aqaris(){
    pizzaArr.push({
        name:"pizza",
        price:14,
        id:uuidv4()
    });
}

const pizzaArr = []
const hamburgerArr=[]
const beerArr=[]
const totalprice =0

function closer(){
    form.style.display="none"
    asd = !asd
}

document.addEventListener("click",function(e){
    // console.log(e.target.id)
    
    pizzaArr.forEach(item=>{
        if(item.id===e.target.id){
            // console.log(pizzaArr.indexOf(item))
            pizzaArr.splice(pizzaArr.indexOf(item),1)
            document.getElementById("span-pizza").innerHTML=`  ${ pizzaArr.length }`
        }
    })
    hamburgerArr.forEach(item=>{
        if(item.id===e.target.id){
            // console.log(pizzaArr.indexOf(item))
            hamburgerArr.splice(hamburgerArr.indexOf(item),1)
            document.getElementById("span-hamburger").innerHTML=`  ${ hamburgerArr.length }`
        }
    })

    beerArr.forEach(item=>{
        if(item.id===e.target.id){
            // console.log(pizzaArr.indexOf(item))
            beerArr.splice(beerArr.indexOf(item),1)
            document.getElementById("span-beer").innerHTML=`  ${ beerArr.length }`
        }
    })
    
})

payit.addEventListener("click",function(e){
    e.preventDefault()
    
    const name = nameInput.value
    const card = cardInput.value
    const cvv = cvvInput.value
    console.log(name)
    
    const output = document.getElementById("output")
    
    if(card && name && cvv){
        output.innerHTML = `<h1 id="fl">
        
        Thanks ${name} for your order <hr>I AM ALREADY COOKING💞 
        
        </h1>
        
        <button onclick="location.reload()" id="refresh">Home Page</button>
        <img id="coock" src="https://media0.giphy.com/media/l1TJTwU3VfPHU4FCbx/200w.webp?cid=ecf05e47nmjfdbaj9ulcuiwf1h3nhy25i2neubyfp16lgw0s&rid=200w.webp&ct=g" />
        <h5>total price - $${(pizzaArr.length*14)+(hamburgerArr.length*12)+(beerArr.length*12)}</h5>
        `
        
        output.classList.add("flexbox")
    }
    
    
    
})

document.getElementById("pizzales").addEventListener("click",function(){             //aqqqqqq
    console.log(123)
    
   pizzaArr.pop()
   document.getElementById("span-pizza").innerHTML=`  ${ pizzaArr.length }`
})
document.getElementById("hamburgerles").addEventListener("click",function(){              
    console.log(123)
    
   hamburgerArr.pop()
   document.getElementById("span-hamburger").innerHTML=`  ${ hamburgerArr.length }`
})
document.getElementById("beerles").addEventListener("click",function(){              
    console.log(123)
    
   beerArr.pop()
   document.getElementById("span-beer").innerHTML=`  ${ beerArr.length }`
})

document.addEventListener("click",function(e){                      
    
    if(e.target===pizzaBtn){
        
        aqaris()
        console.log(pizzaArr)
        document.getElementById("span-pizza").innerHTML=` ${ pizzaArr.length }`
    
        
    }else if(e.target===hamburgerBtn){
        hamburgerArr.push({
            name:"Hamburger",
            price:12,
            id:uuidv4()
        });
    document.getElementById("span-hamburger").innerHTML=`  ${ hamburgerArr.length }`
    
        console.log(hamburgerArr)
    }else if(e.target===beerBtn){
        beerArr.push({
        name:"Beer",
        price:12,
        id:uuidv4()
        });
       
    document.getElementById("span-beer").innerHTML=`  ${ beerArr.length }`
        console.log(beerArr)
    }
    // listToggle.addEventListener("click",function(){
    //     document.getElementById(yourFood).classList.toggle("none")
    // })
    

    if(e.target===listToggle){
        // yourFood.style.display="none"
        yourFood.classList.remove("your-food") 
        yourFood.classList.toggle("none")
        
    }
    shekveta.style.display="block"
    completeOrder.disabled=true
    // const display = shekveta.style.display="block" ?  form.style.display="flex" : form.style.display="block"
    console.log(e.target.id)

    
    // if(yourFood.innerHTML===""){
    //     completeOrder.disabled = true
    // }else if(yourFood!="") {
    //     completeOrder.disabled =false
    //     if(e.target===completeOrder){
        
    //         asd ?  form.style.display="flex" : form.style.display="none"
    //         asd = !asd
    //     }
    // }
    if(beerArr.length >0 || hamburgerArr.length >0  || pizzaArr.length >0 ){
        completeOrder.disabled = false
    }else  {
        completeOrder.disabled =true
        
    }
    if(e.target===completeOrder){
        
                asd ?  form.style.display="flex" : form.style.display="none"
                asd = !asd
            }
    
    if(e.target===close){
        closer()
    }
    
    renderP()
    
    

})


function renderP(){
    
    yourFood.innerHTML=""
    pizzaArr.forEach(item=>{
        yourFood.innerHTML+=`<div class="flex">
            
            <button id=${item.id}>remove</button>
                <h1>🍕<h1><h3>${item.name}</h3>
                
            
                
                <h4 class="price" id="green"> $${item.price}</h4>
           
        </div>
        
        `
        
    })
    hamburgerArr.forEach(item=>{
        yourFood.innerHTML+=`<div class="flex">
            
            <button id=${item.id}>remove</button>
            <h1>🍔<h1>
            
            <h3>${item.name}</h3 >
            <h4 class="pricetag">$${item.price}</h4>
            
                
            
            
        </div>`
    })
    beerArr.forEach(item=>{
        yourFood.innerHTML+=`<div class="flex">
           
            <button id=${item.id}>remove</button>
            <h1>🍺<h1>
            <h3>${item.name}</h3>
            <h4>$ ${item.price}</h4>
           
        </div>`
    })
    total.innerHTML=""
    const allPrice = `<h2>$ ${(pizzaArr.length*14)+(hamburgerArr.length*12)+(beerArr.length*12)}</h2>`
    if(pizzaArr.length>0){
        total.innerHTML+=`
        <div class="youra">
        <H3>${pizzaArr.length}  Pizza </h3>
        <h3>$ ${pizzaArr.length*14}</h3>
        
        </div>
        `

    }
    if(hamburgerArr.length>0){
        total.innerHTML+=`
        <div class="youra">
        <H3>${hamburgerArr.length}  Hamburger </h3>
        
        <h3>$ ${hamburgerArr.length*12}</h3>
        </div>
        
        `
        
    }
    if(beerArr.length>0){
        total.innerHTML+=`
        <div class="youra">
        <H3>${beerArr.length} Beer </h3>
        
        <h3>$ ${beerArr.length*12}</h3>
        </div>
        `
    }
    if(total.innerHTML!=""){
        total.innerHTML+=`
        <div class="youra">
        <H2> Total Price </h2>
        ${allPrice}
        </div>
    `
    // yourOrder.styles.display="none"
    }
    
    
    
}

// document.getElementById("pizzales").addEventListener("click",function(){
//     console.log(123)
    
//    pizzaArr.pop()
//    renderP()
// })
function shekvet(){
    if(!pizzaArr || !hamburgerArr || !beerArr){
        shekveta.style.display="none"
    }
}




























// document.addEventListener("click",function(e){
//     let remove =document.getElementById("remove")
//     if(e.target===hamburgerBtn){
//         // yourFood.style.display="flex"
//         yourOrder.style.display="block"
//         totalprice+=12
//         burgerai.push(`<div class="pizzadata">
//                             <div class="divid">
//                                 <h2>hamburger</h2>
//                                 <button id="remove">Remove</button>
//                             </div>
//                             <h2>$12</h2>
//                         </div>`)
//         yourOrder.innerHTML=burgerai
            
//         if(e.target===document.getElementById("remove")){
//             // yourOrder.classList.toggle("none")
//             burgerai.shift(0)
            
//         }
        
//     }else if(e.target===pizzaBtn){
//         // yourFood.style.display="flex"
//         yourOrder.style.display="block"
//         totalprice+=14
//         yourOrder.innerHTML+=
//             `<div class="pizzadata">
//                 <div class="divid">
//                     <h2>pizza</h2>
//                     <button>Remove</button>
//                 </div>
//                 <h2>$14</h2>
                
//             </div>`
        
//     }else if(e.target===beerBtn){
//         // yourFood.style.display="flex"
//         yourOrder.style.display="block"
//         totalprice+=12
//         yourOrder.innerHTML+=
//             `<div class="pizzadata">
//                 <div class="divid">
//                     <h2>beer</h2>
//                     <button>Remove</button>
//                 </div>
//                 <h2>$12</h2>
//             </div>`
            
            
//     }
    
//     youra.innerHTML=`
    
//     <p>total price</p>
//     <h3>$ ${totalprice}</h3>
//     `
    
    

// })








