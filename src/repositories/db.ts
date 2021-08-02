import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

async function connect() {
  return await mongoose.connect(process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
}

export {
  connect
}
