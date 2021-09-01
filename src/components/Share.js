import React from 'react'

const Share = () => {
    return (
        <div className="container">
            <h1 className="text-center my-3">Todays Share Price</h1>

            <div className="row">
                <div className="col-md-12 mx-auto my-4">
                <table class="table table-hover">
                    <thead class="thead-dark text-white bg-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Stock Name</th>
                        <th scope="col">LTP</th>
                        <th scope="col">Open</th>
                        <th scope="col">Close</th>
                        <th scope="col">Change %</th>
                        <th scope="col">Change</th>
                        <th scope="col">Volumes Traded</th>
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

export default Share
