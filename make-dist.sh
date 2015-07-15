#!/bin/bash
# This script creates the distribution files. Usage:
# ./make-dist.sh

# remove dist files 
rm -rf dist/*

# compresses JavaScript files
cat \
    src/jquery.sp-regex.js \
| uglifyjs \
    --compress \
    --mangle \
    --preamble "/*! jQuery.spRegex v0.1.0 | Copyright (c) 2015 Gonzalo Chumillas | https://github.com/soloproyectos-js/jquery.sp-regex/blob/master/LICENSE */" \
    -o dist/jquery.sp-regex.min.js
