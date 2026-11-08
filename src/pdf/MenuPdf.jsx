import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { formatPrecio } from "../utils/formatPrecio";
import { local } from "../data/local";
import bebas from "@fontsource/bebas-neue/files/bebas-neue-latin-400-normal.woff";
import marcador from "@fontsource/permanent-marker/files/permanent-marker-latin-400-normal.woff";
import barlow700 from "@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff";
import archivo400 from "@fontsource/archivo/files/archivo-latin-400-normal.woff";
import archivo700 from "@fontsource/archivo/files/archivo-latin-700-normal.woff";

// Este archivo describe el PDF con componentes de @react-pdf/renderer.
// Se parecen a los de React normal, pero en vez de <div> y <p> se usan
// <View> y <Text>, y los estilos son objetos (no clases de Tailwind).

// Las mismas tipografías de la página web.
Font.register({ family: "Bebas", src: bebas });
Font.register({ family: "Marcador", src: marcador });
Font.register({ family: "Barlow", src: barlow700, fontWeight: 700 });
Font.register({
  family: "Archivo",
  fonts: [
    { src: archivo400, fontWeight: 400 },
    { src: archivo700, fontWeight: 700 },
  ],
});
// Sin esto, el PDF parte las palabras con guiones al final de la línea.
Font.registerHyphenationCallback((palabra) => [palabra]);

// Colores de la marca (los mismos de index.css).
const negro = "#0c0b0a";
const negroSuave = "#161413";
const negroBorde = "#2a2a2a";
const rojo = "#e3261b";
const amarillo = "#ffc629";
const hueso = "#f4efe6";
const gris = "#5c5753";
const lineaClara = "#d9d1c4";

const estilos = StyleSheet.create({
  portada: { backgroundColor: negro, color: hueso, fontFamily: "Archivo" },
  cinta: {
    backgroundColor: rojo,
    paddingVertical: 7,
    flexDirection: "row",
    justifyContent: "center",
  },
  textoCinta: { fontFamily: "Bebas", fontSize: 15, letterSpacing: 3, color: negro },
  estrellaCinta: { fontFamily: "Bebas", fontSize: 15, color: hueso, marginHorizontal: 10 },
  centroPortada: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 54 },
  diaz: { fontFamily: "Bebas", fontSize: 170, color: rojo, lineHeight: 0.85 },
  burguer: { fontFamily: "Bebas", fontSize: 98, color: rojo, lineHeight: 0.85, letterSpacing: 3 },
  eslogan: { fontFamily: "Barlow", fontWeight: 700, fontSize: 17, letterSpacing: 6, marginTop: 14 },
  tituloMenu: {
    fontFamily: "Marcador",
    fontSize: 40,
    color: amarillo,
    marginTop: 26,
    transform: "rotate(-4deg)",
  },

  info: {
    marginTop: 30,
    width: 440,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: negroSuave,
    borderWidth: 1,
    borderColor: negroBorde,
    borderLeftWidth: 4,
    borderLeftColor: rojo,
    borderRadius: 6,
    padding: 16,
  },
  marcoQr: { width: 92, height: 92, backgroundColor: "#ffffff", borderRadius: 4, alignItems: "center", justifyContent: "center" },
  qr: { width: 82, height: 82 },
  textoInfo: { flex: 1, marginLeft: 18 },
  tituloInfo: { fontFamily: "Bebas", fontSize: 20, letterSpacing: 2, color: rojo },
  lineaInfo: { fontSize: 9.5, marginTop: 4, color: hueso },
  lineaQr: { fontSize: 9.5, marginTop: 6, color: amarillo },
  ciudadPortada: {
    fontFamily: "Bebas",
    fontSize: 13,
    letterSpacing: 4,
    color: gris,
    textAlign: "center",
    marginBottom: 26,
  },

  pagina: {
    backgroundColor: hueso,
    color: negro,
    fontFamily: "Archivo",
    paddingTop: 76,
    paddingBottom: 60,
    paddingHorizontal: 54,
  },
  // Franja negra arriba de cada página, como el encabezado de la web.
  encabezado: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 46,
    backgroundColor: negro,
    borderBottomWidth: 3,
    borderBottomColor: rojo,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 54,
  },
  marcaEncabezado: { fontFamily: "Bebas", fontSize: 22, letterSpacing: 1, color: rojo },
  textoEncabezado: { fontFamily: "Bebas", fontSize: 13, letterSpacing: 3, color: hueso },

  categoria: { marginBottom: 20 },
  filaCategoria: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  tituloCategoria: {
    fontFamily: "Bebas",
    fontSize: 22,
    letterSpacing: 2,
    color: hueso,
    backgroundColor: rojo,
    paddingTop: 4,
    paddingBottom: 1,
    paddingHorizontal: 10,
  },
  rayaCategoria: { flexGrow: 1, height: 3, backgroundColor: negro, marginLeft: 8 },
  producto: { paddingVertical: 5, paddingHorizontal: 4 },
  filaProducto: { flexDirection: "row", alignItems: "flex-end" },
  nombreProducto: { fontWeight: 700, fontSize: 11.5 },
  // Línea de puntos entre el nombre y el precio, como en una carta.
  puntos: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: lineaClara,
    borderBottomStyle: "dotted",
    marginHorizontal: 6,
    marginBottom: 3,
  },
  precio: { fontFamily: "Bebas", fontSize: 16, color: rojo },
  descripcion: { fontSize: 9, color: gris, marginTop: 2, lineHeight: 1.35, paddingRight: 70 },

  pie: {
    position: "absolute",
    bottom: 26,
    left: 54,
    right: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: gris,
  },
});

