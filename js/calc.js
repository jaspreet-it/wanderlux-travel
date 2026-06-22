function tripThing() {
    let a = document.getElementById("place").value;
    let b = document.getElementById("people").value;
    let c = document.getElementById("days").value;
    let d = document.getElementById("style").value;

    let show = document.getElementById("totalShow");

    if (a == "" || b == "" || c == "" || d == "") {
        show.innerHTML = "Please fill all fields first.";
        return;
    }

    if (b <= 0 || c <= 0) {
        show.innerHTML = "Travellers and days must be more than 0.";
        return;
    }

    let price = 0;
    let placeName = "";

    if (a == "bali") {
        price = 180;
        placeName = "Bali";
    } else if (a == "paris") {
        price = 260;
        placeName = "Paris";
    } else if (a == "dubai") {
        price = 220;
        placeName = "Dubai";
    } else if (a == "maldives") {
        price = 300;
        placeName = "Maldives";
    } else if (a == "singapore") {
        price = 240;
        placeName = "Singapore";
    }

    let multi = 1;
    let styleName = "";

    if (d == "budget") {
        multi = 1;
        styleName = "Budget";
    } else if (d == "standard") {
        multi = 1.3;
        styleName = "Standard";
    } else if (d == "luxury") {
        multi = 1.8;
        styleName = "Luxury";
    }

    let finalAns = price * b * c * multi;

    show.innerHTML = "Estimated cost for " + b + " travellers to " + placeName + " for " + c + " days: $" + finalAns.toFixed(0) + " - " + styleName + " Travel Package.";
}
