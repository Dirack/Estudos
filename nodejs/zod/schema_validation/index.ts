import z from 'zod'

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(100),
    opt: z.number().optional(),
    lit: z.literal(90)
})

type User = z.infer<typeof schema>

let data: User = {
    name: 'Fulano',
    email: 'fulano@gmail.com',
    age: 19,
    lit:90
}

let data2: User = {
    ...data,
    age:3
}

let result = schema.safeParse(data)
let result2 = schema.safeParse(data2)

console.log(result)
console.log(result2)