import React from 'react';


const ItemDashboard = ({ product, index }) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>IMG</td>
            <td><button>Editar</button><button>Eliminar</button></td>
        </tr>
    );
}


export default ItemDashboard;
