import React, { Fragment } from "react";

const Products = () => {
  return (
    <Fragment>
        <h2 className="text-center my-5"> Listado de productos</h2>

        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                <tr>
                    <th className="col">Nombre</th>
                    <th className="col">Precio</th>
                    <th className="col">Acciones</th>
                </tr>
                <tbody></tbody>
            </thead>
        </table>
    </Fragment>
  );
};

export default Products;
