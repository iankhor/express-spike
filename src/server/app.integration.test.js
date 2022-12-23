import express from 'express'
import request from 'supertest'
import router from './routes'
import db from './db/models'
import { cleanDB } from '../test/helpers'
import TransactionFactory from '../test/factories/transactions'
import app, { server } from './app'

describe('GET /', () => {
    beforeEach(async () => { await db.sequelize.sync({ force: true, logging: false }) })
    afterEach(async () => {
        await cleanDB()
        server.close()
    })

    it('returns a 200', async () => {
        await TransactionFactory()
        const { status, body } = await request(app).get('/')

        expect(status).toBe(200)
        expect(Object.keys(body[0])).toContain('name', 'owning')
    })

})