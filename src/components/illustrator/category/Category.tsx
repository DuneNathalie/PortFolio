import React from 'react';

import Styles from './Category.module.scss';

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
                <div className={Styles.cardIllustrator}>
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