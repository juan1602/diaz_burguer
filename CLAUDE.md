# Proyecto: Díaz Burguer – menú digital y página web

## Contexto
Restaurante familiar de hamburguesas en San Martín, Cesar (Colombia).
Barrio La Floresta, Cra. 7 # 11-115. WhatsApp: 573170923238. Instagram: @diazburguers25.
Eslogan: "Una familia. Un sabor." Colores de marca: negro y rojo.
Los clientes entran casi siempre desde el celular (link de Instagram o QR en las mesas).

## Fases
1. Menú digital + información del local + botón de pedir por WhatsApp (ACTUAL).
2. Panel de administración para que el dueño edite precios y productos (backend Spring Boot + PostgreSQL).
3. Carrito que arma el pedido y lo envía por WhatsApp.
4. Pedidos en línea conectados al sistema del restaurante.

## Stack
- Frontend: React + Vite, estilos con Tailwind CSS (colores de marca negro/rojo definidos como tema).
- Backend (fase 2): Spring Boot + PostgreSQL.

## Reglas
- Todo el texto de la interfaz en español de Colombia.
- Diseño mobile-first.
- Precios en pesos colombianos con formato $16.000.
- Los datos del menú van separados de los componentes, con una estructura
  que después pueda venir de una API.
- Trabaja un paso a la vez. Antes de cambios grandes, explícame el plan y espera mi aprobación.
- Explícame brevemente las decisiones técnicas: estoy aprendiendo y quiero entender el código.