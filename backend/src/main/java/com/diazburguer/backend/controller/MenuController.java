package com.diazburguer.backend.controller;

import com.diazburguer.backend.dto.CategoriaDTO;
import com.diazburguer.backend.repository.CategoriaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MenuController {

    private final CategoriaRepository categoriaRepository;

    public MenuController(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @GetMapping("/api/menu")
    public List<CategoriaDTO> obtenerMenu() {
        return categoriaRepository.findAllConProductosOrderByOrdenAsc().stream()
            .map(CategoriaDTO::desde)
            .toList();
    }
}
