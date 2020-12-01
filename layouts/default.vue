<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
/* * { background-color: rgba(255,0,0,.2); }
* * { background-color: rgba(0,255,0,.2); } 
* * * { background-color: rgba(0,0,255,.2); } 
* * * * { background-color: rgba(255,0,255,.2); } 
* * * * * { background-color: rgba(0,255,255,.2); } 
* * * * * * { background-color: rgba(255,255,0,.2); } 
* * * * * * * { background-color: rgba(255,0,0,.2); } 
* * * * * * * * { background-color: rgba(0,255,0,.2); } 
* * * * * * * * * { background-color: rgba(0,0,255,.2); } */

html {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

main {
  position: relative;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 100%;
}

#__nuxt,
#__layout,
#__layout > div {
  height: 100%;
}

#__nuxt {
  display: flex;
  justify-content: center;
  align-items: center;
}
#__layout {
  width: 100%;
  max-width: 414px;
  max-height: 812px;
}

picture {
  line-height: 0;
  img {
    width: 100%;
  }
}
img {
  image-rendering: pixelated;
}
button {
  border: none;
  background: none;
}
ul {
  list-style-type: none;
}
</style>
