const fileName = './img/warhammer40k_titan.jpg';
const img = readFileSync(fileName);
const b64 = Buffer.from(img).toString('base64');
await client.data.creator()
  .withClassName('Meme')
  .withProperties({
    image: b64,
    text: 'matrix meme'
  })
  .do();