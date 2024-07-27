import React, {useEffect, useState} from "react";

import loadThumbnail from './ThumbnailsLoader'


type Props = {

}

const CompTest = (props: Props) => {
    const [img, setImg] = useState<string>('');


    useEffect(() => {
//                                 const el = document.getElementById('asd');
                                const getData = async () => {
                                    var img = await loadThumbnail('gallery/madeira/pico_ruivo/1.png');
                                    console.log('loaded img', img);
                                    setImg(img as string);
                                    console.log('loaded img2', img);

//                                     el.setAttribute('src', img as string);
                                }
                                getData();
//                                 setElement(el);
        }, []);
    console.log('rendered', img);
    return (<div>test1<img src={img}/></div>)
}

export default CompTest;
