var main = "";
var back = document.querySelector(".back");
var _orderID = 0;
//create menu page
function createMenuPage() {
    createMainSection();


    //Create main menu buttons
    var giveOrderBtn = document.createElement("button");
    giveOrderBtn.textContent = "Give Order"
    main.appendChild(giveOrderBtn)

    var payTheBillBtn = document.createElement("button");
    payTheBillBtn.textContent = "Pay the Bill"
    main.appendChild(payTheBillBtn)

    var setMenuBtn = document.createElement("button");
    setMenuBtn.textContent = "Set Menu"
    main.appendChild(setMenuBtn)

    var oldOrdersBtn = document.createElement("button");
    oldOrdersBtn.textContent = "Old Orders"
    main.appendChild(oldOrdersBtn)


    //get class to main menu's buttons
    giveOrderBtn.classList.add("main-buttons")
    payTheBillBtn.classList.add("main-buttons")
    setMenuBtn.classList.add("main-buttons")
    oldOrdersBtn.classList.add("main-buttons")


    //get functionality to buttons of main menu
    giveOrderBtn.addEventListener("click", () => {
        createOrderPage()
    })
    payTheBillBtn.addEventListener("click", () => {
        createPayTheBillPage()
    })
    setMenuBtn.addEventListener("click", () => {
        createSetMenusPage()
    })
    oldOrdersBtn.addEventListener("click", () => {
        createOldOrdersPage()
    })
}


