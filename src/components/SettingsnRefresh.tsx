// import { GrRefresh } from "react-icons/gr";
import { SlSettings } from "react-icons/sl";
import { FaSpinner } from "react-icons/fa";

interface SettingsProps {
  settings: boolean;
  loading: boolean;
  onSettingsSelect: (val: boolean) => void;
}

const SettingsnRefresh = ({ settings, loading, onSettingsSelect }: SettingsProps) => {
  return (
    <div className="flex justify-center items-center gap-4">
      {loading && settings ?
        <FaSpinner className="animate-spin" />
      : <></>}
      <SlSettings className="text-2xl" onClick={() => onSettingsSelect(!settings)} />
    </div>
  );
};

export default SettingsnRefresh;
