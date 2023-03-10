import React from "react";
import { useNavigate } from "react-router-dom";
export default function User() {
  // const author = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [listProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    Dashboard: "",
    Registrasi: "",
    Pengaduan: "",
    Respon: "",
    User: "",
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
    payload.Respon,
    payload.User,
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
                // value={payload.Dashboard}
                onChange={handleChange}
                name="Dashboard"
                onClick={() => {
                    return navigate("/dashboard")}}
              >
                <option>Dashboard</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                // value={payload.Registrasi}
                onChange={handleChange}
                name="Registrasi"
                onClick={() => {
                    return navigate("/registrasi")}}
              >
                <option value={""}>Registrasi</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                // value={payload.Pengaduan}
                onChange={handleChange}
                name="Pengaduan"
                onClick={() => {
                    return navigate("/pengaduan")}}
              >
                <option value={""}>Pengaduan</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                // value={payload.Respon}
                onChange={handleChange}
                name="Respon"
                onClick={() => {
                    return navigate("/respon")}}
              >
                <option value={""}>Respon</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                // value={payload.User}
                onChange={handleChange}
                name="User"
                onClick={() => {
                    return navigate("/user")}}
              >
                <option value={""}>User</option>
              </button>
              <button
                className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#84cc16] mt-6"
                // value={payload.Laporan}
                onChange={handleChange}
                name="Laporan"
                onClick={() => {
                    return navigate("/laporan")}}
              >
                <option value={""}>Laporan</option>
              </button>
              <button
                title="Logout"
                className="w-36 h-10 bg-gradient-to-l from-[#D6ADDC] via-[#84cc16] to-[#2C5DD4] text-white rounded-md mt-5"
                onClick={() => {
                  return navigate("/login")}}
              > 
              <h1>Logout</h1>
              </button>
            </div>
          </div>
        </div>
       <div className="flex">
       <div className="">
          <h2 className="text-orange-600 font-bold text-4xl ml-72 p-1 m-1">
            User
          </h2>
        </div>
        <div className="w-11 h-11 bg-gradient-to-l from-[#84cc16] via-[#84cc16] to-[#84cc16] text-white  ml-auto p-1 m-1">
          <button className="font-bold text-3xl text-center m-0">
            +
          </button>
        </div>
       </div>
       <div className="flex">
          <div className="ml-80">Show</div>
        </div>
        <div className="flex mt-7">
          <div className="ml-80">7</div>
          <button className="ml-40 font-bold">v</button>
        </div>
        <div className="flex">
          <div className="w-48 h-1 bg-black m-1 ml-80 mt-2"></div>
        </div>
        <div className="flex">
          <div className="ml-80 mt-3">entries</div>
        </div>
        <div className="flex m-2">
          <div className="font-bold text-xl text-center ml-80">
            <h1> NO </h1>
          </div>
          <div className="font-bold text-xl text-center ml-20">
            <h1> Nama </h1>
          </div>
          <div className="font-bold text-xl text-center ml-28">
            <h1> Username </h1>
          </div>
          <div className="font-bold text-xl text-center ml-28">
            <h1> Telp</h1>
          </div>
          <div className="font-bold text-xl text-center ml-28">
            <h1> level </h1>
          </div>
          <div className="font-bold text-xl text-center ml-28">
            <h1> Opsi </h1>
          </div>
        </div>
        <div className="flex">
          <div className="w-screen h-1 bg-black m-1 ml-80"></div>
        </div>
        <div className="flex m-2">
          <div className="ml-80">
            <h1 className="font-normal text-xl text-center m-3"> 1</h1>
          </div>
          <div className="ml-12">
            <h1 className="font-normal text-xl text-center m-3">
              {" "}
              Sugih Rohmat
            </h1>
          </div>
          <div className="ml-16">
            <h1 className="font-normal text-xl text-center m-3">
              {" "}
              admin
            </h1>
          </div>
          <div className="ml-16">
            <h1 className="font-normal text-xl text-center m-3"> 0813453456</h1>
          </div>
          <div className="ml-12">
            <h1 className="font-normal text-xl text-center m-3"> admin</h1>
          </div>
          <div className="w-17 h-14 bg-gradient-to-l from-[#2dd4bf] via-[#2dd4bf] to-[#2dd4bf] text-white  ml-20 p-1 m-1 ">
            <button className="font-normal text-xl text-center m-3">
              More
            </button>
          </div>
          <div className="w-17 h-14 bg-gradient-to-l from-[#ef4444] via-[#ef4444] to-[#ef4444] text-white  ml-8 p-1 m-1 ">
            <button className="font-normal text-xl text-center m-3">
              hapus
            </button>
          </div>
          </div>
          <div className="flex m-2">
          <div className="ml-80">
            <h1 className="font-normal text-xl text-center m-3"> 1</h1>
          </div>
          <div className="ml-12">
            <h1 className="font-normal text-xl text-center m-3">
              {" "}
              Fathan
            </h1>
          </div>
          <div className="ml-24">
            <h1 className="font-normal text-xl text-center m-3">
              {" "}
              petugas
            </h1>
          </div>
          <div className="ml-16">
            <h1 className="font-normal text-xl text-center m-3"> 0813453456</h1>
          </div>
          <div className="ml-12">
            <h1 className="font-normal text-xl text-center m-3"> petugas</h1>
          </div>
          <div className="w-17 h-14 bg-gradient-to-l from-[#2dd4bf] via-[#2dd4bf] to-[#2dd4bf] text-white  ml-20 p-1 m-1 ">
            <button className="font-normal text-xl text-center m-3">
              More
            </button>
          </div>
          <div className="w-17 h-14 bg-gradient-to-l from-[#ef4444] via-[#ef4444] to-[#ef4444] text-white  ml-8 p-1 m-1 ">
            <button className="font-normal text-xl text-center m-3">
              hapus
            </button>
          </div>
          </div>
        <div className="flex">
          <div className="w-screen h-1 bg-black m-1 ml-80"></div>
        </div>
      </div>
      <div className="flex">
          <div className="ml-80">
          Menampilkan 1 hingga 1 dari 1 entri
          </div>
          <button className="ml-96">
          Previous
          </button>
          <div className="ml-5 w-9 h-9 bg-slate-300 text-center font-bold">
            1
          </div>
          <button className="ml-5">
          Next
          </button>
      </div>
    </React.Fragment>
  );
}