//create order page
function createOrderPage() {
    deleteMainSection()
    createMainSection();
    back.style.display = "block"
     

    //create variables 
    //hold them throughout the process. Save to the list when the process is finished.
    var _food = "";
    var _drink = "";
    var _drinkSize = "";
    var _chipsSize = "";
    var _ekstras = "";
    var _table = "";
    var totalPriceList = [];
    var _totalPrice = 0;

    tables(dene)

    function dene(){
        deleteMainSection()
        createMainSection();
         

        foodsList.forEach(element => {
            var create = document.createElement("button");
            create.textContent = element[0];
            create.classList.add("main-buttons")
            main.appendChild(create);
        });
    
        //when click food buttons: delete the page and create the new page by assigning the selected menu and price to the variables
        document.querySelectorAll("main button").forEach((element, index) => {
            element.addEventListener("click", () => {
                _food = element.textContent;
                totalPriceList[0] = foodsList[index][1];
                //drink section func
                createDrinks();
            })
        })
        backtoback(main, tables, dene )
    }

    //create menu buttons of foods
    
    //create drink section func
    function createDrinks() {
        deleteMainSection();
        createMainSection();
        drinkList.forEach(element => {
            var create = document.createElement("button");
            create.textContent = element[0];
            create.classList.add("main-buttons")
            main.appendChild(create);
        });
        document.querySelectorAll("main button").forEach((element, index) => {
            element.addEventListener("click", () => {
                _drink = element.textContent;
                totalPriceList[1] = drinkList[index][1];
                // console.log(element,index)
                // console.log(``,_totalPrice,_drink )
                createChipsSize();
            })
        })
        backtoback(main, dene,""  )
    }
    function createChipsSize() {
        deleteMainSection();
        createMainSection();
        var small = document.createElement("button");
        small.textContent = "Small Size Chips: free";
        small.classList.add("main-buttons")
        main.appendChild(small);
        var medium = document.createElement("button");
        medium.textContent = "Medium Size Chips: 1$";
        medium.classList.add("main-buttons")
        main.appendChild(medium);
        var big = document.createElement("button");
        big.textContent = "Big Size Chips: 2$";
        big.classList.add("main-buttons")
        main.appendChild(big);

        

        backtoback(main, createDrinks, undefined  )

        document.querySelectorAll("main .main-buttons").forEach((element, index) => {
            element.addEventListener("click", () => {
                _chipsSize = element.textContent;
                if (index == 1) {
                    totalPriceList[2] = 1;
                } else if (index == 2) {
                    totalPriceList[2] = 2;
                }else{
                    totalPriceList[2] = 0;
                }
                createDrinkSize()
                // console.log(element,index)
                // console.log(``,_totalPrice,_drinkSize )

            })
        })
    }

    function createDrinkSize() {
        deleteMainSection();
        createMainSection();
        var small = document.createElement("button");
        small.textContent = "Small Size Drink: free";
        small.classList.add("main-buttons")
        main.appendChild(small);
        var medium = document.createElement("button");
        medium.textContent = "Medium Size Drink: 1$";
        medium.classList.add("main-buttons")
        main.appendChild(medium);
        var big = document.createElement("button");
        big.textContent = "Big Size Drink: 2$";
        big.classList.add("main-buttons")
        main.appendChild(big);

        backtoback(main, createChipsSize, undefined  )

        document.querySelectorAll("main .main-buttons").forEach((element, index) => {
            element.addEventListener("click", () => {
                _drinkSize = element.textContent;
                if (index == 1) {
                    totalPriceList[3] = 1;
                } else if (index == 2) {
                    totalPriceList[3] = 2;
                }else{
                    totalPriceList[3] = 0;
                }
                createEkstrasSection()
                // console.log(element,index)
                // console.log(``,_totalPrice,_drinkSize )

            })
        })
    }
    function createEkstrasSection() {
        deleteMainSection();
        createMainSection();
        ekstrasList.forEach(element => {
            var create = document.createElement("button");
            create.textContent = element[0];
            create.classList.add("main-buttons")
            main.appendChild(create);
        });

        backtoback(main, createDrinkSize, undefined  )

        document.querySelectorAll("main .main-buttons").forEach((element, index) => {
            element.addEventListener("click", () => {
                _ekstras = element.textContent;
                totalPriceList[4] = ekstrasList[index][1];
                completeOrder()

            })
        })
    }
    function completeOrder() {
        deleteMainSection();
        createMainSection();


        _totalPrice = totalPriceList.reduce((a,b) => a + b, 0)

        //h1 Order Details(inner html's last add <br>)
        var h1 = document.createElement("h1");
        h1.innerHTML = `Order Details: <br>`
        main.appendChild(h1)
        //h3 Order infos
        var h3Table = document.createElement("h2");
        h3Table.textContent = "Table-"+ _table
        main.appendChild(h3Table)

        var h3Food = document.createElement("h3");
        h3Food.textContent = _food
        main.appendChild(h3Food)

        var h3Drink = document.createElement("h3");
        h3Drink.textContent = _drink
        main.appendChild(h3Drink)

        var h3Ekstras = document.createElement("h3");
        h3Ekstras.textContent = _ekstras
        main.appendChild(h3Ekstras)

        var h3DrinkSize = document.createElement("h3");
        h3DrinkSize.textContent = _drinkSize
        main.appendChild(h3DrinkSize)

        var h3ChipsSize = document.createElement("h3");
        h3ChipsSize.textContent = _chipsSize
        main.appendChild(h3ChipsSize)

        var h2TotalPrice = document.createElement("h2");
        h2TotalPrice.textContent = "Total Price: " + _totalPrice + "$"
        main.appendChild(h2TotalPrice)


        //button finish order then add list all infos then back to the menu 
        var finishOrderBtn = document.createElement("button");
        finishOrderBtn.classList.add("orderBtn")
        finishOrderBtn.textContent = "Complete the Order"
        main.appendChild(finishOrderBtn)

        

        finishOrderBtn.addEventListener("click", () => {
            //now add all varaibles to lists
            _orderID++;
            var orderObject = {
                orderID: _orderID,
                food: _food,
                drink: _drink,
                chipsSize: _chipsSize,
                drinkSize: _drinkSize,
                ekstras: _ekstras,
                table: _table,
                totalPrice: _totalPrice
            }
            activeOrders.push(orderObject)

            //reset to main then back menu
            deleteMainSection()
            createMenuPage();
            back.style.display = "none"
            tablesList[_table -1][1] = _table_station;
        })
    }

    function tables(callback){
        deleteMainSection()
        createMainSection();

        //back butonu oluşturma fonksyonu oluştur her bir adımda. basıldığında bir önceki fonksyona dönsün.parametre olarak gideceği fonksyonu alsın, dom alsın oluşacagı yerin


        main.classList.add("dorow")
        tablesList.forEach(element => {
            var create = document.createElement("button")
            create.textContent = "Masa " + element[0];
            main.appendChild(create);
            if(element[1]){
                create.classList.add("tables-true")
                create.disabled = true
            }else{
                create.classList.add("tables-false")
                create.disabled = false
            }
            create.addEventListener("click",()=>{
                _table = element[0];
                _table_station = true;

                callback();
            })
        });
    }
}

function backtoback(dom,func,dene){
    var create = document.createElement("button");
    create.textContent = "Back";
    dom.appendChild(create);
    create.classList.add("backtoback")
    create.addEventListener("click",()=>{
        func(dene)
    })
}

