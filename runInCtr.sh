#!/bin/bash

docker run -it --rm -p 8080:8080 -v ${PWD}:/work -w /work node:6 $@
