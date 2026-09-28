package com.diazburguer.backend.controller;

import com.diazburguer.backend.dto.CategoriaDTO;
import com.diazburguer.backend.model.Categoria;
import com.diazburguer.backend.repository.CategoriaRepository;
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
@RequestMapping("/api/admin/categorias")
public class CategoriaAdminController {

    private final CategoriaRepository categoriaRepository;

    public CategoriaAdminController(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @PostMapping
    public ResponseEntity<CategoriaDTO> crear(@RequestBody CategoriaRequest datos) {
        Categoria categoria = new Categoria();
        categoria.setNombre(datos.nombre());
        categoria.setSlug(Textos.generarSlug(datos.nombre()));
        categoria.setOrden((int) categoriaRepository.count());

        Categoria guardada = categoriaRepository.save(categoria);
        return ResponseEntity.status(HttpStatus.CREATED).body(CategoriaDTO.desde(guardada));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoriaDTO> actualizar(@PathVariable Long id, @RequestBody CategoriaRequest datos) {
        Categoria categoria = categoriaRepository.findByIdConProductos(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoría no encontrada"));

        categoria.setNombre(datos.nombre());

        Categoria actualizada = categoriaRepository.save(categoria);
        return ResponseEntity.ok(CategoriaDTO.desde(actualizada));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        if (!categoriaRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoría no encontrada");
        }
        categoriaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    public record CategoriaRequest(String nombre) {
    }
}
