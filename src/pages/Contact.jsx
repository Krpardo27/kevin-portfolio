import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhoneAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import axios from "axios";

const Contact = () => {
  const {
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const phone = watch("phone");

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Solo números
    if (value.length > 9) {
      value = value.slice(0, 9); // Máximo 9 dígitos
    }
    setValue("phone", value);
  };

  const onSubmit = (values) => {
    axios
      .post("https://www.kevcodesdev.cl/api/contacto", values)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Tu mensaje ha sido enviado correctamente.",
        });
        reset();
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        Swal.fire({
          icon: "error",
          title: "Error al enviar el mensaje",
          text: "Por favor, intenta nuevamente más tarde.",
        });
      });
  };

  return (
    <PageTransition>
      <section className="min-h-screen mt-20 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#e1e1e1] font-primary mb-6">
            Contáctame
          </h1>
          <p className="text-white text-lg mb-4">
            O envíame un correo electrónico directamente a
            <a
              href="mailto:kevin.pardov26@gmail.com"
              className="text-blue-400 hover:underline ml-1"
            >
              kevin.pardov26@gmail.com
            </a>
          </p>
        </div>

        {(errors.name || errors.email || errors.phone) && (
          <div className="w-full max-w-2xl bg-red-100 text-red-800 p-4 rounded-lg mb-6">
            <ul className="mt-2 flex flex-col">
              {errors.name && (
                <li className="flex items-center">
                  <FaExclamationCircle className="mr-2" />
                  {errors.name?.message}
                </li>
              )}
              {errors.email && (
                <li className="flex items-center">
                  <FaExclamationCircle className="mr-2" />
                  {errors.email?.message}
                </li>
              )}
              {errors.phone && (
                <li className="flex items-center">
                  <FaExclamationCircle className="mr-2" />
                  {errors.phone?.message}
                </li>
              )}
            </ul>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-2xl w-full bg-white/10 p-6 rounded-xl backdrop-blur-sm"
        >
          {/* Nombre */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-white font-medium"
            >
              <FaUser className="text-blue-400" />
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
              placeholder="Ingresa tu nombre"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-white font-medium"
            >
              <FaEnvelope className="text-blue-400" />
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
              placeholder="tucorreo@ejemplo.com"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Formato de email inválido",
                },
              })}
            />
          </div>

          {/* Teléfono */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="flex items-center gap-2 text-white font-medium"
            >
              <FaPhoneAlt className="text-blue-400" />
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
              placeholder="9XXXXXXXX"
              value={phone || ""}
              onChange={handlePhoneChange}
              {...register("phone", {
                required: "El número es obligatorio",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Debe contener exactamente 9 dígitos",
                },
              })}
            />
          </div>

          {/* Mensaje (no obligatorio) */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-white font-medium"
            >
              <FaComment className="text-blue-400" />
              Mensaje:
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
              placeholder="Escribe tu mensaje aquí..."
              {...register("message")}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Enviar Mensaje
          </button>
        </form>
      </section>
    </PageTransition>
  );
};

export default Contact;
