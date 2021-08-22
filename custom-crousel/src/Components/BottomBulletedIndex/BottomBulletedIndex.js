import React from 'react'
import "../carousel.css"
import { images } from '../../Utils/CarouselData';

function BottomBulletedIndex( props) {
    const setIndexValue = (i) => {
        props.setCurrImg1(i);
    }
    return (
        <div >
        {props.images.map((item, index) => {
            return (<>
                {index === props.currImg ?
                    <div style={{ display: 'inline-block' , verticalAlign: 'bottom'}} className="circularCurrDiv" onClick={() => setIndexValue(index)}>
                        {index + 1}
                    </div> :
                    <div style={{ display: 'inline-block', verticalAlign:"bottom"}} className="circularDiv" onClick={() => setIndexValue(index)}>
                        {index + 1}
                    </div>}
            </>
            );
        })}
    </div>
    )
}

export default BottomBulletedIndex
