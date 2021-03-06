import Link from "next/link"
import styled from 'styled-components';


const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
        <Title>Categories</Title>
      {categories.map((_category) => (
        <Link href={`/categories/${_category.attributes.slug}`} key={_category.id}>
          <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {_category.attributes.title}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default CategoryButtons

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    align-content: center;
    padding: 10px;
`