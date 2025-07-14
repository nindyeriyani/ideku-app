import Image from "next/image";
import AddBtn from "../assets/add-btn.png";

function AddButton() {
  return (
    <button className="fixed bottom-10 right-10 cursor-pointer">
      <Image
        src={AddBtn} // Replace with your actual icon path
        alt="Add Icon"
        width={60}
        height={60}
      />
    </button>
  );
}

export default AddButton;