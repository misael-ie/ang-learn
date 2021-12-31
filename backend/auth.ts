import { resolvePtr } from 'dns' // FIXME: _cleanup
import { Request, Response } from 'express'
import { User, users } from './users'
import * as jwt from 'jsonwebtoken'
import { apiConfig } from './api.config'

export const handleAuthentication = (req: Request, res: Response) => {
    const user: User = req.body

    if (isValid(user)) {
        const dbUser: User = users[user.email] // select inside dict para matches


        const jwtToken = jwt.sign({
            //payload
            sub: dbUser.email,      // subject (claim), quem é o portador do token
            iss: 'from-zero-api',   // issuer (claim), quem está ofertando o token
        },
        // secretOrPrivateKey
        // REVIEW: (jwtToken) Estudar boas práticas de como utilizar esse parâmetro
        apiConfig.secret
        )

        res.json({
            name: dbUser.name,
            email: dbUser.email,
            accessToken: jwtToken
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
    const dbUser: User = users[user.email]
    return dbUser !== undefined &&
        dbUser.matches(user)
}