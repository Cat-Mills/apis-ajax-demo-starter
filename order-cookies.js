
async function orderCookies(evt){
    evt.preventDefault()

    const formData = {
        cookieType: document.querySelector("#cookie-type-field").value,
        qty: document.querySelector("#qty-field").value,
    }
    try {
    const response = await axios.post("/order-cookies", formData);
    document.querySelector('#order-status').innerText = response.data.msg;
    document.querySelector('#order-total').innerText = "Total: $" + response.data.total.toFixed(2)
    } catch (err) {
        alert(err.message)
    }
}
document.querySelector('#order-form').addEventListener('submit', orderCookies)
