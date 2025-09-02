import React, { useState } from "react";
import './About.css';
import './Bakery.css';
import now from './Images/Order-now.webp';
import toast from "react-hot-toast";

function Order(){
    const [formData, setFormData] = useState({
        name:"",
        num: "",
        email: "",
        city: "",
        order: "",
        message: "",
        file: null,
    });

    const [errors, setErrors] = useState({
        name: "",
        num: "",
        email: "",
        city: "",
        order: "",
        message: "",
        file: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
  
        if (name === "file") {
            setFormData({
                ...formData,
                file: files[0], // only first file
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };


    const validate = () => {
        let validationErrors = {};
        let isValid = true;

        if (!formData.name){
            validationErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.num){
            validationErrors.num = "Contact number is required";
            isValid = false;
        }else if (formData.num.length < 10){
            validationErrors.num = "Contact number should be at least 10 digits";
            isValid = false;
        }

        if (!formData.email){
            validationErrors.email = "Email is required";
            isValid = false;
        }else if (!/\S+@\S+\S+/.test(formData.email)){
            validationErrors.email = "Email format is invalid";
            isValid = false;
        }

        if (!formData.city){
            validationErrors.city = "City is required";
            isValid = false;
        }

        if (!formData.message){
            validationErrors.message = "Massage is required";
            isValid = false;
        }

        if (formData.file && formData.file.size > 1048576){
            validationErrors.file = "File size must be less than 1 MB";
            isValid = false;
        }

        if (!formData.order) {
            validationErrors.order = "Please select an order";
            isValid = false;
        }

        setErrors(validationErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            toast.success("Form submit successfully!");
            setFormData({
                name:"",
                num: "",
                email: "",
                city: "",
                order: "",
                message: "",
                file: null,
            })
            setErrors({});
        }else {
            toast.error("Oops! There are some errors.");
        }
    };


    return(
    <>
    <section class="contact">
        <div class="contact-page">
            <div class="text-center pt-5">
                <h1>Order Now</h1>
                <div class="contact-info pt-3">
                   We would love to hear from you
                    Share your thoughts and queries with
                    us!
                </div>

            </div>
        </div>
    
        <div class="form">
       
            <form className="px-5" onSubmit={handleSubmit}>
                <div class="row my-3">
                    <div class="col">
                        <label for="text" htmlfor="name">Name<span> *</span></label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                         />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div class="col">
                        <label  for="num">Contact no<span> *</span></label>
                        <input 
                            type="number" 
                            class="form-control" 
                            name="num"
                            value={formData.num}
                            onChange={handleChange} 
                        />
                        {errors.num && <div className="text-danger">{errors.num}</div>}
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col">
                        <label htmlFor="email" >Email Id<span> *</span></label>
                        <input 
                            type="email" 
                            class="form-control" 
                            name="email"
                            value={formData.email} 
                            onChange={handleChange}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div class="col">
                        <label  htmlFor="city">city<span> *</span></label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="city"
                            value={formData.city} 
                            onChange={handleChange} 
                        />
                        {errors.city && <div className="text-danger">{errors.city}</div>}
                    </div>
                </div>
                <div class="my-3">
                    <label htmlFor="order" class="form-label mb-1">Select your order<span> *</span></label>
                    <select 
                        className="form-control"
                        name="order"
                        value={formData.order}
                        onChange={handleChange}
                    >
                        <option value="">Choose your order</option>
                        <option value="Pineapple Cake">Pineapple Cake</option>
                        <option value="Strawberry Cake">Strawberry Cake</option>
                        <option value="Butterscotch Cake">Butterscotch Cake</option>
                        <option value="Chocolate Cake">Chocolate Cake</option>
                        <option value="Dutch Truffle Cake 1kg">Dutch Truffle Cake 1kg</option>
                        <option value="New York Cheesecake">New York Style Baked Cheesecake</option>
                        <option value="Eggless Mousse">Eggless Chocolate Mousse Cake</option>
                        <option value="Hazelnut Mousse">Hazelnut Praline Mousse Cake</option>
                    </select>

                    {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>
                <div class="my-3">
                    <label for="message">Message<span> *</span></label>
                    <textarea 
                        class="form-control" 
                        rows="5" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>
                <div className="my-3">
                    <label htmlFor="file" className="mb-1">Attach Files</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        name="file" 
                        accept=".jpg , .jpeg, .png, .pdf"
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-3">Note : We accept file sizes up to 1mb and in a jpeg, png or pdf format.</div>
                <button class="rounded-pill mt-3 card-btn bttn">Submit</button>
            </form>
            <div className="px-5">
                <img src={now} alt="order" width={190} className="my-5"/>
                <p className="content">
                    <b style={{color:'rgb(220 123 106)'}}>Delights Foods Private Limited</b><br/>
                    <b>Registered Address:</b><br/>
                    <span>
                    32/33 A, Deonar Village Road, Opp.<br/> 
                    Metal Box Company, Govandi East,<br/> 
                    Mumbai-400088, <br/> Maharashtra, India
                    </span><br/>
                    <b>Grievance & Nodal Officer:</b><br/>
                    <span>Ms. Simantini Budukh,<br/>General Counsel & Company Secretary</span><br/>
                    <b>Contact Details:</b><br/>
                    <span><i class="fa fa-phone px-2" ></i> +91 12345-67890</span>
                    <span><i class="fa fa-envelope px-2"></i> example@1234567890.in</span>
                </p>
            </div>
        </div>
        <div className="back"></div>
   </section>

</>
    );

}

export default Order;