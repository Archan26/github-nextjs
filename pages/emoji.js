import styles from '../styles/emoji.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CommonImage from '../shared/component/common-image'

const Emoji = () => {
  const [iKeys, setIkeys] = useState([])
  const [iValues, setIvalues] = useState([])
  // console.log('keys', iKeys)

  const getData = async () => {
    const response = await fetch('https://api.github.com/emojis')
    const data = await response.json();
    setIkeys(Object.keys(data))
    setIvalues(Object.values(data))
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.emojiPage}>
      {iKeys?.map((item, index) => <CommonImage key={index} keys={item} values={iValues[index]}/> )}
    </div>
  )
}

export default Emoji