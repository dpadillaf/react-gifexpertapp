import { useFetchGifts } from '../hooks/useFetchGifts';
import GiftGridItem from './GiftGridItem';

function GifGrid({ category }) {

    const { data:images, loading } = useFetchGifts( category );

    return (
        <>
            <h3 className="animate__animated animate__zoomIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GiftGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ) )
                }            
            </div>
        </>
    )
}

export default GifGrid
