import React from 'react';
import Styles from './Illustrator.module.scss';
import Data_illustrator from '../../Data/DataIllustrator';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Illustrator: React.FC = () => {
    return(
        <div className={Styles.container}>
            {Data_illustrator.map((item, index) => (
                <div key={index} className={Styles.item}>
                    <Zoom>
                        <div className={Styles.img}>
                            <img src={item.img} alt={item.img} />
                        </div>
                    </Zoom>
                    <div className={Styles.text}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Illustrator;
