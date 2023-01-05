import React from 'react';
import { Link } from 'react-router-dom';

const ProductTable = ({ product }) => {
    console.log(product);
    const { productname, saleprice } = product;

    return (
        <>
            <tr>
                <th>index+1</th>
                <td>{productname}</td>
                <td>${saleprice}</td>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">Click</label>
                    <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 w-52 border rounded-none">
                        <li><Link to>Edit</Link></li>
                        <li><Link >Delete</Link></li>
                    </ul>
                </div>
            </tr>
        </>
    );
};

export default ProductTable;