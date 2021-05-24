import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="makeAdmin-area">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" common-input"> 
                    <input type="text" {...register("adminName", { required: true })} placeholder="Write Admin Name....."  />
                    <br />
                    {errors.adminName && <span className="text-danger">Please Write Admin Name</span>}
                </div>
                <div className="admin-email common-input">
                    <input {...register("email", { required: true })} name="email" type="email" placeholder="please write your email...." />
                    <br />
                    {errors.email && <span className="text-danger"> Write a valid email</span>}
                </div>
                <div className="admin-password common-input">
                    <input type="password" placeholder="Write your password" {...register("password", { required: true })} />
                    <br />
                    {errors.password && <span className="text-danger">Write a strog password</span>}
                </div>
                <div className="upload-img ml-5"> 
                <label className="file-upload mt-4 d-flex align-items-center  justify-content-center" htmlFor="icon" style={{ height: '40px',width: '200px',borderRadius: '5px',backgroundColor: "rgb(222, 255, 237)",color: "rgb(0, 148, 68)", border: "1px solid rgb(0, 148, 68)"}}>
                    <FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />
                    <input style={{display: 'none'}} type="file" name="file" id="icon" {...register("file", { required: true })}/> 
                    Upload image 
                </label>
                    {errors.file && <span className="text-danger">Add a file</span>}

            </div>
                <input className="brand-btn mt-3" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;