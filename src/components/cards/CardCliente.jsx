import React from 'react'
import './cardsClientes.scss'
import clint from '../../img/clinteastwood.jpg'
import matt from '../../img/mattdamon.jpg'
import diCaprio from '../../img/dicaprio.webp'

const CardCliente = () => {
    return (
        <div className="container mt-5 mb-5 contenedorCliente">

            <div> 

                <h2 style={{fontWeight:'bolder',marginBottom:'60px'}}>Nuestros clientes</h2>

            </div>

            <div className="row g-2 tarjetasContainer">
                <div className="col-md-4">
                    <div className="tarj p-3 text-center px-4">

                        <div className="user-image">

                            <img src={clint} className="rounded-circle" width="80"/>

                        </div>

                        <div className="user-content">

                            <h5 className="mb-0">Clint Eastwood</h5>
                            <span>Cliente</span>
                            <p>Excelente atención y variedad de productos, lo único que podría agregar es que seria bueno que implementen mas productos como perifericos.</p>

                        </div>

                        <div className="ratings">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>

                        </div>

                    </div>
                </div>

                <div className="col-md-4">

                    <div className="tarj p-3 text-center px-4">

                        <div className="user-image">

                            <img src={matt} className="rounded-circle" width="80"/>

                        </div>

                        <div className="user-content">

                            <h5 className="mb-0">Matt Damon</h5>
                            <span>Cliente</span>
                            <p>Muy buena coordialidad y trato con los clientes, muchos exitos y felicitaciones en este nuevo camino lleno de energías positivas.</p>

                        </div>

                        <div className="ratings">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="tarj p-3 text-center px-4">

                        <div className="user-image">

                            <img src={diCaprio} className="rounded-circle" width="80"/>

                        </div>

                        <div className="user-content">

                            <h5 className="mb-0">Leonardo DiCaprio</h5>
                            <span>Cliente</span>
                            <p>Buenos precios y productos variados, saludos desde Catamarca y les deseo mucho exitos que lo bueno esta por venir.</p>

                        </div>

                        <div className="ratings">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default CardCliente