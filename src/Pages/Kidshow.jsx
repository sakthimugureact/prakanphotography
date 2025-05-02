import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import KidsPortal from '../Components/KidsPortal';

function Kidshow() {
    const [kids,setKids] = useState();
    const [full,setFull] = useState();
    const [show,setShow] = useState(false);
    
    let {id} = useParams()
    useEffect(()=>{
        fetch('/data.json').then((res)=>res.json()).then((data)=>{
            const store = data.kids;
            const kidsImage = store.find((p)=>p.id===parseInt(id));
            setKids(kidsImage)
        })  
    },[id])
  return (
    <>
    <div className="weddingbanner"> 
    <img src='/images/KIDS/image.png' style={{width:"100%"}} className='img-fluid'></img>
    </div>
    <div className="container mx-auto mt-5">
    {kids&& <div className="gallery container mx-auto">
        <div className="gallery-item">
            <img src={kids.sub1}  alt="Christmas photo" onClick={()=>{setFull(kids.sub1),setShow(true)}} className="christmas-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub4} alt="Studio photo" onClick={()=>{setFull(kids.sub4),setShow(true)}} className="pink-bg  img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub7} alt="Guitar photo" onClick={()=>{setFull(kids.sub7),setShow(true)}} className="orange-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub9} alt="Music photo" onClick={()=>{setFull(kids.sub9),setShow(true)}} className="orange-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub2} alt="Standing photo" onClick={()=>{setFull(kids.sub2),setShow(true)}} className="orange-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub5} alt="Music setup" onClick={()=>{setFull(kids.sub5),setShow(true)}} className="orange-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub10} alt="Studio setup" onClick={()=>{setFull(kids.sub10),setShow(true)}} className="pink-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub3} alt="Guitar pose" onClick={()=>{setFull(kids.sub3),setShow(true)}} className="pink-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub6} alt="Christmas setup" onClick={()=>{setFull(kids.sub6),setShow(true)}} className="teal-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub8} alt="Music equipment" onClick={()=>{setFull(kids.sub8),setShow(true)}} className="pink-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub11} alt="Guitar standing" onClick={()=>{setFull(kids.sub11),setShow(true)}} className="pink-bg img-fluid mt-2"/>
        </div>
    </div>}
    </div>
    {show && <KidsPortal value={full} close={()=>setShow(false)}/>}
    </>
  )
}

export default Kidshow