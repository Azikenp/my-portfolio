import React from "react";

const Card = ({ data }) => {
  console.log(data.src);
  return (
    <div className="card p-3 rounded-[10px] min-w-[21rem] max-w-[21rem] w-[80%] lg:min-w-[90%] font-poppins hover:scale-[105%]">
      <img
        className="w-full h-[14rem] max-h-[13rem] rounded-t-[5px]"
        src={data.src}
        alt="image of project"
      />
      <p className="text-[#dde5eb] text-[1.24rem] mt-5 mb-8">{data.text}</p>
      <ul className="flex items-center justify-between">
        <li className="px-[1.9rem] py-[0.52em] bg-[#00ffff1f] rounded-lg">
          <a className="text-[#f0f8ffe7] font-semibold text-[17px] hover:text-[#8a2be2]" href={data.liveSite} target="_blank" rel="noreferrer">
            Live
          </a>
        </li>
        <li className="px-[1.9rem] py-[0.52em] bg-[#00ffff1f] rounded-lg">
          <a className="text-[#f0f8ffe7] font-semibold text-[17px] hover:text-[#8a2be2]" href={data.codeSite} target="_blank" rel="noreferrer">
            Code
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Card;
