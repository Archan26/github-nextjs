import { useRouter } from 'next/router'

const Files = ({data}) => {
  return <p>Name: {data.name}</p>
}

export async function getStaticProps({params}){
  const response = await fetch(`https://6367f297d1d09a8fa61e08ed.mockapi.io/api/nextjs/${params.id}`)
  const data = await response.json();
  return {
    props:{data}
  }
}
export async function getStaticPaths(){
  const response = await fetch('https://6367f297d1d09a8fa61e08ed.mockapi.io/api/testing')
  const ids = await response.json();
  const paths = ids.map(({id}) => ({
    params: { id },
  }))
  return { paths, fallback: false }
}

export default Files