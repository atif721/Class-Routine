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
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors disabled:opacity-50">
      {loading ?
        <FaSpinner className="animate-spin" />
      : <GrRefresh />}
    </button>
  );
};

export default FloatingRefresh;
