const light_on = document.getElementById('light_on');
const light_off = document.getElementById('light_off');
const on_image = document.getElementById('on_image');
const off_image = document.getElementById('off_image');
const light_details = document.getElementById('light_details');

light_on.onclick = () => {
    on_image.style.display = 'none';
    off_image.style.display = 'block';
    light_details.innerHTML = 'Switch On';
}
light_off.onclick = () => {
    on_image.style.display = 'block';
    off_image.style.display = 'none';
    light_details.innerHTML = 'Switch Off';
}


const customer_name =document.getElementById('customer_name');
let food_name =document.querySelectorAll('input[name="food_name"]');
// food_name.style.color = '#22b0c5';
const output_details = document.getElementById('output_details');

food_name.forEach(item => {
    item.onchange = (event) => {
        const food_data = document.querySelectorAll('input[name="food_name"]:checked');
        const c_n =customer_name.value;
        let data = [];
        let total = 0;
        food_data.forEach(food => {
            data.push(food.value);
            total += +food.getAttribute('price');
        });
        output_details.innerHTML = set_alert(`Hello ${c_n} sir, You selected : ${data.join(', ')}
        And your total cost is = ${total}`,'success');
    }
});




