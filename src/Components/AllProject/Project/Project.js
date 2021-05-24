import React from 'react';
import Header from '../../Share/Header/Header';
import './Project.css';
import pic from '../../../assets/images/pic3.jpg';
import Footer from '../../Share/Footer/Footer';

const Project = () => {
    return (
        <>
            <Header/>
            <div className="project-images"> 
                <img  src={pic} alt="" />
                <div className="project-images-caption"> 
                    <p>Project Details</p>
                </div>
            </div>
           <div className="container"> 
           <div className="project-content mt-3 mb-5"> 
                <div className="project-header"> 
                    <h3>Project Header</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam consequatur magnam nostrum repudiandae perferendis. A molestiae in rem animi cumque numquam ratione quas? Hic, odit? Odit, dolor! Ex fugit perspiciatis labore beatae id dolores facilis molestias quibusdam dolor provident ut modi cumque laboriosam officiis possimus commodi voluptatem eligendi, sunt repellat! Nihil sunt debitis rerum, deserunt qui, animi voluptates quo, cupiditate nam harum fuga accusamus commodi! Debitis omnis ipsa necessitatibus saepe molestias illo ducimus doloremque dolore consequatur quam aliquid deserunt dolor sunt a asperiores repudiandae deleniti commodi, culpa velit consequuntur at porro tempore labore soluta. Ipsam, corporis? Corrupti dicta eos doloremque sapiente laborum, molestiae ducimus dolor non quidem eveniet nam magnam architecto culpa aspernatur pariatur? Molestias similique ut suscipit facilis, omnis esse at asperiores, eaque maiores, iusto minima temporibus harum quaerat quisquam sapiente quae quas itaque? Laboriosam cupiditate recusandae corrupti veritatis facilis omnis iusto ducimus consequuntur in perferendis atque nihil sunt pariatur quia molestiae ea impedit dicta culpa eveniet sit doloribus, quibusdam a. Cupiditate at minima maiores possimus illum libero dolore ipsam soluta voluptates fugiat ullam nesciunt tempora voluptas ut voluptate sed excepturi, recusandae saepe qui. Soluta repudiandae, repellat voluptatem cupiditate quis eum nobis beatae enim dicta nulla obcaecati! Officia!</p>
            </div>
           </div>
           <Footer/>
        </>
    );
};

export default Project;