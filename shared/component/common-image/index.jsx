import styles from '../../../styles/image.module.scss'
import CustomTooltip from '../custom-tooltip'

const CommonImage = ({ keys, values }) => {
  return (
    <div className={styles.image}>
      <CustomTooltip tooltip={keys}>
        <img src={values} alt={keys} width={30} height={30}/>
      </CustomTooltip>
    </div>
  )
}

export default CommonImage