import ArrowBackIcon from "../assets/arrow-back-icon.png";
import Image from "next/image";

function ArrowBackButton() {
  return (
    <button className="fixed top-4 left-4 z-50 bg-[#15202b] p-3 rounded-full shadow-md cursor-pointer hover:bg-[#15202bd1] transition-colors">
      <Image
        src={ArrowBackIcon}
        alt="Back"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </button>
  );
}

export default ArrowBackButton;
