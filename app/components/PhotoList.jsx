import PhotoCard from "./PhotoCard"


const PhotoList = ({ photos }) => {
    return (
        <div>
            {
                photos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />

                ))
            }
        </div>
    )
}

export default PhotoList