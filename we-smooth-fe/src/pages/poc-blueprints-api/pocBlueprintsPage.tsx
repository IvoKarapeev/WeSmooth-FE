import { useEffect, useState } from 'react'
import { callSecuredBackendApi } from '../../services/backend-api/backendApi'
import { BLUEPRINTS_URL } from '../../services/backend-api/constants'

export const PocBlueprintsPage = () => {
    const [blueprints, setBlueprints] = useState<string>()

    useEffect(() => {
        callSecuredBackendApi(BLUEPRINTS_URL, {
            method: 'GET',
        })
            ?.then((response) => response.json())
            .then((data) => setBlueprints(JSON.stringify(data)))
    }, [])

    return <p>{blueprints}</p>
}
