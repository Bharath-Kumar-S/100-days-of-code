## Build

docker build -t book-service:latest .

## Run

docker run -d -p 3000:3000 --name book-service book-service

## Access bash of the running container

docker exec -it book-service bash
