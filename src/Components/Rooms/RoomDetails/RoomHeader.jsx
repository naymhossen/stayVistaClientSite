/* eslint-disable react/prop-types */
import Heading from "../../../Shared/Heading";

const RoomHeader = ({ rooms }) => {
  const { title, image, location } = rooms || {};

  return (
    <>
      <Heading title={title} subtitle={location} />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img className="object-cover w-full" src={image} alt="header image" />
      </div>
    </>
  );
};

export default RoomHeader;
