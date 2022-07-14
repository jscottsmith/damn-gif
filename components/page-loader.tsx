import { LogoEye } from "../routes/components/logo-eye";
import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-100">
      <div>
        <motion.div
          className="mb-4 flex justify-center"
          initial={{ scale: 0.5 }}
          animate={{ scale: [0.7, 0.5, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <LogoEye />
        </motion.div>
        <p className="text-center text-sm text-gray-400">
          Loading some things, hang tight.
        </p>
      </div>
    </div>
  );
}
