import styles from './imageContent.module.scss';

const ImageContent = ({ image }) => {
    return (
        <div className={styles['image-content']}>
            {image && <img src={image} />}
        </div>
    )
}

export default ImageContent;