import { useQuery } from '@tanstack/react-query'
import { woofClient } from '../../services'

function Home() {
    const { isLoading, error, data, refetch } = useQuery({ queryKey: woofClient.woof.defaultKey, queryFn: () => woofClient.woof.fn() })


    const dataView = () => {
        if (data) {
            if (data.url.endsWith('mp4')) {
                return <video width="400" controls autoPlay src={data.url} />
            }
            else {
                return <img width="400" src={data.url} alt="image" />
            }
        }

        return null;
    }

    if (isLoading) {
        return <div>LOADING...</div>
    }

    if (error) {
        return <div>ERROR</div>
    }

    return (
        <div>
            <div>{import.meta.env.VITE_APP_TITLE}</div>
            <div>Home</div>
            <div>
                <button onClick={() => refetch()}>New dog!</button>
            </div>
            {dataView()}
        </div >
    )
}

export default Home