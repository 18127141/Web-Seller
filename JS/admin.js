// quan li san pham
list = document.getElementById("List_product")
add_btn = document.getElementById("Add")

function Add_new_product_GUI(){
    const item = `
    <li class = "item"> 
    Enter img URL <input type = "text" id = "Add_img" placeholder="URL"> <br>
    Enter name <input type = "text" id = "Add_name" placeholder="Name"> <br>
    Enter info <input type = "text" id = "Add_info" placeholder="Info"> <br>
    Enter stock <input type = "text" id = "Add_stock" placeholder="stock"> <br>
    Enter price <input type = "text" id = "Add_price" placeholder="price">VND <br>
    Enter size <input type = "text" id = "Add_size" placeholder="size"> <br>
    <button id="Add_new_product" type="button" onclick=Add_new_product()> Confrim Add</button>
    <button id="Cancel_new_product" type="button" onclick=cancel_add_product()> Cancel</button>
    </li>
    `
    add_btn.disabled = true
    list.insertAdjacentHTML("beforeend", item)
    
}
function cancel_add_product(){
    add_btn.disabled = false
    list.removeChild(list.firstElementChild)
}
function Add_new_product(){

}
