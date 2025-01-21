import React from 'react';

import Styles from './Category.module.scss';
import { RiZoomInFill } from "react-icons/ri";

import Zoom from 'react-medium-image-zoom';

interface CategoryProps {
theme:string;
data: Array<{
    img: string;
    title: string;
    description: string;
  }>;
}

const Category: React.FC<CategoryProps> = ({theme, data}) => {
    return(
        <div className={Styles.category}>
                <div className={Styles.title}>
                    <h2>{theme}</h2>
                </div>
                <div className={Styles.cards}>
                    {data.map((item, index) => ( 
                        <div key={index} className={Styles.item}>
                            <Zoom
                                ZoomContent={({ img, style }) => {
                                    const customStyle = {
                                        ...style,
                                        backgroundColor: 'rgba(196, 139, 122, 0.5)',
                                        width: '100%',
                                        height: '100%',
                                    };
                                    return <div style={customStyle}>{img}</div>;
                                }}
                            >
                                <div className={Styles.img} >
                                    <img src={item.img} alt={item.title} />
                                    <RiZoomInFill
                                        style={{
                                            position: 'absolute',
                                            bottom: '0px',
                                            right: '10px',
                                            transform: 'translate(-50%, -50%)',
                                            fontSize: '24px',
                                            color: "black",
                                            zIndex: '100',
                                            opacity: '0.5',
                                        }}
                                    />
                                </div>
                            </Zoom>
                            <div className={Styles.text}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
    )
};
export default Category;