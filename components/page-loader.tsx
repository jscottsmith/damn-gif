import { LogoEye } from "../routes/components/logo-eye";
import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-100">
      <div>
        <motion.div
          className="mb-4 origin-center"
          initial={{ scale: 0.5 }}
          animate={{ scale: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <LogoEye />
        </motion.div>
        <p className="text-center text-sm text-gray-400">Loading</p>
      </div>
    </div>
  );
}
