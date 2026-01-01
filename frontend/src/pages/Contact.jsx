import axios from "axios";
import { useForm } from "react-hook-form";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await Promise.all([
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, data, {
          headers: { "Content-Type": "application/json" },
        }),
        sleep(600),
      ]);
      reset();
    } catch (error) {
      setError("root", {
        type: "server",
        message:
          error?.response?.data?.message ||
          "No se pudo enviar el mensaje. Intenta nuevamente.",
      });
    }
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-gray-800 rounded-2xl p-8 space-y-6"
      >
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">Contáctame</h2>
          <p className="text-gray-400 text-sm">
            Escríbeme usando el formulario o por mis redes sociales.
          </p>
        </header>
        <div>
          <input
            {...register("nombre", { required: "Nombre requerido" })}
            placeholder="Nombre"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white/10"
          />
          {errors.nombre && (
            <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Correo requerido",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Correo inválido",
              },
            })}
            placeholder="Correo"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white/10"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("telefono")}
            placeholder="Teléfono (opcional)"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white/10"
          />
        </div>

        <div>
          <textarea
            {...register("mensaje")}
            rows={4}
            placeholder="Mensaje (opcional)"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-white/10"
          />
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
          {isSubmitting ? (
            <>
              <ImSpinner8 className="animate-spin" />
              Enviando…
            </>
          ) : (
            "Enviar mensaje"
          )}
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

        {/* Separador */}
        <div className="pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm mb-4">
            También puedes contactarme en
          </p>

          <div className="flex justify-center gap-6 text-2xl">
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
    </section>
  );
};

export default Contact;
