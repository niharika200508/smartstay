function bookRoom() {
    let name = document.getElementById("name").value;
    let days = document.getElementById("days").value;

    if (name === "" || days === "") {
        document.getElementById("result").innerHTML = "Please fill all fields!";
        return;
    }

    let cost = days * 1500;

    document.getElementById("result").innerHTML =
        "Thank you " + name + "! Booking confirmed. Total cost: ₹" + cost;
}