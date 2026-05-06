import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="w-full bg-(--purple) flex items-center justify-between flex-wrap gap-[16px] py-[36px] px-[48px]">
      <a href="#" className="footer-brand ">Claramente</a>
      <p className="footer-note text-start sm:text-center">
        © <a href="#" className=' font-semibold uppercase hover:text-white duration-300'>mentor</a> {new Date().getFullYear()} · CRP 06/61283
        <br />
        <span className="text-[0.70rem]">
          Av. Pres. Tancredo Neves, 363 Itaquaquecetuba — SP
        </span>
      </p>
      <a href="claramente.html" className="footer-back">
        {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m7-7l-7 7 7 7"></path></svg>
        Voltar ao site principal */}
      </a>
    </footer>
  );
}