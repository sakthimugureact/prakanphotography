import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer';

function Wed() {

  const [wedss,setWedss] = useState([]);
  useEffect(()=>{
    fetch('/data.json').then(res=>res.json()).then(data=>setWedss(...wedss,data.wedding));
  },[])


  return (
    <>
    <div className='weddingbanner'>
      <img src="/images/WEDDING/image1.png" alt="" className='img-fluid w-100'/>
    </div>

    <div className="container mt-5 mx-auto">
      <div className="row d-flex align-items-center">
        <div className="col-md-6" style={{textAlign:"justify"}}>
          <p className='fs-5 fw-medium pb-3'>Prakan Photography provides an album, which covers not just candid wedding photography but also your emotions amidst everything that spells nature and looks at the diverse pictures. Weddings are a classic treasure trove moment in our lives, we tend to ooh, ah, and gasp and that's what makes weddings all the more enjoyable.</p>
          <p className='fs-5 fw-medium pb-3'>We are present to capture the beautiful moments in the form of candid wedding photography where two families unite together to form one big family. Amidst all that, we have those special moments where the bride blushes or the groom holds his woman's hand and that touch leads to a reaction from the bride. All these moments whether it be the bride and the groom who are the center of attention or the gang of oldies who crack jokes and laugh out loudly have to be caught on the reel candidly so that we can relive the moment from anywhere and at any time in the future.</p>
          <p className='fs-5 fw-medium pb-3'>The beauty of candid wedding photography is that we have so many options nowadays where all the must-do events are beautifully captured by our team of expert wedding photographers where their talented young minds run around trying to capture the natural beauty of a person without asking them to pose. That is something to relish without additives.</p>
          <p className='fs-5 fw-medium pb-3'>Our candid wedding photography also includes outdoor photography where our lensmen aren't afraid of the scorching sun or the patter of the raindrops all they want is for the couple and the family to look amazing, whether it is the sandy beaches or in the middle of nowhere or amidst a bustling market, we are here for you, to give you that 'oh so perfect picture' that you always dreamt of. Our team consists of wedding photographers and cinematographers with a unique sense of style and fast access to state-of-the-art technology for capturing pictures that you can cherish forever.</p>
        </div>
        <div className="col-md-6">
          <img src="/images/WEDDING/image2.png" className='img-fluid d-block mx-auto p-4' />
        </div>
      </div>
    </div>

    <div className="container mx-auto">
          <div className="row">
            {wedss&&wedss.map((val,index)=>(
              <div className='col-md-5 col-xl-4 mx-auto mt-5  position-relative p-3' key={index}>
                <Link to={`/wedshow/${val.id}`} className="text-decoration-none"><img src={`${val.imgsrc}`} className='img-fluid' style={{filter:"brightness(70%)"}}></img><h4 className='position-absolute text-light fw-bold text-center fs-6' style={{bottom:"30px"}}>{val.name}</h4></Link>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Wed