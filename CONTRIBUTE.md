## Setup



``` shell
git clone --recursive https://github.com/UnPourTous/react-native-ui.git
```

``` shell
# main project 
yarn

# website 
cd website && yarn && cd ..

# react native web player
cd website/react-native-web-player && git submodule init && git submodule update && yarn && cd ../.. 
```

## Run website
``` shell 
cd website

# build react native web player 
npm run build-web-player

# run the dev website
npm run start
```
