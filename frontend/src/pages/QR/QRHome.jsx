import QRButton from "../../components/qr/QRButton";
export default function QRHome(){ 
    return( 
    <div className="container mt-5"> 
    <h1>Sistema QR</h1> 
    <p> Escanea un código QR para acceder a un recurso. </p> 
    <QRButton /> </div> ) }