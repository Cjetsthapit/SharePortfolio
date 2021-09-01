import React from 'react'
import { useParams } from 'react-router-dom';
const EditStock = () => {
    const {id}=useParams();
    return (
        <div>
            Hello {id}
        </div>
    )
}

export default EditStock
