var mainDOM = document.querySelector("main");
//main page create
function mainPageCreate(){
    var mainDOM = document.querySelector("main");

    //create 4 main buttons
    var showMenu = document.createElement("button")
    var payTheBill = document.createElement("button")
    var setMenu = document.createElement("button")
    var pastOrders = document.createElement("button")

    showMenu.textContent = "Menus"
    mainDOM.appendChild(showMenu)
    payTheBill.textContent = "Pay the bill"
    mainDOM.appendChild(payTheBill)
    setMenu.textContent = "Set menus"
    mainDOM.appendChild(setMenu)
    pastOrders.textContent = "Past orders"
    mainDOM.appendChild(pastOrders)

    showMenu.classList.add("main-buttons")
    payTheBill.classList.add("main-buttons")
    setMenu.classList.add("main-buttons")
    pastOrders.classList.add("main-buttons")

    var list = [showMenu,payTheBill,setMenu,pastOrders]
   return list;
}
var mainBtnsList = mainPageCreate()

mainBtnsList[0].addEventListener("click", ()=>{
    clearMainPage()
})
mainBtnsList[1].addEventListener("click", ()=>{
    clearMainPage()
})
mainBtnsList[2].addEventListener("click", ()=>{
    clearMainPage()
})
mainBtnsList[3].addEventListener("click", ()=>{
    clearMainPage()
})

function clearMainPage(){
    mainBtnsList.forEach(element => {
        mainDOM.removeChild(element)
    });
}

