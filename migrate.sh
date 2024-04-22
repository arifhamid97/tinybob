#!/bin/bash

docker-compose -f compose.yml run --rm nest-api npx prisma migrate dev