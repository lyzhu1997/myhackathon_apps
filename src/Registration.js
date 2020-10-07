import React from 'react';
import { useForm } from 'react-hook-form';
import './registration.css';
import data from './data';

function Registration(props) {
    const {register, handleSubmit} = useForm({
        defaultValues: data[props.ic],
    });

    function onChange(e) {
        const value = e.target.value;
        register[e.target.name] = value;
    }

    const onSubmit = (data) => console.log(data);

    return (
        <div class="bg">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input class="form-control" type='text' name='name' ref={register} onChange={onChange}/><br/>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">IC</label>
                        <div class="col-sm-10">
                            <input class="form-control" type='text' name='ic' ref={register} onChange={onChange}/><br/>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Date of Birth</label><br/>
                        <div class="col-sm-10">
                            <input class="form-control" name='birthdate' type='date' onChange={onChange}/><br/>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Place of Birth</label>
                        <div class="col-sm-10">
                            <select class="form-control" onChange={onChange} name='placeOfBirth' ref={register}>
                                <option value='kedah'>Kedah</option>
                                <option value='perlis'>Perlis</option>
                                <option value='penang'>Penang</option>
                                <option value='kelantan'>Kelantan</option>
                                <option value='perak'>Perak</option>
                            </select><br/>
                        </div>
                        
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Parent Info / Next-of-Kin info</label>
                        <div class="col-sm-10">
                            <input class="form-control" type='text' placeholder='Name' name='parentName' ref={register} onChange={onChange}/><br/>
                            <input class="form-control" type='text' placeholder='IC' name='parentIC' ref={register} onChange={onChange}/><br/>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Citizenship status</label>
                        <div class="col-sm-10">
                            <select class="form-control" onChange={onChange} ref={register} name="citizenship">
                                <option value='malaysian'>Malaysian</option>
                                <option value='nonmalaysian'>Non Malaysian</option>
                            </select><br/>
                        </div>
                    </div>
                    
                    <input class="btn btn-primary center " type='submit'/>
                </form>
            </div>
        </div>
      );
}

export default Registration;
  