import { GrRefresh } from "react-icons/gr";
import { FaSpinner } from "react-icons/fa";

interface FloatingRefreshProps {
  loading: boolean;
  onRefresh: () => void;
}

const FloatingRefresh = ({ loading, onRefresh }: FloatingRefreshProps) => {
  return (
    <button
      onClick={onRefresh}
      disabled={loading}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/80 transition-colors disabled:opacity-50 dark:bg-primary dark:text-primary-foreground">
      {loading ?
        <FaSpinner className="animate-spin" />
      : <GrRefresh />}
    </button>
  );
};

export default FloatingRefresh;
