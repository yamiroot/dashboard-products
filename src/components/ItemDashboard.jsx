import React from 'react';


const ItemDashboard = ({ product, index, productDeleteList }) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.id}</td>
            <td><button>Editar</button><button onClick={() => productDeleteList(product)}>Eliminar</button></td>
        </tr>
    );
}


export default ItemDashboard;
