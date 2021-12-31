import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { apiConfig } from './api.config'

export const handleAuthorization = (req: Request, res: Response, next) => {
    const jwtToken = extractToken(req)
    if (!jwtToken) {
        res.setHeader("WWW-Authenticate", 'Bearer token_type="JWT"')
        res.status(401).json({
            message: "Você precisa se autenticar."
        })
    } else {
        jwt.verify(jwtToken, apiConfig.secret, (error, decoded) => {
            if (decoded) {
                next()
            } else {
                res.status(403).json({
                    message: "Não autorizado"
                })
            }
        })
    }
}

function extractToken(req: Request) {
    let jwtToken: string
    const validAuthHeaders = req.headers && req.headers.authorization
    if (validAuthHeaders) {
        const parts: string[] = req.headers.authorization.split(' ')
        const validTokenParts = parts.length === 2 && parts[0] === "Bearer"
        if(validTokenParts){
            jwtToken = parts[1]
        }
    }
    return jwtToken
}