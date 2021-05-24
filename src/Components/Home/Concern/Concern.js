import React , { useState }from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from '../../../assets/images/conc/concern-1.png';
import pic2 from '../../../assets/images/conc/concern-2.png';
import { Link } from 'react-router-dom';
import CustomModal from '../../Share/CustomModal/CustomModal';

import './Concern.css';


const Concern = () => {


      const modalArray = [1,2,3,4,5,6,7,8]

      const [modal,setModal] = useState(false);

      const options ={
        0: {
          items: 1,
      },
      570: {
          items: 2,
      },
      767: {
          items: 3,
      },
      1000: {
          items: 4,
      },
      }

    return (

          <div className="concern-area">
              <h2>OUR SISTER CONCERN</h2>
                <div className="container">
                <OwlCarousel 
                  items={4}
                  autoPlay={true}
                  autoplayTimeout={2000}
                  loop={false}
                  nav={true}
                  dots={true}
                  responsive={options}
                 >
                     {
                       modalArray.map( mo =>  <div className="single-slider item">
                       <img src={pic1} alt=""/>
                       <h3 className="slider-tite text-center">Kuntal Enterprise</h3>
                       <button onClick={()=> setModal(!modal)} type="button"  className="common-btn hover-link-left modal-btn" >Read More</button>
                      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${mo}`}>
                        Launch demo modal
                      </button>
                      <div class="modal fade" id={`exampleModal${mo}`}  aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              ...
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                     </div>)
                     }
                </OwlCarousel>
              </div>
           </div>


                   

    //        <div className="concern-area">
    //            <h2>OUR SISTER CONCERN</h2>
    //             <div className="container">
    //                 <Slider {...settings}>
    //                    {
    //                      modalArray.map( modale =>  <div className="single-slider">
    //                      <img src={pic1} alt=""/>
    //                      <h3 className="slider-tite text-center">Kuntal Enterprise</h3>
    //                      <button onClick={()=> setModal(!modal)} type="button"  className="common-btn hover-link-left modal-btn" >Read More</button>
    //                        {/* <CustomModal /> */}
    //                      {/* {
    //                        modal && <div className="custom-modal-box "> 
    //                        <div className="custom-modal-title"> 
    //                            <h4>Kuntal Enterprise</h4>
    //                            <span onClick={()=>setModal(!modal)}>X</span>
    //                        </div>
    //                        <div className="custom-modal-body"> 
    //                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam quos non. Blanditiis illo commodi deleniti optio quaerat quo at cum enim reiciendis labore sint quia fugit, architecto repudiandae eveniet, mollitia molestiae distinctio accusamus earum repellendus. Mollitia animi corporis quae?</p>
    //                        </div>
    //                    </div>
    //                      } */}
    //                  </div>)
    //                    }
    //                 </Slider>
    //             </div>
    //        </div>
    // );
    );
};

export default Concern;