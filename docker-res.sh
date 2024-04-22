#!/bin/bash

# Get IDs and names of all running containers
CONTAINER_INFO=$(docker ps --format "{{.ID}} {{.Names}}")

# Iterate over each container info and run docker container stats
while read -r CONTAINER_ID CONTAINER_NAME
do
    echo "Stats for container: $CONTAINER_NAME (ID: $CONTAINER_ID)"
    docker container stats --no-stream $CONTAINER_ID
    echo "--------------------------------------------"
done <<< "$CONTAINER_INFO"
