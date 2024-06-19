const increase = document.getElementsByClassName('increase');
const decrease = document.getElementsByClassName('decrease');
const card = document.getElementsByClassName('card');
const quantityNum = document.getElementsByClassName('quantityNum');

const totalNum = document.getElementById('totalNum');

// ARROW ICON
const arrowIcon = document.getElementById('arrowImg');
// SIDE BAR
const sideBar = document.getElementById('sidebar');

//TO ADD IN PARENT DIV class='box'
const box = document.getElementById('box');


// images, names, prices list
const imagesToAdd = document.getElementsByClassName('crosty');
const itemName = document.getElementsByClassName('shoeName');
const itemPrice = document.getElementsByClassName('shoePrice1');

            
let rotated = false;
arrowIcon.addEventListener('click', function(){
    rotated = !rotated;
    if(rotated){
        arrowIcon.style.transform = 'rotate(360deg)';
        sideBar.style.display = 'block';
        sideBar.style.animationName = 'sideBarVision';
    }else{
        arrowIcon.style.transform = 'rotate(270deg)';
        sideBar.style.display = 'none';
    }
})


function shopItems(image, name, price, quantity, val){
    this.image = image;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.val = val;
}

let objectArray = [];


const crostyGrey = new shopItems
(
    "accessories/crosty.jpg",
    "Crosty Shoes White/Grey",
    900,
    1,
    'shoe'
)

const crostyGreen = new shopItems
(
    "accessories/crosty1.jpg",
    "Crosty Shoes White/Green",
    900,
    1,
    'shoe'
)

const crostyOrange = new shopItems
(
    "accessories/crosty2.jpg",
    "Crosty Shoes White/Orange",
    900,
    1,
    'shoe'
)


const iphone15 = new shopItems
(
    "accessories/iphone15.jpg",
    "Iphone 15 Black/Grey",
    4700,
    1,
    'macbook'
)

const macbookm2 = new shopItems
(
    "accessories/macbookprom2.jpg",
    "MacBook M2 PRO - Grey",
    4900,
    1,
    'macbook'
)


const macbookm3 = new shopItems
(
    "accessories/macbookprom3.webp",
    "MacBook M3 PRO - Black",
    6800,
    1,
    'macbook'
)


const razer = new shopItems
(
    "accessories/razer.jpg",
    "Razer Mouse / G14 / Black",
    250,
    1,
    'mouse'
)

const steelseries = new shopItems
(
    "accessories/steelseries.jpg",
    "SteelSeries - Black",
    130,
    1,
    'mouse'
)


const logitech = new shopItems
(
    "accessories/logitech.jpg",
    "Logitech G403 - Wireless",
    300,
    1,
    'mouse'
)


const odysseyNeo = new shopItems
(
    "accessories/odysseyneo.jpg",
    "Odyssey Neo - G9",
    9150,
    1,
    'monitor'
)

const odysseyArk = new shopItems
(
    "accessories/oddysey.png",
    "Odyssey Ark - 165hz",
    9590,
    1,
    'monitor'
)

const misura = new shopItems
(
    "accessories/misura.jpg",
    "Misura - 144hz",
    6300,
    1,
    'monitor'
)


const uclFinale = new shopItems
(
    "accessories/ucl2020finale.jpg",
    "UCL 2022 - Final",
    300,
    1,
    'ball'
)

const wc2014 = new shopItems
(
    "accessories/worldcup2014.jpg",
    "World Cup - 2014",
    300,
    1,
    'ball'
)

const wc2022 = new shopItems
(
    "accessories/worldcup2022.jpg",
    "World Cup - 2014",
    500,
    1,
    'ball'
)

const messi1 = new shopItems
(
    "accessories/messi.jpeg",
    "Messi - 2010 Jersey (AWAY)",
    500,
    1,
    'jersey'
)
const messi2 = new shopItems
(
    "accessories/messi1.jpeg",
    "Messi - 2010 Jersey (HOME)",
    500,
    1,
    'jersey'
)
const messi3 = new shopItems
(
    "accessories/messii2.jpg",
    "Messi - 2010 Jersey (AWAY)",
    500,
    1,
    'jersey'
)

const messi4 = new shopItems
(
    "accessories/messi4.jpeg",
    "Messi - 2022 Jersey (World Cup)",
    1000,
    1,
    'jersey'
)


objectArray.push(crostyGrey);
objectArray.push(crostyGreen);
objectArray.push(crostyOrange);
objectArray.push(iphone15);
objectArray.push(macbookm2);
objectArray.push(macbookm3);
objectArray.push(razer);
objectArray.push(steelseries);
objectArray.push(logitech);
objectArray.push(odysseyNeo);
objectArray.push(odysseyArk);
objectArray.push(misura);
objectArray.push(uclFinale);
objectArray.push(wc2014);
objectArray.push(wc2022);
objectArray.push(messi1);
objectArray.push(messi2);
objectArray.push(messi3);
objectArray.push(messi4);


