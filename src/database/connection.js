const mongoose = require('mongoose')

try {
  mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
} catch (err) {
  console.err('Erro ao conectar no banco', err)
}
