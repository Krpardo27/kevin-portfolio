import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("POST →", `${import.meta.env.VITE_BACKEND_URL}/contact`);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,

        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 && res.data?.ok) {
        reset();
      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      setError("root", {
        type: "server",
        message:
          error?.response?.data?.message ||
          error.message ||
          "No se pudo enviar el mensaje. Intenta nuevamente.",
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      const t = setTimeout(() => {
        reset();
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="lg:mt-32 mt-8 px-4 py-5 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-neutral-100 mb-4">Contacto</h1>
        {/* <p className="text-neutral-300 text-lg">
          También puedes escribirme a{" "}
          <a
            href="mailto:kpardoveas@gmail.com"
            className="text-blue-400 hover:underline"
          >
            kpardoveas@gmail.com
          </a>
        </p> */}
      </div>

      {/* Success */}
      {isSubmitSuccessful && !errors.root && (
        <div className="flex items-center gap-2 p-3 mb-6 bg-green-100/90 text-green-800 rounded-lg max-w-2xl w-full">
          <FaCheckCircle className="text-green-600" />
          <span>Mensaje enviado correctamente.</span>
        </div>
      )}

      {/* Error */}
      {errors.root && (
        <div className="flex items-center gap-2 p-3 mb-6 bg-red-100/90 text-red-800 rounded-lg max-w-2xl w-full">
          <FaExclamationCircle className="text-red-600" />
          <span>{errors.root.message}</span>
        </div>
      )}

      {/* Loader overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 bg-gray-900 px-8 py-6 rounded-xl shadow-xl">
            <ImSpinner8 className="text-blue-400 text-3xl animate-spin" />
            <p className="text-gray-200 text-sm">Enviando mensaje…</p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-4 max-w-2xl w-full bg-white/10 p-6 rounded-xl backdrop-blur-sm
  transition-opacity ${
    isSubmitting || isSubmitSuccessful ? "opacity-60 pointer-events-none" : ""
  }`}
        noValidate
      >
        {/* Nombre */}
        <div>
          <label className="flex items-center gap-2 text-white font-medium mb-1">
            <FaUser className="text-blue-400" />
            Nombre
          </label>
          <input
            {...register("name", {
              required: "El nombre es obligatorio",
              minLength: { value: 2, message: "Mínimo 2 caracteres" },
            })}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400"
            placeholder="Tu nombre completo"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 text-white font-medium mb-1">
            <FaEnvelope className="text-blue-400" />
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            })}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400"
            placeholder="correo@ejemplo.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="flex items-center gap-2 text-white font-medium mb-1">
            <FaPhoneAlt className="text-blue-400" />
            Teléfono (opcional)
          </label>
          <input
            {...register("phone")}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400"
            placeholder="+56 9 1234 5678"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label className="flex items-center gap-2 text-white font-medium mb-1">
            <FaComment className="text-blue-400" />
            Mensaje
          </label>
          <textarea
            rows={6}
            {...register("message", {
              required: "El mensaje es obligatorio",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
            })}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400"
            placeholder="Escribe tu mensaje aquí..."
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium transition-all ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
          } text-white`}
        >
          {isSubmitting ? (
            <>
              <ImSpinner8 className="animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <FaPaperPlane />
              Enviar mensaje
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
