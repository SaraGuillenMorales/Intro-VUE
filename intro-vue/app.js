
const { createApp, ref } = Vue;
const app = createApp({
    template: `
    <h1>Hola Mundo</h1>
    <h2>Desde app.js</h2>
    `

});

app.mount('#myApp')