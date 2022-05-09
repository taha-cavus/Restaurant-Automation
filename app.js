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
    var menuLists = orderPageCreate()
    menuLists.forEach(element => {
        element.addEventListener("click",()=>{
            alert(element.innerText)
            menuLists.forEach(element => {
                mainDOM.remove(element)
            });
        })
    });
    
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

//Lists
var menus = ["Hamburger: 2$","Giant Chicago: 5$","Cheesburger: 2$","Double Burger: 4$","Bacon Cheese Burger: 6$"]
var orders = [
    { id: 20055, menu: 'Hambuerger: 2$', drink: "Cola: 1$", sizeDrink: "Big Patato: +1$", sizePatato: "Big Patato", tables: "3", totalPrices: "17$"} ,
];

//create page of munus 
function orderPageCreate(){
    //create menu list
    var listOfMenus = []
    menus.forEach(element => {
        var btn = document.createElement("button")
        btn.classList.add("menu-btns")
        btn.textContent = element
        mainDOM.appendChild(btn)
        listOfMenus.push(btn);
    });
    return listOfMenus
}













































/*
+sipariş
-menüler
-siparişler[obeject list:secilen menü -içecek/patato ve size-ekstralar -masalar -total fiyat]

+menu set
-menüler

+sipariş öde
-siparişler

+past oders
-old siparişler
*/
