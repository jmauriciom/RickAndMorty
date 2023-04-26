import React from "react";
import "tailwindcss/tailwind.css";


const about = () => {
return (
    <section className="mb-20">
    <div className="flex items-center">
        <div className="flex-basis-25 pr-20">
        <h2>Intereses</h2>
        <ul>
            <li>Programación</li>
            <li>Tecnología</li>
            <li>Música</li>
        </ul>
        </div>
        <div className="flex-basis-25 pr-20">
        <h2>Hobbies</h2>
        <ul>
            <li>Videojuegos</li>
            <li>Deportes</li>
            <li>Leer</li>
        </ul>
        </div>
        <div className="flex-basis-25 pr-20">
        <h2>Proyectos</h2>
        <ul>
            <li>Sitio web personal</li>
            <li>Desarrollo de una app móvil</li>
            <li>Proyecto de investigación</li>
        </ul>
        </div>
        <div className="flex-basis-25">
        <img
            
            alt="Foto de perfil"
            className="rounded-full max-w-full"
        />
        <div className="mt-4">
            <a
            href="https://www.linkedin.com/in/juan-mauricio-mu%C3%B1oz-0584b4237/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            >
            <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
            href="https://github.com/jmauriciom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            >
            <i className="fab fa-github"></i> GitHub
            </a>
            <a
            href="https://twitter.com/mi-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            >
            <i className="fab fa-twitter"></i> Twitter
            </a>
        </div>
        </div>
    </div>
    </section>
);
};

export default about;

