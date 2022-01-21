import Link from "next/link"
import styled from 'styled-components';

const LibraryButtons = ({ libraries = [] }) => {
  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
        <Title>Libraries</Title>
      {libraries.map((_library) => (
        <Link href={`/libraries/${_library.attributes.slug}`} key={_library.id}>
          <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {_library.attributes.title}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default LibraryButtons

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    align-content: center;
    padding: 10px;
`