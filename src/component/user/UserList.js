import React, { useEffect, useState } from 'react'
import "datatables.net-dt"
import $ from "jquery";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../redux/reducer';
import { useNavigate } from 'react-router-dom';
import {deleteUser } from '../../redux/reducer';
import { toast } from 'react-toastify';
export default function UserList() {
  const dispatch = useDispatch();
  const Navigate=useNavigate()
  const { users, loading, error } = useSelector((state) =>state?.user);
  const HeadTitle= [
    { title : 'Id',data:'id',render:(data,_)=>{
      return  '<u class="link-dark cursor-pointer" >'+  data.toString() +'0000000' +'</u>'}, 'visible' : true}, 
    { title : 'Name',data:'name' },
    { title : 'User Name',data:'username' },
    { title : 'Email',data:'email' },
    { title : 'Phone No',data:'phone' },
    ];
    const deleteUsers=()=>{
      dispatch(deleteUser(getSelectedIds()))
      toast.success('User Deleted successfully!', { position: 'top-center'});
    }
    function selectAll(){
      var table = $('#sampleTable').DataTable();
      table.rows({page:'current'}).nodes().to$().addClass('selected');
  }
   function getSelectedIds(){
    var table = $('#sampleTable').DataTable();
    var items = $.map(table.rows('.selected').data(), function (item) {
      return item.id;
    }); return items;
}
  function deselectAll(){
      var table=$('#sampleTable').DataTable();
      table.rows( '.selected' ).nodes().to$().removeClass( 'selected' );
  }
useEffect(()=>{
      var table =  $('#sampleTable').DataTable({ 'data': users.length>0?users:[], 'columns': HeadTitle, destroy: true});
      ($('#sampleTable.dataTable').find('tbody')).on('click', 'tr td', function (event) {
        $(this).parent().addClass('selected');
        var cellDT = table.cell(this).index();
        if (cellDT) if (cellDT.column === 0) Navigate('/user', { state: table.rows(this).data()[0]});
      }); 
},[users])
  useEffect(()=>{
    if(users.length===0){
     dispatch(fetchUsersRequest())
    }
 
  },[])
  return (
  <div className='container mt-3 shadow-grid'>
    <div className='container  mt-3 shadow-grid'>
    <i role='button' class="btn fa fa-trash  d-inline-block" onClick={()=>deleteUsers()}><span class="mx-3">Delete</span></i>
    <i role='button' class="btn fa fa-trash d-inline-block" onClick={()=>selectAll()}><span class="mx-1">All select</span></i>
    <i role='button' class="btn fa fa-trash  d-inline-block" onClick={()=>deselectAll()}><span class="mx-1">DeSelect</span></i>
    </div>
          <div className='tile-body table-responsive'>
              <table className='table dataTable stripe' id='sampleTable'> </table>
           </div>
  </div>
  
  )
}
