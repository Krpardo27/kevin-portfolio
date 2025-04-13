import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
      valid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
      valid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido";
      valid = false;
    }

    // Validate phone (optional but must be valid if provided)
    if (formData.phone && !/^[0-9+\-\s]+$/.test(formData.phone)) {
      newErrors.phone = "Por favor ingresa un teléfono válido";
      valid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <PageTransition>
      <section className="lg:mt-32 mt-20 flex flex-col h-screen">
        <div className="w-full container lg:mx-64 max-w-xl shadow-lg rounded-lg p-8">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-white mb-6">Contáctame.</h1>
            <p className="text-white text-lg mb-4">
              O envíame un correo electrónico directamente a
              kevin.pardov26@gmail.com
            </p>
          </div>
          {submitSuccess && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
              ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Ingresa tu nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-500 border-[0.5px] "
                } rounded-md shadow-sm  focus:outline-none focus:ring-gray-500 focus:border-gray-300 bg-gray-900 text-white`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Ingresa tu email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm  focus:outline-none focus:ring-gray-500 focus:border-gray-300 bg-gray-900 text-white`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Ingresa tu teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm  focus:outline-none focus:ring-gray-500 focus:border-gray-300 bg-gray-900 text-white`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Ingresa tu mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm  focus:outline-none focus:ring-gray-500 focus:border-gray-300 bg-gray-900 text-white`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full max-w-[250px] flex justify-center py-5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#e1e1e1] hover:bg-[#e1e1e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e1e1e1] ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
            <Link
              to="/"
              className="flex items-center my-5 gap-8 text-[#e1e1e1] bg py-3 w-full max-w-max group"
            >
              Home
              <FaChevronRight className="animate-slide-and-back" />
            </Link>
          </form>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