//create pay the bill
function createPayTheBillPage() {
    deleteMainSection()
    createMainSection();
    back.style.display = "block"
    main.classList.add("dorow")
    //bir div al çevrçeve ver. için sipariş id'si başta olmak üzere bilgileri yaz. en altınada öde butonu
    activeOrders.forEach((element, index) => {
        var div = document.createElement("div")
        div.classList.add("odersList")

        var h3id = document.createElement("h3");
        h3id.textContent = "Order ID: " + element.orderID

        var h3food = document.createElement("h3");
        h3food.textContent = element.food

        var h3drink = document.createElement("h3");
        h3drink.textContent = element.drink

        var h3drinkSize = document.createElement("h3");
        h3drinkSize.textContent = element.drinkSize

        var h3chipSize = document.createElement("h3");
        h3chipSize.textContent = element.chipsSize

        var h3extras = document.createElement("h3");
        h3extras.textContent = element.extras

        var h3table = document.createElement("h3");
        h3table.textContent = "Table-" + element.table 

        var h3totalPrice = document.createElement("h3");
        h3totalPrice.textContent = "Total Price: " + element.totalPrice + "$"

        var payOrderBtn = document.createElement("button")
        payOrderBtn.textContent = "Pay the Bill";
        payOrderBtn.classList.add("paybtn")

        div.appendChild(h3id)
        div.appendChild(h3food)
        div.appendChild(h3drink)
        div.appendChild(h3drinkSize)
        div.appendChild(h3chipSize)
        div.appendChild(h3extras)
        div.appendChild(h3table)
        div.appendChild(h3totalPrice)
        div.appendChild(payOrderBtn)
        main.appendChild(div)

        payOrderBtn.addEventListener("click", () => {
            //tıkladığım buttona ait divdeki "id"yi alıp o id'yi içeren objecti silelim listeden
            oldOrders.push(activeOrders[index])
            tablesList[element.table-1][1] = false; 
            activeOrders.splice(index, 1)
            deleteMainSection()
            createMainSection()
            createPayTheBillPage()
        })


    });


}

//create set menu page
function createSetMenusPage() {
    deleteMainSection()
    createMainSection();
    back.style.display = "block"

    //create 3 button: add, set, delete
    var add = document.createElement("button");
    add.textContent = "Add"
    add.classList.add("main-buttons")
    main.appendChild(add)
    var set = document.createElement("button");
    set.textContent = "Set"
    set.classList.add("main-buttons")
    main.appendChild(set)
    var deletemenus = document.createElement("button");
    deletemenus.textContent = "Delete"
    deletemenus.classList.add("main-buttons")
    main.appendChild(deletemenus)



    //add
    add.addEventListener("click", () => {
        deleteMainSection()
        createMainSection();
        var foods = document.createElement("button");
        foods.textContent = "Foods"
        foods.classList.add("main-buttons")
        main.appendChild(foods)
        var drinks = document.createElement("button");
        drinks.textContent = "Drinks"
        drinks.classList.add("main-buttons")
        main.appendChild(drinks)
        var ekstras = document.createElement("button");
        ekstras.textContent = "Ekstras"
        ekstras.classList.add("main-buttons")
        main.appendChild(ekstras)

        function addItem(dom, itemList) {
            dom.addEventListener("click", () => {
                deleteMainSection()
                createMainSection();
                //input text. value al entera basınca
                var inpName = document.createElement("input");
                inpName.setAttribute("type", "text")
                inpName.setAttribute("placeholder", "Name")
                inpName.classList.add("set-btns")
                main.appendChild(inpName)
                var inpPrice = document.createElement("input");
                inpPrice.setAttribute("type", "text")
                inpPrice.setAttribute("placeholder", "Price")
                inpPrice.classList.add("set-btns")
                main.appendChild(inpPrice)

                var enter = document.createElement("button")
                enter.textContent = "Enter";
                enter.classList.add("enter")
                main.appendChild(enter);

                enter.addEventListener("click", () => {
                    var list = []
                    var fix = inpName.value + ": " + inpPrice.value + "$"
                    list.push(fix)
                    list.push(parseInt(inpPrice.value))
                    itemList.push(list);
                    alert("Eklendi")
                })
            })
        }


        addItem(foods, foodsList)
        addItem(drinks, drinkList)
        addItem(ekstras, ekstrasList)


    })

    //delete
    deletemenus.addEventListener("click", () => {
        deleteMainSection()
        createMainSection();
        var foods = document.createElement("button");
        foods.textContent = "Foods"
        foods.classList.add("main-buttons")
        main.appendChild(foods)
        var drinks = document.createElement("button");
        drinks.textContent = "Drinks"
        drinks.classList.add("main-buttons")
        main.appendChild(drinks)
        var ekstras = document.createElement("button");
        ekstras.textContent = "Ekstras"
        ekstras.classList.add("main-buttons")
        main.appendChild(ekstras)

        function deleteItem(dom, listItems) {
            dom.addEventListener("click", () => {
                deleteMainSection()
                createMainSection();
                listItems.forEach((element, index) => {
                    var create = document.createElement("button");
                    create.textContent = element;
                    create.classList.add("set-btns")
                    main.appendChild(create)
                    create.addEventListener("click", () => {
                        listItems.splice(index, 1);
                        deleteMainSection()
                        createMainSection();
                        deleteItem(dom, listItems)
                    })
                });
            })
        }
        deleteItem(foods, foodsList)
        deleteItem(drinks, drinkList)
        deleteItem(ekstras, ekstrasList)
    })

    //set
    set.addEventListener("click", () => {
        deleteMainSection()
        createMainSection();
        var foods = document.createElement("button");
        foods.textContent = "Foods"
        foods.classList.add("main-buttons")
        main.appendChild(foods)
        var drinks = document.createElement("button");
        drinks.textContent = "Drinks"
        drinks.classList.add("main-buttons")
        main.appendChild(drinks)
        var ekstras = document.createElement("button");
        ekstras.textContent = "Ekstras"
        ekstras.classList.add("main-buttons")
        main.appendChild(ekstras)

        function setList(dom, listItems) {
            dom.addEventListener("click", () => {
                deleteMainSection()
                createMainSection();
                listItems.forEach((element,index) => {
                    var create = document.createElement("button");
                    create.textContent = element[0]
                    create.classList.add("set-btns")
                    main.appendChild(create)
                    create.addEventListener("click", () => {
                        deleteMainSection()
                        createMainSection();

                        var inpName = document.createElement("input");
                        inpName.setAttribute("type", "text")
                        inpName.setAttribute("placeholder", "Name")
                        inpName.classList.add("set-btns")
                        main.appendChild(inpName)
                        var inpPrice = document.createElement("input");
                        inpPrice.setAttribute("type", "text")
                        inpPrice.setAttribute("placeholder", "Price")
                        inpPrice.classList.add("set-btns")
                        main.appendChild(inpPrice)

                        var enter = document.createElement("button")
                        enter.textContent = "Enter";
                        enter.classList.add("enter")
                        main.appendChild(enter);
                        
                        
                        enter.addEventListener("click",()=>{
                            var list = []
                            var set = inpName.value + ": " + inpPrice.value +"$"
                            list.push(set)
                            list.push(parseInt(inpPrice.value))
                            listItems[index] = list
                            alert("Güncellendi")
                            deleteMainSection()
                            createMenuPage();
                        })
                    })
                });
            })
        }

        setList(foods, foodsList)
        setList(drinks, drinkList)
        setList(ekstras, ekstrasList)
    })
}

