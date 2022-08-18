#!/bin/bash

ls -la $1 | grep --colour -E "...x...-.." | grep --colour -Eo "\s.?[a-zA-Z0-9_]+.?[a-zA-Z]+$" | grep --colour -Eo ".?[a-zA-Z0-9_]+.?[a-zA-Z]+$" 
