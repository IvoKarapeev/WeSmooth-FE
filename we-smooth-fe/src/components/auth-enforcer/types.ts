export type Auth0Config = {
    domain: string
    clientId: string
    authorizationParams: {
        audience: string
        redirect_uri: string
    }
}

export type AuthEnforcerProps = {
    children: React.ReactNode
}
