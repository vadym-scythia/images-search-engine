import weaviate from 'weaviate-ts-client'

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080' // todo: change, as could be used by other projects
});

const schemaConfig = { // todo: rename. this is class Meme
    'class' : 'Meme',
    'vectorizer' : 'img2vec-neural',
    'vectorIndexType' : 'hnsw',
    'moduleConfig' : {
        'img2vec-neural' : {
            'imageFields' : [
                'image'
            ]
        }
    },
    'properties': [
        {
            'name' : 'image',
            'datatype' : ['blob']
        },
        {
            'name' : 'text',
            'datatype' : ['string']
        }
    ]
}

await client.schema
    .classCreator()
    .withClass(schemaConfig)
    .do();