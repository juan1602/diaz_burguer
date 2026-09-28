package com.diazburguer.backend.dto;

import com.diazburguer.backend.model.Categoria;

import java.util.List;

public record CategoriaDTO(
    Long id,
    String nombre,
    List<ProductoDTO> productos
) {

    public static CategoriaDTO desde(Categoria categoria) {
        List<ProductoDTO> productos = categoria.getProductos().stream()
            .map(ProductoDTO::desde)
            .toList();
        return new CategoriaDTO(categoria.getId(), categoria.getNombre(), productos);
    }
}
