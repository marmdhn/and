import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { FaPhone } from "react-icons/fa6";

export default function AboutUsPage() {
  return (
    <section id="about us" className="page-section py-48">
      <div className="flex gap-5">
        <div className="w-2/3 flex flex-col items-start justify-center gap-5">
          <h1 className="text-title text-4xl">👤 About Us</h1>
          <div className="flex flex-col items-center justify-center gap-2 text-lg text-gray text-justify">
            <p>
              Kami adalah And — tim kreatif yang fokus menghadirkan solusi
              digital sederhana namun berdampak. Berawal dari keyakinan bahwa
              setiap brand memiliki cerita unik, kami hadir untuk membantu
              menampilkan cerita itu dengan cara yang paling tepat dan menarik.
            </p>
            <p>
              Mulai dari membangun website yang profesional dan responsif,
              merancang pengalaman UI/UX yang nyaman digunakan, hingga
              menciptakan desain visual dan konten yang kuat secara estetik
              maupun pesan, kami percaya digital bukan hanya soal tampilan,
              tetapi juga bagaimana ia bisa benar-benar memberi nilai untuk
              bisnis maupun personal brand.
            </p>
            <p>
              Dengan pendekatan yang kolaboratif, kami selalu mendengarkan
              kebutuhan klien, memahami visi mereka, lalu menerjemahkannya
              menjadi solusi kreatif yang mudah digunakan, modern, dan relevan
              dengan audiens. Bagi kami, kesederhanaan adalah kunci, karena dari
              kesederhanaan itulah lahir karya yang autentik, mudah dipahami,
              dan berdampak nyata.
            </p>
          </div>
        </div>
        <div>
          <img src="/illustration/about_us.svg" alt="about us" />
        </div>
      </div>

      <div className="card w-full">
        <div className="card-body px-10">
          <div className="flex justify-center items-center gap-16">
            <div className="w-1/3 text-title text-5xl flex gap-4">
              <FaPhone /> Contact Us
            </div>
            <fieldset className="fieldset w-2/3 gap-5">
              <FormInput label="Name" type="email" placeholder="Name" />
              <FormInput label="Email" type="email" placeholder="Email" />
              <FormInput
                label="Your Message"
                as="textarea"
                placeholder="Your Message"
              />
              <Button text="Send to Whatsapp" />
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  );
}
