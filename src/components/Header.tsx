import SettingsnRefresh from "./SettingsnRefresh";

interface SettingsProps {
  settings: boolean;
  loading: boolean;
  onSettingsSelect: (val: boolean) => void;
}

const Header = ({ settings, loading, onSettingsSelect }: SettingsProps) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="mt-2">
          <h1 className="text-3xl font-bold">VUCSE Routine</h1>
          <p className="text-sm">Spring 2026</p>
        </div>
        <div className="flex pt-5 flex-row justify-center items-center gap-2">
          {!settings && <SettingsnRefresh settings={settings} loading={loading} onSettingsSelect={onSettingsSelect} />}
        </div>
      </div>
      <div className="w-full h-px bg-gray-200 mt-3"></div>
    </>
  );
};

export default Header;
