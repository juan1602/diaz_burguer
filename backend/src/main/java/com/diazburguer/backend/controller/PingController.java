package com.diazburguer.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Ruta para cron-job.org: la visita cada 10 minutos para que Render (plan
// gratis) no se duerma. No consulta la base, así Neon sí puede dormirse.
@RestController
public class PingController {

    @GetMapping("/api/ping")
    public String ping() {
        return "ok";
    }
}
