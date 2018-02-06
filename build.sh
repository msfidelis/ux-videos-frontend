#!/bin/bash

VERSION=1

USER=msfidelis
IMAGE=ux-videos-frontend:$VERSION
REGISTRY=docker.io/ #Default Docker cloud 

docker build -t $IMAGE .
docker tag $IMAGE $USER/$IMAGE
docker push $REGISTRY$USER/$IMAGE