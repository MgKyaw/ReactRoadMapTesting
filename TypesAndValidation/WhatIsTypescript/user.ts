// import {z} from 'zod'
// import {Request, Response} from 'express'

// const CreateUserSchema = z.object({
//   body: z.object({
//     // Ensures that the email exists, and is an email
//     email: z.string().email(),
//   }),
//   headers: z.object({
//     // Ensures that the authorization header is present
//     authorization: z.string(),
//   }),
// })

// const handleCreateUser = (req: Request, res: Response) => {
//   // Parse the request
//   const result = CreateUserSchema.safeParse(req)

//   // If something was missing, send back an error
//   if (!result.success) {
//     res.status(400).send(result.error)
//     return
//   }

//   const {email} = result.data.body

//   // Create the user
// }