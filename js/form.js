function checkAppForm() {
    let a = document.getElementById("name1").value;
    let b = document.getElementById("email1").value;
    let c = document.getElementById("phone1").value;
    let d = document.getElementById("date1").value;
    let e = document.getElementById("msg1").value;

    let box = document.getElementById("appMsg");

    if (a == "" || b == "" || c == "" || d == "" || e == "") {
        box.innerHTML = "Please complete all fields.";
        return false;
    }

    if (!b.includes("@")) {
        box.innerHTML = "Please enter a valid email address.";
        return false;
    }

    box.innerHTML = "Appointment request submitted successfully.";
    return false;
}

function contactThing() {
    let a = document.getElementById("cname").value;
    let b = document.getElementById("cemail").value;
    let c = document.getElementById("csubject").value;
    let d = document.getElementById("cmessage").value;

    let box = document.getElementById("contactMsg");

    if (a == "" || b == "" || c == "" || d == "") {
        box.innerHTML = "Please complete all fields.";
        return false;
    }

    if (!b.includes("@")) {
        box.innerHTML = "Please enter a valid email address.";
        return false;
    }

    let emailTo = "info@wanderluxtravel.com";
    let sub = encodeURIComponent(c);
    let msg = encodeURIComponent("Name: " + a + "\nEmail: " + b + "\n\nMessage:\n" + d);

    window.location.href = "mailto:" + emailTo + "?subject=" + sub + "&body=" + msg;

    box.innerHTML = "Your email application should open now.";
    return false;
}
