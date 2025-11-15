"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Brain, Users, Award, Calendar, Mail, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-forma.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 122, 51, 0.7), rgba(0, 122, 51, 0.85)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in-up">
          <img src={logo} alt="FORMA TBCF" className="w-48 h-48 mx-auto mb-8 animate-scale-in" loading="lazy" />
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            FORMA TBCF
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-4 font-semibold">
            Forma tu futuro con la tecnificación TBCF
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Academia de tecnificación de fútbol en Tavernes Blanques
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Button
              size="xl"
              className="bg-white text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
              onClick={() => window.open("https://forms.gle/8ZW9nkSPWou9Djbh6", "_blank")}
            >
              TECNIFICACIÓN ALTA
            </Button>
            <Button
              size="xl"
              className="bg-primary text-white font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:scale-105"
              onClick={() => window.open("https://forms.gle/j8AvGwYt3q2c9vwx5", "_blank")}
            >
              TECNIFICACIÓN BASE
            </Button>
            <Button
              size="xl"
              className="bg-secondary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
              onClick={() => window.open("https://forms.gle/BbJE6Tz2xQfH6bdM8", "_blank")}
            >
              CLINICS
            </Button>
          </div>
        </div>
      </section>

      {/* SOBRE FORMA */}
      <section className="py-20 bg-background">
        <motion.div
          className="container mx-auto px-4 text-center max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre FORMA TBCF</h2>
          <p className="text-lg text-muted-foreground mb-4">
            FORMA TBCF es un programa de tecnificación diseñado para formar jugadores técnica y tácticamente,
            mejorando su rendimiento y comprensión del juego. Nuestro objetivo es desarrollar futbolistas
            completos que destaquen tanto en el campo como fuera de él.
          </p>
          <p className="text-lg text-muted-foreground">
            Con la experiencia y trayectoria de{" "}
            <span className="font-semibold text-primary">Tavernes Blanques Club de Fútbol</span>,
            ofrecemos un entrenamiento de élite adaptado a las necesidades de cada jugador.
          </p>
        </motion.div>
      </section>

      {/* METODOLOGÍA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Metodología de Entrenamiento
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[ 
              { icon: <Target className="w-12 h-12 text-primary mb-4" />, title: "Técnica Individual", desc: "Control, regate, pase y tiro." },
              { icon: <Brain className="w-12 h-12 text-primary mb-4" />, title: "Toma de Decisiones", desc: "Visión de juego y rapidez mental." },
              { icon: <Users className="w-12 h-12 text-primary mb-4" />, title: "Trabajo Táctico", desc: "Coordinación, posicionamiento y sistemas de juego." },
              { icon: <Award className="w-12 h-12 text-primary mb-4" />, title: "Valores y Desarrollo", desc: "Respeto, disciplina y superación personal." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-primary/20">
                  <CardHeader>{item.icon}<CardTitle>{item.title}</CardTitle></CardHeader>
                  <CardContent><CardDescription>{item.desc}</CardDescription></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDARIO Y TARIFAS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Calendario y Tarifas
          </motion.h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* HORARIOS */}
            <Card className="border-primary/30 shadow-md">
              <CardHeader className="bg-secondary/50">
                <Calendar className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-2xl text-center">Horarios de Tecnificación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <span className="font-semibold">Martes y Jueves</span>
                  <span className="text-primary font-bold">17:30 - 19:00</span>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Sesiones de 90 minutos con entrenadores profesionales
                </p>
              </CardContent>
            </Card>

            {/* TARIFAS */}
            <Card className="border-primary/30 shadow-md">
              <CardHeader className="bg-primary/10">
                <Award className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-2xl text-center">Tarifas</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">

                {/* ALTA */}
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/30 text-center hover:-translate-y-1 transition-transform duration-300">
                    <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase">ALTA</p>
                    <p className="text-3xl font-black text-primary mb-2">160€</p>
                    <p className="text-sm text-muted-foreground mb-4">10 sesiones</p>
                    <Button
                      size="lg"
                      className="w-full bg-primary text-white hover:bg-primary/90"
                      onClick={() => window.open("https://forms.gle/8ZW9nkSPWou9Djbh6", "_blank")}
                    >
                      Inscribirme
                    </Button>
                  </div>
                </motion.div>

                {/* BASE */}
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="p-6 bg-accent/5 rounded-lg border-2 border-accent/30 text-center hover:-translate-y-1 transition-transform duration-300">
                    <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase">BASE</p>
                    <p className="text-3xl font-black text-accent mb-2">90€</p>
                    <p className="text-sm text-muted-foreground mb-4">5 sesiones</p>
                    <Button
                      size="lg"
                      className="w-full bg-accent text-white hover:bg-accent/90"
                      onClick={() => window.open("https://forms.gle/j8AvGwYt3q2c9vwx5", "_blank")}
                    >
                      Inscribirme
                    </Button>
                  </div>
                </motion.div>

                {/* CLINICS */}
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="p-6 bg-secondary/10 rounded-lg border-2 border-secondary/30 text-center hover:-translate-y-1 transition-transform duration-300">
                    <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase">CLINICS</p>
                    <p className="text-3xl font-black text-secondary-foreground mb-2">Consultar</p>
                    <p className="text-sm text-muted-foreground mb-4">Fechas especiales</p>

                    {/* CALENDARIO VISUAL CON ANIMACIÓN */}
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                      }}
                    >
                      {[
                        { title: "🌞 Summer Clinic", date: "15–19 julio", desc: "Técnica avanzada y mejora física" },
                        { title: "⚽ Christmas Clinic", date: "27–30 diciembre", desc: "Entrenamientos intensivos navideños" },
                        { title: "🔥 Easter Clinic", date: "14–17 abril", desc: "Perfecciona técnica y táctica" },
                      ].map((c, i) => (
                        <motion.div
                          key={i}
                          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                          className="p-4 bg-white/60 rounded-lg shadow-sm border border-secondary/30 hover:shadow-md transition-all"
                        >
                          <p className="text-primary font-semibold">{c.title}</p>
                          <p className="text-muted-foreground text-sm">{c.date}</p>
                          <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
                        </motion.div>
                      ))}
                    </motion.div>

                    <Button
                      size="lg"
                      className="w-full bg-secondary text-primary hover:bg-primary hover:text-white transition-all"
                      onClick={() => window.open("https://forms.gle/BbJE6Tz2xQfH6bdM8", "_blank")}
                    >
                      Inscribirme
                    </Button>
                  </div>
                </motion.div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ENTRENADORES */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nuestros Entrenadores
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { img: coach1, name: "Entrenador Principal", desc: "Licencia UEFA Pro con 15+ años de experiencia en formación de jugadores de élite." },
              { img: coach2, name: "Entrenador Asistente", desc: "Especialista en técnica individual y desarrollo táctico juvenil." },
            ].map((coach, i) => (
              <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img src={coach.img} alt={coach.name} className="w-full h-64 object-cover" loading="lazy" />
                  <CardHeader>
                    <CardTitle className="text-center">{coach.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{coach.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Galería de Entrenamientos
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8].map((img, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img src={img} alt={`Entrenamiento ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h2>
            <p className="text-lg text-muted-foreground mb-12">
              ¿Tienes alguna duda? Contáctanos y te ayudaremos con todo lo que necesites
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="mb-2 text-lg">Teléfono</CardTitle>
                  <CardDescription className="text-foreground font-semibold">+34 123 456 789</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="mb-2 text-lg">Email</CardTitle>
                  <CardDescription className="text-foreground font-semibold">info@formatbcf.com</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="mb-2 text-lg">Ubicación</CardTitle>
                  <CardDescription className="text-foreground font-semibold">
                    Tavernes Blanques<br />Valencia, España
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">FORMA TBCF</p>
          <p className="text-white/80 text-sm">
            © 2024 Tavernes Blanques Club de Fútbol. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
