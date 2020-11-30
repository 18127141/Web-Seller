// quan li san pham
const list = document.getElementById("List_product");
add_btn = document.getElementById("Add");
function Add_new_product_GUI() {
  const item = `
    <li class = "item"> 
    <div id ="img_container"><label>Enter URL</label> <input type = "file" id = "Add_img" accept="image/*"></div> <br>
    Enter name <input type = "text" id = "Add_name" placeholder="Name"> <br>
    Enter info <input type = "text" id = "Add_info" placeholder="Info"> <br>
    Enter stock <input type = "text" id = "Add_stock" placeholder="stock"> <br>
    Enter price <input type = "text" id = "Add_price" placeholder="price">VND <br>
    Enter size <input type = "text" id = "Add_size" placeholder="size"> <br>
    <button id="Add_new_product" type="button" onclick=Add_new_product()> Confrim Add</button>
    <button id="Cancel_new_product" type="button" onclick=cancel_add_product()> Cancel</button>
    </li>
    `;
  add_btn.disabled = true;

  list.insertAdjacentHTML("beforeend", item);
  let img_button = document.getElementById("Add_img");
  img_button.addEventListener("change", function (e) {
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
        `<button id="Cancel_img" type="button" onclick = cancel_img()>Cancel</button>`);
      
    };
    reader.readAsDataURL(img_button.files[0]);
  }, false);
}
function cancel_img() {
  const temp = document.getElementById("img_container");
  while (temp.hasChildNodes()) {
    temp.removeChild(temp.firstChild);
  }
  const item = `
    <li class = "item"> 
    <div id ="img_container"><label>Enter URL</label> <input type = "file" id = "Add_img" accept="image/*"></div> <br>`
  temp.insertAdjacentHTML("beforeend", item)
  
}
function cancel_add_product() {
  add_btn.disabled = false;
  list.removeChild(list.firstElementChild);
}
function Add_new_product() { }
