export default function handler(req, res) {
  const memes = [
    "https://i.imgflip.com/1bij.jpg",
    "https://i.redd.it/3t9a3y19glf51.jpg",
    "https://i.redd.it/8u6h8tq5ehg51.jpg",
    "https://i.redd.it/2fn5b9l9q6e51.jpg",
    "https://i.redd.it/vkndh5gij9h51.jpg"
  ];

  const randomMeme = memes[Math.floor(Math.random() * memes.length)];
  res.writeHead(302, { Location: randomMeme });
  res.end();
}
