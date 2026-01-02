import { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";

const MIN_VISIBLE_TIME = 800; // ms

const SubmitLoader = ({ loading, delay = 200 }) => {
  const [show, setShow] = useState(false);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let delayTimer;
    let hideTimer;

    if (loading) {
      delayTimer = setTimeout(() => {
        startTimeRef.current = Date.now();
        setShow(true);
      }, delay);
    } else if (show && startTimeRef.current) {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(MIN_VISIBLE_TIME - elapsed, 0);

      hideTimer = setTimeout(() => {
        setShow(false);
        startTimeRef.current = null;
      }, remaining);
    } else {
      setShow(false);
    }

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(hideTimer);
    };
  }, [loading, delay, show]);

  if (!show) return null;

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl">
      <div className="flex items-center gap-4 bg-gray-900 px-8 py-6 rounded-2xl shadow-lg">
        <ClipLoader size={22} color="#e5e7eb" />
        <span className="text-sm font-medium text-white">
          Enviando mensaje…
        </span>
      </div>
    </div>
  );
};

export default SubmitLoader;
