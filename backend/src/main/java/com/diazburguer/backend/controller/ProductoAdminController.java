package com.diazburguer.backend.controller;

import com.diazburguer.backend.dto.ProductoDTO;
import com.diazburguer.backend.model.Categoria;
import com.diazburguer.backend.model.Producto;
import com.diazburguer.backend.repository.CategoriaRepository;
import com.diazburguer.backend.repository.ProductoRepository;
import com.diazburguer.backend.util.Textos;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/admin/productos")
public class ProductoAdminController {

    private final ProductoRepository productoRepository;
    private final CategoriaRepository categoriaRepository;

    public ProductoAdminController(ProductoRepository productoRepository, CategoriaRepository categoriaRepository) {
        this.productoRepository = productoRepository;
        this.categoriaRepository = categoriaRepository;
    }

    @PostMapping
    public ResponseEntity<ProductoDTO> crear(@RequestBody ProductoRequest datos) {
        Categoria categoria = obtenerCategoria(datos.categoriaId());

        Producto producto = new Producto();
        aplicarDatos(producto, datos, categoria);
        producto.setOrden((int) productoRepository.count());

        Producto guardado = productoRepository.save(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(ProductoDTO.desde(guardado));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductoDTO> actualizar(@PathVariable Long id, @RequestBody ProductoRequest datos) {
        Producto producto = productoRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado"));

        Categoria categoria = obtenerCategoria(datos.categoriaId());
        aplicarDatos(producto, datos, categoria);

        Producto actualizado = productoRepository.save(producto);
        return ResponseEntity.ok(ProductoDTO.desde(actualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (!productoRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado");
        }
        productoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    private Categoria obtenerCategoria(Long categoriaId) {
        return categoriaRepository.findById(categoriaId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Categoría no encontrada"));
    }

    private void aplicarDatos(Producto producto, ProductoRequest datos, Categoria categoria) {
        producto.setNombre(datos.nombre());
        producto.setDescripcion(datos.descripcion());
        producto.setPrecio(datos.precio());
        producto.setDestacado(datos.destacado());
        producto.setImagenUrl(datos.imagenUrl());
        producto.setCategoria(categoria);
        if (producto.getSlug() == null) {
            producto.setSlug(Textos.generarSlug(datos.nombre()));
        }
    }

    public record ProductoRequest(
        String nombre,
        String descripcion,
        Integer precio,
        boolean destacado,
        String imagenUrl,
        Long categoriaId
    ) {
    }
}
