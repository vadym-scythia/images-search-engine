import express from 'express';
import bodyParser from 'body-parser';
import weaviate from 'weaviate-ts-client'

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080'
});

// for the first execution use here initialize_schema.js
// for the first execution use here add_images_to_db.js

app.post('/search', async (req, res) => {
    const requestImage = req.body.image;
    const resultImg = await client.graphql.get()
        .withClassName('Meme')
        .withFields(['image'])
        .withNearImage({ image: requestImage })
        .withLimit(1)
        .do();
    const result = resultImg.data.Get.Meme[0].image;
    res.json({ image: result });
});

app.listen(3002, () => console.log('App listening on http://localhost:3002'));