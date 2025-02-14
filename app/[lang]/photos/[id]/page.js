import PhotoDetails from "@/app/components/photoDetails"
const PhotoDetailsPage = ({params: {id, lang}}) => {

    return (
        <PhotoDetails id={id} lang={lang} />
    )
}

export default PhotoDetailsPage