import Link from 'next/link'


const CommonField = ({ keys, value, type, userId, repo }) => {
  return (
    <div>
      { type !== 'repos' ? (
        <>
          <h3>{`${keys}: `}</h3> 
          <p>{value || 'No data'}</p> 
        </>
      ) : (
        <>
          <Link href={`/githubUser/${userId}/${repo.name}`}><p>{repo.name}</p></Link> 
        </>
      ) }
    </div>
  )
}

export default CommonField