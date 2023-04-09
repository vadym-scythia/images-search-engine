import weaviate from 'weaviate-ts-client'
import fs, { readFileSync, writeFileSync } from 'fs'

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080'
});

// for the first execution use here initialize_schema.js
// for the first execution use here add_images_to_db.js

const testImg = Buffer.from(readFileSync('.\\test.jpg')).toString('base64');
const resultImg = await client.graphql.get()
    .withClassName('Meme')
    .withFields(['image'])
    .withNearImage({ image : testImg })
    .withLimit(1)
    .do();
const result = resultImg.data.Get.Meme[0].image;
writeFileSync('.\\result.jpg', result, 'base64')