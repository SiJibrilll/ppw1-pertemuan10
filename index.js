console.log("Hello world")

function get(id) {
    return document.getElementById(id)
}

function set(element, value) {
    element.innerHTML = value
}

function button1() {
    alert("Halo dari button 1")
    console.log("Halo dari button 1")
}

function button2() {
    h1 = get('text')
    text = "<h1>Hallo dari button 2</h1>"
    set(h1, h1.innerHTML + text)
}
// dua button satunya alert + console kedua button nya tampilin kode HTML