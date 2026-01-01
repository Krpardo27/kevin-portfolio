import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const SubmitLoader = ({ loading, delay = 250 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;

    if (loading) {
      timer = setTimeout(() => setShow(true), delay);
    } else {
      setShow(false);
    }

    return () => clearTimeout(timer);
  }, [loading, delay]);

  if (!show) return null;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl">
      <div className="flex items-center gap-3 bg-gray-900 px-6 py-4 rounded-xl">
        <ClipLoader size={20} color="#e5e7eb" />
        <span className="text-sm font-medium text-white">Enviando…</span>
      </div>
    </div>
  );
};

export default SubmitLoader;
