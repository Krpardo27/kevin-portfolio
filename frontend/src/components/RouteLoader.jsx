import { motion } from "framer-motion";

const RouteLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* spinner */}
        <motion.div
          className="w-10 h-10 border-2 border-gray-600 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 0.9,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default RouteLoader;
