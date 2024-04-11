import React, { useEffect, useState } from 'react'
import user from '../json/user'
import { Validation } from '../validation';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/reducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function User() {
  const [userForm,setUserForm]=useState(user.form);
  const dispatch=useDispatch()
  const {state:SelectedRecord}= useLocation();
  const  HandleInput=((e)=>{
    setUserForm((pre)=>({...pre,[e.target.id]:e.target.value}))
  })
  const save=(e)=>{
    const isValid=Validation.IsValid(user.required,userForm);
    if(isValid){
        dispatch(addUser(userForm));
        setUserForm(user.form);
        toast.success('User Save successfully!', {
          position: 'top-center'
        });
    }
  }
  useEffect(()=>{
    if(!!SelectedRecord){
      setUserForm(SelectedRecord);
    }
  },[])
  return (
    <div className='container shadow'> 
    <h1 className='text-center'>Create User</h1><hr/>
      <div className="row m-3">
      <div className="col-12">
        <label className="form-label" >Names</label>
        <input type="text"  value={userForm.name} onChange={HandleInput}  id="name" className="form-control" />
      </div>
      <div className="col-12">
        <label className="form-label" >User Name</label>
        <input type="text"  value={userForm.username} onChange={HandleInput}  id="username" className="form-control" />
      </div>
      <div className="col-12">
        <label className="form-label" >Email</label>
        <input type="text"  value={userForm.email} onChange={HandleInput}  id="email" className="form-control" />
      </div>
      <div className="col-12">
        <label className="form-label" >Phone No</label>
        <input type="text"  value={userForm.phone} onChange={HandleInput}  id="phone" className="form-control" />
      </div>
      </div>
  <hr/>
  <div className="row">
  <div className="col-8 notification">
  {user.form.user?.id>0 && <span><i className="fa-solid fa-check mx-2"></i>Event Created successfully!</span>}
    </div>
    <div className="col-4 d-flex align-items-end flex-column">
    <button type="button" className="btn" onClick={()=>{save()}}> <i className="fa fa-check"></i><span>Save</span></button>
  </div>
</div>
</div>
  )
}
