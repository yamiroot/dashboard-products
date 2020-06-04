import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ModalAddProduct = ({
    show, onHide, nameProduct, setNameProduct, priceProduct, setPriceProduct,
    categoryProduct, setCategoryProduct, descriptionProduct, setDescriptionProduct,
    imgProduct, setImgProduct, addProductList,
}) => (
    <div className="modal-dialog modal-dialog-scrollable">
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation
            scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar producto
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputText">Nombre del producto: </label>
                        <input type="text" className="form-control" id="inputText" value={nameProduct} onChange={(event) => setNameProduct(event.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNumber">Precio:</label>
                        <input type="number" className="form-control" id="inputNumber" value={priceProduct} onChange={(event) => setPriceProduct(event.target.value)}/>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="category">Categoría:</label>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect02" value={categoryProduct} onChange={(event) => setCategoryProduct(event.target.value)}>
                            <option defaultValue>Elija...</option>
                            <option value="muebles">Muebles</option>
                            <option value="fragancia">Fragancia</option>
                            <option value="cosmético">Cosmético</option>
                            <option value="comida">Comida</option>
                            <option value="tecnología">Tecnología</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Opciones</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Descripción:</label>
                    <input type="text" className="form-control" id="inputDescription" value={descriptionProduct} onChange={(event) => setDescriptionProduct(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputImg">URL de la imagen:</label>
                    <input type="text" className="form-control" id="inputImg" value={imgProduct} onChange={(event) => setImgProduct(event.target.value)} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant="secondary">Regresar</Button>
                <Button onClick={addProductList} variant="info">Aceptar</Button>
            </Modal.Footer>
        </Modal>
    </div>
);


export default ModalAddProduct;
