import EarthMap from "./earthAnimation/earthAnimation";
import InformationPanel from "./infoPanel/infoPanel";

const IntroSection = () => {
  const title = "Save The Earth";
  return (
    <div className="container mx-auto p-4">
      {title}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 bg-blue-200 p-4">
          <EarthMap />
        </div>
        <div className="col-span-12 md:col-span-6 bg-green-200 p-4">
          <h2 className="text-center">Information About </h2>
          <InformationPanel />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
