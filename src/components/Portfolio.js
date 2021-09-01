import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div className="container">
            <h1 className="text-center my-3">Welcome to your Portfolio</h1>
            <div className="d-flex justify-content-sm-end align-items-center">
                <Link to="/addstock" className="btn float-right btn-outline-dark">
                    Add Stock
                </Link>  
            </div>

            <div className="row">
                <div className="col-md-12 mx-auto my-4">
                <table class="table table-hover">
                    <thead class="thead-dark text-white bg-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Stock Name</th>
                        <th scope="col">Number of Stock</th>
                        <th scope="col">Buy Price</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                    </table>
                </div>
            </div>
            

            
            
            
        </div>
    )
}

export default Portfolio
