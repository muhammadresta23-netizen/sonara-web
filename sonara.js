function sendToWA(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("message").value;

    let text = `📸 Booking Request
👤 Name: ${name}
📷 Service: ${service}
📅 Date: ${date}
💬 Message: ${message}`;

    let url = "https://wa.me/6289509494475?text=" + encodeURIComponent(text);

    window.open(url, "_blank");

}
let text = `📸 Booking Request%0A
👤 Name: ${name}%0A
📱 Phone: ${phone}%0A
📷 Service: ${service}%0A
📅 Date: ${date}%0A
💬 Message: ${message}`;
function buyNow(service) {
  let pesan = `Ready to book your photography session?
We’re excited to be part of your special moment. Please fill in the details below to secure your booking 📸

Full Name:
Service: ${service}
Preferred Session Date: 
(e.g. 23/05/2025)
Photoshoot Location:
Additional Requests (Optional):

Thank you for choosing us! Once we receive your request, we’ll get back to you shortly to confirm your booking. We can’t wait to create beautiful memories with you ✨`;

  let url = "https://wa.me/6289509494475?text=" + encodeURIComponent(pesan);
  window.open(url, '_blank');
}