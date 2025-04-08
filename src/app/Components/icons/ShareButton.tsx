import React from "react";
import { PiShareFat } from "react-icons/pi";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import { formatNumber } from "../utils/numberFormatter";

type ShareButtonProps = {
  id?: number;
};

const ShareButton: React.FC<ShareButtonProps> = ({ id }) => {
  const { chapters, getShares, updateShares } = UseFirestore();
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  const shares = getShares(id ?? 0) ?? 0;
  const numberOfShares = formatNumber(shares);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          // title: document.title,
          title: `(૨¡Ƭષαℓ Cap: ${currentChapter?.name}`,
          text: "Opaaa, você está prestes a compartilhar essa obra prima, parabéns guerreiro! Estou muito orgulhoso. 🎉🎉🎉",
          url: `${window.location.protocol}//${window.location.hostname}:3000/caps/${id}`, // this is surely temporary, since this is the development URL
        });
        console.log("Successful share");
        await updateShares(id ?? 0 ?? -1);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.error("Web Share API not supported in this browser");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => {
          handleShare();
        }}
        className="h-full items-center justify-center"
      >
        <PiShareFat className="cursor-pointer h-full" />
      </button>
      <p>{numberOfShares}</p>
    </div>
  );
};

export default ShareButton;
