#!/bin/bash

docker run -it --rm -p 8888:8888 -v ${PWD}/work:/home/jovyan/work jupyter/r-notebook
