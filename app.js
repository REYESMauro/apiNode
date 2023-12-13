
import  Express from 'express'
import motorcycles_routers from './routers/motorcycles.js'
// import moto_brand_routers from './routers/moto_brand.js'

const app = Express()

// settings
app.set('port', process.env.PORT || 4000)

// middleware
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

// routes
app.use('/api/motorcycles', motorcycles_routers)
// app.use('/api/moto_brand', moto_brand_routers)

export default app