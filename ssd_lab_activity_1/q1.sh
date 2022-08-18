#!/bin/bash

grep -Eo "\w+" $1 | grep --colour -Ei "^a" | grep --colour -Eiv "txt$"
