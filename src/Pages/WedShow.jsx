import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import WedsPortal from '../Components/WedsPortal';
import Footer from '../Components/Footer';

function WedShow() {
    const [weds,setWeds] = useState();
    const [full,setFull] = useState();
    const [show,setShow] = useState(false);

    let {id} = useParams()
    useEffect(()=>{
        fetch('/data.json').then((res)=>res.json()).then((data)=>{
            const store = data.wedding;
            const wedsImage = store.find((p)=>p.id===parseInt(id));
            setWeds(wedsImage)
        })  
    },[id])
    console.log(weds);
    
  return (
    <>{weds&&
    <div className='weddingbanner'>
    <img src='/images/WEDDING/image1.png' className='w-100'></img>
    <div className="gallery-container container mx-auto mt-5">
    <div className="gallery-grid">
            <div className="gallery-item tall">
                <img src={weds.sub1} alt="Bride in yellow saree" onClick={()=>{setFull(weds.sub1),setShow(true)}} className='img-fluid'></img>
            </div>
            <div className="gallery-item tall">
                <img src={weds.sub2} alt="Bride portrait" className='img-fluid' onClick={()=>{setFull(weds.sub2),setShow(true)}} />
            </div>
            <div className="gallery-item tall">
                <img src={weds.sub3} alt="Bride in pink attire" className='img-fluid' onClick={()=>{setFull(weds.sub3),setShow(true)}}/>
            </div>
            <div className="gallery-item">
                <img src={weds.sub4} alt="Bride getting ready" className='img-fluid' onClick={()=>{setFull(weds.sub4),setShow(true)}}/>
            </div>
            <div className="gallery-item tall">
                <img src={weds.sub5} alt="Traditional bride" className='img-fluid' onClick={()=>{setFull(weds.sub5),setShow(true)}}/>
            </div>
            <div className="gallery-item">
                <img src={weds.sub6} alt="Bride in red" className='img-fluid'onClick={()=>{setFull(weds.sub6),setShow(true)}} />
            </div>
            <div className="gallery-item tall">
                <img src={weds.sub7} alt="Bride in blue saree" className='img-fluid' onClick={()=>{setFull(weds.sub7),setShow(true)}}/>
            </div>
            <div className="gallery-item tall">
                <img src={weds.sub8} alt="Candid bride shot" className='img-fluid' onClick={()=>{setFull(weds.sub8),setShow(true)}}/>
            </div>
            <div className="gallery-item tall">
                <img src={weds.sub10} alt="Bride in golden attire" className='img-fluid' onClick={()=>{setFull(weds.sub10),setShow(true)}}/>
            </div>
            <div className="gallery-item">
                <img src={weds.sub9} alt="Bridal jewelry" className='img-fluid' onClick={()=>{setFull(weds.sub9),setShow(true)}}/>
            </div>
            <div className="gallery-item">
                <img src={weds.sub11} alt="Traditional look" className='img-fluid' onClick={()=>{setFull(weds.sub11),setShow(true)}}/>
            </div>
        </div>
    </div>
    {show && <WedsPortal value={full} close={()=>setShow(false)}/>}
    </div>
}
<Footer/>
    </>
  )
}

export default WedShow