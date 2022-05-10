var main = "";
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


    //create variables 
    //hold them throughout the process. Save to the list when the process is finished.
    var _food = "";
    var _drink = "";
    var _drinkSize = "";
    var _chipsSize = "";
    var _ekstras = "";
    var _totalPrice = 0;


    //create menu buttons of foods
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
            _totalPrice += foodsList[index][1];
            //drink section func
            createDrinks();
        })
    })
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
                _totalPrice += drinkList[index][1];
                // console.log(element,index)
                // console.log(``,_totalPrice,_drink )
                createDrinkSize();
            })
        })
    }
    function createDrinkSize() {
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

        document.querySelectorAll("main button").forEach((element, index) => {
            element.addEventListener("click", () => {
                _drinkSize = element.textContent;
                if(index == 1){
                    _totalPrice += 1;
                }else if(index == 2){
                    _totalPrice += 2;
                }
                
                console.log(element,index)
                console.log(``,_totalPrice,_drinkSize )
                
            })
        })
        
    }


}

//create pay the bill
function createPayTheBillPage() {
    deleteMainSection()
    createMainSection();
}

//create set menu page
function createSetMenusPage() {
    deleteMainSection()
    createMainSection();
}

//create old order details
function createOldOrdersPage() {
    deleteMainSection()
    createMainSection();
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



//ALL LİSTS
var foodsList = [["kebab: 3$", 3], ["döner: 2$", 2]]
var drinkList = [["cola: 1$", 1], ["sprite: 1$", 1]]






createMenuPage()


