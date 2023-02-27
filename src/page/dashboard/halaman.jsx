import React from "react";
export default function Halaman() {
  // const author = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  const [listProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    Dashboard: "",
    Registrasi: "",
    Pengaduan: "",
    Laporan: "",
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const getHandleProduk = async (e) => {
    // e.preventDefault()
  };

  React.useEffect(() => {
    getHandleProduk();
  }, [
    payload.Dashboard,
    payload.Registrasi,
    payload.Pengaduan,
    payload.Laporan,
  ]);

  // const GambarProduk = JSON.parse(listProduct)
  console.log("listProduct =>", listProduct);
  console.log("payload =>", payload);

  return (
    <React.Fragment>
      <div>
        <div className="w-screen h-20 bg-gradient-to-r from-[#84cc16] via-[#c9fd60] to-[#84cc16] flex justify-between fixed z-10">
          <div className="flex space-x-8">
            <div className="h-14 w-36 ml-5 my-3 bg-green-500 "></div>
            <div className="flex">
              <h2 className="text-white text-start font-bold text-xl m-5">
                Pengaduan Masyarakat
              </h2>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="h-12 w-12 rounded-full mt-3 mr-8 bg-slate-400"></div>
              {/* <p className="-pl-2 mr-7 text-xs text-white text-center">{author.name}</p> */}
            </div>
          </div>
        </div>
        <div className="h-20"></div>
        <div className="flex justify-between">
          <div className="m-10 grid grid-cols-4 space-y-3 space-x-5 ">
            {/* <button onClick={getHandleProduk}>tombol</button> */}
          </div>
          <div className="w-[15%] h-full border-4 border-[#84cc16] rounded-b-lg fixed flex justify-start m-1">
            <div className="w-36 h-10 bg-gradient-to-l rounded-md mx-auto text-center">
              {/* <p className="text-white font-bold text-md">Filter</p> */}
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                value={payload.kategori}
                onChange={handleChange}
                name="kategori"
              >
                <option>Dashboard</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                // value={payload.kategori}
                // onChange={handleChange}
              >
                <option value={""}>Registrasi</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                value={payload.Registrasi}
                onChange={handleChange}
                name="kategori"
              >
                <option value={""}>Pengaduan</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                value={payload.kategori}
                onChange={handleChange}
                name="kategori"
              >
                <option value={""}>Respon</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                value={payload.kategori}
                onChange={handleChange}
                name="kategori"
              >
                <option value={""}>User</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                value={payload.kategori}
                onChange={handleChange}
                name="kategori"
              >
                <option value={""}>Laporan</option>
              </button>
              <button
                onClick={() => {
                  setPayload(() => {
                    return {
                      Dashboard: "",
                      Registrasi: "",
                      Pengaduan: "",
                      Respon: "",
                      User: "",
                      Laporan: "",
                    };
                  });
                }}
                title="Logout"
                className="w-36 h-10 bg-gradient-to-l from-[#D6ADDC] via-[#84cc16] to-[#2C5DD4] text-white rounded-md mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
