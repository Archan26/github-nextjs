import { useState } from "react"
import { useEffect } from "react"
import CommonField from "../common-field"
import styles from '../../../styles/profile.module.scss'
const Profile = ({ profileData, reposData }) => {
  const [keys, setKeys] = useState([])
  const [values, setValues] = useState([])
  useEffect(() => {
    setKeys(Object.keys(profileData))
    setValues(Object.values(profileData))
  }, [profileData])

  console.log('keys', keys)
  return (
    <div className={styles.profile}>
      <img src={profileData?.avatar_url} alt='userProfile' width={150} height={150}/>
      { keys.map((item, index) => <CommonField key={item} keys={item} value={values[index]}/>)}
      <h2>Repos Link:</h2>
      { reposData.map((item) => <CommonField key={item} userId={profileData.login} repo={item} type='repos'/>)}
    </div>
  )
}

export default Profile