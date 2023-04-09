# images-search-engine
Using npm and weaviate: https://weaviate.io/developers/weaviate/installation/docker-compose

Based on: https://www.youtube.com/watch?v=mBcBoGhFndY

## Setup
Download and instal [nodejs](https://nodejs.org/en).

Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/).

Download and run this docker compose for vector and neural network containers: `curl -o docker-compose.yml "https://configuration.weaviate.io/v2/docker-compose/docker-compose.yml?generative_openai=false&image_neural_model=pytorch-resnet50&media_type=image&modules=modules&ref2vec_centroid=false&runtime=docker-compose&weaviate_version=v1.18.3"`

Run 'node index.js' in the root of the project.