let myAddedObjects = [];



// const purchases = document.getElementById('purchase-container');
//         purchases.innerHTML += `<div class="pruchase-pic-price-div">
//                                     <img src="${objectArray[i].image}" alt="" id="i"> 
//                                     <p id="price-profile>${objectArray[i].price}</p>"
//                                 </div>`;



const addtocart = document.getElementsByClassName('addToCart');

let clickCartForBoxDelete = 0;

for(let i=0; i<addtocart.length; i++){
    addtocart[i].addEventListener('click', function(){
        box.style.display = 'flex';
        clickCartForBoxDelete++;
        box.innerHTML += `<div class="addedDiv">
        <img class="addedImg" src="${objectArray[i].image}" alt="">
        <p class="add-quantity"> ${objectArray[i].quantity}x </p>
        <p class="cost"> ${objectArray[i].price * objectArray[i].quantity} </p>
        <button class="deleteItem"> &#10005; </button> 
        </div`;
        
        
        cartTrue = true;
        
        
        const deleteItem = document.getElementsByClassName('deleteItem');
        const addeddiv = document.getElementsByClassName('addedDiv');
        const cost = document.getElementsByClassName('cost');
        
        myAddedObjects.push(objectArray[i].image);
        
        totalNum.innerHTML = Number(totalNum.innerHTML) + (objectArray[i].price * objectArray[i].quantity);
        
        
        if(deleteItem){
            for(let i =0; i<deleteItem.length; i++){
                deleteItem[i].addEventListener('click', function(){
                    clickCartForBoxDelete--;
                    addeddiv[i].innerHTML = '';
                    addeddiv[i].style.display = 'none';
                    totalNum.innerHTML = Number(totalNum.innerHTML) - Number(cost[i].innerHTML);
                    if(clickCartForBoxDelete===0){
                        box.style.display = 'none'
                    }
                })
            }            
        }
        
    })
}





for(let i=0; i<increase.length; i++){
    increase[i].addEventListener('click', function(){
        objectArray[i].quantity += 1;
        quantityNum[i].innerHTML = Number(quantityNum[i].innerHTML) + 1;
        console.log('increased');
    })
}
for(let i=0; i<decrease.length; i++){
    decrease[i].addEventListener('click', function(){
        objectArray[i].quantity = objectArray[i].quantity - 1;
        quantityNum[i].innerHTML = Number(quantityNum[i].innerHTML) - 1;
        if(quantityNum[i].innerHTML == 0){
            quantityNum[i].innerHTML = 1;
        }
    })
}





const filter = document.getElementById('filter');
const checkbox = document.getElementsByClassName('checkbox1');



filter.addEventListener('click', function(){
    categoriesTrue = false;
    let array = [];
    for(let i=0;i<checkbox.length;i++){
        if(checkbox[i].checked){
            array.push(checkbox[i].value);
        }
    }
    for(let j=0;j<objectArray.length;j++){
        if(array.includes(objectArray[j].val)){
            function opacity(){
                card[j].style.opacity = '0';
                card[j].style.opacity = '1';
            }
            setInterval(opacity, 2000);
            card[j].style.display = 'block';
        }else{
            card[j].style.display = 'none';
        }
    }
    if(array.length === 0){
        for(let j=0;j<card.length;j++){
            card[j].style.display = 'block';
        }
    }
})

// console.log(objectArray.length);
// console.log(card.length);




// THIS IS AFTER REGISTRATION VARIABLES






const profileAAA = document.getElementById('profile-a');
const profileDiv = document.getElementById('profileDiv');
let profileOpened = false;
profileAAA.addEventListener('click', function(){
    profileOpened = !profileOpened;
    if(profileOpened){
        profileDiv.style.display = 'flex';
    }else{
        profileDiv.style.display = 'none';
    }

})

if(profileDiv.style.display == 'flex'){
    accountContainer[0].style.animationName = 'accountAnime1';
}



const registerContainer = document.getElementById('register-container');
const geomarket = document.getElementById('geomarket');

// const nameInp = document.getElementById('nameInp');
// const surnameInp = document.getElementById('surnameInp');
// const emailInp = document.getElementById('emailInp');
// const passInp = document.getElementById('passInp');
// const balanceInp = document.getElementById('balanceInp');

const personName = document.getElementById('personName');
const personBalance = document.getElementById('balancePersonNumber');



let profilesObject = [];

function personObject(name, surname, balance){
    this.name = name;
    this.surname = surname;
    this.balance = balance;
}



const head = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const registerCont = document.getElementById('register-to-center');
const account_sec = document.getElementById('account-sec');

const account_email = document.getElementById('account-email');
const account_pass = document.getElementById('account-password');
const spent_amount = document.getElementById('spent-amount');
const account_username = document.getElementById('account-username');
const account_balance = document.getElementById('account-balance');

const balanceInp1 = document.getElementById('balanceInp').value;

let visionPassword = '';

