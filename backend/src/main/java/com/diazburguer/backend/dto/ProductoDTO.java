package com.diazburguer.backend.dto;

import com.diazburguer.backend.model.Producto;

public record ProductoDTO(
    Long id,
    String nombre,
    String descripcion,
    Integer precio,
    boolean destacado,
    String imagenUrl
) {

    public static ProductoDTO desde(Producto producto) {
        return new ProductoDTO(
            producto.getId(),
            producto.getNombre(),
            producto.getDescripcion(),
            producto.getPrecio(),
            producto.isDestacado(),
            producto.getImagenUrl()
        );
    }
}
