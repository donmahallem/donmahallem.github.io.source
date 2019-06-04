#!/bin/bash
if [ "$TEST_SUITE" == "unit" ]; then
    npm install coveralls --no-save -g
    cat ./coverage/DonMahallem/lcov.info | coveralls
fi