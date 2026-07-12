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
      className="bg-primary text-primary-foreground hover:bg-primary/80 dark:bg-primary dark:text-primary-foreground fixed right-6 bottom-6 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors disabled:opacity-50"
    >
      {loading ? <FaSpinner className="animate-spin" /> : <GrRefresh />}
    </button>
  );
};

export default FloatingRefresh;
