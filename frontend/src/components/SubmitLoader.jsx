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
    <div className="flex items-center justify-center gap-3">
      <ClipLoader size={20} color="#111827" />
      <span className="text-sm font-medium">Enviando…</span>
    </div>
  );
};

export default SubmitLoader;
