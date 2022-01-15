let album = document.querySelector('ul');
let images = document.getElementById('images');
let albumUrl = 'https://jsonplaceholder.typicode.com/albums'
let imageUrl = 'https://jsonplaceholder.typicode.com/photos?albumId='

async function getAlbum() {
  let albums = await fetch(albumUrl);

  if (albums.ok) {
    return await albums.json();
  } else {
    console.error('Error')
  }
}
async function getImg(id) {
  let images = await fetch(`${imageUrl + id}`);

  if (images.ok) {
    return await images.json();
  } else {
    console.error('Error')
  }
}

function showAlb(arr) {
  album.innerHTML = arr.map(item => {
    return `<li id="${item.id}">${item.title}</li>`;
  }).join('');
}

function showImg(arr) {
  images.innerHTML = arr.map(img => {
    return `<img src="${img.thumbnailUrl}"></img>`;
  }).join('');
}

getAlbum().then((arr) => showAlb(arr));

album.addEventListener('click', (event) => {
  event.preventDefault();
  getImg(event.target.id).then((arr) => showImg(arr));
})