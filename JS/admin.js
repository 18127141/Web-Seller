// quan li san pham
var map = new Map();
let id = 0
const list = document.getElementById("List_product");
add_btn = document.getElementById("Add");
add_menu = document.getElementById("add_product")
function show_product(id,src,name,price) {
  const item = `
    <li class = "item"> 
        <img src = "${src}",height = 200, width = 200>
        <p>${name}</p>
        <p>${price}</p>
        <button type = "button" job = "delete" id= "${id}">Delete</button>
        <button type = "button" job = "update" id= "${id}">Update</button> 
    </li>
    `
    list.insertAdjacentHTML("beforeend",item)
}
function Add_new_product_GUI() {
  const item = `
      <div id ="img_container">
        <label>Enter URL</label> 
        <input type = "file" id = "Add_img" job = "add_img" accept="image/*">
      </div> 
      Enter Id <input type = "text" id = "Add_id" placeholder="ID"> <br>
      Enter name <input type = "text" id = "Add_name" placeholder="Name"> <br>
      Enter info <input type = "text" id = "Add_info" placeholder="Info"> <br>
      Enter stock <input type = "text" id = "Add_stock" placeholder="stock"> <br>
      Enter price <input type = "text" id = "Add_price" placeholder="price">VND <br>
      Enter size <input type = "text" id = "Add_size" placeholder="size"> <br>
      <button id="Add_new_product" type="button" onclick=Add_new_product()> Confirm Add</button>
      <button id="Cancel_new_product" type="button" onclick=cancel_add_product()> Cancel</button>
    
    
    `;
  add_btn.disabled = true;
  add_menu.insertAdjacentHTML("beforeend", item);

}
function add_img() {
  let img_button = document.getElementById("Add_img");
  addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();
    
      img.src = reader.result;
  
      img.width = 200;
      img.height = 200;
      console.log(img)
      const temp = document.getElementById("img_container");
      while (temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild);
      }
      temp.appendChild(img);
      temp.insertAdjacentHTML("beforeend",
        `<button id="Cancel_img" type="button" job = "Cancel_img">Cancel</button>`);

    };
    reader.readAsDataURL(img_button.files[0]);
  });
}
function cancel_add_img() {
  const temp = document.getElementById("img_container");
  while (temp.hasChildNodes()) {
    temp.removeChild(temp.firstChild);
  }
  add_menu.insertAdjacentHTML("afterbegin", `<div id ="img_container"><label>Enter URL</label> <input type = "file" id = "Add_img" job = "add_img" accept="image/*"></div> <br>`)
}
add_menu.addEventListener("click", function (ToDo) {
  const child = ToDo.target
  if (child.attributes.job != undefined) {
    const job = child.attributes.job.value;

    if (job == "add_img") {
      add_img()
    }
    else {
      cancel_add_img();
    }
  }
})
function cancel_add_product() {
  add_btn.disabled = false;
  while (add_menu.hasChildNodes()) {
    add_menu.removeChild(add_menu.firstChild)
  }

}
function Add_new_product() {
  let temp = list.firstElementChild;

  let temp_img = document.getElementById("Add_img")
  if (temp_img == null) {
    temp_img = document.querySelector("#img_container img")
    
  }
  else {
    temp_img = document.createElement("img");
    temp_img.src = "img/Logo.png";

  }

  let temp_id = document.getElementById("Add_id")
  let temp_name = document.getElementById("Add_name")
  let temp_info = document.getElementById("Add_info")
  let temp_stock = document.getElementById("Add_stock")
  let temp_price = document.getElementById("Add_price")
  let temp_size = document.getElementById("Add_size")

  cancel_add_product();
  show_product(temp_id.value,temp_img.src,temp_name.value,temp_price.value);
  map.set(temp_id.value,{
    id: temp_id.value, img_src: temp_img.src, name: temp_name.value, info: temp_info.value,
    stock: temp_stock.value, price: temp_price.value, size: temp_size.value
  })
  
  console.log(map)
}
