import React from 'react'
import { setFilter } from '../../redux/userSlice';
import { User } from '../../types'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import './Inputs.css'

type InputsProps = {
    searchFields: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
}

export const Inputs: React.FC<InputsProps> = ({ searchFields }) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ field: name as keyof User, value }))
  }
    const handleClearInput = (field: keyof typeof searchFields) => {
      dispatch(setFilter({ field, value: '' }))
  }
  
  return (
    <div id="inputs-bar">
      {Object.keys(searchFields).map((field) => (
        <div className="input-wrapper" key={field}>
          <input
            type="text"
            name={field}
            placeholder={`Search ${
              field.charAt(0).toUpperCase() + field.slice(1)
            }`}
            value={searchFields[field as keyof typeof searchFields]}
            onChange={handleInputChange}
          />
          {searchFields[field as keyof typeof searchFields] && (
            <button
              type="button"
              className="clear-button"
              onClick={() =>
                handleClearInput(field as keyof typeof searchFields)
              }
            >
              &times;
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
