import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Heading from "../../Shared/Heading";
import Container from "../../Shared/Container/Container";
import Loader from "../../Shared/Loader";
import { getALLRoms } from "../../API/Rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    setLoading(true);
    getALLRoms()
      .then((data) => {
        if (category) {
          const filterValue = data.filter((room) => room.category === category);
          setRooms(filterValue);
        } else {
          setRooms(data);
          setLoading(false);
        }
      });
  }, [category]);
  // console.log(rooms);

  if (loading) <Loader />;
  return (
    <>
      <Container>
        {rooms && rooms.length > 0 ? (
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {rooms.map((room) => (
              <Card key={room.category} room={room} />
            ))}
          </div>
        ) : (
          <div className=" mt-44">
            <Heading center={true} title="No Data Available In This Category" subtitle="" />
          </div>
        )}
      </Container>
    </>
  );
};

export default Rooms;
