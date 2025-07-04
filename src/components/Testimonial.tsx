import { Avatar, AvatarImage } from "./ui/avatar";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <section className="container mx-auto px-4 mt-10 text-[#343434] ">
      <h1 className="text-4xl text-center mb-5 font-extrabold">Testimonial</h1>
      <Marquee className="gap-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <div className="bg-white rounded-xl ">
            <div>
              <h2 className="mt-3 ">
                "Pelayanannya cepat dan ramah! Baru pesan, nggak sampai 15 menit
                sudah diantar. Galonnya bersih, segelnya utuh, recommended
                banget!"
              </h2>
              <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
                <AvatarImage src="/profile.webp" />
              </Avatar>
              <p className="text-center mt-3">
                Ibu Rina, Ibu Rumah Tangga
              </p>
            </div>
          </div>

          <div className=" bg-white rounded-xl">
            <div>
              <h3 className="mt-3">
                “Pelayanannya cepat dan galonnya selalu bersih. Saya sudah
                langganan hampir 2 tahun, dan belum pernah kecewa. Terima kasih
                AHS!”
              </h3>
              <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
                <AvatarImage src="/profile.webp" />
              </Avatar>
              <p className="text-center mt-3">Pak Andi, Pegawai Negeri</p>
            </div>
          </div>

          <div className=" bg-white rounded-xl">
            <div>
              <h4 className="mt-3">
                “Biasanya saya sibuk dan lupa beli air. Sekarang tinggal pesan
                lewat WA, langsung diantar. Timnya ramah dan tepat waktu.”
              </h4>
              <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
                <AvatarImage src="/profile.webp" />
              </Avatar>
              <p className="text-center mt-9">Pak Anton, Karyawan Swasta</p>
            </div>
          </div>

          <div className=" bg-white rounded-xl">
            <div>
              <h5 className="mt-3">
                “Saya sering pesan Aqua galon dan cup untuk acara. Stoknya
                selalu ada, dan pengantarannya cepat. Layanan sangat membantu
                bisnis saya.”
              </h5>
              <Avatar className="container mx-auto w-[100px] h-[100px] mt-4 ">
                <AvatarImage src="/profile.webp" />
              </Avatar>
              <p className="text-center mt-3">Ibu Tanti, Pemilik Catering</p>
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonial;
