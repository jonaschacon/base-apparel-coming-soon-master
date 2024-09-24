const input = document.getElementById("input");
const p = document.getElementById("p");
const icon = document.getElementById("icon");

console.log(p);

function validate() {
    event.preventDefault()

    const emailValue = input.value;
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue.length == 0) {
        alert('The "input" field is empty')
    }
    
    else if (emailPattern.test(emailValue)) {
        p.style.display = "none";
        icon.style.display = "none";
    } else {
        p.style.display = "block";
        icon.style.display = "block";
    }

    return false;
}
