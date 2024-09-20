import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="max-w-sm text-lg mt-6 text-center info-text">{feedback}</p>
      <div className="flex justify-center mt-3 items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-bold text-3xl font-palanquin">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
