#!/bin/bash

# удаляем неиспользуемые css-переменные из сборки в root-пакете
node bin/purgecss.js

# удаляем неиспользуемые css-переменные из сборки во всех подпакетах
lerna exec --parallel \
    --ignore @friday-team/core-components-vars \
    --ignore @friday-team/core-components-themes \
    --ignore @friday-team/core-components-grid \
    --ignore @friday-team/core-components-toast-plate \
    -- node ../../bin/purgecss.js
