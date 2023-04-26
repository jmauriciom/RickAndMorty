const app = require('./app')

const PORT = process.env.PORT || 3001

const router = require('./routes/index')

// const router = require('./routes/index')

app.use(router)

app.listen(PORT, () => {
    console.log(`Server raised in port: http://localhost:${PORT}`);
});