package com.diazburguer.backend.repository;

import com.diazburguer.backend.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findByCategoriaIdOrderByOrdenAsc(Long categoriaId);
}
