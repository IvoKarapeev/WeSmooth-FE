import { User } from '@auth0/auth0-react'

export type SharedSliceState = {
    user?: User
    accessToken?: string
}
