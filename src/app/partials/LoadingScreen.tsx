import styles from "@/app/style/LoadingScreen.module.css"; 

export interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
    if (!isLoading) {
      return null;
    }
  
    return (
      <div className={styles.loadingOverlay}>
        <div className={styles.loader}>

          <h2>慌 | zevenblank</h2>

        </div>
      </div>
    );
  };
  
  export default LoadingScreen;