import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://www.kevcodesdev.cl/api/contacto", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "same-origin" // Importante para cookies si las usas
      });

      if (!response.ok) throw new Error("Error en la respuesta del servidor");
      
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    }
  };

  return (
    <PageTransition>
      <section className="min-h-screen mt-20 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#e1e1e1] font-primary mb-6">Contáctame</h1>
          <p className="text-white text-lg mb-4">
            O envíame un correo electrónico directamente a
            <a href="mailto:kevin.pardov26@gmail.com" className="text-blue-400 hover:underline ml-1">
              kevin.pardov26@gmail.com
            </a>
          </p>
        </div>

        {/* Alertas mejoradas */}
        {status === "success" && (
          <div className="flex items-center gap-2 p-3 mb-6 bg-green-100/90 text-green-800 rounded-lg max-w-2xl w-full">
            <FaCheckCircle className="text-green-500 flex-shrink-0" />
            <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
          </div>
        )}
        
        {status === "error" && (
          <div className="flex items-center gap-2 p-3 mb-6 bg-red-100/90 text-red-800 rounded-lg max-w-2xl w-full">
            <FaExclamationCircle className="text-red-500 flex-shrink-0" />
            <span>Error al enviar. Por favor intenta nuevamente o contáctame directamente por email.</span>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl w-full bg-white/10 p-6 rounded-xl backdrop-blur-sm">
          {/* Campo Nombre */}
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 text-white font-medium">
              <FaUser className="text-blue-400" />
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
              placeholder="Tu nombre completo"
            />
          </div>

          {/* Campo Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center gap-2 text-white font-medium">
              <FaEnvelope className="text-blue-400" />
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          {/* Campo Teléfono */}
          <div className="space-y-2">
            <label htmlFor="phone" className="flex items-center gap-2 text-white font-medium">
              <FaPhoneAlt className="text-blue-400" />
              Teléfono (opcional):
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
              placeholder="+52 55 1234 5678"
            />
          </div>

          {/* Campo Mensaje */}
          <div className="space-y-2">
            <label htmlFor="message" className="flex items-center gap-2 text-white font-medium">
              <FaComment className="text-blue-400" />
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* Botón de envío mejorado */}
          <button
            type="submit"
            disabled={status === "sending"}
            className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium transition-all mt-4 ${
              status === "sending"
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
            } text-white`}
          >
            {status === "sending" ? (
              <>
                <ImSpinner8 className="animate-spin" /> Enviando...
              </>
            ) : (
              <>
                <FaPaperPlane /> Enviar Mensaje
              </>
            )}
          </button>
        </form>
      </section>
    </PageTransition>
  );
};

export default Contact;