<main class="container content-section">
    <h2 class="text-center mb-5">Contact Us</h2>
    <div class="row">
        <div class="col-md-6">
            <div class="shape-box">
                <h4>Reach Out</h4>
                <hr>
                <p><strong>Phone:</strong> 71750854</p>
                <p><strong>WhatsApp:</strong> 78119183</p>
                <p><strong>Location:</strong> Gaborone</p>
                <div class="mt-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174876.png" width="30" class="me-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" width="30" class="me-2">
                </div>
            </div>
        </div>
 
        <div class="col-md-6">
            <div class="shape-box-alt">
                <h4>Place an Order</h4>
                <form id="waForm">
                    <div class="mb-3">
                        <input type="text" id="custName" class="form-control" placeholder="Your Name" required>
                    </div>
                    <div class="mb-3">
                        <textarea id="orderMsg" class="form-control" rows="3" placeholder="What can we bake for you?" required></textarea>
                    </div>
                    <button type="button" onclick="sendToWhatsApp()" class="btn btn-crave w-100">Send via WhatsApp</button>
                </form>
            </div>
        </div>
    </div>
</main>
 
<script>
function sendToWhatsApp() {
    let name = document.getElementById('custName').value;
    let msg = document.getElementById('orderMsg').value;
    let phone = "26778119183"; // International format for Gaborone
    let url = `https://wa.me/${phone}?text=Hello, I am ${name}. ${msg}`;
    window.open(url, '_blank').focus();
}
</script>