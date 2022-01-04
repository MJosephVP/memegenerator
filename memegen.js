const form = document.forms[0];
const gallery = document.querySelector('.meme-gallery');
let p = document.createElement("p")

function memeOperation(e) {
    e.preventDefault();
    new FormData(form);
    // console.log("Let's look at the event object!", e);
}


form.addEventListener("submit", memeOperation)

form.addEventListener("formdata", event => {
    const data = event.formData;

    // event.formData grabs the object
    const entries = [...data.entries()];
    console.log(entries);

    const values = [...data.values()];
    console.log(values);

    gallery.append(p)

});