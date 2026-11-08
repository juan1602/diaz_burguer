import { createElement } from "react";
import { pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { MenuPdf } from "./MenuPdf";
import { local } from "../data/local";

// Arma el PDF con el menú que está cargado en la página en este momento
// (así siempre sale con los precios actuales) y lo descarga.
// Este archivo se importa "bajo demanda" desde BotonDescargarMenu: la
// librería de PDF es pesada y solo se descarga cuando alguien toca el botón.
export async function descargarMenuPdf(categorias) {
  const qr = await QRCode.toDataURL(local.sitioWeb, {
    margin: 0,
    width: 300,
    color: { dark: "#0c0b0a", light: "#ffffff" },
  });

  const archivo = await pdf(createElement(MenuPdf, { categorias, qr })).toBlob();
  const url = URL.createObjectURL(archivo);

  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = "Menu-Diaz-Burguer.pdf";
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();

  // Se libera la memoria del archivo un rato después, cuando ya se descargó.
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
