import Profile from '../../../shared/component/profile-view'
import token from '../../../shared/constants'
export default function User({ profileData, reposData }) {
  console.log('reposData', reposData)
  return (
    <>
      <Profile profileData={profileData} reposData={reposData}/>
    </>
  )
}
export async function getServerSideProps({ res, params }) {
  res.setHeader(
    `${token}`,
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const profile = await fetch(`https://api.github.com/users/${params.id}`)
  const profileData = await profile.json()
  const repos = await fetch(`https://api.github.com/users/${params.id}/repos`)
  const reposData = await repos.json()
  return { props: { profileData, reposData } }
}