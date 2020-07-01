# mds_m1_valsin_jerry_optimperf

## Introduction
:school: This Project Optimization and Performance with a REST API and a MongoDBAtlas cluster in the Cloud and locally - MyDigitalSchool :books:

## API Postman test
https://documenter.getpostman.com/view/11411211/T17DiV2g?version=latest

<br/>

## **🧱 Structure**

In folder server and client we will find a Dockerfile to build the image:

> ./backend/Dockerfile

In main repository we will find a docker-compose.yml to set containers launching:

> ./docker-compose.yml

<br/>

## **⚙️ Setup Composing**

Dockerfile content:

> **FROM**: Use a lighter version of Node as a parent image
>
> **WORKDIR**: Set the working directory
>
> **COPY**: Copy the current directory contents into the container at /api
>
> **RUN**: install dependencies
>
> **EXPOSE**: Make port XXXX available to the world outside this container
>
> **CMD**: Run the app when the container launches

In docker-compose.yml:

_we will find there the version and the services of deployment_

NB: MONGO_URI -> local connect in comment

<br/>

## **:rocket: Install & Deployment**

> :\$ git clone https://github.com/Jekdesign/mds_m1_valsin_jerry_optimperf.git

Use docker:

> :\$ **docker-compose up --build** or **docker-compose up -d --build**
>
> _Shutdown if necessary: :\$ docker-compose down_
> 
> Basic for use cluster: 
> :\$ **docker-compose up**
> :\$ **docker exec -it mongoset[#] mongo**
> 
> Config replica set:
> :\$ config = { _id:"my-mongo-cluseter", members:[ {_id:0, host:"mongoset1:27017"}, {_id:1, host:"mongoset2:27018"}, {_id:2, host:"mongoset3:27019"}, ] };
> :\$ rs.initiate(config)

<br/>

Pactical basic for npm package manager

> ###### First, run the backend
>
> :\$ cd backend/
>
> :\$ npm install
>
> :\$ npm start

:memo: Note

Connection db `mongodb://mongodb:27017/mds` or `link Mongo ATLAS`

Backend port `https://localhost:8080`

Client access `https://localhost:3000`