import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import './AddProtfolio.css';

const AddProtfolio = () => {

     // React hook useform
     const { register, handleSubmit,  formState: { errors } } = useForm();

       //Form info and file state
       const [info,setInfo] = useState({});
       const [file,setFile] = useState(null);
   
       // Input value Handle blud
       const handleBlur = e =>{
           const newInfo = {...info};
           newInfo[e.target.name] = e.target.value;
           setInfo(newInfo);
       };
   
       //Input file Value Handle Change
       const handleFileChange = e => {
           const file = e.target.files[0];
           setFile(file);
       };
   
      
       const onSubmit = data => console.log(data);

    return (
        <div className="addProtfolio-area">
            <h3 className="dashBoard-title">Add protfolio</h3>
            <form  onSubmit={handleSubmit(onSubmit)}>

            <div className="form-input"> 
                <label htmlFor="title">Protfolio title</label> <br/>
                <input className="form-control" {...register("title", { required: true })} placeholder="Write a title..."/>
                {errors.title && <span className="text-danger">Add a Protfolio Title</span>} <br />

                <label htmlFor="desc">Description</label> <br/>
                <textarea className="form-control" onBlur={handleBlur} name="description" id="desc" cols="30" rows="5" placeholder="Enter description" {...register("description", { required: true })}></textarea>
                    {errors.description && <span className="text-danger">enter the description</span>}
            </div>

            <div className="upload-img ml-5"> 
                <label className="file-upload mt-4 d-flex align-items-center  justify-content-center" htmlFor="icon" style={{ height: '40px',width: '200px',borderRadius: '5px',backgroundColor: "rgb(222, 255, 237)",color: "rgb(0, 148, 68)", border: "1px solid rgb(0, 148, 68)"}}>
                    <FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />
                    <input style={{display: 'none'}} type="file" name="file" id="icon" {...register("file", { required: true })}/> 
                    Upload image 
                </label>
                    {errors.file && <span className="text-danger">Add a file</span>}

            </div>


                <br />
                <input className="brand-btn" type="submit" />
            </form>

            
        </div>
    );
};

export default AddProtfolio;