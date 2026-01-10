import axios from "axios";
import { useForm } from "react-hook-form";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import SubmitLoader from "../components/SubmitLoader";
import { useState } from "react";
import { useSEO } from "../hooks/useSEO";

const Contact = () => {

  useSEO({
    title: "Contacto | Kevin Pardo – Desarrollador Frontend React",
    description:
      "Contacto profesional de Kevin Pardo. Disponible para oportunidades como desarrollador frontend React o full stack MERN.",
    canonical: "https://kevcodesdev.cl/contact",
  });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "+569 ",
      mensaje: "",
    },
  });

  const [showLoader, setShowLoader] = useState(false);

  const onSubmit = async (data) => {
    setShowLoader(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      // espera a que el loader termine su animación
      setTimeout(() => {
        reset();
        setShowLoader(false);
      }, 900); // debe coincidir con el MIN_VISIBLE_TIME
    } catch (error) {
      setShowLoader(false);
      setError("root", {
        type: "server",
        message:
          error?.response?.data?.message ||
          "No se pudo enviar el mensaje. Intenta nuevamente.",
      });
    }
  };

  return (
    <section className="bg-gray-900 px-4 py-8 lg:py-16">
      <div className="max-w-5xl mx-auto flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
          w-full max-w-3xl
          bg-gray-800
          rounded-xl lg:rounded-2xl
          p-5 sm:p-6 lg:p-8
          space-y-6
          animate-fadeInUp
          lg:sticky lg:top-24
        "
        >
          <SubmitLoader loading={showLoader} />

          <header className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Contáctame
            </h2>
            <p className="text-gray-400 text-sm">
              Escríbeme usando el formulario o por mis redes sociales.
            </p>
          </header>

          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
            <div>
              <input
                type="text"
                {...register("nombre", { required: "Nombre requerido" })}
                placeholder="Nombre"
                className="
                w-full px-4 py-2.5 sm:py-3
                rounded-lg
                bg-gray-900 text-white
                border border-gray-700
                focus:outline-none focus:ring-2 focus:ring-white/10
              "
              />
              {errors.nombre && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.nombre.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Correo requerido",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Correo inválido",
                  },
                })}
                placeholder="Correo"
                className="
                w-full px-4 py-2.5 sm:py-3
                rounded-lg
                bg-gray-900 text-white
                border border-gray-700
                focus:outline-none focus:ring-2 focus:ring-white/10
              "
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="+569 "
                {...register("telefono", {
                  required: "Teléfono requerido",
                  pattern: {
                    value: /^\+569\d{8}$/,
                    message: "Usa el formato +569XXXXXXXX",
                  },
                })}
                onChange={(e) => {
                  let value = e.target.value;

                  // Forzar prefijo
                  if (!value.startsWith("+569")) {
                    value = "+569";
                  }

                  // Limpiar y limitar números
                  const numeros = value
                    .replace("+569", "")
                    .replace(/\D/g, "")
                    .slice(0, 8);

                  const finalValue = "+569" + numeros;

                  setValue("telefono", finalValue, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
                onKeyDown={(e) => {
                  if (
                    (e.key === "Backspace" || e.key === "Delete") &&
                    e.target.selectionStart <= 4
                  ) {
                    e.preventDefault();
                  }

                  if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                maxLength={12}
                className="
    w-full px-4 py-2.5 sm:py-3
    rounded-lg
    bg-gray-900 text-white
    border border-gray-700
    focus:outline-none focus:ring-2 focus:ring-white/10
  "
              />

              {errors.telefono && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.telefono.message}
                </p>
              )}
            </div>

            <div className="lg:col-span-2">
              <textarea
                {...register("mensaje")}
                rows={4}
                placeholder="Mensaje (opcional)"
                className="
                w-full px-4 py-2.5 sm:py-3
                rounded-lg
                bg-gray-900 text-white
                border border-gray-700
                resize-none
                focus:outline-none focus:ring-2 focus:ring-white/10
              "
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="
            w-full py-3 rounded-xl
            bg-white text-gray-900 font-semibold
            hover:bg-gray-200 transition
            disabled:opacity-60 disabled:cursor-not-allowed
            inline-flex items-center justify-center gap-2
          "
          >
            {isSubmitting ? "Enviando…" : "Enviar mensaje"}
          </button>

          {errors.root?.message && (
            <p className="text-red-400 text-center text-sm">
              {errors.root.message}
            </p>
          )}

          {isSubmitSuccessful && (
            <p className="text-green-400 text-center text-sm">
              Mensaje enviado correctamente
            </p>
          )}

          {/* REDES */}
          <div className="pt-4 lg:pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-3">
              También puedes contactarme en
            </p>

            <div className="flex justify-center gap-5 text-xl sm:text-2xl">
              <a
                href="https://www.linkedin.com/in/kevinpardoveas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Krpardo27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:kpardoveas@gmail.com"
                className="text-gray-400 hover:text-green-400 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
