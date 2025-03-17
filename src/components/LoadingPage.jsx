import { motion } from "framer-motion"

const LoadingPage = () => {
    return (
      <div className="loading-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            rotate: 360,
            transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            backgroundColor: "red"
          }}
        />
      </div>
    );
  };
  
  export default LoadingPage;