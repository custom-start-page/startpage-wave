#!/bin/bash

rm -r dist
mkdir dist

cp -r src/* dist/
cp license.txt dist/
cp README.md dist/
