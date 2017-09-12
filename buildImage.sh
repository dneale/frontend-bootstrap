#!/bin/bash

docker run -it --rm -v ${PWD}:/work -w /work node:6 npm install \
        && docker run -it --rm -v ${PWD}:/work -w /work node:6 npm run build