import React from 'react'
import APV from '../../img/APV.webp'
import APVMERN from '../../img/APVMERN.webp'
import ADV from '../../img/agenciaDeViajes (convert.io).webp'
import APICANC from '../../img/APICANC.webp'
import APICLIMA from '../../img/APICLIMA.webp'
import APICRYPTO from '../../img/APICRYPTO.webp'
import APIIMAGEN from '../../img/APIIMAGEN.webp'
import BUSCVE from '../../img/BUSCVE.webp'
import CARRITO from '../../img/CARRITO.webp'
import COTS from '../../img/COTS.webp'
import CRMIDB from '../../img/CRMIDB.webp'
import GastoSemanal from '../../img/GastoSemanal.webp'
import TWLCS from '../../img/TWLCS.webp'
import VALDA from '../../img/VALDA.webp'
import ASIS from '../../img/ASIS.webp'
import BUSCGIF from '../../img/BUSCGIF.avif'
import INM from '../../img/INM.avif'



const Imagen = ({ img }) => {
    if (img === 'APV') return <img alt="Administrador Pacientes Veterinaria imagen" src={APV} width='300px' className="proyecto-imagen" />
    if (img === 'APVMERN') return <img alt="Adm. Pacientes Vet. con stack Mern" src={APVMERN} className="proyecto-imagen" />
    if (img === 'ADV') return <img alt="Agencia de Viajes" src={ADV} className="proyecto-imagen" />
    if (img === 'APICANC') return <img alt="Api de Canciones" src={APICANC} className="proyecto-imagen" />
    if (img === 'APICLIMA') return <img alt="Api de clima" src={APICLIMA} className="proyecto-imagen" />
    if (img === 'APICRYPTO') return <img alt="Criptoconversor api" src={APICRYPTO} className="proyecto-imagen" />
    if (img === 'APIIMAGEN') return <img alt="Api de Imagenes" src={APIIMAGEN} className="proyecto-imagen" />
    if (img === 'BUSCVE') return <img alt="Buscador de vehiculos" src={BUSCVE} className="proyecto-imagen" />
    if (img === 'CARRITO') return <img alt="Carrito en Javascript" src={CARRITO} className="proyecto-imagen" />
    if (img === 'COTS') return <img alt="Cotizador de seguros" src={COTS} className="proyecto-imagen" />
    if (img === 'CRMIDB') return <img alt="CRM indexedDB" src={CRMIDB} className="proyecto-imagen" />
    if (img === 'GastoSemanal') return <img alt="Calculador de gasto semanal" src={GastoSemanal} className="proyecto-imagen" />
    if (img === 'TWLCS') return <img alt="Similar a twitter con localstorage" src={TWLCS} className="proyecto-imagen" />
    if (img === 'VALDA') return <img alt="Formulario de validacion de datos" src={VALDA} className="proyecto-imagen" />
    if (img === 'BUSCGIF') return <img alt="Buscador de Gifs giphy" src={BUSCGIF} className="proyecto-imagen" />
    if (img === 'ASIS') return <img alt="Buscador de Gifs giphy" src={ASIS} className="proyecto-imagen" />
    if (img === 'INM') return <img alt="Buscador de Gifs giphy" src={INM} className="proyecto-imagen" />
    return <img alt="Nada" src={''} className="proyecto-imagen" />
}

export default Imagen