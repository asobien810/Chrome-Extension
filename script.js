    let inputBtn = document.getElementById("input-btn")
    let myLeads = []
    const inputEl = document.getElementById("input-el")
    const ulEl = document.getElementById("ul-el")
    let deleteBtn = document.getElementById("del-btn")
    let saveBtn = document.getElementById("save-btn")

    const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

    if(leadsFromLocalStorage) {
        myLeads = leadsFromLocalStorage
        renderLeads()
    }

    inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value) // gets value from input
        renderLeads() 
        inputEl.value = "" // clears input after clicking the button
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    })

    deleteBtn.addEventListener("dblclick", function(){
        localStorage.clear()
        myLeads = []
        renderLeads()   
    })

    saveBtn.addEventListener("click", function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            renderLeads()  
        })
    })

    function renderLeads() {
        let listItems = ""
        for (let i = 0; i < myLeads.length; i++){
            listItems += "<li><a target = '_blank' href =" + myLeads[i] + ">" +  myLeads[i] + "</a></li>"// ulEl.innerHTML += "<li>" + myLeads[i] + "</li> " // document.createElement("li") li.textContent = myLeads[i] ulEl.append()
        }
    
        ulEl.innerHTML = listItems
    }

    // let container = document.getElementById("cont")

    // container.innerHTML = "<button onclick='buy()'>BUY</button>"

    // function buy() {
    //     container.innerHTML += "<p>Thank you for buying!</p>"
    // }z