const subm = document.getElementById('submitInp');
subm.addEventListener('click', function(e){
    e.preventDefault();

    const nameInp = document.getElementById('nameInp').value;
    const surnameInp = document.getElementById('surnameInp').value;
    const emailInp = document.getElementById('emailInp').value;
    const passInp = document.getElementById('passInp').value;
    const balanceInp = document.getElementById('balanceInp').value;

    console.log(nameInp);
    registerCont.style.display = 'none'
    head.style.display = 'flex';
    main.style.display = 'block';
    footer.style.display = 'flex';
    account_sec.style.display = 'flex';

    visionPassword = passInp;

    account_email.innerHTML = emailInp;
    for(let i = 0; i<passInp.length;i++){
        account_pass.innerHTML += `&#x2022;`;
    }
    account_username.innerHTML = nameInp + ' ' + surnameInp;
    account_balance.innerHTML = 'Balance: ' + balanceInp;

    const obj = new personObject(nameInp[0].toUpperCase()+nameInp.slice(1), surnameInp[0].toUpperCase()+surnameInp.slice(1), balanceInp);
    profilesObject.push(obj);

    personName.innerHTML = obj.name + ' ' + obj.surname;
    personBalance.innerHTML = obj.balance;
})

const buy = document.getElementById('buyButton');

const purchase_container = document.getElementById('purchase-container');
let myBuy = false;
buy.addEventListener('click', buyFunc);
function buyFunc(){
    myBuy = true;
    if(Number(totalNum.innerHTML) > Number(personBalance.innerHTML)){
        alert("You don't have enough money !")
    }else{
        const balancePersonNumber = document.getElementById('balancePersonNumber');
        balancePersonNumber.innerHTML = Number(balancePersonNumber.innerHTML) - Number(totalNum.innerHTML);
        account_balance.innerHTML = "Balance: " + balancePersonNumber.innerHTML + " GEL";
        const addedimg = document.getElementsByClassName('addedImg');
        const cur_cost = document.getElementsByClassName('cost');

        
        if(myBuy){
            for(let m=0; m<addedimg.length; m++){
                purchase_container.innerHTML += `<div class="pruchase-pic-price-div">
    
                                        <img src="${addedimg[m].src}" alt="" class="i">
                                        <p class="price-profile">${cur_cost[m].innerHTML} GEL</p>
                        </div>`
                
            }
        }
        
        


        box.innerHTML = '';
        spent_amount.innerHTML = Number(spent_amount.innerHTML) + Number(totalNum.innerHTML);
        // spent_amount.innerHTML = Number(spent_amount.innerHTML) + Number(totalNum.innerHTML) + " GEL";
        totalNum.innerHTML = 0;
    }
}


const categories = document.getElementById('categoriesImg');

let categoriesTrue = false;
categories.addEventListener('click', function(){
    categoriesTrue = !categoriesTrue;
    if(categoriesTrue){
        sideBar.style.display = 'block';
        sideBar.style.animationName = 'animation';
    }else{
        sideBar.style.animationName = 'animation1';
    }
})


const navDiv = document.getElementsByClassName('navDiv');
const burgerMenu = document.getElementById('burgerMenu');
let burgerTrue = false;
const burgerMenuDiv = document.getElementsByClassName('burgerMenuDiv');
burgerMenu.addEventListener('click', function(){
    burgerTrue = !burgerTrue;
    if(burgerTrue){
        navDiv[0].classList.remove('navDivAnime1');
        navDiv[0].style.display = 'flex';
        navDiv[0].classList.add('navDivAnime');
    }else{
        navDiv[0].classList.add('navDivAnime1');
        profileDiv.style.display = 'none';
    }
})


const cart = document.getElementById('cart');
let cartTrue = false;
cart.addEventListener('click', function(){
    cartTrue = !cartTrue;
    if(cartTrue){
        box.style.display = 'flex';
    }else{
        box.style.display = 'none';
    }

})




// ACCOUNT SLIDES


const visitProfile = document.getElementById('visit-profile');
const accountContainer = document.getElementsByClassName('accountContainer');
let visitClicked = false;
visitProfile.addEventListener('click', function(){
    visitClicked = !visitClicked;
    accountContainer[0].style.display = 'flex';
    if(visitClicked){
        accountContainer[0].style.animationName = 'accountAnime';
        main.style.zIndex = '0';
    }else{
        accountContainer[0].style.animationName = 'accountAnime1';
    }
})


//PASSWORD VISION
let imgVision = false;
const showOrhide = document.getElementById('show-or-hide-img');
showOrhide.addEventListener('click', function(){
    imgVision = !imgVision;
    if(imgVision){
        showOrhide.src = 'accessories/hide.png';
        account_pass.innerHTML = visionPassword;
    }else{
        account_pass.innerHTML = '';
        for(let i = 0; i<visionPassword.length;i++){
            account_pass.innerHTML += `&#x2022;`;
        }
        showOrhide.src = 'accessories/show.png';
    }
})




