// wrap={false}: un producto nunca se corta entre dos páginas.
function ProductoPdf({ producto }) {
  return (
    <View style={estilos.producto} wrap={false}>
      <View style={estilos.filaProducto}>
        <Text style={estilos.nombreProducto}>{producto.nombre}</Text>
        <View style={estilos.puntos} />
        <Text style={estilos.precio}>{formatPrecio(producto.precio)}</Text>
      </View>
      {producto.descripcion && (
        <Text style={estilos.descripcion}>{producto.descripcion.trim()}</Text>
      )}
    </View>
  );
}

// 573170923238 → 317 092 3238
function telefonoLegible(numero) {
  const local10 = numero.replace(/^57/, "");
  return `${local10.slice(0, 3)} ${local10.slice(3, 6)} ${local10.slice(6)}`;
}

export function MenuPdf({ categorias, qr }) {
  const telefono = telefonoLegible(local.whatsapp);
  // Las categorías en la cinta de la portada (las primeras 4 para que quepan).
  const nombresCinta = categorias.slice(0, 4).map((c) => c.nombre.toUpperCase());

  return (
    <Document title={`Menú – ${local.nombre}`} author={local.nombre} language="es">
      <Page size="LETTER" style={estilos.portada}>
        <View style={estilos.cinta}>
          {nombresCinta.map((nombre, i) => (
            <View key={nombre} style={{ flexDirection: "row" }}>
              {i > 0 && <Text style={estilos.estrellaCinta}>★</Text>}
              <Text style={estilos.textoCinta}>{nombre}</Text>
            </View>
          ))}
        </View>

        <View style={estilos.centroPortada}>
          <Text style={estilos.diaz}>DÍAZ</Text>
          <Text style={estilos.burguer}>BURGUER</Text>
          <Text style={estilos.eslogan}>{local.eslogan.toUpperCase()}</Text>
          <Text style={estilos.tituloMenu}>Nuestro menú</Text>

          {/* Datos del local en la portada: así es lo primero que se ve. */}
          <View style={estilos.info}>
            {qr && (
              <View style={estilos.marcoQr}>
                <Image src={qr} style={estilos.qr} />
              </View>
            )}
            <View style={estilos.textoInfo}>
              <Text style={estilos.tituloInfo}>VISÍTANOS</Text>
              <Text style={estilos.lineaInfo}>
                {local.direccion}, {local.barrio} · {local.ciudad}
              </Text>
              <Text style={estilos.lineaInfo}>{local.horario}</Text>
              <Text style={estilos.lineaInfo}>WhatsApp: {telefono}</Text>
              <Text style={estilos.lineaInfo}>Instagram: @{local.instagram}</Text>
              <Text style={estilos.lineaQr}>Escanea el código para ver el menú con fotos.</Text>
            </View>
          </View>
        </View>

        <Text style={estilos.ciudadPortada}>{local.ciudad.toUpperCase()}</Text>
      </Page>

      <Page size="LETTER" style={estilos.pagina}>
        <View style={estilos.encabezado} fixed>
          <Text style={estilos.marcaEncabezado}>{local.nombre.toUpperCase()}</Text>
          <Text style={estilos.textoEncabezado}>MENÚ</Text>
        </View>

        {categorias.map((categoria) => {
          const [primero, ...resto] = categoria.productos;
          return (
            <View key={categoria.id} style={estilos.categoria}>
              {/* El título va pegado al primer producto (wrap={false}) para que
                  nunca quede solo al final de una página. */}
              <View wrap={false}>
                <View style={estilos.filaCategoria}>
                  <Text style={estilos.tituloCategoria}>{categoria.nombre.toUpperCase()}</Text>
                  <View style={estilos.rayaCategoria} />
                </View>
                {primero && <ProductoPdf producto={primero} />}
              </View>
              {resto.map((producto) => (
                <ProductoPdf key={producto.id} producto={producto} />
              ))}
            </View>
          );
        })}

        <View style={estilos.pie} fixed>
          <Text>
            {local.nombre} · {local.direccion}, {local.barrio} · WhatsApp {telefono}
          </Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber - 1} / ${totalPages - 1}`} />
        </View>
      </Page>
    </Document>
  );
}
