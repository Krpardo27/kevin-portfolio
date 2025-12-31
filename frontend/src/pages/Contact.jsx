import axios from "axios";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, data, {
      headers: { "Content-Type": "application/json" },
    });
    reset();
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-gray-800 rounded-2xl p-8 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-white">Contáctame</h2>

        <div>
          <input
            {...register("nombre", { required: "Nombre requerido" })}
            placeholder="Nombre"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
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
                value: /^\S+@\S+$/i,
                message: "Correo inválido",
              },
            })}
            placeholder="Correo"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("telefono")}
            placeholder="Teléfono (opcional)"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
          />
        </div>

        <div>
          <textarea
            {...register("mensaje")}
            placeholder="Mensaje (opcional)"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 resize-none"
          />
        </div>

        <button
          disabled={isSubmitting}
          className="w-full py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-200 transition"
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-400 text-center text-sm">
            Mensaje enviado correctamente
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