//create old order details
function createOldOrdersPage() {
    deleteMainSection()
    createMainSection();
    back.style.display = "block"

    main.classList.add("dorow")
    oldOrders.forEach(element => {
        var div = document.createElement("div")
        div.classList.add("odersList")

        var h3id = document.createElement("h3");
        h3id.textContent = "Order ID: " + element.orderID

        var h3food = document.createElement("h3");
        h3food.textContent = element.food

        var h3drink = document.createElement("h3");
        h3drink.textContent = element.drink

        var h3drinkSize = document.createElement("h3");
        h3drinkSize.textContent = element.drinkSize

        var h3chipSize = document.createElement("h3");
        h3chipSize.textContent = element.chipsSize

        var h3extras = document.createElement("h3");
        h3extras.textContent = element.extras

        var h3table = document.createElement("h3");
        h3table.textContent = "Table-" + element.table

        var h3totalPrice = document.createElement("h3");
        h3totalPrice.textContent = "Total Price: " + element.totalPrice + "$"


        div.appendChild(h3id)
        div.appendChild(h3food)
        div.appendChild(h3drink)
        div.appendChild(h3drinkSize)
        div.appendChild(h3chipSize)
        div.appendChild(h3extras)
        div.appendChild(h3table)
        div.appendChild(h3totalPrice)
        main.appendChild(div)
    });

}

//delete main section
function deleteMainSection() {
    main.remove();
}
//create main section
function createMainSection() {
    main = document.createElement("main");
    document.querySelector("body").insertBefore(main, document.querySelector(".backToMenu"))
}


//back to the menu
back.addEventListener("click", () => {
    deleteMainSection()
    createMenuPage();
    back.style.display = "none"
})


//ALL LİSTS
var foodsList = [["kebab: 3$", 3], ["döner: 2$", 2]]
var drinkList = [["cola: 1$", 1], ["sprite: 1$", 1]]
var ekstrasList = [["onion rings: 2$", 2], ["cocoa cake: 3$", 3]]
var activeOrders = [];
var oldOrders = [];
var tablesList = [[1, false],[2, false],[3, false],[4, false],[5, false],[6, false],[7, false],]



createMenuPage()


