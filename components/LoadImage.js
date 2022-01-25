import { getStrapiMedia } from "../utils/medias"
import Image from "next/image"

const LoadImage = (props) => {
  if (!props.media) {
    return <Image alt="default" {...props} />
    // return <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  }
  const { url, alternativeText, width, height } = props.media.attributes
  // var url, width, height
  // // console.log(props.size)
  // if (props.size) {
  //   if (props.size == "medium") {
  //     ;({ url, width, height } = props.media.attributes.formats.medium)
  //   } else if (props.size == "large") {
  //     ;({ url, width, height } = props.media.attributes.formats.large)
  //   } else {
  //     ;({ url, width, height } = props.media.attributes)
  //   }
  // } else {
  //   ;({ url, width, height } = props.media.attributes.formats.thumbnail)
  // } // console.log(width, height)

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
    />
  )
}

export default LoadImage
