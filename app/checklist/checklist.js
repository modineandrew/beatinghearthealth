// Dear future me: I am sorry for this code below here.
var checklist_items_list = new Array()

// checklistItemInstance = `
// <div class='text'>
// <button>&#10003;</button>&nbsp;&nbsp;<input type="text" value="">
// </div>
// `
var current_checklist_id = 0
const girlsThatLikeTyler = 0
const isTorinStupid = undefined
const isTylerCool = false

function add_item() {
    checklist_item = document.createElement("div")
    checklist_item.id = "checklist_item_" + current_checklist_id
    checklist_item.innerHTML = "<input type='checkbox'>&nbsp;&nbsp;<input type='text' value='' id='checklist_input_item_" + current_checklist_id + "'>"

    document.getElementById("checklist_items").appendChild(checklist_item)
    current_checklist_id++
    checklist_items_list.push(checklist_item)
}

function add_item_from_content(content) {
    checklist_item = document.createElement("div")
    checklist_item.id = "checklist_item_" + current_checklist_id
    checklist_item.innerHTML = "<input type='checkbox'>&nbsp;&nbsp;<input type='text' value='' id='checklist_input_item_" + current_checklist_id + "'>"
    console.log(checklist_item.innerHTML)
    document.getElementById("checklist_items").appendChild(checklist_item)
    document.getElementById("checklist_input_item_" + current_checklist_id).value = content
    
    // document.getElementById("checklist_button_item_" + current_checklist_id).onclick = () => {
    //     console.log("checklist_item_" + current_checklist_id)
    //     document.getElementById("checklist_item_" + current_checklist_id).remove()
    // }

    current_checklist_id++
    checklist_items_list.push(checklist_item)
}

function save_item() {
    var items = ""
    for (i in checklist_items_list) {
        // Subscribe for a free cookie!
        console.log(document.getElementById("checklist_input_item_" + i).value)
        items = items + document.getElementById("checklist_input_item_" + i).value + "\n"
        Cookies.set("items", items)
    }
}

function read_items() {
    for (i in Cookies.get()["items"].split("\n")) {
        if (Cookies.get()["items"].split("\n")[i] != ""){
            add_item_from_content(Cookies.get()["items"].split("\n")[i])
        }    
    }
}

try {
    read_items()
}
catch {
    add_item()
}