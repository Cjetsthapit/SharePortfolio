import React from 'react'

const AddStock = () => {
    return (
        <div className="container">
            <div className="display-3 text-center my-2">
                Add Stock
            </div>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Stock Name" className="form-control"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Number of shares" className="form-control"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Buy Price" className="form-control"/>
                        </div>
                        <div className="form-group">
                        <input type="submit" value="Add Share to Portfolio" className="btn btn-block btn-success"/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStock
