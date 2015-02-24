#!/bin/bash

hugo server --watch -D --source=$GOPATH/src/github.com/adamveld12/turnt-ninja --destination=$GOPATH/src/github.com/adamveld12/turnt-ninja/public -F --theme="boss"
