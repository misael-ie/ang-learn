import { resolvePtr } from 'dns'
import { Request, Response } from 'express'
import { User, users } from './users'

export const handleAuthentication = (req: Request, res: Response) => {
    const user: User = req.body

    if (isValid(user)) {
        const dbUser: User = users[user.email] // select inside dict para matches
        res.json({
            name: dbUser.name,
            email: dbUser.email
        })
    } else {
        res.status(403).json({
            message: "Entendemos o pedido, porém você não está autorizado."
        })
    }
}

function isValid(user: User): boolean {
    if (!user) {
        return false
    }
    const dbUser:User = users[user.email]
    return dbUser !== undefined &&
        dbUser.matches(user)
}