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
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
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
    <section className="lg:mt-32 mt-12 px-4 py-12 flex flex-col items-center">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-neutral-100">
          Contacto
        </h1>

        <p className="text-neutral-300 text-lg">
          Si quieres contactarme, puedes hacerlo directamente a través de
          cualquiera de estos canales.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <a
            href="mailto:kpardoveas@gmail.com"
            className="
              flex items-center gap-3 px-5 py-4 rounded-xl
              bg-white/10 backdrop-blur
              text-white font-medium
              hover:bg-white/20 transition
            "
          >
            <FaEnvelope className="text-blue-400 text-xl" />
            kpardoveas@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kevinpardoveas/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3 px-5 py-4 rounded-xl
              bg-white/10 backdrop-blur
              text-white font-medium
              hover:bg-white/20 transition
            "
          >
            <FaLinkedin className="text-sky-500 text-xl" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Krpardo27"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3 px-5 py-4 rounded-xl
              bg-white/10 backdrop-blur
              text-white font-medium
              hover:bg-white/20 transition
            "
          >
            <FaGithub className="text-gray-300 text-xl" />
            GitHub
          </a>
          <a
            href="https://wa.me/56990914436"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3 px-5 py-4 rounded-xl
              bg-white/10 backdrop-blur
              text-white font-medium
              hover:bg-white/20 transition
            "
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            WhatsApp
          </a>
        </div>

        <p className="text-sm text-neutral-400 mt-8">
          El formulario de contacto estará disponible próximamente.
        </p>
      </div>
    </section>
  );
};

export default Contact;
