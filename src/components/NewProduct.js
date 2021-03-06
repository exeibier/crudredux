import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewProductAction } from "../actions/productsActions";

const NewProduct = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const addProduct = (product) => {
    dispatch(addNewProductAction(product));
  };
  const submitNewProduct = (e) => {
    e.preventDefault();
    if (name.trim === "" || price.trim <= 0) {
      return;
    }
    addProduct({
      name,
      price,
    });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo Producto
            </h2>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>

            {loading ? <p>Cargando...</p> : null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Error al cargar producto...</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
