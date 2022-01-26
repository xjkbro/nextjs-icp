import { getStrapiMedia } from "../utils/medias"
import Image from "next/image"

const LoadImage = (props) => {
  if (!props.media) {
    return <Image alt="default" {...props} />
  }
  const { url, alternativeText, width, height } = props.media.attributes

  const imgLoader = ({ src, width }) => {
    return getStrapiMedia(src, width)
  }

  return (
    <Image
      loader={imgLoader}
      layout="responsive"
      objectFit="contain"
      width={width}
      height={height}
      src={url}
      alt={alternativeText || ""}
      priority={props.priority ? true : false}
    />
  )
}

export default LoadImage
