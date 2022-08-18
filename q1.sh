#!/bin/bash

grep -i "^a" $1 | grep -i "[^t][^x][^t]$"
