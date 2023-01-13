#!/usr/bin/env node
import debug from 'debug'
import app from '../app.js'
const log = debug('livro_nodejs:www')
app.listen(3000, () => log('server started'))
