import { getStrapiMedia } from "../utils/medias"
import Image from "next/image"

const LoadImage = (props) => {
    // console.log(props)
  if (!props.media) {
    return <Image alt="default" {...props} />
    // return <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  }
  const { url, alternativeText, width, height } = props.media.attributes
  
  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  return (
    <Image
      loader={loader}
      layout="responsive"
      objectFit="contain"
      width={width}
      height={height}
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default LoadImage
