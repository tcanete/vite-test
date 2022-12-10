import { useQuery } from 'react-query'
import { apiClient } from '../../services'

function Home() {
    const { isLoading, error, data, refetch } = useQuery('woof', () => apiClient.get('woouf.json'))

    const dataView = () => {
        if (data) {
            if (data.data.url.endsWith('mp4')) {
                return <video width="400" controls autoPlay src={data.data.url} />
            }
            else {
                return <img width="400" src={data.data.url} alt="image" />
            }
        }

        return null;
    }

    return (
        <div>
            <div>{import.meta.env.VITE_APP_TITLE}</div>
            <div>Home</div>
            <div>
                <button onClick={() => refetch()}>New dog!</button>
            </div>
            {isLoading ? <div>LOADING...</div> : null}
            {error ? <div>ERROR</div> : null}
            {dataView()}
        </div >
    )
}

export default Home