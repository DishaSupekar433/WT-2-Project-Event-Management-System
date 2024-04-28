import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/halls/countByType");


  const images = [
    "https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-videoSixteenByNineJumbo1600.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_hO06LMfJ_AfmzEM9dCvgfGNcr2tU_lN_Fn9IOB_dTpv-6oYrhJKxYadP9iiHCnrRiw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIJbFYf89dEqdQuHww8_Qjq_QNiQBt2VInA&usqp=CAU",
    "https://deowgxgt4vwfe.cloudfront.net/uploads/1654514318_small.jpg",
    "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/02/13/Pictures/_0b203c6e-4e63-11ea-a16c-785555db2321.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"

                />
                <div className="pListTitles">
                  <h1 style={{ color: 'White' }}>{data[i]?.type}</h1>

                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;