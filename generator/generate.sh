#!/bin/bash
SCRIPT_PATH=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )
NAME=$1

if [ -z "$NAME" ]; then
    echo -e "\x1b[30;41m [ERR] Component name not specified \x1b[0m"
    exit 1
fi

cd "$SCRIPT_PATH"

CAMEL_CASE="$(echo $NAME | sed -E 's/(^|-)([a-z])/\U\2/g' | sed -E 's/./\L&/')"

if [ ! -d "output" ]; then
    mkdir output
fi

if [ -d "output/$NAME" ]; then
    echo -e "\x1b[30;41m [ERR] Component $NAME exists \x1b[0m"
    exit 1
fi

mkdir output/$NAME

sed -e "s;%name%;$NAME;g" -e "s;%camel_case%;$CAMEL_CASE;g" template/component.js > output/$NAME/$NAME.component.js
sed -e "s;%name%;$NAME;g" -e "s;%camel_case%;$CAMEL_CASE;g" template/controller.js > output/$NAME/$NAME.controller.js
sed -e "s;%name%;$NAME;g" -e "s;%camel_case%;$CAMEL_CASE;g" template/module.js > output/$NAME/$NAME.module.js
sed -e "s;%name%;$NAME;g" -e "s;%camel_case%;$CAMEL_CASE;g" template/template.html > output/$NAME/$NAME.html
sed -e "s;%name%;$NAME;g" -e "s;%camel_case%;$CAMEL_CASE;g" template/style.scss > output/$NAME/$NAME.scss

echo -e "\x1b[30;42m [✓] Component $NAME created \x1b[0m"
