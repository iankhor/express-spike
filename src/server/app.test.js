import express from 'express'
import request from 'request'
import app from './app'

describe('GET /', () => {
    it('foobar', async () => {
        const { body } = await request(app).get('/')

        console.log(body)
    })
})