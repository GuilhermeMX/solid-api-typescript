import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

export const app = fastify()

const prisma = new PrismaClient()

app.post('/users', (request, reply) => {
  const registerBodySchema = z.object({
    name: 
  })
})
