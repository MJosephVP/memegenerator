const form = document.forms[0];
const gallery = document.querySelector('.meme-gallery');
let p = document.createElement("p")
let currentID = 1000;

function memeOperation(e) {
    e.preventDefault();
    new FormData(form);
    // console.log("Let's look at the event object!", e);
}


form.addEventListener("submit", memeOperation)

form.addEventListener("formdata", event => {
    currentID++;
    const data = event.formData;
    let memeTile = create_memeTile();
    memeTile.append(create_d1())
    memeTile.append(create_d2())
    memeTile.append(create_img())
    gallery.appendChild(memeTile);
    

    // event.formData grabs the object
    const entries = [...data.entries()];
    console.log(entries);

    const values = [...data.values()];
    console.log(values);


    function create_d1() {
        let d1 = document.createElement('div');
        d1.innerHTML = 'hello';
        d1.className = 'active-top-text';
        return d1
    }

    function create_d2() {
        let d2 = document.createElement('div');
        d2.innerHTML = 'goodbye';
        d2.className = 'active-bottom-text';
        return d2
    }

    function create_img() {
        let img1 = document.createElement('img');
        img1.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
        img1.className = 'meme-image';
        return img1
    }

    function create_memeTile() {
        let tile1 = document.createElement('div');
        tile1.className = 'meme-tile';
        return tile1
    }
});