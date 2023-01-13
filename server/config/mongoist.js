import debug from 'debug'
import mongoist from 'mongoist'
//import config from 'config'

const log = debug('livro_nodejs:config:mongoist')
const db = mongoist("mongodb://localhost:27017/livro_nodejs")
db.on('error', (err) => log('mongodb err', err))
export default db
