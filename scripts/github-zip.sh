#!/usr/bin/env bash

NPM_NAME=$(npx -c 'echo $npm_package_name');
export TAR_FILENAME=$(npm pack ${NPM_NAME}\@next);
export ZIP_FILENAME=${TAR_FILENAME/.tgz/.zip};
tar -xzvf $TAR_FILENAME;
zip -r $ZIP_FILENAME package;