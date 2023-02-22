import React from "react";
export default function Halaman() {
    // const author = useSelector((state) => state.auth);
    // const navigate = useNavigate();
  
    const [listProduct, setListProduct] = React.useState([]);
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
    }, [payload.Dashboard, payload.Registrasi, payload.Pengaduan, payload.Respon, payload.User, payload.Laporan]);
  
    // const GambarProduk = JSON.parse(listProduct)
    console.log("listProduct =>", listProduct);
    console.log("payload =>", payload);
  
    return (
      <React.Fragment>
        <div>
          <div className="w-screen h-20 bg-gradient-to-r from-[#D6ADDC] via-[#7DB4DD] to-[#2C5DD4] flex justify-between fixed z-10">
            <div className="flex space-x-28">
              <div className="h-14 w-36 ml-5 my-3 bg-slate-500 "></div>
              <div className="flex">

                <h2 className="text-white text-start font-bold">Pengaduan Masyarakat</h2>
                
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
          <div className="flex justify-between ">
            <div className="m-10 grid grid-cols-4 space-y-3 space-x-5 ">
             
              {/* <button onClick={getHandleProduk}>tombol</button> */}
            </div>
            <div className="w-[20%] h-96 border-4 border-[#9AB2DD] rounded-b-lg fixed ml-[80%]">
              <div className="w-36 h-10 bg-gradient-to-l from-[#D6ADDC] via-[#7DB4DD] to-[#2C5DD4] rounded-md mx-24 mt-10 text-center py-2">
                <p className="text-white font-bold text-md">Filter</p>
                <select
                  className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#7DB4DD] mt-6"
                  value={payload.kategori}
                  onChange={handleChange}
                  name="kategori"
                >
                  <option value={''}>Dashboard</option>
                 
                </select>
                <select
                  className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#7DB4DD] mt-6"
                  value={payload.kategori}
                  onChange={handleChange}
              
                >
                  <option value={''}>Registrasi</option>
                 
                </select>
                <select
                  className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#7DB4DD] mt-6"
                  value={payload.kategori}
                  onChange={handleChange}
                  name="kategori"
                >
                  <option value={''}>Pengaduan</option>
                 
                </select>
                <select
                  className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#7DB4DD] mt-6"
                  value={payload.kategori}
                  onChange={handleChange}
                  name="kategori"
                >
                  <option value={''}>Respon</option>
                 
                </select>
                <select
                  className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#7DB4DD] mt-6"
                  value={payload.kategori}
                  onChange={handleChange}
                  name="kategori"
                >
                  <option value={''}>User</option>
                 
                </select>
                <select
                  className="w-36 h-10 border-2 rounded-md border-[#9AB2DD] text-[#7DB4DD] mt-6"
                  value={payload.kategori}
                  onChange={handleChange}
                  name="kategori"
                >
                  <option value={''}>Laporan</option>
                 
                </select>
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
                  title='Reset Filter'
                  className='w-36 h-10 bg-gradient-to-l from-[#D6ADDC] via-[#7DB4DD] to-[#2C5DD4] text-white rounded-md mt-5'
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}