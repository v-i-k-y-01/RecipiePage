import ThumbNail from '../assets/ThumbNail.jpg';

interface Props {
    src?: string;
    alt: string;
    style?: React.CSSProperties;
}

function ImageComponent({ src = ThumbNail, alt, style }: Props) {
    return (
        <img 
            src={src} 
            alt={alt} 
            style={{ 
                width: '100%', 
                borderRadius: '12px',
                ...style 
            }} 
        />
    );
}

export default ImageComponent;
